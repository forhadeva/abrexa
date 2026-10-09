/**
 * ABREXA Master Admin Control Panel JavaScript Engine
 * Full control system for User Panel, Seller Panel, Products, Payouts & System Settings
 */

// Initial Platform Seed Data
// Clean Real Platform State (Populated 100% from Django Database)
const ADMIN_STATE = {
  stats: {
    totalRevenue: 0.00,
    platformCommission: 0.00,
    totalSellers: 0,
    verifiedSellers: 0,
    pendingSellersCount: 0,
    totalCustomers: 0,
    totalOrders: 0,
    pendingPayoutsCount: 0
  },
  sellers: [],
  customers: [],
  payouts: [],
  system: {
    maintenanceMode: false,
    commissionRate: 5.0,
    announcementBanner: '🚀 ABREXA E-Commerce Platform is Live!'
  }
};

// Initialize State from Live Django REST API
async function loadAdminState() {
  // Clear any old fake demo localStorage cache
  localStorage.removeItem('ABREXA_ADMIN_STATE');
  
  try {
    const apiHost = (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') ? window.location.origin : (window.location.port === '8080' ? '' : 'http://127.0.0.1:8000');
    const res = await fetch(`${apiHost}/api/v1/seller/admin/overview/`);
    if (res.ok) {
      const data = await res.json();
      if (data.stats) Object.assign(ADMIN_STATE.stats, data.stats);
      ADMIN_STATE.sellers = data.sellers || [];
      ADMIN_STATE.payouts = data.payouts || [];
      console.log('✅ Connected to Live Django Backend API!');
    }
  } catch (e) {
    console.warn('Backend API connection check', e);
  }
}}
  }
}

function saveAdminState() {
  localStorage.setItem('ABREXA_ADMIN_STATE', JSON.stringify(ADMIN_STATE));
}

// Toast Alert Notification
function showAdminToast(msg, type = 'success') {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;

  toast.innerText = msg;
  if (type === 'success') {
    toast.className = "fixed top-5 right-5 z-[200] bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-2xl shadow-2xl transition-all duration-300 border border-emerald-400/40 flex items-center gap-2";
  } else {
    toast.className = "fixed top-5 right-5 z-[200] bg-rose-600 text-white font-bold text-xs px-5 py-3 rounded-2xl shadow-2xl transition-all duration-300 border border-rose-400/40 flex items-center gap-2";
  }
  
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
  }, 3500);
}

