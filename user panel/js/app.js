// App state and logic for ABREXA Multi-Page E-Commerce Website

// Mock Database (augmented dynamically with Django DB Products)
let PRODUCTS = [
  {
    id: 'top-1',
    title: 'EvoBuds M5® Pro Active Studio ANC Earbuds',
    price: 4850,
    originalPrice: 8500,
    discount: 43,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 5,
    sold: 1420,
    isFlashSale: false,
    rating: 4.9,
    reviews: 1420,
    category: 'Electronic Accessories'
  },
  {
    id: 'top-2',
    title: 'SKMEI Chrono Horizon Titanium Smartwatch',
    price: 3450,
    originalPrice: 6200,
    discount: 44,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 8,
    sold: 940,
    isFlashSale: false,
    rating: 4.8,
    reviews: 940,
    category: 'Men\'s & Boys\' Fashion'
  },
  {
    id: 'top-3',
    title: 'AeroFlow 3-Axis AI Vision Tracking Gimbal Stabilizer',
    price: 4499,
    originalPrice: 7999,
    discount: 44,
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a128f3e?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1584438784894-089d6a128f3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 12,
    sold: 1120,
    isFlashSale: false,
    rating: 4.9,
    reviews: 1120,
    category: 'Electronic Accessories'
  },
  {
    id: 'top-4',
    title: 'ApexPro 75% Tri-Mode Hot-Swap Mechanical Keyboard',
    price: 5890,
    originalPrice: 9500,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 7,
    sold: 680,
    isFlashSale: false,
    rating: 5.0,
    reviews: 680,
    category: 'Electronic Accessories'
  },
  {
    id: 'f1',
    title: '3-in-1 Phone Gimbal Stabilizer',
    price: 499,
    originalPrice: 999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1584438784894-089d6a128f3e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80'
    ],
    stock: 6,
    sold: 44,
    isFlashSale: true,
    rating: 4.8,
    reviews: 57,
    category: 'Electronic Accessories'
  },
  {
    id: 'f2',
    title: 'Lenovo Graphene Neckband Earphones',
    price: 173,
    originalPrice: 399,
    discount: 57,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d35e?auto=format&fit=crop&w=600&q=80'
    ],
    stock: 32,
    sold: 68,
    isFlashSale: true,
    rating: 4.5,
    reviews: 112,
    category: 'Electronic Accessories'
  },
  {
    id: 'f3',
    title: 'SKMEI 1787 Stainless Steel Watch',
    price: 342,
    originalPrice: 999,
    discount: 66,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80'
    ],
    stock: 15,
    sold: 49,
    isFlashSale: true,
    rating: 4.6,
    reviews: 84,
    category: 'Men\'s & Boys\' Fashion'
  },
  {
    id: 'f4',
    title: 'Mini Portable Rechargeable Fan',
    price: 220,
    originalPrice: 479,
    discount: 54,
    image: 'https://images.unsplash.com/photo-1618944847023-38aa001235f0?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1618944847023-38aa001235f0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1527538079466-b6297ad15363?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
    ],
    stock: 22,
    sold: 12,
    isFlashSale: true,
    rating: 4.4,
    reviews: 38,
    category: 'TV & Home Appliances'
  },
  {
    id: 'p1',
    title: '24 Inch HD LED TV - HDMI + USB - Slim Screen',
    price: 7816,
    originalPrice: 9900,
    discount: 21,
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80'
    ],
    isFlashSale: false,
    rating: 4.7,
    reviews: 239,
    category: 'TV & Home Appliances'
  },
  {
    id: 'p2',
    title: 'Kitchen Cutter Accessories - 1pcs Stainless Steel',
    price: 599,
    originalPrice: 1199,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593642532408-28dd5d7b57ba?auto=format&fit=crop&w=600&q=80'
    ],
    isFlashSale: false,
    rating: 4.9,
    reviews: 18,
    category: 'TV & Home Appliances'
  },
  {
    id: 'p3',
    title: 'Premium Slim Leather Wallet for Men',
    price: 450,
    originalPrice: 899,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1627124718515-47f9931b3e9a?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1627124718515-47f9931b3e9a?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1588444839799-eaa4344eba19?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1606503825008-90fa7ff2cd46?auto=format&fit=crop&w=600&q=80'
    ],
    isFlashSale: false,
    rating: 4.8,
    reviews: 112,
    category: 'Men\'s & Boys\' Fashion'
  },
  {
    id: 'p4',
    title: 'Home Smart Water Purifier & Dispenser',
    price: 4500,
    originalPrice: 8999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1585837575652-267c0ee1229b?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1585837575652-267c0ee1229b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522008629172-0c17aa47d1ee?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
    ],
    isFlashSale: false,
    rating: 4.6,
    reviews: 95,
    category: 'TV & Home Appliances'
  },
  {
    id: 'p5',
    title: 'Unisex Casual Canvas Sneaker Shoes',
    price: 850,
    originalPrice: 1500,
    discount: 43,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80'
    ],
    isFlashSale: false,
    rating: 4.7,
    reviews: 64,
    category: 'Men\'s & Boys\' Fashion'
  },
  {
    id: 'p6',
    title: 'Traditional Designer Cotton Saree',
    price: 1200,
    originalPrice: 2500,
    discount: 52,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=600&q=80'
    ],
    isFlashSale: false,
    rating: 4.5,
    reviews: 42,
    category: 'Women\'s & Girls\' Fashion'
  }
];

