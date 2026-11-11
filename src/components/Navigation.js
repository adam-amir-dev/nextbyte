export function renderNavigation() {
  const navContainer = document.getElementById('site-header');
  if (!navContainer) return;

  navContainer.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="main-header">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-5">
        <div class="flex items-center justify-between backdrop-blur-md bg-ivory/80 rounded-full px-6 py-3 border border-stone/20 shadow-sm">
          
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2 group">
            <span class="w-3.5 h-3.5 rounded-full bg-brown group-hover:scale-125 transition-transform duration-300"></span>
            <span class="font-display font-bold text-xl tracking-tight text-ink uppercase">NEXTBYTE</span>
          </a>

          <!-- Desktop Links -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
            <a href="#services" class="nav-link hover:text-ink">Services</a>
            <a href="#solutions" class="nav-link hover:text-ink">Solutions</a>
            <a href="#work" class="nav-link hover:text-ink">Work</a>
            <a href="#about" class="nav-link hover:text-ink">About</a>
            <a href="#contact" class="nav-link hover:text-ink">Contact</a>
          </nav>

          <!-- Desktop CTA -->
          <div class="hidden md:flex items-center gap-4">
            <a href="#contact" class="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-ink text-ivory text-sm font-medium hover:bg-brown transition-colors duration-300">
              Let’s Talk
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" type="button" aria-label="Toggle navigation menu" class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none">
            <span class="w-6 h-0.5 bg-ink transition-transform duration-300" id="line-1"></span>
            <span class="w-6 h-0.5 bg-ink transition-opacity duration-300" id="line-2"></span>
            <span class="w-6 h-0.5 bg-ink transition-transform duration-300" id="line-3"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden fixed inset-x-0 top-[84px] p-6 bg-ivory border-b border-stone/20 shadow-xl transition-all duration-300">
        <nav class="flex flex-col gap-4 text-lg font-display font-medium text-ink">
          <a href="#services" class="mobile-nav-link py-2 border-b border-stone/10">Services</a>
          <a href="#solutions" class="mobile-nav-link py-2 border-b border-stone/10">Solutions</a>
          <a href="#work" class="mobile-nav-link py-2 border-b border-stone/10">Work</a>
          <a href="#about" class="mobile-nav-link py-2 border-b border-stone/10">About</a>
          <a href="#contact" class="mobile-nav-link py-2 border-b border-stone/10">Contact</a>
          <a href="#contact" class="mt-4 text-center py-3 rounded-full bg-ink text-ivory font-medium">Let’s Talk</a>
        </nav>
      </div>
    </header>
  `;

  // Attach navigation interactivity
  initNavigationInteractions();
}

function initNavigationInteractions() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const line1 = document.getElementById('line-1');
  const line2 = document.getElementById('line-2');
  const line3 = document.getElementById('line-3');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      line1.classList.add('rotate-45', 'translate-y-2');
      line2.classList.add('opacity-0');
      line3.classList.add('-rotate-45', '-translate-y-2');
    } else {
      mobileMenu.classList.add('hidden');
      line1.classList.remove('rotate-45', 'translate-y-2');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45', '-translate-y-2');
    }
  }

  menuBtn?.addEventListener('click', toggleMenu);
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });

  // Header background shrink on scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 20) {
      header?.classList.add('py-2');
    } else {
      header?.classList.remove('py-2');
    }
  });
}