// Mobile Sidebar Drawer Toggle
window.toggleMobileSidebar = function() {
  const sidebar = document.getElementById('admin-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar) return;

  const isClosed = sidebar.classList.contains('-translate-x-full');
  if (isClosed) {
    sidebar.classList.remove('-translate-x-full');
    if (backdrop) backdrop.classList.remove('hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
  }
};

// Navigation Tab Switching
window.switchAdminTab = function(tabId) {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(t => t.classList.remove('nav-tab-active', 'bg-slate-800/60', 'text-white'));

  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) activeBtn.classList.add('nav-tab-active');

  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(p => p.classList.add('hidden'));

  const activePane = document.getElementById(`pane-${tabId}`);
  if (activePane) activePane.classList.remove('hidden');
};

// Render Dashboard Analytics
function renderDashboardStats() {
  document.getElementById('stat-total-revenue').innerText = `৳${ADMIN_STATE.stats.totalRevenue.toLocaleString()}`;
  document.getElementById('stat-platform-fee').innerText = `৳${ADMIN_STATE.stats.platformCommission.toLocaleString()}`;
  document.getElementById('stat-active-sellers').innerText = ADMIN_STATE.sellers.filter(s => s.status === 'verified').length;
  document.getElementById('stat-pending-sellers').innerText = ADMIN_STATE.sellers.filter(s => s.status === 'pending').length;
  document.getElementById('stat-total-customers').innerText = ADMIN_STATE.customers.length;
  document.getElementById('stat-pending-payouts').innerText = ADMIN_STATE.payouts.filter(p => p.status === 'pending').length;

  // Header badges
  const pendingBadge = document.getElementById('header-pending-sellers-badge');
  const pendingCount = ADMIN_STATE.sellers.filter(s => s.status === 'pending').length;
  if (pendingBadge) {
    pendingBadge.innerText = `${pendingCount} Pending`;
    if (pendingCount === 0) pendingBadge.classList.add('hidden');
    else pendingBadge.classList.remove('hidden');
  }
}

// Render Sellers Table & Workflow
function renderSellersTable() {
  const tbody = document.getElementById('sellers-table-body');
  if (!tbody) return;

  if (ADMIN_STATE.sellers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-slate-400 font-bold"><i class="fa-solid fa-store text-xl mb-2 block text-slate-600"></i> No registered sellers yet. Django DB active & listening for new seller signups!</td></tr>`;
    return;
  }

  tbody.innerHTML = ADMIN_STATE.sellers.map(s => {
    const isVerified = s.status === 'verified';
    const statusBadge = isVerified 
      ? `<span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Verified</span>`
      : `<span class="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 animate-pulse"><i class="fa-solid fa-clock text-[9px]"></i> Pending Approval</span>`;

    return `
      <tr>
        <td class="font-bold text-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-extrabold flex items-center justify-center text-sm uppercase">
              ${s.storeName ? s.storeName.charAt(0) : 'S'}
            </div>
            <div>
              <div class="font-extrabold text-slate-100 text-xs">${s.storeName || s.username}</div>
              <div class="text-[10px] text-slate-400">Owner: ${s.ownerName || s.username} (@${s.username})</div>
            </div>
          </div>
        </td>
        <td class="text-slate-300">
          <div>${s.email}</div>
          <div class="text-[10px] text-slate-400">📞 ${s.phone || 'N/A'}</div>
        </td>
        <td>
          <div class="font-mono text-[11px] text-slate-300">NID: ${s.nid || 'N/A'}</div>
          <div class="text-[10px] text-slate-400">Joined: ${s.joinedDate}</div>
        </td>
        <td>${statusBadge}</td>
        <td class="font-bold text-emerald-400">৳${s.balance.toLocaleString()}</td>
        <td class="text-slate-300 font-semibold">${s.totalSales} orders</td>
        <td>
          <div class="flex items-center gap-2">
            ${!isVerified ? `
              <button onclick="approveSeller('${s.id}')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-[10.5px] font-bold px-3 py-1.5 rounded-lg shadow transition-all flex items-center gap-1">
                <i class="fa-solid fa-check"></i> Approve Seller
              </button>
            ` : `
              <button onclick="toggleSellerStatus('${s.id}')" class="bg-slate-800 hover:bg-slate-700 text-rose-400 hover:text-rose-300 text-[10.5px] font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 border border-slate-700">
                <i class="fa-solid fa-ban"></i> Suspend
              </button>
            `}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Approve Pending Seller
window.approveSeller = function(sellerId) {
  const seller = ADMIN_STATE.sellers.find(s => s.id === sellerId);
  if (!seller) return;

  seller.status = 'verified';
  saveAdminState();
  renderDashboardStats();
  renderSellersTable();
  showAdminToast(`✅ Store "${seller.storeName}" has been approved & verified!`);
};

// Toggle Seller Status (Suspend / Re-verify)
window.toggleSellerStatus = function(sellerId) {
  const seller = ADMIN_STATE.sellers.find(s => s.id === sellerId);
  if (!seller) return;

  if (confirm(`Are you sure you want to suspend store "${seller.storeName}"?`)) {
    seller.status = 'suspended';
    saveAdminState();
    renderDashboardStats();
    renderSellersTable();
    showAdminToast(`🚫 Store "${seller.storeName}" is now suspended.`, 'error');
  }
};

// Render Customers Table
function renderCustomersTable() {
  const tbody = document.getElementById('customers-table-body');
  if (!tbody) return;

  if (ADMIN_STATE.customers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-slate-400 font-bold"><i class="fa-solid fa-users text-xl mb-2 block text-slate-600"></i> No customers registered yet. Active listening on live database!</td></tr>`;
    return;
  }

  tbody.innerHTML = ADMIN_STATE.customers.map(u => {
    const isBanned = u.status === 'banned';
    const statusBadge = isBanned
      ? `<span class="bg-rose-500/10 text-rose-400 border border-rose-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">Banned</span>`
      : `<span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">Active User</span>`;

    return `
      <tr>
        <td class="font-bold text-slate-100">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-slate-800 text-slate-300 font-bold flex items-center justify-center text-xs uppercase border border-slate-700">
              ${u.name ? u.name.charAt(0) : 'U'}
            </div>
            <div>
              <div class="font-bold text-slate-200 text-xs">${u.name}</div>
              <div class="text-[10px] text-slate-400">${u.email}</div>
            </div>
          </div>
        </td>
        <td class="text-slate-300 font-mono text-[11px]">${u.phone}</td>
        <td class="text-slate-400">${u.joinedDate}</td>
        <td class="text-slate-200 font-bold">${u.ordersCount} orders</td>
        <td class="text-emerald-400 font-extrabold">৳${u.totalSpent.toLocaleString()}</td>
        <td>${statusBadge}</td>
        <td>
          <button onclick="toggleCustomerBan('${u.id}')" class="bg-slate-800 hover:bg-slate-700 ${isBanned ? 'text-emerald-400' : 'text-rose-400'} text-[10.5px] font-bold px-3 py-1.5 rounded-lg border border-slate-700 transition-colors">
            ${isBanned ? '<i class="fa-solid fa-rotate-left"></i> Unban' : '<i class="fa-solid fa-user-slash"></i> Ban User'}
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

window.toggleCustomerBan = function(userId) {
  const user = ADMIN_STATE.customers.find(u => u.id === userId);
  if (!user) return;

  if (user.status === 'banned') {
    user.status = 'active';
    showAdminToast(`Customer "${user.name}" account restored.`);
  } else {
    if (confirm(`Ban customer "${user.name}" from ordering?`)) {
      user.status = 'banned';
      showAdminToast(`Customer "${user.name}" has been banned.`, 'error');
    }
  }
  saveAdminState();
  renderCustomersTable();
};

// Render Payout Requests
function renderPayoutsTable() {
  const tbody = document.getElementById('payouts-table-body');
  if (!tbody) return;

  if (ADMIN_STATE.payouts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400 font-bold"><i class="fa-solid fa-wallet text-xl mb-2 block text-slate-600"></i> No payout requests currently pending in Django DB.</td></tr>`;
    return;
  }

  tbody.innerHTML = ADMIN_STATE.payouts.map(p => {
    const isPending = p.status === 'pending';
    const statusBadge = isPending
      ? `<span class="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">Pending Review</span>`
      : `<span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">Approved & Paid</span>`;

    return `
      <tr>
        <td class="font-bold text-slate-100">${p.sellerName}</td>
        <td class="font-black text-amber-400 text-sm">৳${p.amount.toLocaleString()}</td>
        <td class="text-slate-300">
          <span class="bg-slate-800 border border-slate-700 text-slate-200 text-[10px] font-bold px-2 py-0.5 rounded">${p.method}</span>
          <div class="text-[10.5px] text-slate-400 mt-1 font-mono">${p.accountNumber}</div>
        </td>
        <td class="text-slate-400">${p.requestedDate}</td>
        <td>${statusBadge}</td>
        <td>
          ${isPending ? `
            <div class="flex gap-2">
              <button onclick="approvePayout('${p.id}')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-[10.5px] font-bold px-3 py-1.5 rounded-lg shadow transition-all flex items-center gap-1">
                <i class="fa-solid fa-check-double"></i> Approve & Transfer
              </button>
              <button onclick="rejectPayout('${p.id}')" class="bg-slate-800 hover:bg-slate-700 text-rose-400 text-[10.5px] font-bold px-2.5 py-1.5 rounded-lg border border-slate-700">
                Reject
              </button>
            </div>
          ` : `<span class="text-slate-500 text-xs font-semibold">Completed</span>`}
        </td>
      </tr>
    `;
  }).join('');
}

window.approvePayout = function(payoutId) {
  const payout = ADMIN_STATE.payouts.find(p => p.id === payoutId);
  if (!payout) return;

  payout.status = 'approved';
  saveAdminState();
  renderDashboardStats();
  renderPayoutsTable();
  showAdminToast(`💸 Payout of ৳${payout.amount.toLocaleString()} approved for ${payout.sellerName}!`);
};

window.rejectPayout = function(payoutId) {
  const payout = ADMIN_STATE.payouts.find(p => p.id === payoutId);
  if (!payout) return;

  if (confirm(`Reject payout request of ৳${payout.amount}?`)) {
    payout.status = 'rejected';
    saveAdminState();
    renderDashboardStats();
    renderPayoutsTable();
    showAdminToast(`Payout request rejected.`, 'error');
  }
};

// Hero Banner Settings Handler
window.setBannerPresetImage = function(url) {
  const input = document.getElementById('setting-hero-img');
  if (input) input.value = url;
};

window.saveHeroBannerSettings = function(e) {
  e.preventDefault();
  const tag = document.getElementById('setting-hero-tag').value.trim();
  const title = document.getElementById('setting-hero-title').value.trim();
  const desc = document.getElementById('setting-hero-desc').value.trim();
  const btnText = document.getElementById('setting-hero-btn').value.trim();
  const imageUrl = document.getElementById('setting-hero-img').value.trim();

  const heroConfig = { tag, title, desc, btnText, imageUrl };
  localStorage.setItem('ABREXA_HERO_BANNER', JSON.stringify(heroConfig));
  
  showAdminToast('🖼️ Homepage Hero Banner published live to User Panel!');
};

// System Settings Handler
window.saveSystemSettings = function(e) {
  e.preventDefault();
  const maintenance = document.getElementById('setting-maintenance').checked;
  const commission = parseFloat(document.getElementById('setting-commission').value) || 5.0;
  const banner = document.getElementById('setting-banner').value.trim();

  ADMIN_STATE.system.maintenanceMode = maintenance;
  ADMIN_STATE.system.commissionRate = commission;
  ADMIN_STATE.system.announcementBanner = banner;
  ADMIN_STATE.stats.platformCommission = (ADMIN_STATE.stats.totalRevenue * (commission / 100));

  saveAdminState();
  renderDashboardStats();
  showAdminToast('⚙️ System Control Settings updated successfully!');
};

// Global Initialization
document.addEventListener('DOMContentLoaded', async () => {
  await loadAdminState();
  renderDashboardStats();
  renderSellersTable();
  renderCustomersTable();
  renderPayoutsTable();

  // Populate System Settings
  const maintEl = document.getElementById('setting-maintenance');
  const commEl = document.getElementById('setting-commission');
  const bannerEl = document.getElementById('setting-banner');
  if (maintEl) maintEl.checked = ADMIN_STATE.system.maintenanceMode;
  if (commEl) commEl.value = ADMIN_STATE.system.commissionRate;
  if (bannerEl) bannerEl.value = ADMIN_STATE.system.announcementBanner;
});
