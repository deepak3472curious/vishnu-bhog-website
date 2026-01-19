// Main Application Initialization

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Vishnu Bhog Chakki Atta Website - Initializing...');

  // Load saved language preference or default to Hindi
  const savedLang = loadLanguagePreference();
  currentLang = savedLang;

  // Initialize language-specific settings
  updateHTMLLangAttribute(currentLang);
  updateBodyClass(currentLang);

  // Update all page content with selected language
  updatePageContent();

  // Set up event listeners
  setupEventListeners();

  // Optional: Smooth scroll for anchor links
  setupSmoothScroll();

  console.log(`Website initialized in ${currentLang} language`);
});

/**
 * Set up all event listeners
 */
function setupEventListeners() {
  // Language toggle button
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', handleLanguageToggle);
  }

  // Optional: Track clicks on contact links for analytics
  setupContactTracking();
}

/**
 * Handle language toggle button click
 */
function handleLanguageToggle() {
  const newLang = currentLang === 'hindi' ? 'english' : 'hindi';
  switchLanguage(newLang);
  console.log('Language switched to:', newLang);
}

/**
 * Set up smooth scrolling for anchor links
 */
function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // Get header height for offset
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Optional: Track contact link clicks
 * Can be extended with analytics integration
 */
function setupContactTracking() {
  const contactLinks = document.querySelectorAll('.contact-card');

  contactLinks.forEach(link => {
    link.addEventListener('click', function() {
      const contactType = this.querySelector('h3')?.textContent || 'Unknown';
      console.log('Contact method clicked:', contactType);

      // Add analytics tracking here if needed
      // Example: gtag('event', 'contact_click', { method: contactType });
    });
  });
}

/**
 * Optional: Handle window resize events
 * Can be used for responsive adjustments
 */
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
    // Add any resize-specific logic here
  }, 250);
});

/**
 * Optional: Handle page visibility changes
 * Useful for pausing/resuming animations or tracking
 */
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('Page hidden');
  } else {
    console.log('Page visible');
  }
});

/**
 * Log any errors to console
 */
window.addEventListener('error', function(event) {
  console.error('JavaScript error:', event.error);
});

/**
 * Warn about unhandled promise rejections
 */
window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled promise rejection:', event.reason);
});