const CATEGORIES = [
  {
    name: "Men's & Boys' Fashion",
    icon: 'fa-shirt',
    items: [
      { name: 'Goat', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=60' },
      { name: 'Watches and Accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&auto=format&fit=crop&q=60' },
      { name: 'Ceiling Fans', img: 'https://images.unsplash.com/photo-1618944847023-38aa001235f0?w=150&auto=format&fit=crop&q=60' },
      { name: 'Watering Systems & Garden Hoses', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=150&auto=format&fit=crop&q=60' },
      { name: 'Pools', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=150&auto=format&fit=crop&q=60' },
      { name: 'Bathroom Lighting', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Electronic Accessories',
    icon: 'fa-plug',
    items: [
      { name: 'Mobile Chargers', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=150&auto=format&fit=crop&q=60' },
      { name: 'Earphones', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=150&auto=format&fit=crop&q=60' },
      { name: 'Cables & Adapters', img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'TV & Home Appliances',
    icon: 'fa-tv',
    items: [
      { name: 'Smart TVs', img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=150&auto=format&fit=crop&q=60' },
      { name: 'Air Coolers', img: 'https://images.unsplash.com/photo-1618944847023-38aa001235f0?w=150&auto=format&fit=crop&q=60' },
      { name: 'Water Filters', img: 'https://images.unsplash.com/photo-1585837575652-267c0ee1229b?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Electronics Device',
    icon: 'fa-mobile-screen',
    items: [
      { name: 'Smartphones', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&auto=format&fit=crop&q=60' },
      { name: 'Tablets', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=150&auto=format&fit=crop&q=60' },
      { name: 'Laptops', img: 'https://images.unsplash.com/photo-1496181130204-7552cc15545a?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Mother & Baby',
    icon: 'fa-baby',
    items: [
      { name: 'Diapers & Wipes', img: 'https://images.unsplash.com/photo-1597854710119-a5a84362a909?w=150&auto=format&fit=crop&q=60' },
      { name: 'Baby Clothes', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Automotive & Motorbike',
    icon: 'fa-motorcycle',
    items: [
      { name: 'Helmets & Gear', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=150&auto=format&fit=crop&q=60' },
      { name: 'Engine Oils', img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Sports & Outdoors',
    icon: 'fa-basketball',
    items: [
      { name: 'Football & Cricket', img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=150&auto=format&fit=crop&q=60' },
      { name: 'Gym Accessories', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Home & Lifestyle',
    icon: 'fa-couch',
    items: [
      { name: 'Sofa & Chairs', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=150&auto=format&fit=crop&q=60' },
      { name: 'Bedding Sets', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Groceries',
    icon: 'fa-basket-shopping',
    items: [
      { name: 'Chocolates', img: 'https://images.unsplash.com/photo-1549007994-cb92ca817bc7?w=150&auto=format&fit=crop&q=60' },
      { name: 'Cooking Oils', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Health & Beauty',
    icon: 'fa-spa',
    items: [
      { name: 'Skincare', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&auto=format&fit=crop&q=60' },
      { name: 'Perfumes', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=150&auto=format&fit=crop&q=60' }
    ]
  },
  {
    name: 'Watches, Bags, Jewellery',
    icon: 'fa-clock',
    items: [
      { name: 'Analog Watches', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&auto=format&fit=crop&q=60' },
      { name: 'Backpacks', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&auto=format&fit=crop&q=60' }
    ]
  }
];

// App State (Synchronized using localStorage)
let cart = loadCartFromStorage();
let activeCategoryIndex = 0;
let searchQuery = '';
let currentUser = loadUserFromStorage();

// Load cart state on run
function loadCartFromStorage() {
  try {
    const data = localStorage.getItem('abrexa_cart');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Could not load cart data", e);
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('abrexa_cart', JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart data", e);
  }
}

// Load user state on run
function loadUserFromStorage() {
  try {
    const data = localStorage.getItem('abrexa_user');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Could not load user data", e);
    return null;
  }
}

function saveUserToStorage(user) {
  try {
    localStorage.setItem('abrexa_user', JSON.stringify(user));
  } catch (e) {
    console.error("Could not save user data", e);
  }
}

function clearUserFromStorage() {
  try {
    localStorage.removeItem('abrexa_user');
  } catch (e) {
    console.error("Could not clear user data", e);
  }
}

// Dynamic header username updates
function updateHeaderUser() {
  // Find the header element with "Welcome" text
  const welcomeLabels = Array.from(document.querySelectorAll('header div, header span')).filter(el => el.textContent.trim() === 'Welcome');
  welcomeLabels.forEach(label => {
    const nameEl = label.nextElementSibling;
    if (nameEl) {
      if (currentUser) {
        nameEl.textContent = currentUser.name;
      } else {
        nameEl.textContent = 'Sign In';
      }
    }
  });

  // Update top tiny bar "Sign In / Sign Up" text
  const topLinks = document.querySelectorAll('header a');
  topLinks.forEach(link => {
    if (link.textContent.trim() === 'Sign In / Sign Up' || link.textContent.trim().includes('Hi, ')) {
      if (currentUser) {
        link.innerHTML = `<i class="fa-solid fa-user-check text-[10px] text-orange-500"></i> Hi, ${currentUser.name.split(' ')[0]}`;
      } else {
        link.innerHTML = `<i class="fa-solid fa-right-to-bracket text-[10px]"></i> Sign In / Sign Up`;
      }
    }
  });
}

// Dom elements cached
let cartBadges = [];
let countdownEl = null;

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
  // Select all cart badges in headers and footers
  cartBadges = document.querySelectorAll('.cart-badge');
  countdownEl = document.getElementById('flash-sale-countdown');

  // Load cart count indicators
  updateCartBadge();

  // Initialize Header User Display
  updateHeaderUser();

  // Initialize Support Chat
  initChatSupport();

  // Fetch live products listed by sellers from Django MySQL Backend REST API FIRST
  await syncUserPanelProductsWithBackend();

  // Detect which file is currently open
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1).toLowerCase();

  // Bind Header Search inputs
  const desktopSearch = document.getElementById('desktop-search-input');
  const mobileSearch = document.getElementById('header-search-input');
  
  if (desktopSearch) {
    desktopSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (mobileSearch) mobileSearch.value = e.target.value;
      if (isHomePage(pageName)) {
        renderProducts();
      }
    });
  }

  if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (desktopSearch) desktopSearch.value = e.target.value;
      if (isHomePage(pageName)) {
        renderProducts();
      }
    });
  }

  // Execute Page-Specific Renderers
  if (isHomePage(pageName)) {
    initHeroSlider();
    initTopProductShowcase();
    startFlashSaleTimer();
    renderFlashSales();
    renderProducts();
    setupHomeCategoriesClick();
  } else if (pageName === 'categories.html') {
    renderCategories();

    // Bind Mobile Search Input
    const mobileCatSearch = document.getElementById('mobile-category-search');
    if (mobileCatSearch) {
      mobileCatSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const val = e.target.value.trim();
          if (val) {
            localStorage.setItem('abrexa_search_trigger', val);
            window.location.href = 'index.html';
          }
        }
      });
    }
  } else if (pageName === 'cart.html') {
    renderCart();
  } else if (pageName === 'account.html') {
    renderAccount();
  } else if (pageName === 'checkout.html') {
    renderCheckout();
  } else if (pageName === 'product-details.html') {
    renderProductDetails();
  }
});

async function syncUserPanelProductsWithBackend() {
  try {
    const apiHost = (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') ? window.location.origin : (window.location.port === '8080' ? '' : 'http://localhost:8000');
    const res = await fetch(`${apiHost}/api/v1/products/seller-products/`);
    if (!res.ok) return;
    const apiProducts = await res.json();
    if (!apiProducts || !Array.isArray(apiProducts)) return;

    const formatted = apiProducts.map(p => {
      let gallery = [];
      if (Array.isArray(p.images) && p.images.length > 0) {
        gallery = p.images.map(img => typeof img === 'string' ? img : (img.image_url || img.image)).filter(Boolean);
      } else if (Array.isArray(p.gallery_images) && p.gallery_images.length > 0) {
        gallery = [...p.gallery_images];
      }
      const mainImg = p.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80';
      if (mainImg && !gallery.includes(mainImg)) {
        gallery.unshift(mainImg);
      }
      return {
        id: 'db_' + p.id,
        rawId: p.id,
        title: p.title,
        price: parseFloat(p.price),
        originalPrice: p.original_price ? parseFloat(p.original_price) : Math.round(parseFloat(p.price) * 1.3),
        discount: p.discount_percent || 20,
        image: mainImg,
        images: gallery.length > 0 ? gallery : [mainImg],
        stock: p.stock || 10,
        sold: p.sold_count || 0,
        isFlashSale: p.is_flash_sale || false,
        rating: p.rating || 5.0,
        reviews: p.reviews_count || 0,
        category: p.category_name || 'Electronic Accessories',
        seller: p.seller_store_name || 'Verified Seller'
      };
    });

    if (formatted.length > 0) {
      const flagships = PRODUCTS.filter(p => p.id && p.id.startsWith('top-'));
      PRODUCTS = [...flagships, ...formatted];
    }

    console.log("✅ User Panel live synced with Django DB:", formatted.length, "seller items.");

    if (typeof renderFlashSales === 'function') renderFlashSales();
    if (typeof renderProducts === 'function') renderProducts();
    if (typeof renderProductDetails === 'function') renderProductDetails();
  } catch (err) {
    console.warn("Backend products fetch offline:", err);
  }
}

function isHomePage(page) {
  return page === 'index.html' || page === '' || page === 'index' || page === 'user%20panel/' || page === 'user panel/';
}

// ==============================================
// TOP PRODUCT FLAGSHIP SHOWCASE (Exclusive Multi-Tab Showcase)
// ==============================================
const TOP_FLAGSHIP_PRODUCTS = [
  {
    id: 'top-1',
    categoryName: 'Wireless Audio',
    categoryIcon: 'fa-headphones',
    brand: 'LOGITECH • SIGNATURE SERIES',
    title: 'EvoBuds M5® Pro Active Studio ANC Earbuds',
    description: 'Engineered with 11mm Bio-Cellulose titanium drivers, -45dB Hybrid Active Noise Cancellation, and lossless spatial audio with 50-hour smart charging endurance.',
    rating: 4.9,
    reviews: 1420,
    price: 4850,
    originalPrice: 8500,
    discount: 43,
    badge: '#1 BESTSELLER',
    stockText: 'In Stock (5 left)',
    stockCount: 5,
    hasSoundwaves: true,
    leftPartImg: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=350&q=80',
    rightPartImg: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=350&q=80',
    callout1: '11mm Titanium Driver Core',
    callout2: '-45dB Hybrid ANC DSP',
    callout3: 'Smart LCD Touch Case',
    chips: [
      { icon: 'fa-shield-halved', label: '-45dB Hybrid ANC' },
      { icon: 'fa-music', label: 'Hi-Res Lossless LDAC' },
      { icon: 'fa-battery-full', label: '50H Smart Endurance' },
      { icon: 'fa-bolt', label: 'Qi Fast Wireless' }
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#18181b', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80' },
      { name: 'Pure Platinum', hex: '#e2e8f0', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=700&q=80' },
      { name: 'Cyber Violet', hex: '#7c3aed', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80' }
    ],
    specsHeading: 'Precision Acoustic & Processing Architecture',
    specs: [
      { icon: 'fa-wave-square', title: 'Dynamic Acoustic Drivers', val: '11mm Titanium Bio-Cellulose', desc: 'Custom dual-magnet coils delivering rich sub-bass & crystal airy highs.' },
      { icon: 'fa-ear-listen', title: 'Active Hybrid Cancellation', val: '-45dB Deep ANC + Transparency', desc: 'Triple-mic array canceling background commuter & wind noise in real time.' },
      { icon: 'fa-battery-bolt', title: 'Playback & Charging', val: 'Up to 50 Hours Total', desc: '10 min flash charge gives 5h playtime. Supports Qi wireless pads.' },
      { icon: 'fa-wifi', title: 'Wireless & Latency', val: 'Bluetooth 5.4 + 38ms Gaming', desc: 'Dual device multipoint pairing with lossless LDAC, AAC, & aptX.' }
    ],
    boxHeading: 'Official Sealed Set Packaging Contents',
    boxItems: [
      { num: '01', title: 'EvoBuds M5® Pro Earbuds (Left & Right)', desc: 'Pre-fitted with medium acoustic memory-foam tips' },
      { num: '02', title: 'Smart LCD Display Wireless Charging Case', desc: 'Built-in real-time battery status & equalizer control' },
      { num: '03', title: '3x Pairs Medical-Grade Silicone Eartips (S, M, L)', desc: 'Ergonomic pressure-relief noise isolation fit' },
      { num: '04', title: 'Braided Type-C Fast-Charging Audio Cable', desc: 'Reinforced nylon jacket with gold-plated connectors' },
      { num: '05', title: 'Official ABREXA 2-Year Replacement Warranty Card', desc: 'Direct VIP door-to-door concierge support' }
    ]
  },
  {
    id: 'top-2',
    categoryName: 'Smart Wearables',
    categoryIcon: 'fa-clock',
    brand: 'SKMEI • TITANIUM HORIZON',
    title: 'SKMEI Chrono Horizon Titanium AMOLED Smartwatch',
    description: 'Crafted from aerospace-grade Grade-5 Titanium alloy with a 2.04" Sapphire AMOLED display, dual-band GPS, and 14-day continuous battery endurance.',
    rating: 4.8,
    reviews: 940,
    price: 3450,
    originalPrice: 6200,
    discount: 44,
    badge: '⚡ EDITORS CHOICE',
    stockText: 'In Stock (8 left)',
    stockCount: 8,
    hasSoundwaves: false,
    leftPartImg: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=350&q=80',
    rightPartImg: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=350&q=80',
    callout1: 'Grade-5 Titanium Bezel',
    callout2: 'PPG + ECG Bio-Sensor',
    callout3: 'Magnetic Milanese Strap',
    chips: [
      { icon: 'fa-mobile-screen', label: '2.04" Sapphire AMOLED' },
      { icon: 'fa-heart-pulse', label: 'ECG + PPG Multi-Sensor' },
      { icon: 'fa-location-crosshairs', label: 'Dual-Band Route GPS' },
      { icon: 'fa-water', label: '5ATM 50m Waterproof' }
    ],
    colors: [
      { name: 'Titanium Silver', hex: '#94a3b8', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80' },
      { name: 'Space Black', hex: '#0f172a', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80' },
      { name: 'Midnight Navy', hex: '#1e3a8a', image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=700&q=80' }
    ],
    specsHeading: 'Aerospace Grade Build & Health Sensor Suite',
    specs: [
      { icon: 'fa-tv', title: 'Ultra Retina Display', val: '2.04" AMOLED 466x466px', desc: '1200 Nits peak brightness with Always-On curved Sapphire glass.' },
      { icon: 'fa-shield-halved', title: 'Chassis & Waterproofing', val: 'Grade-5 Titanium + 5ATM', desc: 'CNC milled titanium unibody tested for deep swimming & rugged shock.' },
      { icon: 'fa-heart-pulse', title: 'Advanced Bio-Tracking', val: '24/7 SpO2, Heart & Sleep', desc: 'Multi-channel optical sensors with abnormal heart rate & stress warnings.' },
      { icon: 'fa-battery-full', title: 'Endurance & Charging', val: '14 Days Typical Use', desc: '450mAh high-density Li-Po with fast magnetic wireless snap charging.' }
    ],
    boxHeading: 'Complete Chrono Horizon Set Packaging',
    boxItems: [
      { num: '01', title: 'SKMEI Chrono Horizon Titanium Watch Body', desc: 'Sealed with protective anti-scratch film' },
      { num: '02', title: 'Italian Magnetic Milanese Stainless Steel Mesh Strap', desc: 'Quick-release 22mm breathable magnetic buckle' },
      { num: '03', title: 'Sports Fluororubber Sweatproof Silicone Strap', desc: 'Extra interchangeable strap for workouts & swimming' },
      { num: '04', title: 'Fast Magnetic Snap Wireless Charging Puck', desc: 'Universal USB-A/C charging station' },
      { num: '05', title: 'Official ABREXA 18-Month Global Warranty Card', desc: 'Full manufacturer warranty certificate' }
    ]
  },
  {
    id: 'top-3',
    categoryName: '3-Axis Gimbal',
    categoryIcon: 'fa-video',
    brand: 'AEROFLOW • CREATOR SERIES',
    title: 'AeroFlow 3-Axis AI Vision Tracking Gimbal Stabilizer',
    description: 'Professional handheld 3-axis stabilizer featuring magnetic AI vision tracking, 215mm telescopic extension rod, and 360° infinite vortex inception mode.',
    rating: 4.9,
    reviews: 1120,
    price: 4499,
    originalPrice: 7999,
    discount: 44,
    badge: '🔥 CREATOR PICK',
    stockText: 'In Stock (12 left)',
    stockCount: 12,
    hasSoundwaves: false,
    leftPartImg: 'https://images.unsplash.com/photo-1584438784894-089d6a128f3e?auto=format&fit=crop&w=350&q=80',
    rightPartImg: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=350&q=80',
    callout1: 'Magnetic AI Vision Eye',
    callout2: '3-Axis Brushless Motors',
    callout3: '215mm Telescopic Arm',
    chips: [
      { icon: 'fa-robot', label: 'Magnetic AI Vision Sensor' },
      { icon: 'fa-arrows-spin', label: '3-Axis Anti-Shake 7.0' },
      { icon: 'fa-up-right-and-down-left-from-center', label: '215mm Telescopic Arm' },
      { icon: 'fa-sun', label: '3-Level LED Fill Light' }
    ],
    colors: [
      { name: 'Graphite Matte', hex: '#334155', image: 'https://images.unsplash.com/photo-1584438784894-089d6a128f3e?auto=format&fit=crop&w=700&q=80' },
      { name: 'Arctic Pearl', hex: '#f1f5f9', image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=700&q=80' }
    ],
    specsHeading: 'Cinema-Grade Stabilization & Tracking Specs',
    specs: [
      { icon: 'fa-arrows-rotate', title: 'Stabilization Motors', val: '3-Axis Brushless High Torque', desc: 'Anti-Shake 7.0 handles heavy phones up to 320g including Pro Max series.' },
      { icon: 'fa-eye', title: 'AI Vision Tracking Module', val: 'Independent Magnetic Sensor', desc: 'Tracks faces and bodies without app or Bluetooth limitations.' },
      { icon: 'fa-arrows-up-down', title: 'Built-in Telescopic Arm', val: '215mm Aerospace Aluminum', desc: 'Seamlessly extends for high-angle crowd shots and low-angle cinematic pans.' },
      { icon: 'fa-battery-full', title: 'Battery & Power Bank', val: '3200mAh (10h Runtime)', desc: 'Reverse charges your smartphone while recording 4K footage.' }
    ],
    boxHeading: 'Creator Bundle In The Box',
    boxItems: [
      { num: '01', title: 'AeroFlow 3-Axis Smart Gimbal Stabilizer Body', desc: 'Foldable ergonomic handle with joystick & focus wheel' },
      { num: '02', title: 'Detachable Magnetic AI Sensor & CCT Fill Light', desc: 'Adjustable color temperatures (Warm / Cool / Daylight)' },
      { num: '03', title: 'Reinforced Metal Anti-Slip Desktop Tripod Stand', desc: 'Standard 1/4" screw thread mount' },
      { num: '04', title: 'Water-Repellent Velvet Travel Pouch & Lanyard', desc: 'Shock-resistant carrying storage' },
      { num: '05', title: 'USB-C Fast Charging Cable & User Quick Guide', desc: 'Full tutorial qr code and warranty card' }
    ]
  },
  {
    id: 'top-4',
    categoryName: 'Pro Keyboards',
    categoryIcon: 'fa-keyboard',
    brand: 'APEXPRO • ESPORTS GEAR',
    title: 'ApexPro 75% Tri-Mode Hot-Swap Mechanical Keyboard',
    description: 'Custom gasket-mounted mechanical keyboard featuring pre-lubed linear switches, CNC aluminum multi-function dial, customizable OLED screen, and 5-layer acoustic dampening.',
    rating: 5.0,
    reviews: 680,
    price: 5890,
    originalPrice: 9500,
    discount: 38,
    badge: '💎 PRO ESPORTS',
    stockText: 'In Stock (7 left)',
    stockCount: 7,
    hasSoundwaves: false,
    leftPartImg: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=350&q=80',
    rightPartImg: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=350&q=80',
    callout1: 'Gateron Lubed Switches',
    callout2: '5-Layer Poron Gaskets',
    callout3: 'CNC Volume Dial & OLED',
    chips: [
      { icon: 'fa-layer-group', label: 'Gasket Sound Dampened' },
      { icon: 'fa-gauge-high', label: 'Hot-Swap 5-Pin Sockets' },
      { icon: 'fa-tv', label: 'Customizable OLED Display' },
      { icon: 'fa-circle-dot', label: 'Aluminum Rotary Knob' }
    ],
    colors: [
      { name: 'Neon Cyberpunk', hex: '#ec4899', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80' },
      { name: 'Carbon Blackout', hex: '#09090b', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=700&q=80' }
    ],
    specsHeading: 'Acoustic Architecture & Switch Mechanics',
    specs: [
      { icon: 'fa-hand-pointer', title: 'Mechanical Switch Type', val: 'Gateron Pro Custom Lubed Linear', desc: '45g operating force, smooth thocky acoustic profile rated for 80M clicks.' },
      { icon: 'fa-layer-group', title: 'Mounting & Dampening', val: '5-Layer Poron Gasket Structure', desc: 'IXPE switch pad, PET film, and silicone base foam for deep acoustic resonance.' },
      { icon: 'fa-wifi', title: 'Tri-Mode Connectivity', val: 'BT 5.3 / 2.4GHz / Type-C', desc: '1000Hz polling rate in 2.4GHz wireless mode with zero input latency.' },
      { icon: 'fa-battery-full', title: 'Battery & RGB System', val: '4000mAh • South-Facing LEDs', desc: 'Up to 200 hours battery with RGB off; 22 dynamic lighting animations.' }
    ],
    boxHeading: 'Esports Edition Set In The Box',
    boxItems: [
      { num: '01', title: 'ApexPro 75% Mechanical Keyboard (Pre-Assembled)', desc: 'Installed with double-shot PBT Cherry profile keycaps' },
      { num: '02', title: '2.4GHz Ultra-Low Latency USB Wireless Dongle', desc: 'Magnetic storage bay integrated underneath keyboard' },
      { num: '03', title: '2-in-1 Keycap & Mechanical Switch Puller Tool', desc: 'Stainless steel wire extractor for custom modifications' },
      { num: '04', title: '4x Extra Replacement Factory-Lubed Linear Switches', desc: 'Spare backup switches included' },
      { num: '05', title: 'Braided Coiled Aviator Type-C Fast Cable', desc: 'Heavy-duty 1.8m detachable cable with gold contacts' }
    ]
  }
];

let currentTopProductIdx = 0;
let currentTopProductMode = 'overview';
let currentTopProductColorIdx = 0;
let isExplodedMode = false;
let topProductWishlistMap = {};

function initTopProductShowcase() {
  const container = document.getElementById('top-product-showcase-section');
  if (!container) return;

  // Bind Navigation Prev/Next
  const prevBtn = document.getElementById('top-product-prev');
  const nextBtn = document.getElementById('top-product-next');

  if (prevBtn) {
    prevBtn.onclick = () => {
      currentTopProductIdx = (currentTopProductIdx - 1 + TOP_FLAGSHIP_PRODUCTS.length) % TOP_FLAGSHIP_PRODUCTS.length;
      currentTopProductColorIdx = 0;
      renderTopProduct();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      currentTopProductIdx = (currentTopProductIdx + 1) % TOP_FLAGSHIP_PRODUCTS.length;
      currentTopProductColorIdx = 0;
      renderTopProduct();
    };
  }

  // 3D Parallax Mouse Physics on stage
  const stage = document.getElementById('tp-3d-stage');
  const heroImg = document.getElementById('tp-hero-image');
  const leftLayer = document.getElementById('tp-layer-left');
  const rightLayer = document.getElementById('tp-layer-right');
  const caseLayer = document.getElementById('tp-layer-case');
  const halo = document.getElementById('tp-ambient-halo');

  if (stage && heroImg) {
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rx = (-y / (rect.height / 2)) * 14;
      const ry = (x / (rect.width / 2)) * 14;

      heroImg.style.transform = `perspective(850px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(35px) scale3d(1.05, 1.05, 1.05)`;

      if (isExplodedMode) {
        if (leftLayer) leftLayer.style.transform = `translate3d(${-60 + ry * 1.8}px, ${-45 - rx * 1.8}px, 85px) rotate(${-18 + ry}deg) scale(1.08)`;
        if (rightLayer) rightLayer.style.transform = `translate3d(${65 + ry * 1.8}px, ${-35 - rx * 1.8}px, 95px) rotate(${16 + ry}deg) scale(1.08)`;
        if (caseLayer) caseLayer.style.transform = `translate3d(${ry}px, ${60 - rx}px, 45px)`;
      }

      if (halo) {
        halo.style.transform = `translate(${ry * 2.5}px, ${-rx * 2.5}px) scale(1.15)`;
      }
    });

    stage.addEventListener('mouseleave', () => {
      heroImg.style.transform = '';
      if (halo) halo.style.transform = '';
      if (leftLayer && isExplodedMode) leftLayer.style.transform = '';
      if (rightLayer && isExplodedMode) rightLayer.style.transform = '';
      if (caseLayer && isExplodedMode) caseLayer.style.transform = '';
    });
  }

  // Initial Render
  renderTopProduct();
}

function renderTopProduct() {
  const product = TOP_FLAGSHIP_PRODUCTS[currentTopProductIdx];
  if (!product) return;

  // 1. Update Category Switcher Pills
  const pillsContainer = document.getElementById('top-product-pills');
  if (pillsContainer) {
    pillsContainer.innerHTML = TOP_FLAGSHIP_PRODUCTS.map((p, idx) => {
      const isActive = idx === currentTopProductIdx;
      const activeClass = isActive 
        ? 'bg-rose-500 text-white font-extrabold shadow-sm' 
        : 'text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 font-medium';
      return `
        <button onclick="window.switchTopProduct(${idx})" class="px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all text-xs shrink-0 ${activeClass}">
          <i class="fa-solid ${p.categoryIcon} text-[10px]"></i>
          <span>${p.categoryName}</span>
        </button>
      `;
    }).join('');
  }

  // 2. Counter
  const counter = document.getElementById('top-product-counter');
  if (counter) {
    const curNum = (currentTopProductIdx + 1).toString().padStart(2, '0');
    const totalNum = TOP_FLAGSHIP_PRODUCTS.length.toString().padStart(2, '0');
    counter.textContent = `${curNum} / ${totalNum}`;
  }

  // 3. Overview Texts with Kinetic Staggered Reveal
  const brandTag = document.getElementById('tp-brand-tag');
  if (brandTag) brandTag.textContent = product.brand;

  const titleEl = document.getElementById('tp-title');
  if (titleEl) {
    titleEl.textContent = product.title;
    titleEl.classList.remove('animate-kinetic-text');
    void titleEl.offsetWidth; // trigger reflow
    titleEl.classList.add('animate-kinetic-text');
  }

  const descEl = document.getElementById('tp-description');
  if (descEl) descEl.textContent = product.description;

  const ratingText = document.getElementById('tp-rating-text');
  if (ratingText) ratingText.textContent = product.rating.toFixed(1);

  const reviewsCount = document.getElementById('tp-reviews-count');
  if (reviewsCount) reviewsCount.textContent = `(${product.reviews.toLocaleString()}+ reviews)`;

  // 4. Feature Chips
  const chipsContainer = document.getElementById('tp-feature-chips');
  if (chipsContainer) {
    chipsContainer.innerHTML = product.chips.map(chip => `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-rose-300 transition-colors">
        <i class="fa-solid ${chip.icon} text-rose-500 text-[10px]"></i>
        <span>${chip.label}</span>
      </span>
    `).join('');
  }

  // 5. Color Swatches
  const selectedColor = product.colors[currentTopProductColorIdx] || product.colors[0];
  const colorNameEl = document.getElementById('tp-selected-color-name');
  if (colorNameEl) colorNameEl.textContent = selectedColor.name;

  const swatchesContainer = document.getElementById('tp-color-swatches');
  if (swatchesContainer) {
    swatchesContainer.innerHTML = product.colors.map((col, idx) => {
      const isSelected = idx === currentTopProductColorIdx;
      const ringClass = isSelected 
        ? 'ring-2 ring-rose-500 ring-offset-2 dark:ring-offset-slate-900 scale-110' 
        : 'hover:scale-105 opacity-80';
      return `
        <button onclick="window.selectTopProductColor(${idx})" title="${col.name}" class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 transition-all cursor-pointer shadow-sm ${ringClass}" style="background-color: ${col.hex};"></button>
      `;
    }).join('');
  }

  // 6. Pricing & Badges
  const salePriceEl = document.getElementById('tp-sale-price');
  if (salePriceEl) salePriceEl.textContent = `৳${product.price.toLocaleString()}`;

  const origPriceEl = document.getElementById('tp-orig-price');
  if (origPriceEl) origPriceEl.textContent = `৳${product.originalPrice.toLocaleString()}`;

  const discountBadge = document.getElementById('tp-discount-badge');
  if (discountBadge) discountBadge.textContent = `-${product.discount}%`;

  const detailsBtn = document.getElementById('tp-view-details-btn');
  if (detailsBtn) detailsBtn.href = `product-details.html?id=${product.id}`;

  const badgeLeft = document.getElementById('tp-badge-left');
  if (badgeLeft) badgeLeft.innerHTML = `<i class="fa-solid fa-trophy text-[8px]"></i> ${product.badge}`;

  const stockTag = document.getElementById('tp-stock-tag');
  if (stockTag) stockTag.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ${product.stockText}`;

  // 7. Soundwave pulse rings visibility
  const soundwaves = document.getElementById('tp-soundwave-container');
  if (soundwaves) {
    soundwaves.style.display = product.hasSoundwaves ? 'flex' : 'none';
  }

  // 8. 3D Hero & Multi-Layer Images
  const heroImg = document.getElementById('tp-hero-image');
  const leftLayer = document.getElementById('tp-layer-left');
  const rightLayer = document.getElementById('tp-layer-right');

  if (heroImg) {
    heroImg.style.opacity = '0';
    heroImg.style.transform = 'scale(0.92)';
    setTimeout(() => {
      heroImg.src = selectedColor.image;
      heroImg.alt = product.title;
      heroImg.style.opacity = '1';
      heroImg.style.transform = '';
    }, 150);
  }

  if (leftLayer && product.leftPartImg) {
    leftLayer.src = product.leftPartImg;
  }
  if (rightLayer && product.rightPartImg) {
    rightLayer.src = product.rightPartImg;
  }

  // 9. Exploded Callout texts
  const callout1 = document.getElementById('tp-callout-1-text');
  const callout2 = document.getElementById('tp-callout-2-text');
  const callout3 = document.getElementById('tp-callout-3-text');
  if (callout1) callout1.textContent = product.callout1;
  if (callout2) callout2.textContent = product.callout2;
  if (callout3) callout3.textContent = product.callout3;

  // 10. Tech Specs Grid (Pane 2)
  const specsHeading = document.getElementById('tp-specs-heading');
  if (specsHeading) specsHeading.textContent = product.specsHeading;

  const specsGrid = document.getElementById('tp-specs-grid');
  if (specsGrid) {
    specsGrid.innerHTML = product.specs.map(spec => `
      <div class="spec-metric-card bg-white dark:bg-slate-800/90 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex flex-col justify-between">
        <div class="flex items-center gap-2 mb-1.5">
          <div class="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center text-xs">
            <i class="fa-solid ${spec.icon}"></i>
          </div>
          <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">${spec.title}</span>
        </div>
        <div>
          <div class="text-xs md:text-sm font-black text-slate-800 dark:text-slate-100">${spec.val}</div>
          <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">${spec.desc}</div>
        </div>
      </div>
    `).join('');
  }

  // 11. Box Checklist (Pane 3)
  const boxHeading = document.getElementById('tp-box-heading');
  if (boxHeading) boxHeading.textContent = product.boxHeading;

  const boxChecklist = document.getElementById('tp-box-checklist');
  if (boxChecklist) {
    boxChecklist.innerHTML = product.boxItems.map(item => `
      <div class="flex items-start gap-3 p-2.5 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 shadow-2xs hover:border-rose-200 transition-colors">
        <span class="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-extrabold text-[10px] flex items-center justify-center shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
          ${item.num}
        </span>
        <div class="flex-grow">
          <div class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">${item.title}</div>
          <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">${item.desc}</div>
        </div>
        <i class="fa-solid fa-circle-check text-emerald-500 text-sm mt-0.5 shrink-0"></i>
      </div>
    `).join('');
  }

  // 12. Wishlist Icon update
  const wishlistIcon = document.getElementById('tp-wishlist-icon');
  if (wishlistIcon) {
    if (topProductWishlistMap[product.id]) {
      wishlistIcon.className = 'fa-solid fa-heart text-xs text-rose-500';
    } else {
      wishlistIcon.className = 'fa-regular fa-heart text-xs';
    }
  }
}

window.toggleExplodedView = (e) => {
  if (e) e.stopPropagation();
  isExplodedMode = !isExplodedMode;
  const stage = document.getElementById('tp-3d-stage');
  const btnText = document.getElementById('tp-exploded-btn-text');
  const toggleBtn = document.getElementById('tp-exploded-toggle-btn');
  
  if (stage) {
    if (isExplodedMode) {
      stage.classList.add('exploded-mode');
      if (btnText) btnText.textContent = 'Assemble View';
      if (toggleBtn) {
        toggleBtn.classList.remove('bg-slate-900/90');
        toggleBtn.classList.add('bg-rose-600', 'ring-2', 'ring-rose-400');
      }
      showToast('⚡ 3D Exploded View Active: Parallax 3D Parts Activated');
    } else {
      stage.classList.remove('exploded-mode');
      if (btnText) btnText.textContent = '3D Exploded View';
      if (toggleBtn) {
        toggleBtn.classList.add('bg-slate-900/90');
        toggleBtn.classList.remove('bg-rose-600', 'ring-2', 'ring-rose-400');
      }
      showToast('3D View Assembled');
    }
  }
};

window.switchTopProduct = (idx) => {
  currentTopProductIdx = idx;
  currentTopProductColorIdx = 0;
  renderTopProduct();
};

window.switchTopProductMode = (mode) => {
  currentTopProductMode = mode;
  const modes = ['overview', 'specs', 'box'];

  modes.forEach(m => {
    const btn = document.getElementById(`tp-mode-btn-${m}`);
    const pane = document.getElementById(`tp-pane-${m}`);

    if (m === mode) {
      if (btn) {
        btn.className = 'tp-mode-tab flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 bg-rose-500 text-white shadow-sm';
      }
      if (pane) {
        pane.classList.remove('hidden');
        pane.classList.remove('animate-kinetic-text');
        void pane.offsetWidth;
        pane.classList.add('animate-kinetic-text');
      }
    } else {
      if (btn) {
        btn.className = 'tp-mode-tab flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800';
      }
      if (pane) {
        pane.classList.add('hidden');
      }
    }
  });
};

window.selectTopProductColor = (colorIdx) => {
  currentTopProductColorIdx = colorIdx;
  renderTopProduct();
};

window.switchTopProductColorNext = (e) => {
  if (e) e.stopPropagation();
  const product = TOP_FLAGSHIP_PRODUCTS[currentTopProductIdx];
  if (!product) return;
  currentTopProductColorIdx = (currentTopProductColorIdx + 1) % product.colors.length;
  renderTopProduct();
};

window.handleTopProductAddToCart = () => {
  const flagship = TOP_FLAGSHIP_PRODUCTS[currentTopProductIdx];
  if (!flagship) return;
  const selectedColor = flagship.colors[currentTopProductColorIdx] || flagship.colors[0];

  let fullProduct = PRODUCTS.find(p => p.id === flagship.id);
  if (!fullProduct) {
    fullProduct = {
      id: flagship.id,
      title: `${flagship.title} (${selectedColor.name})`,
      price: flagship.price,
      originalPrice: flagship.originalPrice,
      discount: flagship.discount,
      image: selectedColor.image,
      stock: flagship.stockCount,
      rating: flagship.rating,
      reviews: flagship.reviews,
      category: flagship.categoryName
    };
    PRODUCTS.unshift(fullProduct);
  }

  // Add to cart state
  const existingItem = cart.find(item => item.product.id === fullProduct.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product: fullProduct, quantity: 1 });
  }

  saveCartToStorage();
  updateCartBadge();
  showToast(`Added ${flagship.title} (${selectedColor.name}) to cart!`);

  // Animate cart icons
  document.querySelectorAll('.cart-nav-icon').forEach(icon => {
    icon.classList.add('cart-bounce');
    setTimeout(() => icon.classList.remove('cart-bounce'), 800);
  });
};

window.handleTopProductBuyNow = () => {
  window.handleTopProductAddToCart();
  setTimeout(() => {
    window.location.href = 'checkout.html';
  }, 300);
};

window.toggleTopProductWishlist = (e) => {
  if (e) e.stopPropagation();
  const product = TOP_FLAGSHIP_PRODUCTS[currentTopProductIdx];
  if (!product) return;

  topProductWishlistMap[product.id] = !topProductWishlistMap[product.id];
  renderTopProduct();

  if (topProductWishlistMap[product.id]) {
    showToast(`Added ${product.title} to your Wishlist!`);
  } else {
    showToast(`Removed from Wishlist.`);
  }
};

// Hero slider logic (Index Page)
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  if (slides.length === 0) return;

  let activeIndex = 0;
  
  function showSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.remove('hidden');
      } else {
        slide.classList.add('hidden');
      }
    });

    indicators.forEach((ind, idx) => {
      if (idx === index) {
        ind.classList.remove('bg-white/40');
        ind.classList.add('bg-orange-500', 'w-5');
      } else {
        ind.classList.remove('bg-orange-500', 'w-5');
        ind.classList.add('bg-white/40');
      }
    });
  }

  setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length;
    showSlide(activeIndex);
  }, 4000);
}

// Countdown timer logic (Index Page)
function startFlashSaleTimer() {
  const targetTime = new Date().getTime() + 8 * 60 * 60 * 1000;

  function update() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      if (countdownEl) countdownEl.innerHTML = "00 : 00 : 00";
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => n < 10 ? '0' + n : n;
    
    if (countdownEl) {
      countdownEl.innerHTML = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
    }
  }

  update();
  setInterval(update, 1000);
}

// Render Flash Sale Section (Index Page)
function renderFlashSales() {
  const container = document.getElementById('flash-sale-items');
  if (!container) return;

  const flashProducts = PRODUCTS.filter(p => p.isFlashSale);
  container.innerHTML = '';

  flashProducts.forEach(product => {
    const progressPercent = Math.round((product.sold / (product.stock + product.sold)) * 100);
    const stockStatus = product.stock <= 8 ? `${product.stock} Stock left` : `${product.sold} Sold`;
    const pulseStyle = product.stock <= 8 ? 'bg-gradient-to-r from-red-500 to-orange-500 animate-pulse' : 'bg-orange-500';

    const card = document.createElement('div');
    card.className = 'min-w-[145px] max-w-[155px] bg-white rounded-xl p-2.5 flex flex-col border border-slate-100 shadow-sm relative group shrink-0 cursor-pointer hover:shadow-md transition-shadow';
    card.innerHTML = `
      <!-- Discount Badge -->
      <span class="absolute top-2.5 left-2.5 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-lg rounded-tl-sm z-10">
        -${product.discount}%
      </span>
      <!-- Product Image -->
      <div class="h-28 rounded-lg overflow-hidden relative mb-2 bg-slate-50 flex items-center justify-center">
        <img src="${product.image}" alt="${product.title}" class="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300">
      </div>
      <!-- Prices -->
      <div class="flex flex-col mt-auto">
        <div class="text-orange-500 text-xs font-bold">৳${product.price}</div>
        <div class="text-[9px] text-slate-400 line-through">৳${product.originalPrice}</div>
      </div>
      <!-- Progress status -->
      <div class="mt-2 w-full">
        <div class="w-full bg-slate-100 rounded-full h-3 relative overflow-hidden flex items-center">
          <div class="h-full rounded-full ${pulseStyle}" style="width: ${progressPercent}%"></div>
          <span class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-600">
            ${stockStatus}
          </span>
        </div>
      </div>
      <!-- Add Button -->
      <button onclick="event.stopPropagation(); handleAddToCart('${product.id}')" class="mt-2.5 text-center w-full py-1 text-[10px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors shadow-sm">
        Add to Cart
      </button>
    `;

    card.addEventListener('click', () => window.location.href = 'product-details.html?id=' + product.id);
    container.appendChild(card);
  });
}

// Render Products Grid (Index Page)
function renderProducts() {
  const container = document.getElementById('just-for-you-products');
  if (!container) return;

  let filtered = PRODUCTS.filter(p => !p.isFlashSale);

  if (searchQuery) {
    filtered = PRODUCTS.filter(p => p.title.toLowerCase().includes(searchQuery));
  }

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <i class="fa-solid fa-magnifying-glass text-3xl mb-2"></i>
        <p class="text-xs">No matching products found. Try another search query.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm flex flex-col group relative cursor-pointer hover:shadow-md transition-shadow';
    card.innerHTML = `
      <span class="absolute top-2 left-2 bg-orange-100 text-orange-600 text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
        -${product.discount}%
      </span>
      <div class="h-36 w-full overflow-hidden bg-slate-50 flex items-center justify-center">
        <img src="${product.image}" alt="${product.title}" class="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300">
      </div>
      <div class="p-3 flex flex-col flex-grow">
        <h4 class="text-xs font-semibold text-slate-800 line-clamp-2 h-8 leading-tight mb-1.5 group-hover:text-orange-500 transition-colors">
          ${product.title}
        </h4>
        <div class="flex items-center gap-1 mb-1.5">
          <i class="fa-solid fa-star text-[10px] text-amber-400"></i>
          <span class="text-[10px] font-bold text-slate-600">${product.rating}</span>
          <span class="text-[9px] text-slate-400">(${product.reviews})</span>
        </div>
        <div class="mt-auto pt-1 flex items-baseline justify-between">
          <div>
            <div class="text-orange-500 font-bold text-sm">৳${product.price}</div>
            <div class="text-[10px] text-slate-400 line-through">৳${product.originalPrice}</div>
          </div>
          <button onclick="event.stopPropagation(); handleAddToCart('${product.id}')" class="h-8 w-8 rounded-full bg-orange-50 hover:bg-orange-500 hover:text-white flex items-center justify-center text-orange-500 transition-all shadow-sm">
            <i class="fa-solid fa-cart-plus text-xs"></i>
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => window.location.href = 'product-details.html?id=' + product.id);
    container.appendChild(card);
  });
}

// Render Categories List & Grid (Categories Page)
function renderCategories() {
  const sidebarContainer = document.getElementById('categories-sidebar');
  const subgridContainer = document.getElementById('subcategories-grid');

  if (!sidebarContainer || !subgridContainer) return;

  // Sidebar List
  sidebarContainer.innerHTML = '';
  CATEGORIES.forEach((cat, idx) => {
    const activeClass = idx === activeCategoryIndex 
      ? 'bg-white text-orange-500 font-bold border-l-4 border-orange-500 shadow-sm' 
      : 'text-slate-500 hover:bg-slate-100/50';

    const item = document.createElement('div');
    item.className = `p-3 md:p-4.5 w-full flex flex-col items-center justify-center text-center cursor-pointer transition-all border-b border-slate-200/50 ${activeClass}`;
    item.innerHTML = `
      <i class="fa-solid ${cat.icon} text-base mb-1.5 ${idx === activeCategoryIndex ? 'text-orange-500' : 'text-slate-400'}"></i>
      <span class="text-[9px] md:text-[10px] leading-tight font-medium break-words max-w-[80px]">${cat.name}</span>
    `;

    item.addEventListener('click', () => {
      activeCategoryIndex = idx;
      renderCategories();
    });

    sidebarContainer.appendChild(item);
  });

  // Right Side Content Panel
  const activeCategory = CATEGORIES[activeCategoryIndex];
  const gridTitle = document.getElementById('categories-grid-title');
  if (gridTitle) gridTitle.innerText = activeCategory.name;

  subgridContainer.innerHTML = '';
  activeCategory.items.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'flex flex-col items-center text-center group cursor-pointer p-2 transition-transform hover:scale-105 duration-200';
    card.innerHTML = `
      <div class="w-16 h-16 rounded-xl overflow-hidden mb-2 bg-slate-50 border border-slate-100 flex items-center justify-center">
        <img src="${sub.img}" alt="${sub.name}" class="object-cover h-full w-full">
      </div>
      <span class="text-[10px] font-semibold text-slate-700 leading-tight group-hover:text-orange-500 transition-colors">
        ${sub.name}
      </span>
    `;

    // Click subcategory to search and return to home page
    card.addEventListener('click', () => {
      localStorage.setItem('abrexa_search_trigger', sub.name);
      window.location.href = 'index.html';
    });

    subgridContainer.appendChild(card);
  });
}

// Render Shopping Cart (Cart Page)
function renderCart() {
  const container = document.getElementById('cart-content-container');
  if (!container) return;

  if (cart.length === 0) {
    // Empty State + Recommendations
    container.innerHTML = `
      <div class="flex flex-col items-center py-16 px-4 text-center">
        <div class="w-28 h-28 bg-orange-50 rounded-full flex items-center justify-center mb-6 relative">
          <i class="fa-solid fa-cart-shopping text-4xl text-orange-400"></i>
          <span class="absolute bottom-1 right-1 bg-red-400 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shadow-md">
            <i class="fa-solid fa-xmark text-xs"></i>
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-800 mb-1">Your Cart is Empty</h4>
        <p class="text-xs text-slate-400 mb-6 max-w-xs">Looks like you haven't added anything to your shopping cart yet.</p>
        
        <div class="flex gap-4">
          <a href="index.html" class="px-6 py-2.5 text-xs border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold rounded-full transition-colors">
            Go Shopping
          </a>
          <a href="account.html" class="px-6 py-2.5 text-xs bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors shadow-md">
            Sign In / Sign Up
          </a>
        </div>
      </div>
      
      <!-- Just for You Recommendations Grid -->
      <div class="mt-8 border-t border-slate-100 pt-6">
        <h4 class="text-sm font-bold text-slate-800 text-center uppercase tracking-wider mb-6">
          <span class="text-orange-500">♥</span> Just For You Recommendations <span class="text-orange-500">♥</span>
        </h4>
        
        <div id="cart-recommendations" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <!-- Populated below -->
        </div>
      </div>
    `;

    const recsContainer = document.getElementById('cart-recommendations');
    if (recsContainer) {
      const recs = PRODUCTS.filter(p => !p.isFlashSale).slice(0, 6);
      recs.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm flex flex-col group relative cursor-pointer hover:shadow-md transition-shadow';
        card.innerHTML = `
          <span class="absolute top-2 left-2 bg-orange-100 text-orange-600 text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
            -${product.discount}%
          </span>
          <div class="h-28 w-full overflow-hidden bg-slate-50 flex items-center justify-center">
            <img src="${product.image}" alt="${product.title}" class="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-2 flex flex-col flex-grow">
            <h4 class="text-[10px] font-semibold text-slate-700 line-clamp-2 h-7 leading-tight mb-1 group-hover:text-orange-500 transition-colors">
              ${product.title}
            </h4>
            <div class="flex items-center gap-1 mb-1">
              <i class="fa-solid fa-star text-[9px] text-amber-400"></i>
              <span class="text-[9px] font-bold text-slate-600">${product.rating}</span>
            </div>
            <div class="mt-auto pt-1 flex items-baseline justify-between">
              <div>
                <div class="text-orange-500 font-bold text-xs">৳${product.price}</div>
                <div class="text-[9px] text-slate-400 line-through">৳${product.originalPrice}</div>
              </div>
              <button onclick="event.stopPropagation(); handleAddToCart('${product.id}')" class="h-6 w-6 rounded-full bg-orange-50 hover:bg-orange-500 hover:text-white flex items-center justify-center text-orange-500 transition-all shadow-sm">
                <i class="fa-solid fa-cart-plus text-[10px]"></i>
              </button>
            </div>
          </div>
        `;
        card.addEventListener('click', () => window.location.href = 'product-details.html?id=' + product.id);
        recsContainer.appendChild(card);
      });
    }
  } else {
    // Cart Items Listing (Responsive 2-column layout on desktop)
    let total = 0;
    let listHtml = `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items Column -->
        <div class="lg:col-span-2 flex flex-col gap-4">
          <!-- Clear Cart Row (Desktop only, mobile has it in header) -->
          <div class="hidden lg:flex items-center justify-between p-3.5 bg-orange-50/50 border border-orange-100 rounded-xl">
            <span class="text-xs text-slate-600 font-semibold">${cart.length} unique items in shopping cart</span>
            <button onclick="clearCart()" class="text-xs text-slate-500 hover:text-red-500 flex items-center gap-1 font-semibold transition-colors">
              <i class="fa-solid fa-trash-can text-[10px]"></i> Clear Cart
            </button>
          </div>
          
          <div class="flex flex-col gap-3.5">
    `;

    cart.forEach(item => {
      const itemSubtotal = item.product.price * item.quantity;
      total += itemSubtotal;

      listHtml += `
        <!-- Custom Premium Cart Card -->
        <div class="flex gap-3 bg-white p-3.5 rounded-2xl border border-slate-150 shadow-sm relative group hover:border-orange-200 transition-colors">
          <!-- Custom Checkbox -->
          <div class="flex items-center self-stretch pr-1 shrink-0">
            <input type="checkbox" checked class="w-4 h-4 rounded text-orange-500 accent-orange-500 cursor-pointer">
          </div>
          
          <!-- Image -->
          <div class="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
            <img src="${item.product.image}" alt="${item.product.title}" class="object-cover w-full h-full">
          </div>
          
          <!-- Details -->
          <div class="flex-grow flex flex-col justify-between min-h-[72px]">
            <div>
              <span class="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest block mb-0.5">Store: ABREXA</span>
              <h4 class="text-xs font-bold text-slate-800 line-clamp-1 pr-6 leading-tight hover:text-orange-500 transition-colors cursor-pointer" onclick="window.location.href='product-details.html?id=${item.product.id}'">${item.product.title}</h4>
            </div>
            
            <div class="flex items-end justify-between mt-2">
              <div>
                <span class="text-orange-500 font-black text-xs sm:text-sm">৳${item.product.price}</span>
                <span class="text-[9px] text-slate-400 line-through ml-1.5">৳${item.product.originalPrice}</span>
              </div>
              
              <!-- Quantity Selector -->
              <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50 shadow-sm">
                <button onclick="updateCartQuantity('${item.product.id}', -1)" class="px-2.5 py-0.5 text-xs text-slate-500 hover:bg-slate-200 transition-colors font-bold">-</button>
                <span class="px-3 py-0.5 text-xs font-extrabold text-slate-800 bg-white border-x border-slate-200">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.product.id}', 1)" class="px-2.5 py-0.5 text-xs text-slate-500 hover:bg-slate-200 transition-colors font-bold">+</button>
              </div>
            </div>
          </div>
          
          <!-- Remove item button -->
          <button onclick="removeFromCart('${item.product.id}')" class="absolute top-4 right-4 text-slate-350 hover:text-red-500 transition-colors">
            <i class="fa-solid fa-trash-can text-sm"></i>
          </button>
        </div>
      `;
    });

    listHtml += `
          </div>
        </div>
        
        <!-- Summary Checkout Column (Desktop only) -->
        <div class="hidden lg:block bg-slate-50 border border-slate-200 rounded-2xl p-5 h-fit shadow-inner">
          <h4 class="text-sm font-bold text-slate-850 border-b border-slate-200 pb-3 mb-4 uppercase tracking-wider">Order Summary</h4>
          
          <div class="flex flex-col gap-2.5 text-xs text-slate-600 mb-4">
            <div class="flex justify-between">
              <span>Subtotal (${cart.length} items)</span>
              <span class="font-bold text-slate-800">৳${total}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping Fee</span>
              <span class="text-emerald-600 font-bold">Calculated on checkout</span>
            </div>
          </div>
          
          <div class="border-t border-slate-200 pt-3 mb-5 flex justify-between items-baseline">
            <span class="text-xs font-semibold text-slate-800">Estimated Total:</span>
            <span class="text-lg font-extrabold text-orange-500">৳${total}</span>
          </div>

          <a href="checkout.html" class="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:brightness-105 text-white text-xs font-bold rounded-full shadow-md transition-all text-center flex items-center justify-center gap-2">
            <i class="fa-solid fa-credit-card"></i> Proceed to Checkout
          </a>
          
          <div class="text-center text-[10px] text-slate-400 mt-4 leading-normal">
            By proceeding, you agree to ABREXA's Terms and Conditions.
          </div>
        </div>
      </div>

      <!-- Sticky Bottom Checkout Bar (Mobile only) -->
      <div class="block lg:hidden fixed bottom-14 inset-x-0 bg-white border-t border-slate-200 h-16 flex items-center justify-between px-4 z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.06)]">
        <div class="flex flex-col">
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">Total Amount</span>
          <span class="text-base font-black text-orange-500 leading-none">৳${total}</span>
        </div>
        
        <a href="checkout.html" class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:brightness-105 text-white text-xs font-bold rounded-full shadow-md transition-all text-center uppercase tracking-wider flex items-center gap-1.5">
          Checkout (${cart.length}) <i class="fa-solid fa-chevron-right text-[10px]"></i>
        </a>
      </div>
    `;

    container.innerHTML = listHtml;
  }
}

// Render Checkout Page Summary (Checkout Page)
function renderCheckout() {
  const container = document.getElementById('checkout-summary-container');
  if (!container) return;

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.product.price * item.quantity;
  });

  const shipping = subtotal > 0 ? 60 : 0;
  const total = subtotal + shipping;

  container.innerHTML = `
    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Order Summary</h4>
    <div class="flex flex-col gap-3 max-h-[220px] overflow-y-auto no-scrollbar border-b border-slate-100 pb-3.5 mb-3.5">
      ${cart.map(item => `
        <div class="flex justify-between items-center text-xs">
          <span class="text-slate-600 line-clamp-1 pr-6 flex-grow">${item.product.title} <strong class="text-slate-800">x${item.quantity}</strong></span>
          <span class="font-bold text-slate-800 shrink-0">৳${item.product.price * item.quantity}</span>
        </div>
      `).join('')}
    </div>
    
    <div class="flex flex-col gap-2.5 text-xs text-slate-500 mb-4 border-b border-slate-100 pb-3.5">
      <div class="flex justify-between">
        <span>Product Subtotal</span>
        <span class="font-semibold text-slate-700">৳${subtotal}</span>
      </div>
      <div class="flex justify-between">
        <span>Delivery Charge</span>
        <span class="font-semibold text-slate-700">৳${shipping}</span>
      </div>
      <div class="flex justify-between text-orange-500 font-bold">
        <span>Promo Discount</span>
        <span>-৳0</span>
      </div>
    </div>

    <div class="flex justify-between items-baseline mb-5">
      <span class="text-xs font-bold text-slate-800">Grand Total:</span>
      <span class="text-lg font-black text-orange-500">৳${total}</span>
    </div>

    <button onclick="handlePlaceOrder()" class="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg hover:brightness-105 transition-all text-center flex items-center justify-center gap-2">
      <i class="fa-solid fa-circle-check"></i> Place Order (৳${total})
    </button>
  `;
}

// Order Submission Handler (Checkout Page)
window.handlePlaceOrder = () => {
  // Simple validation checks
  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const city = document.getElementById('checkout-city').value;

  if (!name || !phone || !address || !city) {
    alert("Please fill out all required billing and shipping fields.");
    return;
  }

  // Clear cart in memory and store
  cart = [];
  saveCartToStorage();
  updateCartBadge();

  // Render Success state in the checkout template
  const mainCheckoutCard = document.getElementById('checkout-card-main');
  if (mainCheckoutCard) {
    mainCheckoutCard.innerHTML = `
      <div class="text-center py-16 px-4 flex flex-col items-center">
        <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 text-3xl shadow-md border border-emerald-100 mb-6 animate-bounce">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h3 class="text-lg font-extrabold text-slate-800 mb-2">Order Placed Successfully!</h3>
        <p class="text-xs text-slate-400 mb-6 max-w-sm">Thank you, <strong class="text-slate-700">${name}</strong>. Your order has been placed. You can check the shipment updates in your Profile panel.</p>
        
        <div class="flex gap-4">
          <a href="index.html" class="px-6 py-2.5 text-xs bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors shadow-md">
            Go Shopping
          </a>
          <a href="account.html" class="px-6 py-2.5 text-xs border border-slate-350 text-slate-600 font-bold rounded-full hover:bg-slate-50 transition-colors">
            Track Order
          </a>
        </div>
      </div>
    `;
  }
};

// Render Account/Profile Tab (Account Page)
function renderAccount() {
  const container = document.getElementById('account-tab-container');
  if (!container) return;

  if (!currentUser) {
    renderGetLoginPrompt(container);
    return;
  }

  container.innerHTML = `
    <!-- Profile summary banner -->
    <div class="gradient-orange p-6 md:p-8 text-white relative">
      <div class="flex items-center gap-5">
        <div class="w-16 h-16 rounded-full border-2 border-white/50 overflow-hidden bg-white/10 flex items-center justify-center shadow-lg relative shrink-0">
          <img src="${currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=60'}" alt="User avatar" class="object-cover w-full h-full">
        </div>
        <div>
          <h4 class="text-base font-bold">${currentUser.name}</h4>
          <p class="text-[10px] md:text-xs text-orange-100 flex items-center gap-1 mt-0.5">
            <i class="fa-solid fa-shield text-[10px]"></i> ${currentUser.memberType || 'Elite Club Gold Member'}
          </p>
        </div>
      </div>
      <button onclick="window.showEditProfileModal()" class="absolute top-6 right-6 text-white/80 hover:text-white transition-colors">
        <i class="fa-solid fa-user-pen text-sm"></i>
      </button>
    </div>

    <!-- Order tracker badges -->
    <div class="px-4 md:px-8 -mt-4 relative z-10">
      <div class="bg-white rounded-2xl border border-slate-150 shadow-md p-4 flex justify-around text-center">
        <a href="#" onclick="alert('No pending payments.')" class="flex flex-col items-center group">
          <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-1 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-wallet text-sm"></i>
          </div>
          <span class="text-[10px] font-semibold text-slate-600">To Pay</span>
        </a>
        <a href="#" onclick="alert('No items currently shipping.')" class="flex flex-col items-center group">
          <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-1 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-box text-sm"></i>
          </div>
          <span class="text-[10px] font-semibold text-slate-600">To Ship</span>
        </a>
        <a href="#" onclick="alert('No packages to receive.')" class="flex flex-col items-center group">
          <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-1 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-truck-ramp-box text-sm"></i>
          </div>
          <span class="text-[10px] font-semibold text-slate-600">To Receive</span>
        </a>
        <a href="#" onclick="alert('No items waiting for review.')" class="flex flex-col items-center group">
          <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-1 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-star-half-stroke text-sm"></i>
          </div>
          <span class="text-[10px] font-semibold text-slate-600">To Review</span>
        </a>
      </div>
    </div>

    <!-- Quick action links -->
    <div class="p-6 md:p-8 flex flex-col gap-4">
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <a href="#" onclick="alert('Vouchers loaded: ৳150 cashback code applied')" class="flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-ticket text-orange-500 text-sm animate-pulse"></i>
            <span class="text-xs font-semibold text-slate-700">My Voucher Codes</span>
          </div>
          <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
        </a>
        <a href="#" onclick="alert('Loyalty points balance: 1,450 points')" class="flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-award text-orange-500 text-sm"></i>
            <span class="text-xs font-semibold text-slate-700">Coins & Rewards Panel</span>
          </div>
          <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
        </a>
        <a href="#" onclick="alert('Saved Address: ${currentUser.address || 'No address saved yet.'}, ${currentUser.city || ''}')" class="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-location-dot text-orange-500 text-sm"></i>
            <div class="text-left">
              <span class="text-xs font-semibold text-slate-700 block">Delivery Address Book</span>
              <span class="text-[9px] text-slate-400 block truncate max-w-[200px]">${currentUser.address ? currentUser.address + ', ' + currentUser.city : 'No address saved'}</span>
            </div>
          </div>
          <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
        </a>
      </div>

      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <a href="#" onclick="alert('Contacting Customer Care...')" class="flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-headset text-slate-550 text-sm"></i>
            <span class="text-xs font-semibold text-slate-700">Support Chat Helper</span>
          </div>
          <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
        </a>
        <a href="#" onclick="event.preventDefault(); handleLogout()" class="flex items-center justify-between p-4 hover:bg-slate-50 text-red-500 transition-colors">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-right-from-bracket text-red-400 text-sm"></i>
            <span class="text-xs font-semibold">Sign Out from Account</span>
          </div>
          <i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
        </a>
      </div>
      
      <!-- Version Info -->
      <div class="text-center text-[10px] text-slate-400 mt-4">
        ABREXA E-Commerce App v3.2.1 • Multi-Page Layout
      </div>
    </div>
  `;
}

function renderGetLoginPrompt(container) {
  container.innerHTML = `
    <div class="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px] bg-white rounded-2xl relative overflow-hidden">
      <!-- Decorative background blur elements -->
      <div class="absolute top-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
      <div class="absolute bottom-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>

      <!-- Secure User Shield Icon -->
      <div class="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-550 text-3xl shadow-md border border-orange-100 mb-6 animate-pulse">
        <i class="fa-solid fa-user-shield text-orange-500"></i>
      </div>

      <!-- Title / Welcome -->
      <h3 class="text-xl font-extrabold text-slate-800 mb-2">Account Authentication</h3>
      <p class="text-xs text-slate-400 mb-8 max-w-xs leading-relaxed">
        Please sign in to your ABREXA account to track your orders, claim secret vouchers, and view your loyalty points panel.
      </p>

      <!-- GET LOGIN button -->
      <button onclick="window.showLoginForm()" class="w-full max-w-xs py-3.5 bg-gradient-to-r from-orange-500 to-red-500 hover:brightness-105 active:scale-[0.99] text-white text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
        <i class="fa-solid fa-key"></i> GET LOGIN
      </button>
      
      <!-- Secure Access label -->
      <div class="text-[9px] text-slate-350 uppercase font-extrabold tracking-widest mt-12">
        ABREXA SECURE ACCESS
      </div>
    </div>
  `;
}

window.showLoginForm = () => {
  window.location.href = 'login.html';
};

function renderLogin(container) {
  container.innerHTML = `
    <div class="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl">
      <!-- Welcome Intro -->
      <div class="w-full md:w-1/2 text-left hidden md:block">
        <h3 class="text-2xl font-black text-slate-800 tracking-tight mb-3">Sign In to <span class="text-orange-500">ABREXA.</span></h3>
        <p class="text-xs text-slate-500 leading-relaxed mb-4">Access your personal dashboard to track orders, manage discount voucher codes, and claim your loyalty membership points.</p>
        <div class="flex flex-col gap-2 text-xs text-slate-600">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-emerald-500"></i>
            <span>Track your shipments in real-time</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-emerald-500"></i>
            <span>Apply secret coupon codes at checkout</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-emerald-500"></i>
            <span>24/7 dedicated helper support chat</span>
          </div>
        </div>
      </div>

      <!-- Login Form Card -->
      <div class="w-full md:w-1/2 bg-white rounded-2xl border border-slate-100 shadow-lg p-6 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl"></div>
        <h4 class="text-lg font-black text-slate-800 mb-1">Welcome Back</h4>
        <p class="text-[11px] text-slate-400 mb-5">Please sign in to continue your shopping journey</p>
        
        <form id="login-form" onsubmit="event.preventDefault(); window.submitLogin();" class="flex flex-col gap-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email or Phone</label>
            <div class="relative flex items-center">
              <i class="fa-solid fa-envelope absolute left-3.5 text-slate-350 text-xs"></i>
              <input type="text" id="login-email" value="fahim@example.com" placeholder="Enter your email or phone" class="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-700 transition-colors focus:outline-none" required>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Password</label>
              <a href="#" onclick="alert('Reset link sent to demo account email!')" class="text-[10px] font-bold text-orange-500 hover:underline">Forgot?</a>
            </div>
            <div class="relative flex items-center">
              <i class="fa-solid fa-lock absolute left-3.5 text-slate-350 text-xs"></i>
              <input type="password" id="login-password" value="123456" placeholder="Enter your password" class="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-10 text-xs font-semibold text-slate-700 transition-colors focus:outline-none" required>
              <button type="button" onclick="window.toggleLoginPasswordVisibility()" class="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none">
                <i id="login-password-eye" class="fa-solid fa-eye-slash text-xs"></i>
              </button>
            </div>
          </div>

          <button type="submit" class="w-full mt-2 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-xl shadow-md hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2">
            <i class="fa-solid fa-right-to-bracket"></i> Sign In
          </button>
        </form>

        <div class="relative flex py-4 items-center">
          <div class="flex-grow border-t border-slate-100"></div>
          <span class="flex-shrink mx-3 text-[9px] text-slate-400 uppercase font-extrabold tracking-widest">or</span>
          <div class="flex-grow border-t border-slate-100"></div>
        </div>

        <button onclick="window.quickDemoLogin()" class="w-full py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-600 text-xs font-bold rounded-xl transition-all border border-orange-100 flex items-center justify-center gap-2">
          <i class="fa-solid fa-bolt text-amber-500"></i> Quick Demo Login
        </button>

        <p class="text-center text-xs text-slate-500 mt-6 font-semibold">
          Don't have an account? 
          <a href="#" onclick="event.preventDefault(); window.switchToRegister();" class="text-orange-500 font-extrabold hover:underline">Create Account</a>
        </p>
      </div>
    </div>
  `;
}

function renderRegister(container) {
  container.innerHTML = `
    <div class="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl">
      <!-- Welcome Intro -->
      <div class="w-full md:w-1/2 text-left hidden md:block">
        <h3 class="text-2xl font-black text-slate-800 tracking-tight mb-3">Join <span class="text-orange-500">ABREXA.</span></h3>
        <p class="text-xs text-slate-500 leading-relaxed mb-4">Create your free account today and unlock a premium shopping experience tailored just for you.</p>
        <div class="flex flex-col gap-2 text-xs text-slate-600">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-truck-fast text-orange-500"></i>
            <span>Free delivery voucher on your first order</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-award text-orange-500"></i>
            <span>Earn 10 coins for every ৳100 spent</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-percent text-orange-500"></i>
            <span>Exclusive access to member-only flash sales</span>
          </div>
        </div>
      </div>

      <!-- Registration Form Card -->
      <div class="w-full md:w-1/2 bg-white rounded-2xl border border-slate-100 shadow-lg p-6 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl"></div>
        <h4 class="text-lg font-black text-slate-800 mb-1">Create Account</h4>
        <p class="text-[11px] text-slate-400 mb-5">Fill in the fields below to register</p>
        
        <form id="register-form" onsubmit="event.preventDefault(); window.submitRegister();" class="flex flex-col gap-3.5">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Full Name</label>
            <div class="relative flex items-center">
              <i class="fa-solid fa-user absolute left-3.5 text-slate-350 text-xs"></i>
              <input type="text" id="reg-name" placeholder="Enter your full name" class="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-700 transition-colors focus:outline-none" required>
            </div>
          </div>

          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
            <div class="relative flex items-center">
              <i class="fa-solid fa-envelope absolute left-3.5 text-slate-350 text-xs"></i>
              <input type="email" id="reg-email" placeholder="Enter your email address" class="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-700 transition-colors focus:outline-none" required>
            </div>
          </div>
          
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Password</label>
            <div class="relative flex items-center">
              <i class="fa-solid fa-lock absolute left-3.5 text-slate-350 text-xs"></i>
              <input type="password" id="reg-password" placeholder="Create a strong password" class="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl py-2.5 pl-10 pr-10 text-xs font-semibold text-slate-700 transition-colors focus:outline-none" required>
              <button type="button" onclick="window.toggleRegPasswordVisibility()" class="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none">
                <i id="reg-password-eye" class="fa-solid fa-eye-slash text-xs"></i>
              </button>
            </div>
          </div>

          <button type="submit" class="w-full mt-2 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-xl shadow-md hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2">
            <i class="fa-solid fa-user-plus"></i> Sign Up
          </button>
        </form>

        <p class="text-center text-xs text-slate-500 mt-5 font-semibold">
          Already have an account? 
          <a href="#" onclick="event.preventDefault(); window.switchToLogin();" class="text-orange-500 font-extrabold hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  `;
}

window.toggleLoginPasswordVisibility = () => {
  const input = document.getElementById('login-password');
  const eye = document.getElementById('login-password-eye');
  if (input && eye) {
    if (input.type === 'password') {
      input.type = 'text';
      eye.classList.remove('fa-eye-slash');
      eye.classList.add('fa-eye');
    } else {
      input.type = 'password';
      eye.classList.remove('fa-eye');
      eye.classList.add('fa-eye-slash');
    }
  }
};

window.toggleRegPasswordVisibility = () => {
  const input = document.getElementById('reg-password');
  const eye = document.getElementById('reg-password-eye');
  if (input && eye) {
    if (input.type === 'password') {
      input.type = 'text';
      eye.classList.remove('fa-eye-slash');
      eye.classList.add('fa-eye');
    } else {
      input.type = 'password';
      eye.classList.remove('fa-eye');
      eye.classList.add('fa-eye-slash');
    }
  }
};

window.switchToRegister = () => {
  const container = document.getElementById('account-tab-container');
  if (container) renderRegister(container);
};

window.switchToLogin = () => {
  const container = document.getElementById('account-tab-container');
  if (container) renderLogin(container);
};

window.quickDemoLogin = () => {
  currentUser = {
    name: 'Fahim Rahman',
    email: 'fahim@example.com',
    memberType: 'Elite Club Gold Member'
  };
  saveUserToStorage(currentUser);
  updateHeaderUser();
  
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
  if (pageName === 'login.html') {
    showToast('Logged in successfully as Fahim Rahman!');
    setTimeout(() => {
      window.location.href = 'account.html';
    }, 1000);
  } else {
    renderAccount();
    showToast('Logged in successfully as Fahim Rahman!');
  }
};

window.submitLogin = () => {
  const emailInput = document.getElementById('login-email');
  const email = emailInput ? emailInput.value.trim() : '';
  
  let name = 'Fahim Rahman';
  if (email && !email.includes('fahim@example.com')) {
    const parts = email.split('@');
    name = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }

  currentUser = {
    name: name,
    email: email || 'user@example.com',
    memberType: 'Premium Member'
  };
  
  saveUserToStorage(currentUser);
  updateHeaderUser();
  
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
  if (pageName === 'login.html') {
    showToast(`Welcome back, ${name}!`);
    setTimeout(() => {
      window.location.href = 'account.html';
    }, 1000);
  } else {
    renderAccount();
    showToast(`Welcome back, ${name}!`);
  }
};

window.submitRegister = () => {
  const nameEl = document.getElementById('reg-name');
  const emailEl = document.getElementById('reg-email');
  
  const name = nameEl ? nameEl.value.trim() : '';
  const email = emailEl ? emailEl.value.trim() : '';

  currentUser = {
    name: name || 'Anonymous User',
    email: email || 'user@example.com',
    memberType: 'Bronze Club Member'
  };

  saveUserToStorage(currentUser);
  updateHeaderUser();
  
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
  if (pageName === 'login.html') {
    showToast(`Account created! Welcome, ${currentUser.name}!`);
    setTimeout(() => {
      window.location.href = 'account.html';
    }, 1000);
  } else {
    renderAccount();
    showToast(`Account created! Welcome, ${currentUser.name}!`);
  }
};

window.handleLogout = () => {
  if (confirm("Are you sure you want to sign out?")) {
    currentUser = null;
    clearUserFromStorage();
    updateHeaderUser();
    renderAccount();
    // Clear chat history on logout
    localStorage.removeItem('abrexa_chat_histories');
    chatHistories = {};
    showToast('Signed out of account.');
  }
};

let tempAvatarBase64 = '';

window.triggerAvatarUpload = () => {
  const fileInput = document.getElementById('edit-avatar-input');
  if (fileInput) fileInput.click();
};

window.handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 1024 * 1024) {
      alert("Image size should be less than 1MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      tempAvatarBase64 = e.target.result;
      const previewImg = document.getElementById('edit-avatar-preview');
      if (previewImg) previewImg.src = tempAvatarBase64;
    };
    reader.readAsDataURL(file);
  }
};

window.showEditProfileModal = () => {
  let modal = document.getElementById('edit-profile-modal');
  if (modal) modal.remove();

  tempAvatarBase64 = currentUser && currentUser.avatar ? currentUser.avatar : '';
  const defaultAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=60';
  const currentAvatarSrc = tempAvatarBase64 || defaultAvatar;

  const modalHtml = `
    <div id="edit-profile-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300">
      <div class="bg-white w-full max-w-sm rounded-[28px] shadow-2xl border border-slate-100 p-6 relative overflow-hidden transform scale-95 opacity-0 transition-all duration-300 max-h-[90vh] overflow-y-auto no-scrollbar" id="edit-profile-card">
        <div class="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full blur-xl"></div>
        
        <h4 class="text-base font-black text-slate-800 mb-1">Edit Profile Details</h4>
        <p class="text-[11px] text-slate-400 mb-5">Update your personal information below</p>
        
        <form id="edit-profile-form" onsubmit="event.preventDefault(); window.saveProfileChanges();" class="flex flex-col gap-4">
          <!-- Profile Pic Selector -->
          <div class="flex flex-col items-center justify-center mb-2">
            <div onclick="window.triggerAvatarUpload()" class="relative w-20 h-20 rounded-full border-2 border-orange-500/50 overflow-hidden bg-slate-50 flex items-center justify-center cursor-pointer group shadow-md">
              <img id="edit-avatar-preview" src="${currentAvatarSrc}" class="object-cover w-full h-full">
              <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <i class="fa-solid fa-camera text-sm"></i>
              </div>
            </div>
            <input type="file" id="edit-avatar-input" accept="image/*" class="hidden" onchange="window.handleAvatarChange(event)">
            <span class="text-[9px] text-slate-400 mt-1.5 font-semibold">Tap avatar to upload photo</span>
          </div>

          <!-- Name Input -->
          <div class="flex flex-col gap-1">
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
            <div class="group relative flex items-center bg-[#f4f7fd] border border-slate-200/40 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 rounded-[20px] px-4.5 py-3.5 transition-all duration-300">
              <i class="fa-solid fa-user text-slate-400 group-focus-within:text-blue-500 text-sm mr-3 transition-colors duration-300"></i>
              <input type="text" id="edit-name" value="${currentUser ? currentUser.name : ''}" placeholder="Your name" class="w-full bg-transparent text-xs text-slate-800 font-semibold focus:outline-none placeholder-slate-400" required>
            </div>
          </div>

          <!-- Email Input -->
          <div class="flex flex-col gap-1">
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
            <div class="group relative flex items-center bg-[#f4f7fd] border border-slate-200/40 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 rounded-[20px] px-4.5 py-3.5 transition-all duration-300">
              <i class="fa-solid fa-envelope text-slate-400 group-focus-within:text-blue-500 text-sm mr-3 transition-colors duration-300"></i>
              <input type="email" id="edit-email" value="${currentUser ? currentUser.email : ''}" placeholder="Your email" class="w-full bg-transparent text-xs text-slate-800 font-semibold focus:outline-none placeholder-slate-400" required>
            </div>
          </div>

          <!-- City Selection Dropdown -->
          <div class="flex flex-col gap-1">
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-wider ml-1">City / District</label>
            <div class="group relative flex items-center bg-[#f4f7fd] border border-slate-200/40 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 rounded-[20px] px-4.5 py-3.5 transition-all duration-300">
              <i class="fa-solid fa-city text-slate-400 group-focus-within:text-blue-500 text-sm mr-3 transition-colors duration-300"></i>
              <select id="edit-city" class="w-full bg-transparent text-xs text-slate-800 font-semibold focus:outline-none placeholder-slate-400 cursor-pointer">
                <option value="Dhaka" ${currentUser && currentUser.city === 'Dhaka' ? 'selected' : ''}>Dhaka</option>
                <option value="Chittagong" ${currentUser && currentUser.city === 'Chittagong' ? 'selected' : ''}>Chittagong</option>
                <option value="Sylhet" ${currentUser && currentUser.city === 'Sylhet' ? 'selected' : ''}>Sylhet</option>
                <option value="Khulna" ${currentUser && currentUser.city === 'Khulna' ? 'selected' : ''}>Khulna</option>
                <option value="Rajshahi" ${currentUser && currentUser.city === 'Rajshahi' ? 'selected' : ''}>Rajshahi</option>
                <option value="Barishal" ${currentUser && currentUser.city === 'Barishal' ? 'selected' : ''}>Barishal</option>
                <option value="Rangpur" ${currentUser && currentUser.city === 'Rangpur' ? 'selected' : ''}>Rangpur</option>
                <option value="Mymensingh" ${currentUser && currentUser.city === 'Mymensingh' ? 'selected' : ''}>Mymensingh</option>
              </select>
            </div>
          </div>

          <!-- Delivery Address Input -->
          <div class="flex flex-col gap-1">
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-wider ml-1">Delivery Address</label>
            <div class="group relative flex items-start bg-[#f4f7fd] border border-slate-200/40 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 rounded-[20px] px-4.5 py-3.5 transition-all duration-300">
              <i class="fa-solid fa-location-dot text-slate-400 group-focus-within:text-blue-500 text-sm mr-3 mt-0.5 transition-colors duration-300"></i>
              <textarea id="edit-address" placeholder="Enter your shipping street address" rows="2" class="w-full bg-transparent text-xs text-slate-800 font-semibold focus:outline-none placeholder-slate-400 resize-none">${currentUser && currentUser.address ? currentUser.address : ''}</textarea>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex gap-3 mt-2">
            <button type="button" onclick="window.closeEditProfileModal()" class="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-650 text-xs font-bold rounded-[20px] transition-colors text-center focus:outline-none">
              Cancel
            </button>
            <button type="submit" class="flex-1 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-[20px] shadow-md hover:brightness-105 transition-all text-center focus:outline-none">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  setTimeout(() => {
    const modalEl = document.getElementById('edit-profile-modal');
    const cardEl = document.getElementById('edit-profile-card');
    if (cardEl && modalEl) {
      cardEl.classList.remove('scale-95', 'opacity-0');
      cardEl.classList.add('scale-100', 'opacity-100');
    }
  }, 50);
};

window.closeEditProfileModal = () => {
  const modalEl = document.getElementById('edit-profile-modal');
  const cardEl = document.getElementById('edit-profile-card');
  if (cardEl && modalEl) {
    cardEl.classList.remove('scale-100', 'opacity-100');
    cardEl.classList.add('scale-95', 'opacity-0');
    setTimeout(() => modalEl.remove(), 300);
  }
};

window.saveProfileChanges = () => {
  const nameInput = document.getElementById('edit-name');
  const emailInput = document.getElementById('edit-email');
  const cityInput = document.getElementById('edit-city');
  const addressInput = document.getElementById('edit-address');
  
  if (nameInput && emailInput) {
    const newName = nameInput.value.trim();
    const newEmail = emailInput.value.trim();
    const newCity = cityInput ? cityInput.value : '';
    const newAddress = addressInput ? addressInput.value.trim() : '';
    
    if (newName && newEmail) {
      currentUser.name = newName;
      currentUser.email = newEmail;
      currentUser.city = newCity;
      currentUser.address = newAddress;
      currentUser.avatar = tempAvatarBase64;
      
      saveUserToStorage(currentUser);
      updateHeaderUser();
      renderAccount();
      window.closeEditProfileModal();
      showToast('Profile details updated successfully!');
    }
  }
};

// Global Operations

// Add to Cart Handler
window.handleAddToCart = (productId) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.product.id === productId);
  
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  // Save changes
  saveCartToStorage();

  // Trigger bounce animations
  const icons = document.querySelectorAll('.cart-nav-icon');
  icons.forEach(icon => {
    icon.classList.add('cart-bounce');
    setTimeout(() => icon.classList.remove('cart-bounce'), 800);
  });

  // Display Toast Alert
  showToast(`${product.title.substring(0, 20)}... added to cart!`);

  // Update views
  updateCartBadge();
  
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
  if (pageName === 'cart.html') {
    renderCart();
  }
};

window.removeFromCart = (productId) => {
  cart = cart.filter(item => item.product.id !== productId);
  saveCartToStorage();
  updateCartBadge();
  renderCart();
};

window.updateCartQuantity = (productId, delta) => {
  const itemIndex = cart.findIndex(item => item.product.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCartToStorage();
    updateCartBadge();
    renderCart();
  }
};

window.clearCart = () => {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    saveCartToStorage();
    updateCartBadge();
    renderCart();
  }
};

// Render Product Details Page dynamically (product-details.html)
async function renderProductDetails() {
  const loadingEl = document.getElementById('detail-loading');
  const contentEl = document.getElementById('detail-content');
  if (!contentEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  let product = PRODUCTS.find(p => p.id == productId || p.id === 'db_' + productId || p.rawId == productId || String(p.id).replace('db_', '') === String(productId).replace('db_', ''));

  if (!product) {
    // Check localStorage seller_products
    try {
      const localProducts = JSON.parse(localStorage.getItem('seller_products') || '[]');
      const lp = localProducts.find((p, idx) => idx == productId || p.id == productId);
      if (lp) {
        product = {
          id: productId,
          title: lp.title,
          price: lp.price,
          originalPrice: lp.price ? Math.round(lp.price * 1.3) : 999,
          discount: 25,
          image: lp.image || (lp.images && lp.images[0]),
          images: lp.images || [lp.image],
          stock: lp.stock || 10,
          reviews: 12,
          rating: 4.8,
          category: lp.category || 'Accessories',
          seller: 'ABREXA Seller'
        };
      }
    } catch(e) {}
  }

  if (!product && productId) {
    // Attempt live fetch from API
    try {
      const cleanId = String(productId).replace('db_', '');
      const apiHost = (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') ? window.location.origin : (window.location.port === '8080' ? '' : 'http://localhost:8000');
      const res = await fetch(`${apiHost}/api/v1/products/${cleanId}/`);
      if (res.ok) {
        const p = await res.json();
        let gallery = [];
        if (Array.isArray(p.images) && p.images.length > 0) {
          gallery = p.images.map(img => typeof img === 'string' ? img : (img.image_url || img.image)).filter(Boolean);
        } else if (Array.isArray(p.gallery_images) && p.gallery_images.length > 0) {
          gallery = [...p.gallery_images];
        }
        const mainImg = p.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80';
        if (mainImg && !gallery.includes(mainImg)) {
          gallery.unshift(mainImg);
        }
        product = {
          id: productId,
          rawId: p.id,
          title: p.title,
          price: parseFloat(p.price),
          originalPrice: p.original_price ? parseFloat(p.original_price) : Math.round(parseFloat(p.price) * 1.3),
          discount: p.discount_percent || 20,
          image: mainImg,
          images: gallery.length > 0 ? gallery : [mainImg],
          stock: p.stock || 10,
          reviews: p.reviews_count || 0,
          rating: p.rating || 5.0,
          category: p.category_name || 'Accessories',
          seller: p.seller_store_name || 'Verified Seller'
        };
        PRODUCTS.push(product);
      }
    } catch(e) {}
  }

  if (!product) {
    if (loadingEl) {
      loadingEl.innerHTML = `
        <div class="text-center py-20 text-slate-500">
          <i class="fa-solid fa-triangle-exclamation text-3xl mb-3 text-red-500"></i>
          <p class="text-sm font-bold">Product Not Found</p>
          <a href="index.html" class="mt-4 inline-block text-xs bg-orange-500 text-white font-bold py-2 px-6 rounded-full">Go Back Home</a>
        </div>
      `;
    }
    return;
  }

  // Hide loading, show content
  if (loadingEl) loadingEl.classList.add('hidden');
  contentEl.classList.remove('hidden');

  // Populate dynamic DOM values
  document.getElementById('detail-price').innerText = product.price;
  document.getElementById('detail-original-price').innerText = `৳${product.originalPrice}`;
  document.getElementById('detail-discount').innerText = `-${product.discount}%`;
  document.getElementById('detail-title').innerText = product.title;
  document.getElementById('detail-rating-val').innerText = product.rating;
  document.getElementById('detail-reviews-count').innerText = `(${product.reviews} reviews)`;
  document.getElementById('detail-breadcrumb-cat').innerText = product.category;

  // Populate mobile brand elements if they exist in the viewport
  const mobTitle = document.getElementById('mobile-detail-title');
  if (mobTitle) mobTitle.innerText = product.title;
  const mobRating = document.getElementById('mobile-detail-rating-val');
  if (mobRating) mobRating.innerText = product.rating;
  const mobReviews = document.getElementById('mobile-detail-reviews-count');
  if (mobReviews) mobReviews.innerText = `(${product.reviews})`;

  // Populate Mobile & Desktop Store Info
  const customShopName = localStorage.getItem('seller_shop_name');
  let storeName = product.seller || customShopName || 'ABREXA Official Store';
  if (customShopName && (!product.seller || ['abrexa', 'verified seller', 'abrexa seller', 'abrexa partner store', 'my shop', 'fahim store'].includes(String(product.seller).toLowerCase().trim()))) {
    storeName = customShopName;
  }
  const storeNameEl = document.getElementById('detail-store-name');
  const storeAvatarEl = document.getElementById('detail-store-avatar');
  const storeLinkEl = document.getElementById('detail-store-link');
  if (storeNameEl) storeNameEl.innerText = storeName;
  if (storeAvatarEl) storeAvatarEl.innerText = storeName.charAt(0).toUpperCase();
  if (storeLinkEl) storeLinkEl.href = `store.html?store=${encodeURIComponent(storeName)}`;

  const deskStoreNameEl = document.getElementById('desktop-detail-store-name');
  const deskStoreAvatarEl = document.getElementById('desktop-detail-store-avatar');
  const deskStoreLinkEl = document.getElementById('desktop-detail-store-link');
  if (deskStoreNameEl) deskStoreNameEl.innerText = storeName;
  if (deskStoreAvatarEl) deskStoreAvatarEl.innerText = storeName.charAt(0).toUpperCase();
  if (deskStoreLinkEl) deskStoreLinkEl.href = `store.html?store=${encodeURIComponent(storeName)}`;

  // ==============================================
  // DYNAMIC IMAGE GALLERY & SLIDER
  // ==============================================
  let productImages = [];
  if (Array.isArray(product.images) && product.images.length > 0) {
    productImages = product.images.map(img => {
      if (typeof img === 'string') return img;
      return img ? (img.image_url || img.image) : null;
    }).filter(Boolean);
  }
  // Ensure primary image is at front
  const primaryImg = product.image_url || product.image;
  if (primaryImg) {
    if (!productImages.includes(primaryImg)) {
      productImages.unshift(primaryImg);
    }
  }
  if (productImages.length === 0) {
    productImages = ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'];
  }
  let currentSlideIndex = 0;

  const mainImgEl = document.getElementById('detail-img');
  const slideCounterEl = document.getElementById('mobile-slide-counter');

  // Update image slide and indicators
  function showSlide(index) {
    if (index < 0) index = productImages.length - 1;
    if (index >= productImages.length) index = 0;
    currentSlideIndex = index;

    if (mainImgEl) {
      mainImgEl.src = productImages[currentSlideIndex];
    }
    if (slideCounterEl) {
      slideCounterEl.innerText = `${currentSlideIndex + 1}/${productImages.length}`;
    }

    // Update active state on desktop thumbnails
    const desktopThumbs = document.querySelectorAll('.desktop-thumb-item');
    desktopThumbs.forEach((thumb, idx) => {
      if (idx === currentSlideIndex) {
        thumb.classList.add('border-orange-500');
        thumb.classList.remove('border-slate-200', 'opacity-60');
      } else {
        thumb.classList.remove('border-orange-500');
        thumb.classList.add('border-slate-200', 'opacity-60');
      }
    });

    // Update active state on product options thumbnails
    const optionThumbs = document.querySelectorAll('.option-thumb-item');
    optionThumbs.forEach((thumb, idx) => {
      if (idx === currentSlideIndex) {
        thumb.classList.add('border-orange-500');
        thumb.classList.remove('border-slate-200', 'opacity-70');
      } else {
        thumb.classList.remove('border-orange-500');
        thumb.classList.add('border-slate-200', 'opacity-70');
      }
    });
  }

  // Populate Desktop Gallery Thumbnails
  const desktopThumbsContainer = document.getElementById('desktop-thumbnails-container');
  if (desktopThumbsContainer) {
    desktopThumbsContainer.innerHTML = '';
    productImages.forEach((imgSrc, idx) => {
      const activeClass = idx === 0 ? 'border-orange-500' : 'border-slate-200 opacity-60';
      const thumb = document.createElement('div');
      thumb.className = `w-12 h-12 rounded-lg border-2 overflow-hidden cursor-pointer transition-all desktop-thumb-item ${activeClass}`;
      thumb.innerHTML = `<img src="${imgSrc}" class="object-cover w-full h-full" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80'">`;
      thumb.onclick = () => showSlide(idx);
      desktopThumbsContainer.appendChild(thumb);
    });
  }

  // Populate Product Options Thumbnails
  const optionThumbsContainer = document.getElementById('option-thumbnails-container');
  if (optionThumbsContainer) {
    optionThumbsContainer.innerHTML = '';
    productImages.forEach((imgSrc, idx) => {
      const activeClass = idx === 0 ? 'border-orange-500' : 'border-slate-200 opacity-70';
      const thumb = document.createElement('div');
      thumb.className = `w-10 h-10 rounded border-2 p-0.5 bg-white cursor-pointer transition-all option-thumb-item ${activeClass}`;
      thumb.innerHTML = `<img src="${imgSrc}" class="object-cover w-full h-full rounded-sm" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80'">`;
      thumb.onclick = () => {
        showSlide(idx);
        const optNameEl = document.getElementById('active-option-name');
        if (optNameEl) {
          optNameEl.innerHTML = `Style ${idx + 1} <i class="fa-solid fa-chevron-right text-[8px]"></i>`;
        }
      };
      optionThumbsContainer.appendChild(thumb);
    });
  }

  // Initialize first slide count and image
  showSlide(0);

  // Chevron click events
  const prevBtn = document.getElementById('prev-slide-btn');
  const nextBtn = document.getElementById('next-slide-btn');
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      showSlide(currentSlideIndex - 1);
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      showSlide(currentSlideIndex + 1);
    };
  }

  // Tap main image to advance slide
  if (mainImgEl) {
    mainImgEl.onclick = () => {
      showSlide(currentSlideIndex + 1);
    };

    // Mobile Swipe Gestures
    let touchStartX = 0;
    let touchEndX = 0;
    mainImgEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    mainImgEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        showSlide(currentSlideIndex + 1); // Swipe left -> Next
      } else if (touchEndX > touchStartX + swipeThreshold) {
        showSlide(currentSlideIndex - 1); // Swipe right -> Prev
      }
    }, { passive: true });
  }

  // Bind Checkout Actions (Buy Now & Add to Cart)
  const buyNowAction = () => {
    const existingIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingIndex === -1) {
      cart.push({ product, quantity: 1 });
      saveCartToStorage();
      updateCartBadge();
    }
    window.location.href = 'checkout.html';
  };

  const addToCartAction = () => {
    handleAddToCart(product.id);
  };

  document.getElementById('desktop-buy-btn').onclick = buyNowAction;
  document.getElementById('mobile-buy-btn').onclick = buyNowAction;
  document.getElementById('desktop-add-btn').onclick = addToCartAction;
  document.getElementById('mobile-add-btn').onclick = addToCartAction;

  // ==============================================
  // DYNAMIC RELATED PRODUCTS ("You May Also Like")
  // ==============================================
  const relatedSectionEl = document.getElementById('related-products-section');
  const relatedGridEl = document.getElementById('related-products-grid');

  if (relatedSectionEl && relatedGridEl) {
    // Find matching category items, excluding active product
    let related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category);
    
    // If not enough related products, fill up with other popular items
    if (related.length < 6) {
      const extra = PRODUCTS.filter(p => p.id !== product.id && p.category !== product.category && !related.find(r => r.id === p.id));
      related = [...related, ...extra].slice(0, 6);
    } else {
      related = related.slice(0, 6);
    }

    if (related.length > 0) {
      relatedSectionEl.classList.remove('hidden');
      relatedGridEl.innerHTML = '';

      related.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm flex flex-col group relative cursor-pointer hover:shadow-md transition-all duration-200';
        card.innerHTML = `
          <!-- Discount Badge -->
          <span class="absolute top-2 left-2 bg-orange-100 text-orange-600 text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
            -${item.discount}%
          </span>
          <!-- Product Image -->
          <div class="h-28 w-full overflow-hidden bg-slate-50 flex items-center justify-center">
            <img src="${item.image}" alt="${item.title}" class="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300">
          </div>
          <!-- Info Details -->
          <div class="p-2.5 flex flex-col flex-grow">
            <h4 class="text-[10px] sm:text-xs font-semibold text-slate-800 line-clamp-2 h-7 sm:h-8 leading-tight mb-1.5 group-hover:text-orange-500 transition-colors">
              ${item.title}
            </h4>
            <div class="flex items-center gap-1 mb-1.5">
              <i class="fa-solid fa-star text-[9px] text-amber-400"></i>
              <span class="text-[9px] font-bold text-slate-600">${item.rating}</span>
            </div>
            <div class="mt-auto pt-1 flex items-baseline justify-between">
              <div>
                <div class="text-orange-500 font-bold text-xs sm:text-sm">৳${item.price}</div>
                <div class="text-[9px] text-slate-400 line-through">৳${item.originalPrice}</div>
              </div>
              <button onclick="event.stopPropagation(); handleAddToCart('${item.id}')" class="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-orange-50 hover:bg-orange-500 hover:text-white flex items-center justify-center text-orange-500 transition-all shadow-sm">
                <i class="fa-solid fa-cart-plus text-[10px]"></i>
              </button>
            </div>
          </div>
        `;
        
        card.onclick = () => {
          window.location.href = `product-details.html?id=${item.id}`;
        };
        relatedGridEl.appendChild(card);
      });
    } else {
      relatedSectionEl.classList.add('hidden');
    }
  }

  // Initialize Ratings & Reviews Section
  initProductReviews(product);
}

// Initialize Product Ratings & Reviews
function initProductReviews(product) {
  const reviewsSection = document.getElementById('product-reviews-section');
  if (!reviewsSection || !product) return;
  reviewsSection.classList.remove('hidden');

  const rawId = String(product.rawId || product.id).replace('db_', '');
  const storageKey = `ABREXA_REVIEWS_${rawId}`;
  
  // Also check legacy storage keys
  let reviews = JSON.parse(localStorage.getItem(storageKey));
  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    const legacyReviews = JSON.parse(localStorage.getItem(`ABREXA_REVIEWS_db_${rawId}`)) || JSON.parse(localStorage.getItem(`ABREXA_REVIEWS_${product.id}`));
    if (Array.isArray(legacyReviews) && legacyReviews.length > 0) {
      reviews = legacyReviews;
    }
  }

  if (!reviews || reviews.length === 0) {
    // Initial default demo reviews
    reviews = [
      {
        id: 'rev_1',
        name: 'Tanvir Hossain',
        rating: 5,
        title: 'Authentic Product & Fast Delivery!',
        comment: `Excellent product quality from seller "${product.seller || 'Abrexa Official Store'}". Received in original packaging within 2 days. Highly recommended!`,
        date: '2026-07-28',
        verified: true
      },
      {
        id: 'rev_2',
        name: 'Sharmin Akter',
        rating: 4.5,
        title: 'Very Good Product',
        comment: 'Working great so far. Seller responded to my messages quickly and packaged it carefully.',
        date: '2026-07-20',
        verified: true
      }
    ];
    localStorage.setItem(storageKey, JSON.stringify(reviews));
  } else {
    // Sanitize any existing reviews: If FORHAD's review was bad/low quality, adjust rating to 1 if it defaulted to 5
    let modified = false;
    reviews.forEach(r => {
      if ((r.title && r.title.toUpperCase().includes('BAD')) || (r.comment && r.comment.toUpperCase().includes('LOW QUALITY'))) {
        if (r.rating > 2) {
          r.rating = 1.0;
          modified = true;
        }
      }
    });
    if (modified) {
      localStorage.setItem(storageKey, JSON.stringify(reviews));
    }
  }

  // Calculate live dynamic breakdown metrics
  const totalCount = reviews.length;
  const sumRatings = reviews.reduce((acc, r) => acc + (parseFloat(r.rating) || 5), 0);
  const avgRating = totalCount > 0 ? (sumRatings / totalCount).toFixed(1) : '5.0';

  // Count by star tiers
  const count5 = reviews.filter(r => Math.round(parseFloat(r.rating)) === 5).length;
  const count4 = reviews.filter(r => Math.round(parseFloat(r.rating)) === 4).length;
  const count3 = reviews.filter(r => Math.round(parseFloat(r.rating)) === 3).length;
  const count2 = reviews.filter(r => Math.round(parseFloat(r.rating)) === 2).length;
  const count1 = reviews.filter(r => Math.round(parseFloat(r.rating)) <= 1).length;

  const pct5 = totalCount > 0 ? Math.round((count5 / totalCount) * 100) : 0;
  const pct4 = totalCount > 0 ? Math.round((count4 / totalCount) * 100) : 0;
  const pct3 = totalCount > 0 ? Math.round((count3 / totalCount) * 100) : 0;
  const pct2 = totalCount > 0 ? Math.round((count2 / totalCount) * 100) : 0;
  const pct1 = totalCount > 0 ? Math.round((count1 / totalCount) * 100) : 0;

  // Update Dynamic Breakdown Progress Bars
  const setBar = (star, pct, count) => {
    const barEl = document.getElementById(`bar-${star}-star`);
    const pctEl = document.getElementById(`percent-${star}-star`);
    if (barEl) barEl.style.width = `${pct}%`;
    if (pctEl) pctEl.textContent = `${pct}% (${count})`;
  };

  setBar(5, pct5, count5);
  setBar(4, pct4, count4);
  setBar(3, pct3, count3);
  setBar(2, pct2, count2);
  setBar(1, pct1, count1);

  // Update Summary Rating Display
  const summaryNum = document.getElementById('summary-rating-num');
  const summaryCount = document.getElementById('summary-reviews-count');
  const summaryStars = document.getElementById('summary-stars-container');

  if (summaryNum) summaryNum.innerText = avgRating;
  if (summaryCount) summaryCount.innerText = `Based on ${totalCount} customer rating${totalCount === 1 ? '' : 's'}`;

  if (summaryStars) {
    const avgNum = parseFloat(avgRating);
    const full = Math.floor(avgNum);
    const half = (avgNum % 1) >= 0.3 && (avgNum % 1) <= 0.8;
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= full) {
        starsHtml += `<i class="fa-solid fa-star"></i>`;
      } else if (i === full + 1 && half) {
        starsHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
      } else {
        starsHtml += `<i class="fa-regular fa-star text-slate-300 dark:text-slate-600"></i>`;
      }
    }
    summaryStars.innerHTML = starsHtml;
  }

  // Update top header rating values
  const mainRatingEl = document.getElementById('detail-rating-val');
  const mobRatingEl = document.getElementById('mobile-detail-rating-val');
  const mainRevEl = document.getElementById('detail-reviews-count');
  const mobRevEl = document.getElementById('mobile-detail-reviews-count');

  if (mainRatingEl) mainRatingEl.innerText = avgRating;
  if (mobRatingEl) mobRatingEl.innerText = avgRating;
  if (mainRevEl) mainRevEl.innerText = `(${totalCount} reviews)`;
  if (mobRevEl) mobRevEl.innerText = `(${totalCount})`;

  // Render Reviews List
  const listContainer = document.getElementById('reviews-list-container');
  if (listContainer) {
    listContainer.innerHTML = reviews.map((rev, idx) => {
      const numRating = parseFloat(rev.rating) || 5;
      const fullStars = Math.floor(numRating);
      const hasHalf = (numRating % 1) >= 0.3;
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          starsHtml += `<i class="fa-solid fa-star text-amber-400"></i>`;
        } else if (i === fullStars + 1 && hasHalf) {
          starsHtml += `<i class="fa-solid fa-star-half-stroke text-amber-400"></i>`;
        } else {
          starsHtml += `<i class="fa-solid fa-star text-slate-200 dark:text-slate-700"></i>`;
        }
      }

      // Star Badge style
      const badgeColor = numRating >= 4 ? 'bg-amber-50 text-amber-600 border-amber-200' : (numRating >= 3 ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-rose-50 text-rose-600 border-rose-200');

      return `
        <div class="bg-slate-50/80 dark:bg-slate-800/40 p-4 sm:p-5 rounded-2xl border border-slate-150 dark:border-slate-800 space-y-2.5 transition-all hover:shadow-xs relative group">
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 font-extrabold flex items-center justify-center text-xs uppercase shadow-inner">
                ${(rev.name || 'U').charAt(0)}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">${rev.name}</span>
                  ${rev.verified ? `<span class="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[8.5px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1 border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-circle-check"></i> Verified Purchase</span>` : ''}
                </div>
                <div class="text-[10px] text-slate-400">${rev.date || 'Recent'}</div>
              </div>
            </div>
            
            <div class="flex items-center gap-2">
              <div class="flex text-xs gap-0.5">
                ${starsHtml}
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-black border ${badgeColor}">
                ${numRating.toFixed(1)} ★
              </span>
              <button onclick="window.deleteProductReview('${rawId}', ${idx})" class="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-500 p-1 transition-all" title="Delete Review">
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
          </div>
          
          ${rev.title ? `<h5 class="font-extrabold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">${rev.title}</h5>` : ''}
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${rev.comment}</p>

          ${rev.reply ? `
            <div class="mt-2 bg-orange-50/70 dark:bg-orange-950/20 border-l-2 border-orange-500 rounded-r-xl p-2.5 text-xs">
              <div class="flex items-center gap-1.5 font-bold text-orange-600 dark:text-orange-400 text-[10.5px] mb-0.5">
                <i class="fa-solid fa-store text-[9px]"></i> Seller Response:
              </div>
              <p class="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed italic">"${rev.reply}"</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // Setup Star Rating Picker Event Listeners
  initStarRatingPickerUI();
}

// Interactive Star Rating Picker Handler
function initStarRatingPickerUI() {
  const pickerBtns = document.querySelectorAll('.star-picker-btn');
  const labelEl = document.getElementById('star-rating-label');
  const hiddenValEl = document.getElementById('selected-rating-val');
  if (!pickerBtns.length || !hiddenValEl) return;

  let currentSelectedRating = parseInt(hiddenValEl.value) || 5;

  const labelMap = {
    5: '5.0 / 5 (Excellent / Outstanding 🌟)',
    4: '4.0 / 5 (Very Good / Recommended 🙂)',
    3: '3.0 / 5 (Average / Fair 😐)',
    2: '2.0 / 5 (Poor / Disappointed 🙁)',
    1: '1.0 / 5 (Terrible / Low Quality 😞)'
  };

  function updateStars(val) {
    pickerBtns.forEach((b) => {
      const bVal = parseInt(b.getAttribute('data-value'));
      if (bVal <= val) {
        b.classList.add('text-amber-400');
        b.classList.remove('text-slate-300', 'dark:text-slate-600');
      } else {
        b.classList.remove('text-amber-400');
        b.classList.add('text-slate-300', 'dark:text-slate-600');
      }
    });
    if (labelEl) labelEl.innerText = labelMap[val] || `${val}.0 / 5`;
  }

  updateStars(currentSelectedRating);

  pickerBtns.forEach(btn => {
    btn.onmouseenter = () => {
      const hoverVal = parseInt(btn.getAttribute('data-value'));
      updateStars(hoverVal);
    };

    btn.onmouseleave = () => {
      updateStars(currentSelectedRating);
    };

    btn.onclick = (e) => {
      e.preventDefault();
      const val = parseInt(btn.getAttribute('data-value'));
      currentSelectedRating = val;
      hiddenValEl.value = val;
      updateStars(val);
    };
  });
}

// Global function to handle user review submission
window.handleReviewSubmit = function(e) {
  e.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  let product = PRODUCTS.find(p => p.id == productId || p.id === 'db_' + productId || p.rawId == productId || String(p.id).replace('db_', '') === String(productId).replace('db_', ''));
  if (!product) {
    product = { id: productId, rawId: productId, seller: 'ABREXA Merchant', title: `Product #${productId}` };
  }

  const rawId = String(product.rawId || product.id).replace('db_', '');
  const ratingInput = document.getElementById('selected-rating-val');
  const ratingVal = ratingInput ? (parseFloat(ratingInput.value) || 5) : 5;
  const nameVal = document.getElementById('reviewer-name-input').value.trim();
  const titleVal = document.getElementById('review-title-input').value.trim();
  const commentVal = document.getElementById('review-comment-input').value.trim();

  if (!nameVal || !commentVal) {
    alert('Please enter your name and review details.');
    return;
  }

  const storageKey = `ABREXA_REVIEWS_${rawId}`;
  let reviews = JSON.parse(localStorage.getItem(storageKey)) || [];

  const newReview = {
    id: `rev_${Date.now()}`,
    name: nameVal,
    rating: ratingVal,
    title: titleVal || (ratingVal >= 4 ? 'Good Quality Product' : (ratingVal <= 2 ? 'Disappointed with Product' : 'Average Experience')),
    comment: commentVal,
    date: new Date().toISOString().split('T')[0],
    verified: true,
    reply: null
  };

  reviews.unshift(newReview);
  localStorage.setItem(storageKey, JSON.stringify(reviews));
  // Synchronize alternative key
  localStorage.setItem(`ABREXA_REVIEWS_db_${rawId}`, JSON.stringify(reviews));

  // Sync to Seller Dashboard
  try {
    let sReviews = JSON.parse(localStorage.getItem('seller_reviews')) || [];
    sReviews.unshift({
      id: newReview.id,
      productId: rawId,
      productTitle: product.title || `Product #${rawId}`,
      productImg: product.image || '',
      name: nameVal,
      rating: ratingVal,
      title: newReview.title,
      comment: commentVal,
      date: newReview.date,
      reply: null
    });
    localStorage.setItem('seller_reviews', JSON.stringify(sReviews));
  } catch(e) {}

  // Hide form & reset
  document.getElementById('write-review-card').classList.add('hidden');
  document.getElementById('review-submission-form').reset();
  if (ratingInput) ratingInput.value = '5';

  // Re-render
  initProductReviews(product);

  // Show Toast Confirmation
  const toast = document.getElementById('app-toast');
  if (toast) {
    toast.innerText = `⭐ Your ${ratingVal}★ rating & review have been published!`;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
    }, 4000);
  }
};

// Global function to delete a review
window.deleteProductReview = function(rawId, index) {
  if (!confirm('Are you sure you want to delete this review?')) return;
  const storageKey = `ABREXA_REVIEWS_${rawId}`;
  let reviews = JSON.parse(localStorage.getItem(storageKey)) || [];
  if (reviews.length > index) {
    const deletedRev = reviews[index];
    reviews.splice(index, 1);
    localStorage.setItem(storageKey, JSON.stringify(reviews));
    localStorage.setItem(`ABREXA_REVIEWS_db_${rawId}`, JSON.stringify(reviews));

    // Also remove from seller_reviews
    try {
      let sReviews = JSON.parse(localStorage.getItem('seller_reviews')) || [];
      sReviews = sReviews.filter(sr => sr.id !== deletedRev.id && !(sr.name === deletedRev.name && sr.comment === deletedRev.comment));
      localStorage.setItem('seller_reviews', JSON.stringify(sReviews));
    } catch(e) {}
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = PRODUCTS.find(p => p.id == productId || p.id === 'db_' + productId || p.rawId == productId || String(p.id).replace('db_', '') === String(productId).replace('db_', ''));
    if (product) {
      initProductReviews(product);
    } else {
      initProductReviews({ id: rawId, rawId: rawId });
    }
  }
};

// Update shopping cart count badges on DOM elements
function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadges.forEach(badge => {
    badge.innerText = count;
    if (count > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

function showToast(message) {
  const toast = document.getElementById('app-toast');
  if (!toast) return;

  toast.innerText = message;
  toast.classList.remove('opacity-0', 'translate-y-[-10px]');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-[-10px]');
  }, 2500);
}

// Bind Category click shortcuts on Home Page
function setupHomeCategoriesClick() {
  const items = document.querySelectorAll('.home-quick-link');
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = item.getAttribute('data-category');
      if (targetCat) {
        searchQuery = targetCat.toLowerCase();
        const desktopSearch = document.getElementById('desktop-search-input');
        const mobileSearch = document.getElementById('header-search-input');
        if (desktopSearch) desktopSearch.value = targetCat;
        if (mobileSearch) mobileSearch.value = targetCat;
        renderProducts();
        
        const pGrid = document.getElementById('just-for-you-products');
        if (pGrid) {
          pGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });

  // Check if a search filter redirect was triggered
  const savedSearch = localStorage.getItem('abrexa_search_trigger');
  if (savedSearch !== null && isHomePage(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))) {
    searchQuery = savedSearch.toLowerCase();
    const desktopSearch = document.getElementById('desktop-search-input');
    const mobileSearch = document.getElementById('header-search-input');
    if (desktopSearch) desktopSearch.value = savedSearch;
    if (mobileSearch) mobileSearch.value = savedSearch;
    renderProducts();
    localStorage.removeItem('abrexa_search_trigger');
  }
}

// Global handlers for Amazon-style categories on index.html
window.handleCategorySearch = (e, searchTerm, categoryIndex) => {
  e.preventDefault();
  if (categoryIndex !== undefined && categoryIndex !== null) {
    localStorage.setItem('abrexa_category_idx', categoryIndex);
    if (searchTerm) {
      localStorage.setItem('abrexa_search_trigger', searchTerm);
    }
    window.location.href = 'categories.html';
  } else if (searchTerm) {
    const path = window.location.pathname;
    const pageName = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
    if (isHomePage(pageName)) {
      searchQuery = searchTerm.toLowerCase();
      const desktopSearch = document.getElementById('desktop-search-input');
      const mobileSearch = document.getElementById('header-search-input');
      if (desktopSearch) desktopSearch.value = searchTerm;
      if (mobileSearch) mobileSearch.value = searchTerm;
      renderProducts();
      
      const pGrid = document.getElementById('just-for-you-products');
      if (pGrid) {
        pGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      localStorage.setItem('abrexa_search_trigger', searchTerm);
      window.location.href = 'index.html';
    }
  }
};

window.handleCategoryRedirect = (e, categoryIndex) => {
  e.preventDefault();
  localStorage.setItem('abrexa_category_idx', categoryIndex);
  window.location.href = 'categories.html';
};

// ==============================================
// DYNAMIC CUSTOMER SUPPORT & SELLER CHAT MODAL
// ==============================================
const CHAT_CHANNELS = {
  support: {
    title: "ABREXA Support Bot",
    subtitle: "Online • Official Help Assistant",
    avatar: "images/logo.png",
    statusColor: "bg-emerald-500",
    welcome: "Hi! 👋 Welcome to ABREXA Official Support. How can we help you today?"
  },
  unilever: {
    title: "Unilever Store Representative",
    subtitle: "Typically replies in minutes",
    avatar: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=100&auto=format&fit=crop&q=80",
    statusColor: "bg-emerald-500",
    welcome: "Hello! Welcome to the Unilever Official Store customer care. Ask us anything about our beauty products, cosmetics, or shipping queries! 🧴"
  },
  gadgets: {
    title: "Gadget Zone Support",
    subtitle: "Online 1h ago • Seller Help",
    avatar: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&auto=format&fit=crop&q=80",
    statusColor: "bg-amber-500",
    welcome: "Hi there! Welcome to Gadget Zone BD support. Let us know if you have questions about neckbands, stabilizers, chargers, or warranties! 🎧"
  },
  apex: {
    title: "Apex Shoes Seller Support",
    subtitle: "Online • Live Fashion Agent",
    avatar: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&auto=format&fit=crop&q=80",
    statusColor: "bg-emerald-500",
    welcome: "Hi! Welcome to Apex Footwear support. Ask us about sizing charts, shoe fits, or pricing! 👟"
  }
};

let currentChatTarget = 'support';
let chatHistories = JSON.parse(localStorage.getItem('abrexa_chat_histories') || '{}');

window.openStoreLiveChat = function(customStoreName) {
  const urlParams = new URLSearchParams(window.location.search);
  let storeQuery = (customStoreName || urlParams.get('store') || urlParams.get('seller') || '').trim();

  if (!storeQuery) {
    const storeEl = document.getElementById('detail-store-name') || document.getElementById('desktop-detail-store-name');
    if (storeEl) storeQuery = storeEl.innerText.trim();
  }

  if (!storeQuery) {
    storeQuery = localStorage.getItem('seller_shop_name') || 'ABREXA Official Store';
  }

  const storeKey = storeQuery.toLowerCase();
  let targetChannel = 'support';

  if (storeKey.includes('unilever')) {
    targetChannel = 'unilever';
  } else if (storeKey.includes('gadget')) {
    targetChannel = 'gadgets';
  } else if (storeKey.includes('apex')) {
    targetChannel = 'apex';
  } else {
    targetChannel = 'seller_store';
    CHAT_CHANNELS['seller_store'] = {
      title: storeQuery,
      subtitle: "Online • Verified Seller Store Support",
      avatar: "images/logo.png",
      storeName: storeQuery,
      statusColor: "bg-emerald-500",
      welcome: `Hello! 👋 Welcome to ${storeQuery} store support. How can we help you today with your order or product inquiries?`
    };
  }

  if (window.openChatChannel) {
    window.openChatChannel(targetChannel);
  }
};

window.toggleChatWindow = (e) => {
  if (e) e.preventDefault();
  let modal = document.getElementById('abrexa-chat-modal');
  if (!modal) {
    initChatSupport();
    modal = document.getElementById('abrexa-chat-modal');
  }
  if (!modal) return;

  const isHidden = modal.classList.contains('translate-y-full');
  if (isHidden) {
    window.goBackToChatList();
    modal.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
    modal.classList.add('translate-y-0', 'opacity-100');
  } else {
    modal.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
    modal.classList.remove('translate-y-0', 'opacity-100');
  }
};

window.openChatChannel = (channelId) => {
  let modal = document.getElementById('abrexa-chat-modal');
  if (!modal) {
    initChatSupport();
    modal = document.getElementById('abrexa-chat-modal');
  }
  if (modal && modal.classList.contains('translate-y-full')) {
    modal.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
    modal.classList.add('translate-y-0', 'opacity-100');
  }

  currentChatTarget = channelId || 'support';
  const channel = CHAT_CHANNELS[currentChatTarget] || CHAT_CHANNELS.support;

  // Update Header details
  const headerAvatar = document.getElementById('chat-header-avatar');
  const headerStatus = document.getElementById('chat-header-status');
  const headerTitle = document.getElementById('chat-header-title');
  const headerSubtitle = document.getElementById('chat-header-subtitle');

  if (headerAvatar) headerAvatar.src = channel.avatar;
  if (headerStatus) {
    headerStatus.className = `absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${channel.statusColor}`;
  }
  if (headerTitle) headerTitle.innerText = channel.title;
  if (headerSubtitle) headerSubtitle.innerText = channel.subtitle;

  // Clear message container and load history
  const msgContainer = document.getElementById('chat-messages-container');
  if (msgContainer) {
    msgContainer.innerHTML = '';
    chatHistories = JSON.parse(localStorage.getItem('abrexa_chat_histories') || '{}');
    const history = chatHistories[currentChatTarget] || [];
    if (history.length === 0) {
      appendChatMessage(channel.welcome, false);
    } else {
      history.forEach(msg => {
        appendChatMessageRaw(msg.text, msg.isUser);
      });
    }
  }

  // Switch views
  const listView = document.getElementById('chat-list-view');
  const msgView = document.getElementById('chat-messages-view');
  if (listView) listView.classList.add('hidden');
  if (msgView) {
    msgView.classList.remove('hidden');
    msgView.classList.add('flex');
  }

  // Focus input
  const input = document.getElementById('chat-input-box');
  if (input) setTimeout(() => input.focus(), 150);
};

window.goBackToChatList = (e) => {
  if (e) e.preventDefault();
  
  // Switch views
  const listView = document.getElementById('chat-list-view');
  const msgView = document.getElementById('chat-messages-view');
  if (listView) listView.classList.remove('hidden');
  if (msgView) msgView.classList.add('hidden');
};

function initChatSupport() {
  if (document.getElementById('abrexa-chat-modal')) return;

  const currentStore = localStorage.getItem('seller_shop_name') || 'Fundeddnyx';

  const chatMarkup = `
    <div id="abrexa-chat-modal" class="fixed bottom-14 inset-x-0 lg:bottom-4 lg:right-4 lg:left-auto lg:w-96 bg-slate-50 border border-slate-200 z-50 rounded-t-2xl lg:rounded-2xl shadow-2xl flex flex-col h-[420px] overflow-hidden transition-all duration-300 transform translate-y-full opacity-0 pointer-events-none">
      
      <!-- ==================== inbox list view ==================== -->
      <div id="chat-list-view" class="flex flex-col h-full min-h-0">
        <!-- Header -->
        <div class="gradient-orange px-4 py-3 text-white flex items-center justify-between rounded-t-2xl shrink-0 shadow">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-comments text-lg animate-bounce"></i>
            <div>
              <h4 class="text-[12px] font-bold leading-tight">ABREXA Inbox</h4>
              <p class="text-[9px] text-rose-100 leading-none">Chats with Official Support & Stores</p>
            </div>
          </div>
          <button onclick="toggleChatWindow(event)" class="text-white hover:text-rose-100 p-1">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
        
        <!-- Search bar inside Inbox -->
        <div class="p-2.5 bg-white border-b border-slate-100 shrink-0">
          <div class="bg-slate-100 rounded-full flex items-center px-3 py-1.5 border border-slate-200 shadow-inner">
            <i class="fa-solid fa-magnifying-glass text-slate-400 text-[10px] mr-2"></i>
            <input type="text" placeholder="Search chats, sellers..." class="bg-transparent border-none text-[10px] focus:outline-none w-full text-slate-700">
          </div>
        </div>

        <!-- Chat Channels List -->
        <div class="flex-grow p-2.5 overflow-y-auto no-scrollbar flex flex-col gap-1.5">
          <!-- Channel 1: Active Seller Store -->
          <div onclick="openChatChannel('seller_store')" class="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50/80 via-white to-white rounded-xl border-2 border-orange-200 hover:border-orange-300 shadow-sm cursor-pointer transition-all relative overflow-hidden group">
            <div class="flex items-center gap-3 relative z-10">
              <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-rose-500 text-white font-black flex items-center justify-center shrink-0 shadow-sm text-sm uppercase">
                ${currentStore.charAt(0)}
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse"></span>
              </div>
              <div class="text-left">
                <h5 class="text-[11.5px] font-extrabold text-slate-900 leading-tight flex items-center gap-1.5">
                  ${currentStore}
                  <span class="bg-emerald-600 text-white text-[7px] font-black uppercase px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow-sm">
                    <i class="fa-solid fa-check text-[6px]"></i> Seller
                  </span>
                </h5>
                <p class="text-[9.5px] text-orange-600/90 font-semibold leading-normal mt-0.5 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-ping"></span>
                  Online • Live Store Chat
                </p>
              </div>
            </div>
            <i class="fa-solid fa-chevron-right text-[10px] text-orange-500 font-bold relative z-10 transition-transform group-hover:translate-x-0.5"></i>
          </div>

          <!-- Channel 2: Official Support -->
          <div onclick="openChatChannel('support')" class="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 hover:border-rose-200 hover:shadow-sm cursor-pointer transition-all">
            <div class="flex items-center gap-3">
              <div class="relative w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center shrink-0 overflow-hidden border border-rose-200 p-0.5">
                <img src="images/logo.png" alt="Official Support" class="w-full h-full object-contain">
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white"></span>
              </div>
              <div class="text-left">
                <h5 class="text-[11px] font-bold text-slate-800 leading-tight flex items-center gap-1">ABREXA Support Bot <span class="bg-rose-100 text-rose-600 text-[8px] font-extrabold px-1 rounded">24/7</span></h5>
                <p class="text-[9.5px] text-slate-400 leading-normal mt-0.5">Platform help, returns & guarantees</p>
              </div>
            </div>
            <i class="fa-solid fa-chevron-right text-[9px] text-slate-350"></i>
          </div>

          <!-- Channel 3: Unilever Store -->
          <div onclick="openChatChannel('unilever')" class="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 hover:border-rose-200 hover:shadow-sm cursor-pointer transition-all">
            <div class="flex items-center gap-3">
              <div class="relative w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0 overflow-hidden border border-blue-200">
                <img src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=100&auto=format&fit=crop&q=80" alt="Unilever Store" class="w-full h-full object-cover">
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white"></span>
              </div>
              <div class="text-left">
                <h5 class="text-[11px] font-bold text-slate-800 leading-tight flex items-center gap-1">Unilever Official Store <span class="bg-rose-100 text-rose-600 text-[8px] font-extrabold px-1 rounded">Seller</span></h5>
                <p class="text-[9.5px] text-slate-400 leading-normal mt-0.5">Typically replies in minutes</p>
              </div>
            </div>
            <i class="fa-solid fa-chevron-right text-[9px] text-slate-350"></i>
          </div>

          <!-- Channel 4: Gadget Zone -->
          <div onclick="openChatChannel('gadgets')" class="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 hover:border-rose-200 hover:shadow-sm cursor-pointer transition-all">
            <div class="flex items-center gap-3">
              <div class="relative w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 overflow-hidden border border-indigo-200">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&auto=format&fit=crop&q=80" alt="Gadget Zone BD" class="w-full h-full object-cover">
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-amber-500 border border-white"></span>
              </div>
              <div class="text-left">
                <h5 class="text-[11px] font-bold text-slate-800 leading-tight flex items-center gap-1">Gadget Zone BD <span class="bg-rose-100 text-rose-600 text-[8px] font-extrabold px-1 rounded">Seller</span></h5>
                <p class="text-[9.5px] text-slate-400 leading-normal mt-0.5">Online 1h ago • Devices & Accessories</p>
              </div>
            </div>
            <i class="fa-solid fa-chevron-right text-[9px] text-slate-350"></i>
          </div>
        </div>
      </div>

      <!-- ==================== chat messages view ==================== -->
      <div id="chat-messages-view" class="hidden flex flex-col h-full min-h-0">
        <!-- Header -->
        <div class="gradient-orange px-3.5 py-3 text-white flex items-center justify-between rounded-t-2xl shrink-0 shadow">
          <div class="flex items-center gap-2.5">
            <!-- Back button -->
            <button onclick="goBackToChatList(event)" class="text-white hover:bg-white/10 p-1 rounded-full transition-colors mr-0.5">
              <i class="fa-solid fa-arrow-left text-sm"></i>
            </button>
            <div class="relative w-9 h-9 rounded-full bg-white flex items-center justify-center border border-white/30 overflow-hidden p-0.5">
              <img id="chat-header-avatar" src="images/logo.png" alt="Agent" class="w-full h-full object-contain">
              <span id="chat-header-status" class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white"></span>
            </div>
            <div class="text-left">
              <h4 id="chat-header-title" class="text-[12px] font-bold leading-tight">ABREXA Support Bot</h4>
              <p id="chat-header-subtitle" class="text-[9px] text-rose-100 leading-none">Online • Official Help Assistant</p>
            </div>
          </div>
          <button onclick="toggleChatWindow(event)" class="text-white hover:text-rose-100 p-1">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <!-- Messages Area -->
        <div id="chat-messages-container" class="flex-grow p-4 overflow-y-auto no-scrollbar flex flex-col gap-3 text-[11px] leading-relaxed">
          <!-- Loaded dynamically -->
        </div>

        <!-- Input Area -->
        <div class="p-3 bg-white border-t border-slate-100 flex items-center gap-2.5 shrink-0 rounded-b-2xl">
          <input id="chat-input-box" type="text" placeholder="Type a message..." class="flex-grow bg-slate-100 rounded-full px-4 py-2 text-xs focus:outline-none border border-slate-200 focus:border-rose-400 focus:bg-white text-slate-700 transition-colors">
          <button id="send-chat-btn" class="w-9 h-9 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
            <i class="fa-solid fa-paper-plane text-xs"></i>
          </button>
        </div>
      </div>

    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatMarkup);

  const sendBtn = document.getElementById('send-chat-btn');
  const chatInput = document.getElementById('chat-input-box');

  if (sendBtn && chatInput) {
    const sendMessage = () => {
      const text = chatInput.value.trim();
      if (!text) return;

      appendChatMessage(text, true);
      chatInput.value = '';

      showTypingIndicatorAndReply(text);
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  // Cross-tab real time sync for seller replies
  window.addEventListener('storage', (e) => {
    if (e.key === 'abrexa_chat_histories' || e.key === 'seller_live_chats') {
      try {
        chatHistories = JSON.parse(localStorage.getItem('abrexa_chat_histories') || '{}');
        const history = chatHistories[currentChatTarget] || [];
        const msgContainer = document.getElementById('chat-messages-container');
        if (msgContainer && !document.getElementById('chat-messages-view').classList.contains('hidden')) {
          msgContainer.innerHTML = '';
          history.forEach(msg => appendChatMessageRaw(msg.text, msg.isUser));
        }
      } catch(err) {}
    }
  });
}

function appendChatMessageRaw(text, isUser, isTyping = false) {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  const bubble = document.createElement('div');
  if (isUser) {
    bubble.className = 'bg-rose-500 text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 shadow-sm max-w-[85%] self-end';
    bubble.innerText = text;
  } else {
    bubble.className = 'flex items-start gap-2 max-w-[85%] self-start';
    if (isTyping) {
      bubble.id = 'chat-typing-bubble';
    }
    const channel = CHAT_CHANNELS[currentChatTarget] || CHAT_CHANNELS.support;
    bubble.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center shrink-0 overflow-hidden border border-rose-200">
        <img src="${channel.avatar}" alt="Agent" class="w-full h-full object-cover">
      </div>
      <div class="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-sm text-slate-700 border border-slate-100">
        ${text}
      </div>
    `;
  }

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function appendChatMessage(text, isUser, isTyping = false) {
  appendChatMessageRaw(text, isUser, isTyping);

  // Save to local storage history if it is a real message
  if (!isTyping) {
    if (!chatHistories[currentChatTarget]) {
      chatHistories[currentChatTarget] = [];
    }
    chatHistories[currentChatTarget].push({ text, isUser });
    localStorage.setItem('abrexa_chat_histories', JSON.stringify(chatHistories));

    // Also sync directly into Seller Dashboard live chats queue
    if (isUser && (currentChatTarget === 'seller_store' || currentChatTarget.startsWith('seller_'))) {
      try {
        const custName = (typeof currentUser !== 'undefined' && currentUser && currentUser.name) ? currentUser.name : (localStorage.getItem('abrexa_guest_name') || 'Customer (Product Inquiry)');
        const prodTitle = document.getElementById('detail-title')?.innerText || document.getElementById('mobile-detail-title')?.innerText || 'Product Inquiry';
        let sellerChats = JSON.parse(localStorage.getItem('seller_live_chats') || '[]');
        let chatSession = sellerChats.find(c => c.channelKey === currentChatTarget || c.name === custName);
        
        if (!chatSession) {
          chatSession = {
            key: 'cust_' + Date.now(),
            channelKey: currentChatTarget,
            name: custName,
            product: prodTitle,
            lastMsg: text,
            badge: 1,
            time: 'Just now',
            messages: []
          };
          sellerChats.unshift(chatSession);
        } else {
          chatSession.lastMsg = text;
          chatSession.badge = (chatSession.badge || 0) + 1;
          chatSession.product = prodTitle || chatSession.product;
          chatSession.time = 'Just now';
        }
        chatSession.messages.push({
          sender: 'customer',
          text: text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        localStorage.setItem('seller_live_chats', JSON.stringify(sellerChats));
      } catch(e) {}
    }
  }
}

function showTypingIndicatorAndReply(userMessage) {
  appendChatMessage(`<span class="animate-pulse">Typing...</span>`, false, true);

  setTimeout(() => {
    const typingBubble = document.getElementById('chat-typing-bubble');
    if (typingBubble) typingBubble.remove();

    const channel = CHAT_CHANNELS[currentChatTarget] || CHAT_CHANNELS.support;
    let reply = "Thank you for contacting us. A store representative will reply shortly.";
    const lower = userMessage.toLowerCase();
    
    if (currentChatTarget === 'seller_store' || currentChatTarget.startsWith('seller_')) {
      const storeName = channel.title || localStorage.getItem('seller_shop_name') || 'Store';
      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        reply = `Hello! Welcome to ${storeName} store customer service. How can we help with your order today?`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('discount')) {
        reply = `All our product prices on ${storeName} are 100% authentic with best discounts and instant warranty coverage!`;
      } else if (lower.includes('delivery') || lower.includes('shipping') || lower.includes('when')) {
        reply = `We package and dispatch orders within 24 hours. Delivery inside Dhaka takes 1-2 days via express courier!`;
      } else {
        reply = `Thank you for messaging ${storeName}! Your inquiry has been forwarded to our seller desk in real-time. We are assisting you right now.`;
      }
    }
    else if (currentChatTarget === 'support') {
      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        reply = "Hello there! How can I assist you with your shopping today? 😊";
      } else if (lower.includes('discount') || lower.includes('offer') || lower.includes('promo')) {
        reply = "We have active Summer Carnival deals! Save up to 60% on our flash sale items. You can also use code 'GOLD200' to get ৳200 cashback upon registration.";
      } else if (lower.includes('delivery') || lower.includes('ship') || lower.includes('track')) {
        reply = "For tracking, please sign in and go to your 'Profile' -> 'To Receive' tab. Delivery inside Dhaka takes 24-48 hours!";
      } else if (lower.includes('refund') || lower.includes('return')) {
        reply = "Our policy covers 7-day easy returns if the item is damaged or incorrect. Please open a claim from your Account orders tracker.";
      } else if (lower.includes('price') || lower.includes('cost')) {
        reply = "All our prices are listed in Bangladeshi Taka (৳). We offer the best discounts directly from authorized distributors!";
      } else {
        reply = `Hi ${currentUser ? currentUser.name : 'there'}! I am Sara from Abrexa Support. Thanks for your query! I have passed it to our support ticketing desk. We will message you shortly.`;
      }
    } 
    else if (currentChatTarget === 'unilever') {
      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        reply = "Hello! Thanks for dropping by the Unilever Official Store support desk. Let us know if you need help with shampoo, soaps, cosmetics, or discount codes!";
      } else if (lower.includes('discount') || lower.includes('offer') || lower.includes('promo') || lower.includes('code')) {
        reply = "Yes! You can get an extra 10% off Unilever items using promo code 'UNILEVER10' at checkout.";
      } else if (lower.includes('shampoo') || lower.includes('soap') || lower.includes('skin') || lower.includes('cream')) {
        reply = "Our Sunsilk, Dove, and Vaseline products are currently on 50% discount for the Summer Carnival!";
      } else if (lower.includes('delivery') || lower.includes('ship')) {
        reply = "All Unilever items are shipped from our official Unilever logistics partner. Inside Dhaka takes 24 hours!";
      } else {
        reply = "Unilever Support Bot: Your query has been logged. Our store manager will reply to you in a few minutes.";
      }
    }
    else if (currentChatTarget === 'gadgets') {
      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        reply = "Hi! Welcome to Gadget Zone BD. We deal in authentic smart gadgets, neckbands, and mobile stabilizers. How can we help?";
      } else if (lower.includes('neckband') || lower.includes('earphone') || lower.includes('headphone')) {
        reply = "Our Lenovo Graphene Neckband Earphones feature dual mic noise cancellation and 12h playback. Currently 57% off!";
      } else if (lower.includes('warranty') || lower.includes('guarantee')) {
        reply = "All Gadget Zone electronic products come with a 6-month seller warranty. Keep the invoice and packaging copy to claim.";
      } else if (lower.includes('gimbal') || lower.includes('stabilizer')) {
        reply = "The 3-in-1 Phone Gimbal is one of our best-sellers. It has face tracking and active stabilization. Highly recommended!";
      } else {
        reply = "Gadget Zone Agent: Thanks for your message. We'll check our inventory and get back to you shortly.";
      }
    }
    else if (currentChatTarget === 'apex') {
      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        reply = "Hello! Welcome to Apex Footwear Official Store support. What size or style are you looking for today? 👟";
      } else if (lower.includes('sneaker') || lower.includes('shoe') || lower.includes('canvas')) {
        reply = "Our Casual Canvas Sneaker Shoes are lightweight and durable. We have them in black, gray, and white!";
      } else if (lower.includes('size') || lower.includes('fit') || lower.includes('chart')) {
        reply = "We follow standard UK/EU shoe sizing. If you order size 42, it corresponds to UK size 8. Easy returns are available if the fit isn't right!";
      } else if (lower.includes('discount') || lower.includes('price')) {
        reply = "Select Apex footwear is on 43% discount for a limited time! Prices start at just ৳850.";
      } else {
        reply = "Apex Footwear Support: Your message has been sent to our shop representative. We will reply shortly.";
      }
    }

    appendChatMessage(reply, false);
  }, 1200);
}

// ============================================================================
// SETTINGS MENU, DARK/LIGHT MODE, & BILINGUAL TRANSLATION (ENGLISH/BENGALI)
// ============================================================================

const TRANSLATIONS = {
  en: {
    track_order: "Track Order",
    sign_in_up: "Sign In / Sign Up",
    search_placeholder: "Search in ABREXA (e.g. watch, phone, television...)",
    search_btn: "Search",
    welcome: "Welcome",
    cart: "Cart",
    all_categories: "All Categories",
    home_page: "Home Page",
    abrexa_mall: "ABREXAMall",
    flash_sale: "Flash Sale Offers",
    help_support: "Help & Support",
    save_promo: "Save up to 60% today!",
    save_app: "Save more on App",
    sell_abrexa: "Sell on ABREXA",
    customer_care: "Customer Care",
    help_center: "Help Center",
    how_to_buy: "How to Buy",
    returns_refunds: "Returns & Refunds",
    contact_us: "Contact Us",
    about_abrexa: "About ABREXA",
    careers: "Careers",
    privacy_policy: "Privacy Policy",
    terms_conditions: "Terms & Conditions",
    make_money: "Make Money With Us",
    join_affiliate: "Join Affiliate Program",
    advertise_products: "Advertise Your Products",
    abrexa_shopping: "ABREXA Shopping",
    download_app: "Download our App now to get exclusive discounts, daily flash sales, and free shipping vouchers.",
    google_play: "Google Play",
    app_store: "App Store",
    all_rights_reserved: "© 2026 ABREXA E-Commerce Ltd. All Rights Reserved. Styled like Amazon & Daraz.",
    chat: "Chat",
    account: "Account",
    categories: "Categories",
    settings_title: "Settings Options",
    theme_title: "Appearance / Theme",
    theme_light: "Light Mode",
    theme_dark: "Dark Mode",
    language_title: "Language / ভাষা",
    links_title: "Quick Site Links",
    settings_btn: "Settings",
    become_seller: "Become a Seller"
  },
  bn: {
    track_order: "অর্ডার ট্র্যাক করুন",
    sign_in_up: "লগইন / রেজিস্টার",
    search_placeholder: "ABREXA-তে খুঁজুন (যেমন: ঘড়ি, ফোন, টেলিভিশন...)",
    search_btn: "খুঁজুন",
    welcome: "স্বাগতম",
    cart: "কার্ট",
    all_categories: "সব ক্যাটাগরি",
    home_page: "হোম পেজ",
    abrexa_mall: "ABREXA মল",
    flash_sale: "ফ্ল্যাশ সেল অফার",
    help_support: "সাহায্য ও সাপোর্ট",
    save_promo: "আজই ৬০% পর্যন্ত সাশ্রয় করুন!",
    save_app: "অ্যাপে আরও সাশ্রয় করুন",
    sell_abrexa: "ABREXA-তে বিক্রি করুন",
    customer_care: "গ্রাহক সেবা",
    help_center: "হেল্প সেন্টার",
    how_to_buy: "কিভাবে কিনবেন",
    returns_refunds: "রিটার্ন ও রিফান্ড",
    contact_us: "যোগাযোগ করুন",
    about_abrexa: "ABREXA সম্পর্কে",
    careers: "ক্যারিয়ার",
    privacy_policy: "গোপনীয়তা নীতি",
    terms_conditions: "শর্তাবলী",
    make_money: "আমাদের সাথে আয় করুন",
    join_affiliate: "অ্যাফিলিয়েট প্রোগ্রামে যোগ দিন",
    advertise_products: "আপনার পণ্যের বিজ্ঞাপন দিন",
    abrexa_shopping: "ABREXA শপিং",
    download_app: "এক্সক্লুসিভ ডিসকাউন্ট, দৈনিক ফ্ল্যাশ সেল এবং ফ্রি শিপিং ভাউচার পেতে এখনই আমাদের অ্যাপ ডাউনলোড করুন।",
    google_play: "গুগল প্লে",
    app_store: "অ্যাপ স্টোর",
    all_rights_reserved: "© ২০২৬ ABREXA ই-কমার্স লিমিটেড। সর্বস্বত্ব সংরক্ষিত। আমাজন ও দারাজের আদলে তৈরি।",
    chat: "চ্যাট",
    account: "অ্যাকাউন্ট",
    categories: "ক্যাটাগরি",
    settings_title: "সেটিংস অপশন",
    theme_title: "থিম / থিম পরিবর্তন",
    theme_light: "লাইট মোড",
    theme_dark: "ডার্ক মোড",
    language_title: "ভাষা পরিবর্তন",
    links_title: "কুইক সাইট লিঙ্ক",
    settings_btn: "সেটিংস",
    become_seller: "সেলার হোন"
  }
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-translate-key]').forEach(el => {
    const key = el.getAttribute('data-translate-key');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Handle placeholders
  const desktopSearch = document.getElementById('desktop-search-input');
  if (desktopSearch) {
    desktopSearch.placeholder = TRANSLATIONS[lang].search_placeholder;
  }
  const mobileSearch = document.getElementById('header-search-input');
  if (mobileSearch) {
    mobileSearch.placeholder = TRANSLATIONS[lang].search_placeholder;
  }
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeButtons(theme);
}

function updateThemeButtons(theme) {
  const lightBtn = document.getElementById('theme-light-btn');
  const darkBtn = document.getElementById('theme-dark-btn');
  
  if (lightBtn && darkBtn) {
    if (theme === 'dark') {
      darkBtn.className = 'py-2.5 rounded-xl border border-orange-500 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex flex-col items-center gap-1.5 transition-all font-bold text-xs';
      lightBtn.className = 'py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-400 transition-all font-semibold text-xs';
    } else {
      lightBtn.className = 'py-2.5 rounded-xl border border-orange-500 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex flex-col items-center gap-1.5 transition-all font-bold text-xs';
      darkBtn.className = 'py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-400 transition-all font-semibold text-xs';
    }
  }
}

function updateLanguageButtons(lang) {
  const enBtn = document.getElementById('lang-en-btn');
  const bnBtn = document.getElementById('lang-bn-btn');
  
  if (enBtn && bnBtn) {
    if (lang === 'bn') {
      bnBtn.className = 'py-2.5 rounded-xl border border-orange-500 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex flex-col items-center gap-1.5 transition-all font-bold text-xs';
      enBtn.className = 'py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-400 transition-all font-semibold text-xs';
    } else {
      enBtn.className = 'py-2.5 rounded-xl border border-orange-500 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex flex-col items-center gap-1.5 transition-all font-bold text-xs';
      bnBtn.className = 'py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-400 transition-all font-semibold text-xs';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject settings drawer html
  const container = document.createElement('div');
  container.innerHTML = `
    <!-- Backdrop -->
    <div id="settings-drawer-backdrop" class="fixed inset-0 bg-black/50 z-[100] opacity-0 pointer-events-none transition-opacity duration-300"></div>
    
    <!-- Drawer -->
    <div id="settings-drawer" class="fixed top-0 left-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl z-[101] transform -translate-x-full transition-transform duration-300 flex flex-col border-r border-slate-100 dark:border-slate-800">
      <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
        <h3 class="text-sm font-extrabold text-slate-800 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-sliders text-orange-500"></i>
          <span data-translate-key="settings_title">Settings Options</span>
        </h3>
        <button id="close-settings-drawer-btn" class="w-8 h-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-colors focus:outline-none">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>
      
      <div class="p-5 flex flex-col gap-6 flex-grow overflow-y-auto">
        <!-- Theme selection -->
        <div class="flex flex-col gap-2">
          <h4 class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest" data-translate-key="theme_title">Appearance / Theme</h4>
          <div class="grid grid-cols-2 gap-2 mt-1">
            <button id="theme-light-btn" class="py-2.5 rounded-xl border flex flex-col items-center gap-1.5 focus:outline-none">
              <i class="fa-solid fa-sun text-sm"></i>
              <span data-translate-key="theme_light">Light Mode</span>
            </button>
            <button id="theme-dark-btn" class="py-2.5 rounded-xl border flex flex-col items-center gap-1.5 focus:outline-none">
              <i class="fa-solid fa-moon text-sm"></i>
              <span data-translate-key="theme_dark">Dark Mode</span>
            </button>
          </div>
        </div>
        
        <!-- Language selection -->
        <div class="flex flex-col gap-2">
          <h4 class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest" data-translate-key="language_title">Language / ভাষা</h4>
          <div class="grid grid-cols-2 gap-2 mt-1">
            <button id="lang-en-btn" class="py-2.5 rounded-xl border flex flex-col items-center gap-1 focus:outline-none">
              <span class="text-sm font-extrabold">EN</span>
              <span class="text-[10px]">English</span>
            </button>
            <button id="lang-bn-btn" class="py-2.5 rounded-xl border flex flex-col items-center gap-1 focus:outline-none">
              <span class="text-sm font-extrabold">বাংলা</span>
              <span class="text-[10px]">Bengali</span>
            </button>
          </div>
        </div>
        
        <!-- Quick links -->
        <div class="flex flex-col gap-2 border-t border-slate-100 dark:border-slate-800 pt-5">
          <h4 class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest" data-translate-key="links_title">Quick Site Links</h4>
          <ul class="flex flex-col gap-1 mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <li>
              <a href="index.html" class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <i class="fa-solid fa-house text-sm"></i>
                <span data-translate-key="home_page">Home Page</span>
              </a>
            </li>
            <li>
              <a href="categories.html" class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <i class="fa-solid fa-list-ul text-sm"></i>
                <span data-translate-key="all_categories">All Categories</span>
              </a>
            </li>
            <li>
              <a href="cart.html" class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <i class="fa-solid fa-cart-shopping text-sm"></i>
                <span data-translate-key="cart">Shopping Cart</span>
              </a>
            </li>
            <li>
              <a href="account.html" class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <i class="fa-solid fa-user text-sm"></i>
                <span data-translate-key="sign_in_up">Sign In / Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="p-4 border-t border-slate-100 dark:border-slate-800 text-center text-[10px] text-slate-400 dark:text-slate-500 font-semibold bg-slate-50 dark:bg-slate-800/30">
        ABREXA E-Commerce Settings
      </div>
    </div>
  `;
  while (container.firstChild) {
    document.body.appendChild(container.firstChild);
  }

  // 2. Setup theme and lang triggers from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  const savedLang = localStorage.getItem('lang') || 'en';
  updateLanguageButtons(savedLang);
  applyTranslations(savedLang);

  // 3. Inject settings hamburger triggers on mobile and desktop
  // Target mobile search rows (index, login, account, checkout)
  const searchRow = document.querySelector('header.lg\\:hidden .gradient-orange');
  if (searchRow) {
    const btn = document.createElement('button');
    btn.className = 'mobile-hamburger-btn text-white hover:text-orange-100 transition-colors focus:outline-none pr-1 shrink-0';
    btn.innerHTML = '<i class="fa-solid fa-bars text-lg"></i>';
    searchRow.insertBefore(btn, searchRow.firstChild);
  }

  // Target mobile headers with back buttons (cart, categories, product-details)
  const mobileHeaderDiv = document.querySelector('header.lg\\:hidden .flex.justify-between, header.lg\\:hidden .flex.items-center.justify-between, .relative .bg-white .flex.items-center.justify-between');
  if (mobileHeaderDiv && !searchRow) {
    const btn = document.createElement('button');
    btn.className = 'mobile-hamburger-btn text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none pl-2 shrink-0';
    btn.innerHTML = '<i class="fa-solid fa-bars text-lg"></i>';
    const actions = mobileHeaderDiv.querySelector('.flex.items-center.gap-2, .flex.items-center.gap-3') || mobileHeaderDiv;
    if (actions !== mobileHeaderDiv) {
      actions.appendChild(btn);
    } else {
      mobileHeaderDiv.insertBefore(btn, mobileHeaderDiv.firstChild);
    }
  }

  // Target desktop Top Tiny Bar
  const topBarRight = document.querySelector('header.hidden.lg\\:block .max-w-7xl.mx-auto.px-4.flex.justify-between > div:last-child');
  if (topBarRight) {
    const separator = document.createElement('span');
    separator.className = 'text-slate-300 dark:text-slate-700 select-none mx-1';
    separator.textContent = '|';
    
    const btn = document.createElement('button');
    btn.className = 'desktop-hamburger-btn hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-200 flex items-center gap-1.5 font-semibold focus:outline-none text-[10.5px] text-slate-600 dark:text-slate-300 group/settingslink';
    btn.innerHTML = '<i class="fa-solid fa-sliders text-[10px] text-orange-500/70 group-hover/settingslink:text-orange-500 group-hover/settingslink:scale-110 transition-all duration-200"></i> <span data-translate-key="settings_btn">Settings</span>';
    
    topBarRight.appendChild(separator);
    topBarRight.appendChild(btn);
  }

  // 4. Open/Close side drawer logic
  const drawer = document.getElementById('settings-drawer');
  const backdrop = document.getElementById('settings-drawer-backdrop');
  
  const openDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.remove('-translate-x-full');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
    }
  };

  const closeDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.add('-translate-x-full');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
    }
  };

  // Add click handlers dynamically to the hamburger buttons
  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-hamburger-btn') || e.target.closest('.desktop-hamburger-btn')) {
      openDrawer();
    }
  });

  const closeBtn = document.getElementById('close-settings-drawer-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // 5. Theme and Language selection click handlers
  const lightBtn = document.getElementById('theme-light-btn');
  const darkBtn = document.getElementById('theme-dark-btn');
  const enBtn = document.getElementById('lang-en-btn');
  const bnBtn = document.getElementById('lang-bn-btn');

  if (lightBtn) {
    lightBtn.addEventListener('click', () => {
      localStorage.setItem('theme', 'light');
      applyTheme('light');
    });
  }

  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      localStorage.setItem('theme', 'dark');
      applyTheme('dark');
    });
  }

  if (enBtn) {
    enBtn.addEventListener('click', () => {
      localStorage.setItem('lang', 'en');
      updateLanguageButtons('en');
      applyTranslations('en');
    });
  }

  if (bnBtn) {
    bnBtn.addEventListener('click', () => {
      localStorage.setItem('lang', 'bn');
      updateLanguageButtons('bn');
      applyTranslations('bn');
    });
  }

  // Initialize ABREXA Lucky Wheel System
  initLuckyWheel();
});

