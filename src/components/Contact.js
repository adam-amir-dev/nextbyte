export function renderContact() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.className = 'py-24 md:py-36 bg-ivory border-t border-stone/20 relative overflow-hidden';

  contactSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 lg:mb-20">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[1px] bg-brown"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">10 / Start a Project</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Have a challenge <br />
          <span class="text-brown italic font-normal">worth solving?</span>
        </h2>
        <p class="text-ink/75 text-lg mt-4 font-sans max-w-xl">
          Tell us what you’re trying to achieve. Let’s find a better way to make it happen.
        </p>
      </div>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Direct Details & Guarantees (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <div class="bg-sand/30 border border-stone/30 rounded-3xl p-8 space-y-6">
            <h3 class="font-display text-2xl font-bold text-ink">Let’s start with a conversation.</h3>
            <p class="text-ink/75 text-sm leading-relaxed font-sans">
              Whether you need a school management portal built from scratch, a web application, or a complete digital overhaul, our strategists and engineers are ready to assist.
            </p>

            <div class="space-y-4 pt-4 border-t border-stone/20 text-sm">
              <div>
                <p class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">Direct Email</p>
                <a href="mailto:hello@nextbyte.agency" class="font-display font-bold text-ink text-lg hover:text-brown transition-colors">
                  hello@nextbyte.agency
                </a>
              </div>

              <div>
                <p class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">Response Guarantee</p>
                <p class="text-ink/80 font-sans">Within 24 business hours</p>
              </div>

              <div>
                <p class="text-xs font-mono uppercase tracking-widest text-brown font-semibold">Primary Focus</p>
                <p class="text-ink/80 font-sans">Africa & International Clients</p>
              </div>
            </div>
          </div>

          <!-- Trust Callout -->
          <div class="bg-ink text-ivory rounded-3xl p-6 border border-stone/20 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-brown flex items-center justify-center font-bold text-ivory shrink-0">
              ✓
            </div>
            <div>
              <p class="font-display font-bold text-sm">No Obligation Strategy Call</p>
              <p class="text-xs text-stone">We review your operational requirements and provide realistic technical guidance.</p>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Brief Intake Form (7 cols) -->
        <div class="lg:col-span-7 bg-sand/20 border border-stone/30 rounded-3xl p-8 lg:p-10 shadow-lg">
          <form id="contact-form" class="space-y-6">
            
            <!-- Contact Inputs (Name & Email) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="user-name" class="block text-xs font-mono uppercase tracking-widest text-brown font-semibold">Your Name *</label>
                <input type="text" id="user-name" required placeholder="e.g. Sarah Jenkins" class="w-full px-4 py-3 rounded-2xl bg-ivory border border-stone/30 text-ink text-sm focus:outline-none focus:border-brown transition-colors">
              </div>

              <div class="space-y-2">
                <label for="user-email" class="block text-xs font-mono uppercase tracking-widest text-brown font-semibold">Email Address *</label>
                <input type="email" id="user-email" required placeholder="sarah@institution.edu" class="w-full px-4 py-3 rounded-2xl bg-ivory border border-stone/30 text-ink text-sm focus:outline-none focus:border-brown transition-colors">
              </div>
            </div>

            <!-- Company / Institution -->
            <div class="space-y-2">
              <label for="user-company" class="block text-xs font-mono uppercase tracking-widest text-brown font-semibold">Company / Institution Name</label>
              <input type="text" id="user-company" placeholder="e.g. St. Jude Academy / Apex Enterprises" class="w-full px-4 py-3 rounded-2xl bg-ivory border border-stone/30 text-ink text-sm focus:outline-none focus:border-brown transition-colors">
            </div>

            <!-- Project Type Selection -->
            <div class="space-y-3">
              <label class="block text-xs font-mono uppercase tracking-widest text-brown font-semibold">Project Type</label>
              <div class="flex flex-wrap gap-2.5" id="project-type-selector">
                <button type="button" class="type-pill px-4 py-2 rounded-full border border-stone/30 text-xs font-medium text-ink bg-ivory hover:border-brown transition-colors active" data-type="School Portal / EdTech">School Portal / EdTech</button>
                <button type="button" class="type-pill px-4 py-2 rounded-full border border-stone/30 text-xs font-medium text-ink bg-ivory hover:border-brown transition-colors" data-type="Custom Web Application">Custom Web Application</button>
                <button type="button" class="type-pill px-4 py-2 rounded-full border border-stone/30 text-xs font-medium text-ink bg-ivory hover:border-brown transition-colors" data-type="Business Website">Business Website</button>
                <button type="button" class="type-pill px-4 py-2 rounded-full border border-stone/30 text-xs font-medium text-ink bg-ivory hover:border-brown transition-colors" data-type="Digital Transformation">Digital Transformation</button>
              </div>
              <input type="hidden" id="selected-project-type" value="School Portal / EdTech">
            </div>

            <!-- Budget Range -->
            <div class="space-y-3">
              <label class="block text-xs font-mono uppercase tracking-widest text-brown font-semibold">Estimated Budget</label>
              <div class="flex flex-wrap gap-2.5" id="budget-selector">
                <button type="button" class="budget-pill px-4 py-2 rounded-full border border-stone/30 text-xs font-medium text-ink bg-ivory hover:border-brown transition-colors" data-budget="Under $5k">Under $5,000</button>
                <button type="button" class="budget-pill px-4 py-2 rounded-full border border-stone/30 text-xs font-medium text-ink bg-ivory hover:border-brown transition-colors active" data-budget="$5k - $15k">$5,000 – $15,000</button>
                <button type="button" class="budget-pill px-4 py-2 rounded-full border border-stone/30 text-xs font-medium text-ink bg-ivory hover:border-brown transition-colors" data-budget="$15k+">$15,000+</button>
              </div>
              <input type="hidden" id="selected-budget" value="$5k - $15k">
            </div>

            <!-- Description -->
            <div class="space-y-2">
              <label for="project-description" class="block text-xs font-mono uppercase tracking-widest text-brown font-semibold">Tell us about your project *</label>
              <textarea id="project-description" required rows="4" placeholder="Describe the challenges you want to solve, desired timelines, or key features..." class="w-full px-4 py-3 rounded-2xl bg-ivory border border-stone/30 text-ink text-sm focus:outline-none focus:border-brown transition-colors resize-none"></textarea>
            </div>

            <!-- Submit Button & Feedback -->
            <div>
              <button type="submit" class="w-full py-4 rounded-full bg-ink text-ivory font-display font-medium text-base hover:bg-brown transition-all duration-300 shadow-md">
                Start a Conversation ➔
              </button>
              <p id="form-feedback" class="text-xs text-center text-brown mt-3 hidden font-mono"></p>
            </div>

          </form>
        </div>

      </div>

    </div>
  `;

  mainContent.appendChild(contactSection);

  // Attach interactive form logic
  initContactInteractions();
}

function initContactInteractions() {
  const form = document.getElementById('contact-form');
  const typePills = document.querySelectorAll('.type-pill');
  const budgetPills = document.querySelectorAll('.budget-pill');
  const selectedTypeInput = document.getElementById('selected-project-type');
  const selectedBudgetInput = document.getElementById('selected-budget');
  const feedback = document.getElementById('form-feedback');

  // Pill Selection Logic
  typePills.forEach(pill => {
    pill.addEventListener('click', () => {
      typePills.forEach(p => p.classList.remove('bg-brown', 'text-ivory', 'border-brown'));
      pill.classList.add('bg-brown', 'text-ivory', 'border-brown');
      if (selectedTypeInput) selectedTypeInput.value = pill.dataset.type || '';
    });
  });

  budgetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      budgetPills.forEach(p => p.classList.remove('bg-brown', 'text-ivory', 'border-brown'));
      pill.classList.add('bg-brown', 'text-ivory', 'border-brown');
      if (selectedBudgetInput) selectedBudgetInput.value = pill.dataset.budget || '';
    });
  });

  // Set initial active pill styling
  typePills[0]?.classList.add('bg-brown', 'text-ivory', 'border-brown');
  budgetPills[1]?.classList.add('bg-brown', 'text-ivory', 'border-brown');

  // Form Submission
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (feedback) {
      feedback.textContent = '✓ Thank you! Your project inquiry has been received. We will respond within 24 hours.';
      feedback.classList.remove('hidden');
    }
    form.reset();
  });
}