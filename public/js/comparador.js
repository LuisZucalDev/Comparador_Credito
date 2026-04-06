// Comparador Créditos Pro - Executive Command Deck
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('compare-drawer');
    const compareItems = document.getElementById('compare-items');
    const countDisplay = document.getElementById('compare-count');
    const checkboxes = document.querySelectorAll('.compare-checkbox');
    const modal = document.getElementById('comparison-modal');
    const modalGrid = document.getElementById('modal-comparison-grid');
    const triggerComparison = document.getElementById('trigger-comparison');
    let selected = [];

    // --- Executive Toast System ---
    function showExecutiveAlert(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `glass-elite px-8 py-5 rounded-3xl shadow-luxury border-white/20 flex items-center space-x-4 animate-slide-left pointer-events-auto`;
        
        const icon = type === 'info' 
            ? '<svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
            : '<svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';

        toast.innerHTML = `
            <div class="p-2 bg-white/5 rounded-xl text-xl">${icon}</div>
            <div class="flex flex-col">
                <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">System Notification</span>
                <span class="text-xs font-bold text-slate-900 dark:text-white">${message}</span>
            </div>
        `;
        
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-x-20');
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    }

    // --- Comparison Logic ---
    checkboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const bank = cb.dataset.bank;
        const cae = cb.dataset.cae;
        const icon = cb.dataset.icon;
        
        if (cb.checked) {
          if (selected.length < 3) {
            selected.push({ bank, cae, icon, cb, tasa: cb.dataset.tasa });
            cb.parentElement.querySelector('.dot').classList.add('translate-x-6');
            cb.parentElement.querySelector('.dot svg').classList.remove('opacity-0');
            cb.parentElement.parentElement.querySelector('span').classList.add('text-navy-600', 'dark:text-white');
          } else {
            cb.checked = false;
            showExecutiveAlert('Selection Cap Reached (Max 3)', 'warning');
          }
        } else {
          selected = selected.filter(s => s.bank !== bank);
          cb.parentElement.querySelector('.dot').classList.remove('translate-x-6');
          cb.parentElement.querySelector('.dot svg').classList.add('opacity-0');
          cb.parentElement.parentElement.querySelector('span').classList.remove('text-navy-600', 'dark:text-white');
        }
        updateDrawer();
      });
    });

    function updateDrawer() {
      if (selected.length > 0) {
        drawer.classList.remove('translate-y-full');
        drawer.classList.add('translate-y-0');
      } else {
        drawer.classList.add('translate-y-full');
        drawer.classList.remove('translate-y-0');
      }
      
      countDisplay.textContent = selected.length;
      compareItems.innerHTML = selected.map(s => `
        <div class="flex flex-col items-center animate-fade-in flex-shrink-0 group/item">
          <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl mb-2 backdrop-blur-xl border border-white/10 group-hover/item:scale-110 transition-transform">
            ${s.icon}
          </div>
          <span class="text-[8px] font-black text-white uppercase tracking-tighter truncate max-w-[60px]">${s.bank}</span>
          <span class="text-emerald-400 font-black text-[10px]">${s.cae}</span>
        </div>
      `).join('');
    }

    // --- Modal Logic ---
    if (triggerComparison) {
        triggerComparison.addEventListener('click', () => {
            if (selected.length < 2) {
                showExecutiveAlert('Select at least 2 banks/options', 'warning');
                return;
            }
            populateModal();
            modal.classList.remove('invisible', 'opacity-0');
            modal.querySelector('#modal-content').classList.remove('scale-95');
        });
    }

    function populateModal() {
        modalGrid.innerHTML = selected.map(s => `
            <div class="glass-elite p-8 rounded-[3rem] border-white/40 flex flex-col items-center text-center">
                <div class="text-6xl mb-6">${s.icon}</div>
                <h4 class="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-8">${s.bank}</h4>
                <div class="w-full space-y-6">
                    <div class="flex justify-between items-center py-4 border-b border-slate-100 dark:border-white/5">
                        <span class="text-[10px] font-black uppercase text-slate-400">Annual Cost (CAE)</span>
                        <span class="text-2xl font-black text-emerald-500">${s.cae}</span>
                    </div>
                    <div class="flex justify-between items-center py-4 border-b border-slate-100 dark:border-white/5">
                        <span class="text-[10px] font-black uppercase text-slate-400">Annual Rate</span>
                        <span class="text-xl font-bold text-slate-700 dark:text-slate-300">${s.tasa}</span>
                    </div>
                    <div class="flex justify-between items-center py-4">
                        <span class="text-[10px] font-black uppercase text-slate-400">Position</span>
                        <span class="px-3 py-1 bg-navy-500/10 text-navy-600 rounded-lg text-[9px] font-black uppercase">Analyzed</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function closeModal() {
        modal.classList.add('invisible', 'opacity-0');
        modal.querySelector('#modal-content').classList.add('scale-95');
    }

    document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
    document.getElementById('close-modal-bg')?.addEventListener('click', closeModal);

    // --- Newsletter / Alerts ---
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = newsletterForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.innerHTML = '<span class="animate-pulse">Processing...</span>';
            
            setTimeout(() => {
                showExecutiveAlert('Subscription activated successfully', 'info');
                btn.innerHTML = originalText;
                btn.disabled = false;
                newsletterForm.reset();
            }, 1500);
        });
    }

    // --- Utils ---
    document.getElementById('clear-compare')?.addEventListener('click', () => {
      selected.forEach(s => {
        s.cb.checked = false;
        s.cb.parentElement.querySelector('.dot').classList.remove('translate-x-6');
        s.cb.parentElement.querySelector('.dot svg').classList.add('opacity-0');
        s.cb.parentElement.parentElement.querySelector('span').classList.remove('text-navy-600', 'dark:text-white');
      });
      selected = [];
      updateDrawer();
    });

    // Mobile Filter Drawer Logic (remains same)
    const filterSidebar = document.getElementById('filter-sidebar');
    const openFiltersBtn = document.getElementById('open-filters');
    const closeFiltersBtn = document.getElementById('close-filters-btn');
    const closeFiltersArea = document.getElementById('close-filters-area');

    function toggleFilters() {
      filterSidebar.classList.toggle('translate-y-full');
      filterSidebar.classList.toggle('translate-y-0');
      filterSidebar.classList.toggle('opacity-0');
      filterSidebar.classList.toggle('opacity-100');
      filterSidebar.classList.toggle('invisible');
      filterSidebar.classList.toggle('visible');
      document.body.classList.toggle('overflow-hidden');
    }

    if (openFiltersBtn) openFiltersBtn.addEventListener('click', toggleFilters);
    if (closeFiltersBtn) closeFiltersBtn.addEventListener('click', toggleFilters);
    if (closeFiltersArea) closeFiltersArea.addEventListener('click', toggleFilters);
});
