export function renderWork() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const workSection = document.createElement('section');
  workSection.id = 'work';
  workSection.className = 'py-24 md:py-36 bg-ivory border-t border-stone/20 relative overflow-hidden';

  const projects = [
    {
      id: '01',
      name: 'St. Augustine International Academy',
      category: 'EDUCATION',
      tagline: 'Complete School Portal & Academic Management Engine',
      description: 'A comprehensive digital ecosystem built for a premier academic institution. Features real-time grade processing, automated parent notifications, examination scheduling, and digital admissions.',
      services: ['UX/UI Strategy', 'Web Portal Development', 'Result Engine', 'DB Architecture'],
      tech: ['Tailwind CSS', 'Node.js', 'PostgreSQL', 'WebSockets'],
      metrics: { primary: '10k+', label: 'Active Students & Parents' },
      visualVariant: 'emerald'
    },
    {
      id: '02',
      name: 'Apex Operations Hub',
      category: 'WEB APP',
      tagline: 'Enterprise Management & Analytics Dashboard',
      description: 'Custom business management software designed for multi-branch operations. Solves data fragmentation by consolidating inventory control, billing, customer CRM, and performance metrics into a single real-time dashboard.',
      services: ['Product Strategy', 'Custom Web Application', 'API Integration', 'Data Visualization'],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
      metrics: { primary: '45%', label: 'Efficiency Gain' },
      visualVariant: 'amber'
    },
    {
      id: '03',
      name: 'Vanguard Global Advisory',
      category: 'CORPORATE',
      tagline: 'High-Conversion Institutional Corporate Website',
      description: 'An editorial, high-performance corporate platform crafted for an international consulting firm. Focuses on clear brand positioning, fast global response times, and optimized lead conversion pipelines.',
      services: ['Brand Strategy', 'Corporate Website', 'SEO Architecture', 'Performance Optimization'],
      tech: ['Vite', 'Vanilla JS', 'Tailwind CSS', 'Headless CMS'],
      metrics: { primary: '99/100', label: 'Lighthouse Score' },
      visualVariant: 'blue'
    }
  ];

  workSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-8 h-[1px] bg-brown"></span>
            <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">06 / Portfolio</span>
          </div>
          <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
            Some things <br />
            <span class="text-brown italic font-normal">we’ve been building.</span>
          </h2>
        </div>
        <p class="text-ink/75 max-w-md text-base sm:text-lg font-sans">
          A look into how we solve complex problems through strategy, design, and tailored engineering.
        </p>
      </div>

      <!-- Projects Showcase Stack -->
      <div class="space-y-20 lg:space-y-32">
        ${projects.map((project, index) => {
          const isEven = index % 2 === 1;
          return `
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <!-- Project Details Column -->
              <div class="lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6">
                
                <div class="flex items-center gap-4 border-b border-stone/20 pb-4">
                  <span class="font-mono text-xl font-bold text-brown">${project.id}</span>
                  <span class="px-3 py-1 rounded-full bg-sand/40 text-ink text-xs font-mono font-bold tracking-wider">
                    ${project.category}
                  </span>
                </div>

                <div>
                  <h3 class="font-display text-3xl sm:text-4xl font-bold text-ink leading-snug">
                    ${project.name}
                  </h3>
                  <p class="text-brown font-display text-lg font-medium mt-1">
                    ${project.tagline}
                  </p>
                </div>

                <p class="text-ink/80 text-base leading-relaxed font-sans">
                  ${project.description}
                </p>

                <!-- Services Provided -->
                <div class="pt-2">
                  <p class="text-xs font-mono uppercase tracking-widest text-brown font-semibold mb-3">Services Delivered</p>
                  <div class="flex flex-wrap gap-2">
                    ${project.services.map(s => `
                      <span class="px-3 py-1 rounded-full bg-ivory border border-stone/30 text-ink text-xs font-medium">
                        ${s}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <!-- Technologies Used -->
                <div class="pt-2">
                  <p class="text-xs font-mono uppercase tracking-widest text-brown font-semibold mb-3">Tech Stack</p>
                  <div class="flex flex-wrap gap-2">
                    ${project.tech.map(t => `
                      <span class="px-3 py-1 rounded-full bg-sand/20 text-brown border border-stone/20 text-xs font-mono">
                        ${t}
                      </span>
                    `).join('')}
                  </div>
                </div>

              </div>

              <!-- Project Preview Card (Visual Column) -->
              <div class="lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}">
                <div class="group relative rounded-3xl bg-ink p-8 sm:p-10 text-ivory border border-stone/30 shadow-xl overflow-hidden hover:border-brown/50 transition-all duration-300">
                  
                  <!-- Subtle Background Ambient -->
                  <div class="absolute -bottom-16 -right-16 w-64 h-64 bg-brown/20 rounded-full blur-3xl pointer-events-none"></div>

                  <!-- Mock UI Shell Header -->
                  <div class="flex items-center justify-between pb-6 border-b border-stone/30">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-stone/40"></span>
                      <span class="w-3 h-3 rounded-full bg-stone/40"></span>
                      <span class="w-3 h-3 rounded-full bg-stone/40"></span>
                    </div>
                    <span class="text-xs font-mono text-sand tracking-widest uppercase">DEMO PREVIEW</span>
                  </div>

                  <!-- Mock Canvas Body -->
                  <div class="py-12 space-y-6">
                    <div class="inline-block px-3 py-1 rounded bg-stone/20 text-sand text-xs font-mono">
                      // System Architecture Verified
                    </div>
                    
                    <h4 class="font-display text-2xl font-bold text-ivory leading-tight">
                      ${project.name}
                    </h4>

                    <!-- Impact Metric pill inside visual card -->
                    <div class="pt-4 border-t border-stone/20 flex items-center justify-between">
                      <div>
                        <p class="font-display text-3xl font-bold text-sand">${project.metrics.primary}</p>
                        <p class="text-xs text-stone uppercase tracking-wider">${project.metrics.label}</p>
                      </div>
                      <span class="w-10 h-10 rounded-full bg-brown flex items-center justify-center text-ivory group-hover:scale-110 transition-transform duration-300">
                        ➔
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;

  mainContent.appendChild(workSection);
}