export function renderApproach() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const approachSection = document.createElement('section');
  approachSection.id = 'approach';
  approachSection.className = 'py-24 md:py-36 bg-ivory border-t border-stone/20 relative overflow-hidden';

  const stages = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Understand the problem',
      description: 'We start by listening. We analyze your current business operations, user friction points, technical debt, and strategic objectives before defining solutions.',
      deliverables: ['Stakeholder Interviews', 'Workflow Audit', 'Technical Requirements Document']
    },
    {
      num: '02',
      title: 'Strategize',
      tagline: 'Define the solution',
      description: 'We turn findings into actionable architecture. We map out data models, user journeys, platform scope, and technology recommendations tailored to your goals.',
      deliverables: ['Product Blueprint', 'Information Architecture', 'Tech Stack Specification']
    },
    {
      num: '03',
      title: 'Design',
      tagline: 'Create the experience',
      description: 'We craft human-centered visual systems and user interfaces. We focus on clarity, brand voice, accessibility, and intuitive interaction design.',
      deliverables: ['UI Wireframes', 'Interactive Prototypes', 'Brand & Design System']
    },
    {
      num: '04',
      title: 'Develop',
      tagline: 'Engineer the product',
      description: 'We write clean, modular, and maintainable code. Building secure APIs, fast database structures, and responsive frontends engineered for longevity.',
      deliverables: ['Clean Frontend Architecture', 'Backend & API Integration', 'Database Setup']
    },
    {
      num: '05',
      title: 'Refine',
      tagline: 'Test and optimize',
      description: 'We rigorously test performance, security standards, cross-browser compatibility, and accessibility before anything goes live.',
      deliverables: ['QA & Security Audit', 'Lighthouse Optimization', 'User Acceptance Testing']
    },
    {
      num: '06',
      title: 'Launch',
      tagline: 'Deliver and support',
      description: 'We manage seamless deployment, staff onboarding, and provide continuous technical support to ensure your system performs at its peak.',
      deliverables: ['Production Deployment', 'Team Documentation', 'Ongoing Maintenance Plan']
    }
  ];

  approachSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 lg:mb-20">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[1px] bg-brown"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">07 / Process</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Thoughtful by design. <br />
          <span class="text-brown italic font-normal">Powerful by technology.</span>
        </h2>
        <p class="text-ink/75 text-lg mt-4 font-sans max-w-xl">
          A disciplined, six-stage development methodology engineered to turn complex ideas into scalable digital systems.
        </p>
      </div>

      <!-- Process Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${stages.map((stage) => `
          <div class="bg-sand/20 hover:bg-sand/40 border border-stone/30 rounded-3xl p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            
            <div>
              <!-- Stage Header -->
              <div class="flex items-center justify-between pb-6 border-b border-stone/20">
                <span class="font-mono text-2xl font-bold text-brown">${stage.num}</span>
                <span class="text-xs font-mono uppercase tracking-wider text-stone group-hover:text-ink transition-colors">Phase ${stage.num}</span>
              </div>

              <!-- Stage Title & Tagline -->
              <h3 class="font-display text-2xl font-bold text-ink mt-6">
                ${stage.title}
              </h3>
              <p class="text-brown text-sm font-medium mb-4 italic">
                ${stage.tagline}
              </p>

              <!-- Description -->
              <p class="text-ink/75 text-sm leading-relaxed mb-6 font-sans">
                ${stage.description}
              </p>
            </div>

            <!-- Deliverables -->
            <div class="pt-6 border-t border-stone/20">
              <p class="text-[11px] font-mono uppercase tracking-widest text-brown font-semibold mb-3">Key Deliverables</p>
              <ul class="space-y-1.5">
                ${stage.deliverables.map(item => `
                  <li class="text-xs text-ink/80 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-brown/60"></span>
                    ${item}
                  </li>
                `).join('')}
              </ul>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;

  mainContent.appendChild(approachSection);
}