$portUser = 8085
$portSeller = 8081
$portAdmin = 8082

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$portUser/")
$listener.Prefixes.Add("http://localhost:$portSeller/")
$listener.Prefixes.Add("http://localhost:$portAdmin/")

try {
    $listener.Start()
    Write-Host "========================================================="
    Write-Host "  🛍️ ABREXA USER PANEL   (Customer Site)  : http://localhost:$portUser/"
    Write-Host "  🏪 ABREXA SELLER PANEL (Seller Center)  : http://localhost:$portSeller/"
    Write-Host "  🛡️ ABREXA ADMIN PANEL  (Master Control) : http://localhost:$portAdmin/"
    Write-Host "========================================================="
    Write-Host "Press Ctrl+C or terminate the task to stop."
} catch {
    Write-Error "Failed to start server - $_"
    exit 1
}

$baseDir = Get-Item .

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath
        $decodedPath = [System.Uri]::UnescapeDataString($rawPath)
        $port = $request.Url.Port

        # Target directory based on port
        if ($port -eq $portSeller) {
            $siteDir = Join-Path $baseDir.FullName "seller panel"
        } elseif ($port -eq $portAdmin) {
            $siteDir = Join-Path $baseDir.FullName "admin panel"
        } else {
            $siteDir = Join-Path $baseDir.FullName "user panel"
        }

        # Resolve relative path inside target site directory
        $relPath = $decodedPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($relPath)) {
            $filePath = Join-Path $siteDir "index.html"
        } else {
            $filePath = Join-Path $siteDir $relPath
        }

        if (Test-Path $filePath -PathType Container) {
            $filePath = Join-Path $filePath "index.html"
        }

        if (Test-Path $filePath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html; charset=utf-8" }
                ".htm"  { "text/html; charset=utf-8" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                ".json" { "application/json" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".gif"  { "image/gif" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                ".woff" { "font/woff" }
                ".woff2"{ "font/woff2" }
                ".ttf"  { "font/ttf" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errHtml = "<html><body><h1>404 Not Found</h1><p>File not found: $decodedPath on port $port</p></body></html>"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($errHtml)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        $response.Close()
    } catch {
        # Suppress stream interrupts
    }
}
