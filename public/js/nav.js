document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('main-nav');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const html = document.documentElement;
  
  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.remove('py-6');
      nav.classList.add('py-2');
      nav.querySelector('.glass-card-luxury').classList.remove('rounded-[2.5rem]');
      nav.querySelector('.glass-card-luxury').classList.add('rounded-2xl', 'h-16');
    } else {
      nav.classList.add('py-6');
      nav.classList.remove('py-2');
      nav.querySelector('.glass-card-luxury').classList.add('rounded-[2.5rem]');
      nav.querySelector('.glass-card-luxury').classList.remove('rounded-2xl', 'h-16');
    }
  });

  // Mobile menu
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Dark mode toggle
  const darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    // Initial check
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }

    darkToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });
  }
});