// ==========================================
// ABREXA LUCKY WHEEL & SPIN-WIN SYSTEM
// ==========================================

const LUCKY_PRIZES = [
  { label: '৳10 OFF', amount: 10, code: 'ABREXA-GIFT-10', minSpend: 100, color: '#ef4444', text: '#ffffff' },
  { label: '৳50 OFF', amount: 50, code: 'ABREXA-GIFT-50', minSpend: 300, color: '#f59e0b', text: '#ffffff' },
  { label: '৳100 OFF', amount: 100, code: 'ABREXA-GIFT-100', minSpend: 500, color: '#10b981', text: '#ffffff' },
  { label: '৳250 OFF', amount: 250, code: 'ABREXA-GIFT-250', minSpend: 1000, color: '#6366f1', text: '#ffffff' },
  { label: '৳500 OFF', amount: 500, code: 'ABREXA-GIFT-500', minSpend: 1500, color: '#ec4899', text: '#ffffff' },
  { label: '৳1000 OFF', amount: 1000, code: 'ABREXA-GIFT-1000', minSpend: 2500, color: '#8b5cf6', text: '#ffffff' },
  { label: '৳2500 OFF', amount: 2500, code: 'ABREXA-GIFT-2500', minSpend: 5000, color: '#06b6d4', text: '#ffffff' },
  { label: '৳5000 GRAND', amount: 5000, code: 'ABREXA-GIFT-5000', minSpend: 8000, color: '#f43f5e', text: '#ffffff' }
];

