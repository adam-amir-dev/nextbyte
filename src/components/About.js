export function renderAbout() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  aboutSection.className = 'py-24 md:py-36 bg-ivory border-t border-stone/20 relative overflow-hidden';

  aboutSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-4xl mb-16 lg:mb-24">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[1px] bg-brown"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">09 / Agency Identity</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          We believe better technology <br />
          <span class="text-brown italic font-normal">creates better possibilities.</span>
        </h2>
      </div>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Story & Philosophy (7 cols) -->
        <div class="lg:col-span-7 space-y-8 font-sans text-ink/80 text-lg leading-relaxed">
          <p class="text-xl sm:text-2xl font-display font-medium text-ink leading-snug">
            NextByte was founded on a simple premise: technology should solve operational friction, not introduce it.
          </p>

          <p>
            We are a digital solutions agency combining strategic foresight, software engineering, and human-centered design. We work with educational institutions and growing businesses that require reliable systems designed for real-world impact.
          </p>

          <p>
            Our team brings together product strategists, UI/UX designers, and full-stack engineers dedicated to building tools that last. We do not ship cookie-cutter templates or bloated frameworks—we build purpose-driven software tailored to your specific organizational context.
          </p>

          <!-- Mission Statement Box -->
          <div class="bg-sand/30 border-l-4 border-brown p-6 rounded-r-2xl space-y-2">
            <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">OUR MISSION</span>
            <p class="font-display text-xl font-bold text-ink leading-snug">
              To help businesses and institutions operate better through accessible, thoughtfully engineered digital solutions.
            </p>
          </div>
        </div>

        <!-- Right Column: Vision & Identity Card (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Vision Highlight Card -->
          <div class="bg-ink text-ivory rounded-3xl p-8 sm:p-10 border border-stone/20 shadow-xl relative overflow-hidden">
            <div class="absolute -top-20 -right-20 w-48 h-48 bg-brown/30 rounded-full blur-3xl pointer-events-none"></div>

            <span class="text-xs font-mono uppercase tracking-widest text-sand font-semibold block mb-4">OUR VISION</span>

            <h3 class="font-display text-2xl font-bold text-ivory mb-4 leading-snug">
              To become a trusted technology partner for businesses and institutions across Africa and beyond.
            </h3>

            <p class="text-stone text-sm leading-relaxed font-sans mb-6">
              Empowering organizations across the continent with modern digital infrastructure, secure educational management portals, and custom web applications built to global standards.
            </p>

            <div class="pt-4 border-t border-stone/20 flex items-center justify-between">
              <span class="text-xs font-mono text-sand">NEXTBYTE / REGIONAL AMBITION</span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          <!-- Quick Metrics Bar -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-sand/20 border border-stone/30 rounded-2xl p-5">
              <p class="font-display text-3xl font-bold text-ink">100%</p>
              <p class="text-xs text-stone font-medium uppercase tracking-wider mt-1">In-House Engineering</p>
            </div>
            <div class="bg-sand/20 border border-stone/30 rounded-2xl p-5">
              <p class="font-display text-3xl font-bold text-ink">EdTech+</p>
              <p class="text-xs text-stone font-medium uppercase tracking-wider mt-1">Specialized Solutions</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;

  mainContent.appendChild(aboutSection);
}