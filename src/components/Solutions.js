export function renderSolutions() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const solutionsSection = document.createElement('section');
  solutionsSection.id = 'solutions';
  solutionsSection.className = 'py-24 md:py-36 bg-ivory border-t border-stone/20 relative overflow-hidden';

  const solutionsData = [
    {
      category: 'EDUCATION',
      tagline: 'Tailored for Schools, Academies & Academic Institutions',
      description: 'Streamlining administration, parent engagement, student tracking, and academic reporting through modern digital portals.',
      highlights: [
        { title: 'School Websites', desc: 'Custom branding and public web presence' },
        { title: 'Student Portals', desc: 'Secure student profiles and academic access' },
        { title: 'Result Management', desc: 'Automated grading and report cards' },
        { title: 'Examination Systems', desc: 'Digital test creation and scoring' },
        { title: 'Online Admissions', desc: 'Paperless application processing' },
        { title: 'Parent Communication', desc: 'Direct announcements and updates' },
        { title: 'PTA Capabilities', desc: 'Meeting schedules and community hub' }
      ]
    },
    {
      category: 'BUSINESS',
      tagline: 'Engineered for Enterprises, SMEs & Growing Organizations',
      description: 'Empowering enterprises to automate workflows, optimize customer touchpoints, and scale internal operations cleanly.',
      highlights: [
        { title: 'Business Websites', desc: 'High-converting commercial platforms' },
        { title: 'Customer Management', desc: 'Custom CRM and client communications' },
        { title: 'Business Automation', desc: 'Replacing repetitive tasks with smart code' },
        { title: 'Custom Digital Platforms', desc: 'Bespoke web applications and tools' }
      ]
    }
  ];

  solutionsSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 lg:mb-20">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[1px] bg-brown"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">05 / Domain Expertise</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Built around <br />
          <span class="text-brown italic font-normal">real-world challenges.</span>
        </h2>
        <p class="text-ink/75 text-lg mt-4 font-sans max-w-xl">
          Purpose-built platforms engineered to solve specific operational pain points across educational institutions and commercial businesses.
        </p>
      </div>

      <!-- Solutions Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        ${solutionsData.map((sol, index) => `
          <div class="bg-sand/30 border border-stone/30 rounded-3xl p-8 lg:p-12 flex flex-col justify-between hover:border-brown/40 transition-all duration-300 relative group">
            
            <!-- Category Header -->
            <div>
              <div class="flex items-center justify-between pb-6 border-b border-stone/20">
                <span class="px-3.5 py-1 rounded-full bg-ink text-ivory text-xs font-mono font-bold tracking-widest">
                  ${sol.category}
                </span>
                <span class="text-xs font-mono text-brown uppercase tracking-wider">Sector 0${index + 1}</span>
              </div>

              <h3 class="font-display text-2xl lg:text-3xl font-bold text-ink mt-6 mb-2">
                ${sol.tagline}
              </h3>
              <p class="text-ink/75 text-base mb-8 font-sans">
                ${sol.description}
              </p>
            </div>

            <!-- Capabilities Breakdown -->
            <div class="space-y-3 pt-6 border-t border-stone/20">
              <p class="text-xs font-mono uppercase tracking-widest text-brown font-semibold mb-4">Core Capabilities Included</p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${sol.highlights.map(item => `
                  <div class="bg-ivory/80 rounded-2xl p-3.5 border border-stone/20 flex flex-col justify-between hover:bg-ivory transition-colors">
                    <span class="font-display font-bold text-ink text-sm flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-brown"></span>
                      ${item.title}
                    </span>
                    <span class="text-xs text-stone mt-1">${item.desc}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Action Link -->
            <div class="mt-8 pt-6 border-t border-stone/20 flex items-center justify-between">
              <span class="text-xs font-medium text-ink/70">Need a tailored solution for ${sol.category.toLowerCase()}?</span>
              <a href="#contact" class="inline-flex items-center text-xs font-bold text-ink hover:text-brown uppercase tracking-wider gap-1 transition-colors">
                Discuss Strategy ➔
              </a>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;

  mainContent.appendChild(solutionsSection);
}