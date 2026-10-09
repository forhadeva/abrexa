// ABREXA Seller Panel Backend API Integration Layer
const API_BASE_URL = (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')
  ? `${window.location.origin}/api/v1`
  : (window.location.port === '8080' ? '/api/v1' : 'http://localhost:8000/api/v1');


function getLoggedInUsername() {
  return localStorage.getItem('seller_username') || localStorage.getItem('seller_email') || '';
}

// 1. Fetch & Update Dashboard Overview Metrics from Django REST API
async function loadBackendAnalytics() {
  try {
    const username = getLoggedInUsername();
    const url = username ? `${API_BASE_URL}/orders/analytics/overview/?username=${encodeURIComponent(username)}` : `${API_BASE_URL}/orders/analytics/overview/`;
    
    const res = await fetch(url);
    if (!res.ok) return;
    const data = await res.json();

    // Target Exact Element IDs in Dashboard UI
    const totalSalesEl = document.getElementById('stats-total-sales');
    const todaySalesEl = document.getElementById('stats-today-sales');
    const pendingOrdersEl = document.getElementById('stats-orders-pending');
    const completedOrdersEl = document.getElementById('stats-orders-completed');
    const cancelledOrdersEl = document.getElementById('stats-orders-cancelled');
    const productCountEl = document.getElementById('stats-product-count');
    const walletBalanceEl = document.getElementById('stats-wallet-balance');

    const formattedRevenue = `৳${data.total_revenue.toLocaleString('en-US', {minimumFractionDigits: 2})}`;

    if (totalSalesEl) totalSalesEl.textContent = formattedRevenue;
    if (todaySalesEl) todaySalesEl.textContent = "৳0.00";
    if (pendingOrdersEl) pendingOrdersEl.textContent = data.pending_orders;
    if (completedOrdersEl) completedOrdersEl.textContent = Math.max(0, data.total_orders - data.pending_orders);
    if (cancelledOrdersEl) cancelledOrdersEl.textContent = "0";
    if (productCountEl) productCountEl.textContent = data.total_products;
    if (walletBalanceEl) walletBalanceEl.textContent = formattedRevenue;

    console.log("✅ Django Backend Analytics Synced for user:", username, data);
  } catch (err) {
    console.warn("Backend API sync offline or connecting...", err);
  }
}

// 2. Fetch & Render Django Products in Seller Table
async function loadBackendProducts() {
  try {
    const username = getLoggedInUsername();
    const url = username ? `${API_BASE_URL}/products/seller-products/?username=${encodeURIComponent(username)}` : `${API_BASE_URL}/products/seller-products/`;

    const res = await fetch(url);
    if (!res.ok) return;
    const products = await res.json();
    
    // Cache for Edit Modal lookups
    window.currentSellerProducts = products;

    // Update Product Count Badge
    const productCountEl = document.getElementById('stats-product-count');
    if (productCountEl) productCountEl.textContent = products.length;

    const tbody = document.getElementById('products-table-body');
    if (!tbody) return;

    if (products.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-400 font-semibold">No products found in Django MySQL Database for your shop. Add your first product above!</td></tr>`;
      return;
    }

    tbody.innerHTML = products.map(p => `
      <tr class="border-b border-slate-100 dark:border-slate-850 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
        <td class="py-3 px-4 flex items-center gap-3">
          <img src="${p.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80'}" class="w-9 h-9 rounded-lg object-cover border border-slate-200 dark:border-slate-800 shrink-0">
          <div>
            <div class="font-extrabold text-slate-800 dark:text-slate-100">${p.title}</div>
            <div class="text-[10px] text-slate-400 font-mono">SKU: ${p.sku || ('ABX-' + p.id)}</div>
          </div>
        </td>
        <td class="py-3 px-4 font-semibold text-slate-500 capitalize hidden sm:table-cell">${p.category_name || 'General'}</td>
        <td class="py-3 px-4 font-extrabold text-slate-800 dark:text-white">৳${parseFloat(p.price).toLocaleString()}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold ${p.stock <= 5 ? 'bg-rose-50 text-rose-600 border border-rose-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}">
            ${p.stock} Units
          </span>
        </td>
        <td class="py-3 px-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <button onclick="openEditProductModal(${p.id})" class="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary font-bold text-xs p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1" title="Edit Product">
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button onclick="deleteBackendProduct(${p.id})" class="text-rose-500 hover:text-rose-700 font-bold text-xs p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer flex items-center gap-1" title="Delete Product">
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    console.log("✅ Django Products Loaded for user:", username, products.length);
  } catch (err) {
    console.warn("Backend products fetch offline:", err);
  }
}

// 3. Add New Product to Django Backend
async function createBackendProduct(productData) {
  try {
    const username = getLoggedInUsername();
    productData.username = username;

    const res = await fetch(`${API_BASE_URL}/products/seller-products/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    if (res.ok) {
      if (typeof showSellerToast === 'function') {
        showSellerToast('🎉 Product saved to database!', 'success', 'Product Added');
      } else {
        alert("🎉 Product saved to Django MySQL database!");
      }
      loadBackendProducts();
      loadBackendAnalytics();
    } else {
      const err = await res.json();
      if (typeof showSellerToast === 'function') {
        showSellerToast("Error adding product: " + JSON.stringify(err), 'error', 'Error');
      } else {
        alert("Error adding product: " + JSON.stringify(err));
      }
    }
  } catch (err) {
    console.error("Product create API error:", err);
  }
}

// 4. Update Product in Django Backend
async function updateBackendProduct(id, productData) {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    if (res.ok) {
      if (typeof showSellerToast === 'function') {
        showSellerToast('Product changes updated in catalog!', 'success', 'Product Updated');
      } else {
        alert("Product updated successfully!");
      }
      loadBackendProducts();
      loadBackendAnalytics();
      return true;
    } else {
      const err = await res.json();
      if (typeof showSellerToast === 'function') {
        showSellerToast("Error updating product: " + JSON.stringify(err), 'error', 'Update Failed');
      } else {
        alert("Error updating product: " + JSON.stringify(err));
      }
      return false;
    }
  } catch (err) {
    console.error("Product update API error:", err);
    return false;
  }
}

// 5. Delete Product from Django Backend
async function deleteBackendProduct(id) {
  if (!confirm("Are you sure you want to delete this product from Django DB?")) return;
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}/`, { method: 'DELETE' });
    if (res.ok || res.status === 204) {
      if (typeof showSellerToast === 'function') {
        showSellerToast('Product deleted from shop catalog!', 'info', 'Product Deleted');
      } else {
        alert("Product deleted!");
      }
      loadBackendProducts();
      loadBackendAnalytics();
    }
  } catch (err) {
    console.error("Delete error:", err);
  }
}

// 5. Fetch & Render Orders in Seller Dashboard
async function loadBackendOrders() {
  try {
    const username = getLoggedInUsername();
    const url = username ? `${API_BASE_URL}/orders/seller-orders/?username=${encodeURIComponent(username)}` : `${API_BASE_URL}/orders/seller-orders/`;

    const res = await fetch(url);
    if (!res.ok) return;
    const orders = await res.json();

    // Table 1: Main Orders Table
    const tbody = document.getElementById('orders-table-body');
    if (tbody) {
      if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-400 font-semibold">No orders in database for your shop yet.</td></tr>`;
      } else {
        tbody.innerHTML = orders.map(o => `
          <tr class="border-b border-slate-100 dark:border-slate-850 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
            <td class="py-3.5 px-4 font-mono font-extrabold text-primary">#${o.order_number}</td>
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-800 dark:text-white">${o.customer_name}</div>
              <div class="text-[10px] text-slate-400">${o.customer_phone}</div>
            </td>
            <td class="py-3.5 px-4 font-extrabold text-slate-800 dark:text-white">৳${parseFloat(o.total_amount).toLocaleString()}</td>
            <td class="py-3.5 px-4">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${o.status === 'delivered' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'} uppercase">
                ${o.status}
              </span>
            </td>
            <td class="py-3.5 px-4 text-slate-500 text-[11px]">${new Date(o.created_at).toLocaleDateString()}</td>
            <td class="py-3.5 px-4 text-right">
              <select onchange="updateBackendOrderStatus(${o.id}, this.value)" class="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold rounded-lg px-2 py-1 focus:outline-none cursor-pointer">
                <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
                <option value="processing" ${o.status === 'processing' ? 'selected' : ''}>Processing</option>
                <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
              </select>
            </td>
          </tr>
        `).join('');
      }
    }

    // Table 2: Recent Orders Summary Widget on Overview Tab
    const summaryList = document.getElementById('recent-orders-list-summary');
    if (summaryList) {
      if (orders.length === 0) {
        summaryList.innerHTML = `<div class="p-4 text-center text-xs text-slate-400">No recent orders yet.</div>`;
      } else {
        summaryList.innerHTML = orders.slice(0, 4).map(o => `
          <div class="flex justify-between items-center border border-slate-200/50 dark:border-slate-850 rounded-2xl p-3 shadow-sm bg-slate-50/20 dark:bg-slate-900/20">
            <div class="flex flex-col min-w-0">
              <span class="font-extrabold text-slate-800 dark:text-slate-200 text-[10.5px]">#${o.order_number} • ${o.customer_name}</span>
              <span class="text-[9px] text-slate-400 truncate max-w-[160px] mt-0.5 font-medium">${o.shipping_address}</span>
            </div>
            <div class="text-right shrink-0">
              <span class="font-bold text-slate-850 dark:text-white text-[11px] block">৳${parseFloat(o.total_amount).toLocaleString()}</span>
              <span class="px-1.5 py-0.5 rounded-full text-[8px] font-extrabold border mt-1 inline-block uppercase ${o.status === 'delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'}">${o.status}</span>
            </div>
          </div>
        `).join('');
      }
    }

  } catch (err) {
    console.warn("Backend orders fetch offline:", err);
  }
}