let wheelState = {
  currentAngle: 0,
  isSpinning: false,
  soundEnabled: true,
  audioCtx: null
};

function playWheelSound(type) {
  if (!wheelState.soundEnabled) return;
  try {
    if (!wheelState.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) wheelState.audioCtx = new AudioContext();
    }
    if (wheelState.audioCtx && wheelState.audioCtx.state === 'suspended') {
      wheelState.audioCtx.resume();
    }
    const ctx = wheelState.audioCtx;
    if (!ctx) return;

    if (type === 'tick') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } else if (type === 'win') {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.12);
        gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.45);
      });
    }
  } catch (e) {
    console.warn("Audio synthesizer error", e);
  }
}

function adjustColorBrightness(hex, percent) {
  let num = parseInt(hex.replace('#', ''), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255?R<0?0:R:255)*0x10000 + (G<255?G<0?0:G:255)*0x100 + (B<255?B<0?0:B:255)).toString(16).slice(1);
}

function drawLuckyWheel(angle = 0) {
  const canvas = document.getElementById('lucky-wheel-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(cx, cy) - 18;
  const numSlices = LUCKY_PRIZES.length;
  const sliceAngle = (2 * Math.PI) / numSlices;

  ctx.clearRect(0, 0, width, height);

  // Outer Gold Rim
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 10, 0, 2 * Math.PI);
  const goldGrad = ctx.createLinearGradient(0, 0, width, height);
  goldGrad.addColorStop(0, '#fef08a');
  goldGrad.addColorStop(0.5, '#f59e0b');
  goldGrad.addColorStop(1, '#78350f');
  ctx.fillStyle = goldGrad;
  ctx.fill();
  ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
  ctx.shadowBlur = 12;
  ctx.restore();

  // LED lights on outer rim
  const numLeds = 16;
  const ledBlinkState = Math.floor(Date.now() / 250) % 2;
  for (let i = 0; i < numLeds; i++) {
    const ledAngle = (i * (2 * Math.PI)) / numLeds;
    const lx = cx + (radius + 5) * Math.cos(ledAngle);
    const ly = cy + (radius + 5) * Math.sin(ledAngle);
    ctx.beginPath();
    ctx.arc(lx, ly, 3.5, 0, 2 * Math.PI);
    ctx.fillStyle = (i % 2 === ledBlinkState) ? '#ffffff' : '#fef08a';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = (i % 2 === ledBlinkState) ? 6 : 2;
    ctx.fill();
  }

  // Draw Slices
  for (let i = 0; i < numSlices; i++) {
    const startA = angle + i * sliceAngle;
    const endA = startA + sliceAngle;
    const prize = LUCKY_PRIZES[i];

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startA, endA);
    ctx.closePath();

    // Radial gradient for slice
    const sliceGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, radius);
    sliceGrad.addColorStop(0, prize.color);
    sliceGrad.addColorStop(1, adjustColorBrightness(prize.color, -25));
    ctx.fillStyle = sliceGrad;
    ctx.fill();

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fef08a';
    ctx.stroke();
    ctx.restore();

    // Slice Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startA + sliceAngle / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = prize.text;
    ctx.font = '800 13px "Outfit", sans-serif';
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowBlur = 4;
    ctx.fillText(prize.label, radius - 18, 4);

    ctx.restore();
  }

  // Center Circle Pin
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, 26, 0, 2 * Math.PI);
  const centerGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, 26);
  centerGrad.addColorStop(0, '#ffffff');
  centerGrad.addColorStop(0.7, '#fef08a');
  centerGrad.addColorStop(1, '#b45309');
  ctx.fillStyle = centerGrad;
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();

  // Center Text
  ctx.fillStyle = '#78350f';
  ctx.font = '900 11px "Outfit", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ABREXA', cx, cy);
  ctx.restore();
}

