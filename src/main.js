import { renderNavigation } from './components/Navigation.js';
import { renderHero } from './components/Hero.js';
import { renderBrandIntro } from './components/BrandIntro.js';
import { renderServices } from './components/Services.js';
import { renderSolutions } from './components/Solutions.js';
import { renderWork } from './components/Work.js';
import { renderApproach } from './components/Approach.js';
import { renderWhyUs } from './components/WhyUs.js';
import { renderAbout } from './components/About.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Section 01: Navigation Header
  renderNavigation();
  
  // Section 02: Hero Section
  renderHero();

  // Section 03: Brand Introduction & Philosophy
  renderBrandIntro();

  // Section 04: Services (Dark Accent Section)
  renderServices();

  // Section 05: Industry Solutions (Education & Business)
  renderSolutions();

  // Section 06: Selected Work & Demonstration Projects
  renderWork();

  // Section 07: Our 6-Stage Approach & Process
  renderApproach();

  // Section 08: Why NextByte Differentiators (Dark Accent Section)
  renderWhyUs();

  // Section 09: About & Agency Identity
  renderAbout();

  // Section 10: Interactive Contact Brief Intake
  renderContact();

  // Section 11: Footer & Closing Statement
  renderFooter();
});