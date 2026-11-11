export function renderWhyUs() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const whySection = document.createElement('section');
  whySection.id = 'why-us';
  whySection.className = 'py-24 md:py-36 bg-ink text-ivory relative overflow-hidden shadow-2xl border-t border-stone/20';

  const pillars = [
    {
      num: '01',
      title: 'Business-First Thinking',
      description: 'We prioritize operational efficiency, growth objectives, and clear ROI over superficial aesthetics or unnecessary features.'
    },
    {
      num: '02',
      title: 'Human-Centred Design',
      description: 'We construct interfaces around real human workflows—ensuring high adoption rates for employees, students, and clients.'
    },
    {
      num: '03',
      title: 'Reliable Engineering',
      description: 'Clean codebases, optimized database structures, and high-performance frontends built to endure scale and security demands.'
    },
    {
      num: '04',
      title: 'Purposeful Technology',
      description: 'We never adopt technology for novelty. Every framework, database, or integration is chosen specifically to solve your problem.'
    },
    {
      num: '05',
      title: 'Long-Term Partnerships',
      description: 'We act as your dedicated technology partner long after launch, offering ongoing maintenance, security, and incremental upgrades.'
    }
  ];

  whySection.innerHTML = `
    <!-- Ambient Background Accent -->
    <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-brown/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 lg:mb-24">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[1px] bg-sand"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-sand font-semibold">08 / Value Proposition</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight">
          Not just another <br />
          <span class="text-sand italic font-normal">digital agency.</span>
        </h2>
      </div>

      <!-- Content Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Banner: Strategic Statement (5 cols) -->
        <div class="lg:col-span-5 bg-stone/10 border border-stone/20 rounded-3xl p-8 lg:p-10 space-y-6">
          <span class="text-xs font-mono uppercase tracking-widest text-sand font-semibold">THE DIFFERENCE</span>
          
          <h3 class="font-display text-2xl lg:text-3xl font-bold text-ivory leading-snug">
            Built for organizations that demand practical results.
          </h3>

          <p class="text-stone text-base leading-relaxed font-sans">
            We operate as a technical partner, bridging the gap between high-level business strategy and resilient software architecture.
          </p>

          <div class="pt-6 border-t border-stone/20 flex items-center gap-4">
            <span class="text-3xl font-display font-bold text-sand">100%</span>
            <p class="text-xs text-stone font-medium uppercase tracking-wider">Dedicated to meaningful digital solutions</p>
          </div>
        </div>

        <!-- Right Grid: Core Pillars (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          ${pillars.map(pillar => `
            <div class="bg-stone/10 hover:bg-stone/20 border border-stone/20 rounded-2xl p-6 transition-all duration-300 hover:border-sand/40 group">
              <div class="flex items-start gap-4">
                <span class="font-mono text-lg font-bold text-sand pt-1">${pillar.num}</span>
                <div>
                  <h4 class="font-display text-xl font-bold text-ivory group-hover:text-sand transition-colors">
                    ${pillar.title}
                  </h4>
                  <p class="text-stone text-sm leading-relaxed mt-2 font-sans">
                    ${pillar.description}
                  </p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>

    </div>
  `;

  mainContent.appendChild(whySection);
}