import './style.css'
import { renderNavigation } from './components/Navigation.js';
import { renderHero } from './components/Hero.js';

document.addEventListener('DOMContentLoaded', () => {
  // Section 01: Navigation
  renderNavigation();
  
  // Section 02: Hero
  renderHero();
});