// 6. Update Order Status in Django Backend
async function updateBackendOrderStatus(orderId, newStatus) {
  try {
    const res = await fetch(`${API_BASE_URL}/orders/${orderId}/status/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    if (res.ok) {
      loadBackendAnalytics();
      loadBackendOrders();
      console.log("Order status updated successfully!");
    }
  } catch (err) {
    console.error("Order status update error:", err);
  }
}

// 7. Load & Update Seller Profile Info
async function loadBackendSellerProfile() {
  try {
    const username = getLoggedInUsername();
    const url = username ? `${API_BASE_URL}/seller/profile/?username=${encodeURIComponent(username)}` : `${API_BASE_URL}/seller/profile/`;

    const res = await fetch(url);
    if (!res.ok) return;
    const seller = await res.json();

    const storeTitleEl = document.getElementById('store-title');
    const welcomeSubEl = document.getElementById('welcome-sub-name');
    const avatarEl = document.getElementById('avatar-letters');
    const badgeEl = document.getElementById('seller-membership-badge');
    const profCompanyInput = document.getElementById('prof-company');

    const savedLocalName = localStorage.getItem('seller_shop_name');
    const storeName = savedLocalName || seller.store_name || (seller.store_profile ? seller.store_profile.name : "My Shop");

    if (storeTitleEl) storeTitleEl.textContent = storeName;
    if (welcomeSubEl) welcomeSubEl.textContent = `Your store "${storeName}" is live on ABREXA.`;
    if (avatarEl) avatarEl.textContent = storeName.charAt(0).toUpperCase();
    if (badgeEl) badgeEl.textContent = seller.is_verified_seller ? "VERIFIED PARTNER" : "ACTIVE SELLER";
    if (profCompanyInput && !profCompanyInput.value) profCompanyInput.value = storeName;

    // Sync to local and ensure backend has matching name
    if (storeName && storeName !== seller.store_name && savedLocalName) {
      updateBackendSellerProfile({ store_name: storeName });
    } else if (seller.store_name) {
      localStorage.setItem('seller_shop_name', seller.store_name);
    }

  } catch (err) {
    console.warn("Profile fetch error:", err);
  }
}

async function updateBackendSellerProfile(data) {
  try {
    const username = getLoggedInUsername();
    const url = `${API_BASE_URL}/seller/profile/`;
    const payload = {
      username: username || undefined,
      ...data
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const result = await res.json();
      console.log("Seller profile updated on backend:", result);
      return result;
    }
  } catch (err) {
    console.warn("Profile update backend sync error:", err);
  }
}

window.updateBackendSellerProfile = updateBackendSellerProfile;
window.loadBackendSellerProfile = loadBackendSellerProfile;

// Override Inline UI Renderers to sync with Django REST API
window.renderOverviewStats = loadBackendAnalytics;
window.renderProductsList = loadBackendProducts;
window.renderOrdersList = loadBackendOrders;

// Auto-run sync on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadBackendSellerProfile();
  loadBackendAnalytics();
  loadBackendProducts();
  loadBackendOrders();
});
