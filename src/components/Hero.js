export function renderHero() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const heroSection = document.createElement('section');
  heroSection.id = 'hero';
  heroSection.className = 'relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ivory flex flex-col justify-center';

  heroSection.innerHTML = `
    <!-- Decorative Background Grid Accent -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1C1A17_1px,transparent_1px)] [background-size:24px_24px]"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Copy & Messaging (7 cols) -->
        <div class="lg:col-span-7 space-y-8">
          
          <!-- Pill Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/40 border border-stone/30 text-xs font-semibold tracking-wider uppercase text-brown">
            <span class="w-2 h-2 rounded-full bg-brown animate-pulse"></span>
            Strategy • Design • Engineering
          </div>

          <!-- Main Headline -->
          <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.08]">
            Technology should <span class="italic font-normal text-brown">move your business</span> forward.
          </h1>

          <!-- Supporting Copy -->
          <p class="text-lg sm:text-xl text-ink/75 max-w-2xl font-sans leading-relaxed">
            We combine strategy, thoughtful design and engineering to build digital experiences that help businesses work smarter and grow further.
          </p>

          <!-- Buttons & Call to Action -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#work" class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-ink text-ivory font-medium text-base hover:bg-brown transition-all duration-300 shadow-md hover:shadow-lg group">
              Explore Our Work
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>

            <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 rounded-full border border-ink/30 text-ink font-medium text-base hover:bg-sand/30 hover:border-ink transition-all duration-300">
              Start a Project
            </a>
          </div>

          <!-- Proof Statement / Tagline -->
          <div class="pt-8 border-t border-stone/20 grid grid-cols-3 gap-6 text-left">
            <div>
              <p class="font-display text-2xl lg:text-3xl font-bold text-ink">100%</p>
              <p class="text-xs text-stone font-medium uppercase tracking-wider mt-1">Tailored Solutions</p>
            </div>
            <div>
              <p class="font-display text-2xl lg:text-3xl font-bold text-ink">EdTech & Enterprise</p>
              <p class="text-xs text-stone font-medium uppercase tracking-wider mt-1">Core Focus</p>
            </div>
            <div>
              <p class="font-display text-2xl lg:text-3xl font-bold text-ink">Africa & Global</p>
              <p class="text-xs text-stone font-medium uppercase tracking-wider mt-1">Client Reach</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Visual Composition Card (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            
            <!-- Main Hero Canvas Art piece -->
            <div class="relative z-10 rounded-3xl bg-ink p-8 text-ivory shadow-2xl overflow-hidden border border-stone/20 group">
              <!-- Geometric Accent Light -->
              <div class="absolute -top-24 -right-24 w-60 h-60 bg-brown/30 rounded-full blur-3xl pointer-events-none"></div>

              <div class="flex items-center justify-between pb-6 border-b border-stone/30">
                <span class="text-xs font-mono tracking-widest text-sand uppercase">NEXTBYTE ARCHITECTURE</span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>

              <div class="py-10 space-y-6">
                <div class="space-y-2">
                  <div class="h-2.5 w-1/3 bg-sand/30 rounded"></div>
                  <h3 class="font-display text-2xl font-bold text-ivory">Engineered for real-world impact.</h3>
                </div>

                <!-- Feature Pills -->
                <div class="flex flex-wrap gap-2 pt-2">
                  <span class="px-3 py-1 rounded-full bg-stone/20 text-xs text-sand border border-stone/30">School Portals</span>
                  <span class="px-3 py-1 rounded-full bg-stone/20 text-xs text-sand border border-stone/30">Business Automation</span>
                  <span class="px-3 py-1 rounded-full bg-stone/20 text-xs text-sand border border-stone/30">Custom Web Apps</span>
                </div>
              </div>

              <!-- Floating Metric Bar inside Card -->
              <div class="bg-sand/10 rounded-2xl p-4 border border-sand/20 flex items-center justify-between">
                <div>
                  <p class="text-xs text-stone uppercase tracking-wider">Methodology</p>
                  <p class="font-display text-sm font-semibold text-ivory">Human-Centered Engineering</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-brown flex items-center justify-center text-ivory font-bold text-xs">
                  ➔
                </div>
              </div>
            </div>

            <!-- Floating Sub-Card (Overlapping Visual Element) -->
            <div class="absolute -bottom-6 -left-6 z-20 hidden sm:block bg-ivory p-5 rounded-2xl border border-stone/30 shadow-xl max-w-xs">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center text-ink font-bold font-display">
                  99%
                </div>
                <div>
                  <p class="text-xs font-bold text-ink uppercase tracking-wider">Reliability</p>
                  <p class="text-xs text-stone">Optimized performance & security</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;

  mainContent.appendChild(heroSection);
}