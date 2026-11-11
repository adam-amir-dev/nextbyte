export function renderServices() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const servicesSection = document.createElement('section');
  servicesSection.id = 'services';
  // Transition background to Deep Ink (#1C1A17) with light Warm Ivory text
  servicesSection.className = 'py-24 md:py-36 bg-ink text-ivory relative overflow-hidden shadow-2xl';

  const servicesData = [
    {
      id: '01',
      title: 'Website Development',
      description: 'Custom, high-performing websites tailored to reflect your brand personality, captivate audiences, and drive conversions.',
      items: [
        'Business websites',
        'Landing pages',
        'Corporate websites',
        'E-commerce websites'
      ]
    },
    {
      id: '02',
      title: 'Web Applications',
      description: 'Robust, secure, and scalable web software built to solve complex organizational tasks and improve user workflow.',
      items: [
        'Custom web applications',
        'School portals',
        'Management systems',
        'Business dashboards'
      ]
    },
    {
      id: '03',
      title: 'Digital Transformation',
      description: 'Modernizing internal operations through seamless integrations, automated workflows, and structured databases.',
      items: [
        'Business automation',
        'API integrations',
        'Workflow optimization',
        'Database solutions'
      ]
    },
    {
      id: '04',
      title: 'Maintenance & Support',
      description: 'Proactive management and technical care ensuring your digital assets remain fast, secure, and always accessible.',
      items: [
        'Website maintenance',
        'Security & audits',
        'Performance optimization',
        'Technical support'
      ]
    }
  ];

  servicesSection.innerHTML = `
    <!-- Subtle Ambient Glow Accent -->
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-brown/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-8 h-[1px] bg-sand"></span>
            <span class="text-xs font-mono uppercase tracking-widest text-sand font-semibold">04 / Capabilities</span>
          </div>
          <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight">
            What we bring <br class="hidden sm:inline" />
            <span class="text-sand italic font-normal">to the table.</span>
          </h2>
        </div>
        <p class="text-stone max-w-md text-base sm:text-lg font-sans">
          End-to-end expertise across design, architecture, and technology to build purpose-driven software solutions.
        </p>
      </div>

      <!-- Services Dark Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${servicesData.map(service => `
          <div class="group bg-stone/10 hover:bg-stone/20 border border-stone/20 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:border-sand/40 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-6 border-b border-stone/20">
                <span class="font-mono text-xl font-bold text-sand">${service.id}</span>
                <span class="w-8 h-8 rounded-full border border-stone/30 flex items-center justify-center text-ivory group-hover:bg-sand group-hover:border-sand group-hover:text-ink transition-colors duration-300">
                  ↗
                </span>
              </div>

              <h3 class="font-display text-2xl lg:text-3xl font-bold text-ivory mt-6 mb-3">
                ${service.title}
              </h3>

              <p class="text-stone text-base mb-8 leading-relaxed">
                ${service.description}
              </p>
            </div>

            <!-- Sub-Services Pill Badges -->
            <div class="pt-6 border-t border-stone/20">
              <div class="flex flex-wrap gap-2">
                ${service.items.map(item => `
                  <span class="px-3.5 py-1.5 rounded-full bg-ink/80 text-sand text-xs font-semibold border border-stone/30 group-hover:border-sand/40 transition-colors duration-300">
                    ${item}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;

  mainContent.appendChild(servicesSection);
}