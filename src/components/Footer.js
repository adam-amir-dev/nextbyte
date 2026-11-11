export function renderFooter() {
  const body = document.body;
  if (!body) return;

  const footer = document.createElement('footer');
  footer.className = 'bg-ink text-ivory pt-20 pb-12 border-t border-stone/20 relative overflow-hidden';

  footer.innerHTML = `
    <!-- Subtle Ambient Glow -->
    <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-brown/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Top Grid: Brand & Site Taxonomy -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-stone/20">
        
        <!-- Brand Intro Column (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <a href="#" class="flex items-center gap-2 group">
            <span class="w-3.5 h-3.5 rounded-full bg-sand group-hover:scale-125 transition-transform duration-300"></span>
            <span class="font-display font-bold text-2xl tracking-tight text-ivory uppercase">NEXTBYTE</span>
          </a>

          <p class="text-stone text-base leading-relaxed max-w-sm font-sans">
            We turn complex business challenges into meaningful digital solutions through strategy, thoughtful design, and engineering.
          </p>

          <div class="pt-2">
            <span class="text-xs font-mono text-sand uppercase tracking-widest block mb-1">HQ / Core Focus</span>
            <span class="text-sm text-ivory font-medium">Africa & Global Enterprise Solutions</span>
          </div>
        </div>

        <!-- Quick Links (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <p class="text-xs font-mono uppercase tracking-widest text-sand font-semibold">Navigation</p>
          <ul class="space-y-2.5 text-sm font-medium">
            <li><a href="#services" class="text-stone hover:text-ivory transition-colors">Services</a></li>
            <li><a href="#solutions" class="text-stone hover:text-ivory transition-colors">Solutions</a></li>
            <li><a href="#work" class="text-stone hover:text-ivory transition-colors">Work</a></li>
            <li><a href="#approach" class="text-stone hover:text-ivory transition-colors">Approach</a></li>
            <li><a href="#about" class="text-stone hover:text-ivory transition-colors">About</a></li>
            <li><a href="#contact" class="text-stone hover:text-ivory transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Core Services (3 cols) -->
        <div class="lg:col-span-3 space-y-4">
          <p class="text-xs font-mono uppercase tracking-widest text-sand font-semibold">Capabilities</p>
          <ul class="space-y-2.5 text-sm font-medium text-stone">
            <li>Website Development</li>
            <li>Custom Web Applications</li>
            <li>School Management Portals</li>
            <li>Digital Transformation</li>
            <li>API & Business Automation</li>
            <li>Maintenance & Security</li>
          </ul>
        </div>

        <!-- Social & Direct (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <p class="text-xs font-mono uppercase tracking-widest text-sand font-semibold">Connect</p>
          <ul class="space-y-2.5 text-sm font-medium">
            <li><a href="mailto:hello@nextbyte.agency" class="text-stone hover:text-ivory transition-colors">Email Us</a></li>
            <li><a href="#" class="text-stone hover:text-ivory transition-colors">LinkedIn</a></li>
            <li><a href="#" class="text-stone hover:text-ivory transition-colors">Twitter / X</a></li>
            <li><a href="#" class="text-stone hover:text-ivory transition-colors">GitHub</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar: Statement, Copyright & Back to Top -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div class="space-y-1 text-center sm:text-left">
          <p class="font-display font-semibold text-sand text-lg">
            “Built with purpose. Designed for progress.”
          </p>
          <p class="text-xs text-stone font-mono">
            © ${new Date().getFullYear()} NEXTBYTE Technology Agency. All rights reserved.
          </p>
        </div>

        <!-- Smooth Back to Top -->
        <button id="back-to-top" type="button" class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone/30 text-xs font-mono text-stone hover:text-ivory hover:border-sand transition-colors">
          Back to top ↑
        </button>

      </div>

    </div>
  `;

  body.appendChild(footer);

  // Back to top click handler
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}