function launchConfetti(canvasId) {
  const canvas = document.getElementById(canvasId || 'confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth || 400;
  canvas.height = canvas.parentElement.clientHeight || 450;

  const particles = [];
  const colors = ['#f59e0b', '#ef4444', '#10b981', '#6366f1', '#ec4899', '#3b82f6', '#ffffff'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 - 20,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.8) * 12,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let startTime = Date.now();
  function render() {
    const elapsed = Date.now() - startTime;
    if (elapsed > 3500) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.rotation += p.rSpeed;
      if (elapsed > 2000) p.opacity -= 0.02;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    requestAnimationFrame(render);
  }
  render();
}

function initLuckyWheel() {
  if (document.getElementById('lucky-wheel-modal-backdrop')) return;

  // 1. Inject HTML into body
  const wrapper = document.createElement('div');
  wrapper.id = 'lucky-wheel-wrapper';
  wrapper.innerHTML = `
    <!-- Floating Gift Trigger Button (Positioned above mobile bottom navbar: bottom-20 on mobile, bottom-6 on desktop) -->
    <button id="floating-gift-trigger" class="free-gift-trigger fixed bottom-20 left-3 sm:left-4 lg:bottom-6 lg:left-6 z-30 flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group border border-amber-300/40 cursor-pointer animate-float-gift">
      <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-amber-100 group-hover:rotate-12 transition-transform shrink-0">
        <i class="fa-solid fa-gift text-xs sm:text-sm"></i>
      </div>
      <div class="flex flex-col text-left leading-none">
        <span class="text-[8.5px] sm:text-[9px] font-black uppercase tracking-wider text-amber-200">Free Gift</span>
        <span class="text-[11px] sm:text-xs font-black tracking-tight mt-0.5 whitespace-nowrap">Spin & Win ৳5,000</span>
      </div>
    </button>

    <!-- Lucky Wheel Modal Backdrop & Dialog -->
    <div id="lucky-wheel-modal-backdrop" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[150] opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-3 md:p-4 overflow-y-auto">
      <div id="lucky-wheel-modal" class="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300">
        
        <!-- Modal Header -->
        <div class="relative p-4 text-center border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <i class="fa-solid fa-gift text-base animate-pulse"></i>
            </div>
            <div class="text-left">
              <h3 class="text-sm font-black text-amber-400 tracking-wide flex items-center gap-1.5 leading-tight">
                <span>ABREXA LUCKY WHEEL</span>
                <span class="bg-amber-500/20 text-amber-300 text-[9px] px-1.5 py-0.2 rounded-full border border-amber-500/30 font-bold uppercase">VIP</span>
              </h3>
              <p class="text-[10.5px] text-slate-400 font-medium">Spin daily & win up to ৳5,000 coupons!</p>
            </div>
          </div>
          
          <div class="flex items-center gap-1.5">
            <!-- Sound Toggle -->
            <button id="wheel-sound-toggle" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 flex items-center justify-center text-xs transition-colors" title="Toggle Sound">
              <i id="wheel-sound-icon" class="fa-solid fa-volume-high"></i>
            </button>
            <!-- Close Modal -->
            <button id="close-lucky-wheel-btn" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center justify-center text-xs transition-colors focus:outline-none">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <!-- Navigation Tabs inside Modal -->
        <div class="flex border-b border-slate-800/80 bg-slate-950/40 text-xs font-bold text-slate-400">
          <button id="wheel-tab-spin" class="flex-1 py-2.5 px-3 text-amber-400 border-b-2 border-amber-500 bg-amber-500/5 flex items-center justify-center gap-2 transition-colors">
            <i class="fa-solid fa-dharmachakra"></i>
            <span>Spin & Win</span>
          </button>
          <button id="wheel-tab-coupons" class="flex-1 py-2.5 px-3 hover:text-slate-200 flex items-center justify-center gap-2 transition-colors">
            <i class="fa-solid fa-ticket"></i>
            <span>My Won Coupons (<span id="won-coupons-badge">0</span>)</span>
          </button>
        </div>

        <!-- TAB 1: WHEEL SPIN BODY -->
        <div id="wheel-view-spin" class="p-4 flex flex-col items-center relative">
          <!-- Spins Left Indicator -->
          <div class="flex items-center justify-between w-full max-w-xs mb-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-300">
              <i class="fa-solid fa-bolt text-amber-400"></i>
              <span>Spins Remaining:</span>
            </span>
            <span id="spins-left-count" class="font-extrabold text-white bg-amber-500/30 px-2.5 py-0.5 rounded-full border border-amber-500/40 text-amber-300">3 / 3</span>
          </div>

          <!-- Canvas Confetti Container Overlay -->
          <canvas id="confetti-canvas" class="absolute inset-0 pointer-events-none z-30" width="400" height="420"></canvas>

          <!-- Wheel Container -->
          <div class="relative my-1 wheel-container-glow rounded-full p-2 bg-gradient-to-b from-amber-500/20 to-slate-900 border border-amber-500/40">
            <!-- Top Pointer / Ticker Arrow -->
            <div id="wheel-pointer" class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 w-8 h-10 flex flex-col items-center">
              <div class="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[22px] border-t-amber-400 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"></div>
              <div class="w-2 h-2 rounded-full bg-amber-200 -mt-6 shadow-sm"></div>
            </div>

            <!-- Canvas -->
            <canvas id="lucky-wheel-canvas" width="310" height="310" class="block max-w-full rounded-full cursor-pointer shadow-2xl"></canvas>

            <!-- Center Spin Button -->
            <button id="spin-wheel-center-btn" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-600 text-white font-black text-[11px] uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center justify-center border-2 border-white/80 group">
              <i class="fa-solid fa-play text-xs mb-0.5 group-hover:scale-125 transition-transform"></i>
              <span>SPIN</span>
            </button>
          </div>

          <!-- Action Button below -->
          <button id="spin-wheel-main-btn" class="mt-3 w-full max-w-xs py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
            <i class="fa-solid fa-rotate text-sm"></i>
            <span>SPIN THE WHEEL NOW</span>
          </button>
        </div>

        <!-- TAB 2: MY WON COUPONS BODY -->
        <div id="wheel-view-coupons" class="p-4 hidden min-h-[300px] max-h-[380px] overflow-y-auto">
          <div id="won-coupons-list" class="space-y-2.5">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- WINNER CELEBRATION OVERLAY -->
        <div id="winner-overlay" class="absolute inset-0 bg-slate-950/95 z-40 p-5 flex flex-col items-center justify-center text-center hidden">
          <div class="animate-winner-pop max-w-sm w-full bg-slate-900 border border-amber-500/50 rounded-3xl p-5 shadow-2xl relative">
            <div class="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-xl text-white mb-2">
              🏆
            </div>
            <h3 class="text-xl font-black text-amber-400 tracking-wide uppercase">YOU WON!</h3>
            <p class="text-xs text-slate-300 mt-0.5">Exclusive Abrexa Discount Voucher</p>

            <div class="my-3.5 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 border border-amber-500/40 text-center relative overflow-hidden">
              <div id="winner-prize-amount" class="text-2xl font-black text-white tracking-tight">৳500 DISCOUNT</div>
              <div id="winner-prize-min" class="text-[10.5px] text-amber-300 font-semibold mt-0.5">Min Spend: ৳1,500</div>

              <div class="mt-3 flex items-center justify-center gap-2 bg-slate-950 p-2 rounded-xl border border-amber-500/40">
                <code id="winner-coupon-code" class="text-amber-400 font-mono text-xs font-black tracking-widest">ABREXA-GIFT-500</code>
                <button id="copy-won-code-btn" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded-lg text-[11px] transition-all active:scale-95 flex items-center gap-1">
                  <i class="fa-regular fa-copy"></i>
                  <span id="copy-btn-text">COPY</span>
                </button>
              </div>
            </div>

            <div class="flex gap-2">
              <button id="winner-use-now-btn" class="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] uppercase tracking-wider text-center shadow-lg hover:brightness-110 transition-all">
                Use in Store 🛍️
              </button>
              <button id="winner-close-btn" class="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
  document.body.appendChild(wrapper);

  // 2. Storage Helper
  const STORAGE_KEY_SPINS = 'abrexa_spins_today';
  const STORAGE_KEY_DATE = 'abrexa_spins_date';
  const STORAGE_KEY_COUPONS = 'abrexa_won_coupons';

  function getSpinsCount() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem(STORAGE_KEY_DATE);
    if (savedDate !== today) {
      localStorage.setItem(STORAGE_KEY_DATE, today);
      localStorage.setItem(STORAGE_KEY_SPINS, '3');
      return 3;
    }
    return parseInt(localStorage.getItem(STORAGE_KEY_SPINS) || '3', 10);
  }

  function setSpinsCount(count) {
    localStorage.setItem(STORAGE_KEY_SPINS, count.toString());
    const badge = document.getElementById('spins-left-count');
    if (badge) badge.textContent = `${count} / 3`;
  }

  function getWonCoupons() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_COUPONS) || '[]');
    } catch(e) { return []; }
  }

  function addWonCoupon(prize) {
    const coupons = getWonCoupons();
    const newCoupon = {
      id: 'CPN-' + Date.now(),
      label: prize.label,
      amount: prize.amount,
      code: prize.code,
      minSpend: prize.minSpend,
      date: new Date().toLocaleDateString(),
      used: false
    };
    coupons.unshift(newCoupon);
    localStorage.setItem(STORAGE_KEY_COUPONS, JSON.stringify(coupons));
    updateCouponsBadge();
  }

  function updateCouponsBadge() {
    const list = getWonCoupons();
    const badge = document.getElementById('won-coupons-badge');
    if (badge) badge.textContent = list.length;
  }

  // 3. Modal Controls
  const backdrop = document.getElementById('lucky-wheel-modal-backdrop');
  const modal = document.getElementById('lucky-wheel-modal');

  function openModal() {
    if (!backdrop || !modal) return;
    setSpinsCount(getSpinsCount());
    updateCouponsBadge();
    drawLuckyWheel(wheelState.currentAngle);
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.remove('scale-95');
    modal.classList.add('scale-100');
  }

  function closeModal() {
    if (!backdrop || !modal) return;
    if (wheelState.isSpinning) return;
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('scale-100');
    modal.classList.add('scale-95');
    const winnerOverlay = document.getElementById('winner-overlay');
    if (winnerOverlay) winnerOverlay.classList.add('hidden');
  }

  // Bind clicks
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.free-gift-trigger, #free-gift-btn, [data-action="open-lucky-wheel"]');
    if (trigger) {
      e.preventDefault();
      openModal();
    }
  });

  const closeBtn = document.getElementById('close-lucky-wheel-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  // 4. Tabs Inside Modal
  const tabSpin = document.getElementById('wheel-tab-spin');
  const tabCoupons = document.getElementById('wheel-tab-coupons');
  const viewSpin = document.getElementById('wheel-view-spin');
  const viewCoupons = document.getElementById('wheel-view-coupons');

  if (tabSpin && tabCoupons) {
    tabSpin.addEventListener('click', () => {
      tabSpin.className = 'flex-1 py-2.5 px-3 text-amber-400 border-b-2 border-amber-500 bg-amber-500/5 flex items-center justify-center gap-2 transition-colors font-bold';
      tabCoupons.className = 'flex-1 py-2.5 px-3 text-slate-400 hover:text-slate-200 flex items-center justify-center gap-2 transition-colors font-bold';
      viewSpin.classList.remove('hidden');
      viewCoupons.classList.add('hidden');
    });

    tabCoupons.addEventListener('click', () => {
      tabCoupons.className = 'flex-1 py-2.5 px-3 text-amber-400 border-b-2 border-amber-500 bg-amber-500/5 flex items-center justify-center gap-2 transition-colors font-bold';
      tabSpin.className = 'flex-1 py-2.5 px-3 text-slate-400 hover:text-slate-200 flex items-center justify-center gap-2 transition-colors font-bold';
      viewCoupons.classList.remove('hidden');
      viewSpin.classList.add('hidden');
      renderWonCouponsList();
    });
  }

  function renderWonCouponsList() {
    const container = document.getElementById('won-coupons-list');
    if (!container) return;
    const coupons = getWonCoupons();
    if (coupons.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 text-slate-500">
          <i class="fa-solid fa-ticket text-4xl mb-2 opacity-40"></i>
          <p class="text-xs font-semibold">No coupons won yet!</p>
          <p class="text-[11px] text-slate-600 mt-1">Spin the wheel to unlock up to ৳5,000 discount coupons.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = coupons.map(c => `
      <div class="p-3 rounded-2xl bg-slate-900 border border-amber-500/30 flex items-center justify-between gap-2 shadow-md">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <i class="fa-solid fa-ticket text-sm"></i>
          </div>
          <div>
            <div class="text-xs font-extrabold text-white">${c.label} Discount</div>
            <div class="text-[10px] text-slate-400">Min Order: ৳${c.minSpend} • Won: ${c.date}</div>
          </div>
        </div>
        <div class="flex items-center gap-1.5">
          <code class="text-[11px] font-mono font-black text-amber-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">${c.code}</code>
          <button onclick="navigator.clipboard.writeText('${c.code}'); this.textContent='Copied!';" class="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold px-2 py-0.5 rounded text-[10px] border border-amber-500/40 transition-colors">
            Copy
          </button>
        </div>
      </div>
    `).join('');
  }

  // 5. Sound toggle
  const soundBtn = document.getElementById('wheel-sound-toggle');
  const soundIcon = document.getElementById('wheel-sound-icon');
  if (soundBtn && soundIcon) {
    soundBtn.addEventListener('click', () => {
      wheelState.soundEnabled = !wheelState.soundEnabled;
      soundIcon.className = wheelState.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark text-slate-500';
    });
  }

  // 6. SPIN ENGINE
  const spinBtnMain = document.getElementById('spin-wheel-main-btn');
  const spinBtnCenter = document.getElementById('spin-wheel-center-btn');

  function startSpin() {
    if (wheelState.isSpinning) return;
    const spins = getSpinsCount();
    if (spins <= 0) {
      alert('You have used all 3 free spins for today! Please come back tomorrow for more free spins. 🎁');
      return;
    }

    setSpinsCount(spins - 1);
    wheelState.isSpinning = true;

    // Random prize selection
    const winningIndex = Math.floor(Math.random() * LUCKY_PRIZES.length);
    const prize = LUCKY_PRIZES[winningIndex];

    const numSlices = LUCKY_PRIZES.length;
    const sliceAngle = (2 * Math.PI) / numSlices;
    const extraRotations = 5;

    const targetAngle = wheelState.currentAngle + (2 * Math.PI * extraRotations) + 
      ((numSlices - winningIndex) * sliceAngle) - (wheelState.currentAngle % (2 * Math.PI)) - (sliceAngle / 2) - (Math.PI / 2);

    const startAngle = wheelState.currentAngle;
    const duration = 5000;
    const startTime = performance.now();
    let lastPassedSlice = -1;

    const pointerEl = document.getElementById('wheel-pointer');
    if (pointerEl) pointerEl.classList.add('wheel-ticker-shake');

    function animateWheel(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easeOut = 1 - Math.pow(1 - progress, 3.5);

      wheelState.currentAngle = startAngle + (targetAngle - startAngle) * easeOut;
      drawLuckyWheel(wheelState.currentAngle);

      // Play tick sound on slice boundary pass
      const normalizedAngle = (wheelState.currentAngle + Math.PI / 2) % (2 * Math.PI);
      const currentPassedSlice = Math.floor((2 * Math.PI - (normalizedAngle < 0 ? normalizedAngle + 2*Math.PI : normalizedAngle)) / sliceAngle) % numSlices;
      if (currentPassedSlice !== lastPassedSlice) {
        playWheelSound('tick');
        lastPassedSlice = currentPassedSlice;
      }

      if (progress < 1) {
        requestAnimationFrame(animateWheel);
      } else {
        wheelState.isSpinning = false;
        if (pointerEl) pointerEl.classList.remove('wheel-ticker-shake');

        playWheelSound('win');
        addWonCoupon(prize);
        launchConfetti('confetti-canvas');
        showWinnerOverlay(prize);
      }
    }

    requestAnimationFrame(animateWheel);
  }

  if (spinBtnMain) spinBtnMain.addEventListener('click', startSpin);
  if (spinBtnCenter) spinBtnCenter.addEventListener('click', startSpin);

  const canvasEl = document.getElementById('lucky-wheel-canvas');
  if (canvasEl) canvasEl.addEventListener('click', startSpin);

  // 7. Show Winner Celebration
  function showWinnerOverlay(prize) {
    const overlay = document.getElementById('winner-overlay');
    if (!overlay) return;
    
    document.getElementById('winner-prize-amount').textContent = prize.label + ' COUPON';
    document.getElementById('winner-prize-min').textContent = `Min Spend: ৳${prize.minSpend.toLocaleString()}`;
    document.getElementById('winner-coupon-code').textContent = prize.code;

    const copyBtn = document.getElementById('copy-won-code-btn');
    const copyText = document.getElementById('copy-btn-text');
    if (copyBtn && copyText) {
      copyText.textContent = 'COPY';
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(prize.code);
        copyText.textContent = 'COPIED!';
        setTimeout(() => { copyText.textContent = 'COPY'; }, 2000);
      };
    }

    const useBtn = document.getElementById('winner-use-now-btn');
    if (useBtn) {
      useBtn.onclick = () => {
        localStorage.setItem('abrexa_applied_coupon', prize.code);
        window.location.href = 'store.html';
      };
    }

    const closeWinnerBtn = document.getElementById('winner-close-btn');
    if (closeWinnerBtn) {
      closeWinnerBtn.onclick = () => {
        overlay.classList.add('hidden');
      };
    }

    overlay.classList.remove('hidden');
  }

  // Draw initial canvas
  drawLuckyWheel(0);
}

// Load Custom Hero Banner published from Admin Panel
function loadCustomHeroBanner() {
  const saved = localStorage.getItem('ABREXA_HERO_BANNER');
  if (!saved) return;
  try {
    const config = JSON.parse(saved);
    const tag = document.getElementById('hero-banner-1-tag');
    const title = document.getElementById('hero-banner-1-title');
    const desc = document.getElementById('hero-banner-1-desc');
    const btn = document.getElementById('hero-banner-1-btn');
    const img = document.getElementById('hero-banner-1-img');

    if (tag && config.tag) tag.innerText = config.tag;
    if (title && config.title) title.innerText = config.title;
    if (desc && config.desc) desc.innerText = config.desc;
    if (btn && config.btnText) btn.innerText = config.btnText;
    if (img && config.imageUrl) img.src = config.imageUrl;
  } catch (e) {
    console.error('Error loading hero banner config', e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCustomHeroBanner();
});


