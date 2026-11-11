export function renderBrandIntro() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const introSection = document.createElement('section');
  introSection.id = 'brand-intro';
  introSection.className = 'py-24 md:py-36 bg-ivory border-t border-stone/20 relative overflow-hidden';

  introSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Tag / Label -->
      <div class="flex items-center gap-3 mb-8">
        <span class="w-8 h-[1px] bg-brown"></span>
        <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">03 / Philosophy</span>
      </div>

      <!-- Main Statement Headline -->
      <div class="max-w-4xl mb-16 lg:mb-24">
        <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15] tracking-tight">
          Good technology solves problems. <br class="hidden sm:inline" />
          <span class="text-brown italic font-normal">Great technology</span> creates possibilities.
        </h2>
      </div>

      <!-- Editorial Asymmetrical Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Column 1: Core Narrative (7 cols) -->
        <div class="lg:col-span-7 space-y-8 text-lg text-ink/80 leading-relaxed font-sans">
          <p class="text-xl sm:text-2xl font-display font-medium text-ink leading-snug">
            Most digital tools fail not from a lack of features, but from a disconnect with the real humans who use them and the business goals behind them.
          </p>

          <p>
            At NextByte, we work closely with ambitious companies, educational institutions, and growing organizations to diagnose structural challenges before writing a single line of code. We believe digital systems should clarify workflows, remove operational friction, and generate measurable momentum.
          </p>

          <p>
            Whether engineering an institution's complete management portal or architecting custom software for business automation, our approach remains grounded: clear strategy, intentional design, and resilient technology.
          </p>

          <!-- Core Pillars List -->
          <div class="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-stone/20">
            <div class="space-y-1">
              <h4 class="font-display font-bold text-ink text-base">Context-First Strategy</h4>
              <p class="text-sm text-stone">We analyze your real-world workflows before prescribing software design.</p>
            </div>
            <div class="space-y-1">
              <h4 class="font-display font-bold text-ink text-base">Long-Term Scalability</h4>
              <p class="text-sm text-stone">Clean, modern architectures built to expand with your organizational growth.</p>
            </div>
          </div>
        </div>

        <!-- Column 2: Editorial Highlight Card (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="bg-sand/30 border border-stone/30 rounded-3xl p-8 lg:p-10 space-y-6 relative overflow-hidden">
            <!-- Background Graphic Element -->
            <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-brown/10 rounded-full blur-2xl pointer-events-none"></div>

            <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold block">THE NEXTBYTE PROMISE</span>

            <blockquote class="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug">
              “We don’t build noise or unnecessary complexity. We engineer digital solutions that solve tangible problems and open new doors.”
            </blockquote>

            <div class="pt-4 border-t border-stone/20 flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-ink text-ivory flex items-center justify-center font-display font-bold text-lg">
                NB
              </div>
              <div>
                <p class="font-display font-bold text-ink text-sm">NextByte Team</p>
                <p class="text-xs text-stone">Digital Solutions & Engineering</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;

  mainContent.appendChild(introSection);
}