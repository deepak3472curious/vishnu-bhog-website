// Language Switching Logic

let currentLang = 'hindi'; // Default language

/**
 * Switch the website language
 * @param {string} newLang - 'hindi' or 'english'
 */
function switchLanguage(newLang) {
  if (newLang !== 'hindi' && newLang !== 'english') {
    console.error('Invalid language:', newLang);
    return;
  }

  currentLang = newLang;
  updatePageContent();
  saveLanguagePreference(newLang);
  updateHTMLLangAttribute(newLang);
  updateBodyClass(newLang);
}

/**
 * Update all page content based on current language
 */
function updatePageContent() {
  const langData = content[currentLang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedValue(langData, key);

    if (value !== undefined) {
      element.textContent = value;
    } else {
      console.warn('Translation key not found:', key);
    }
  });

  // Update WhatsApp link with pre-filled message
  updateWhatsAppLink();

  // Update language toggle button text
  updateLanguageToggleText();
}

/**
 * Get nested object value from dot-notation string
 * @param {Object} obj - Object to search in
 * @param {string} path - Dot-notation path (e.g., 'hero.title')
 * @returns {*} The value at the path, or undefined
 */
function getNestedValue(obj, path) {
  const keys = path.split('.');
  let value = obj;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
}

/**
 * Update WhatsApp link with pre-filled message in current language
 */
function updateWhatsAppLink() {
  const whatsappLink = document.querySelector('a[href*="wa.me"]');
  if (whatsappLink) {
    const message = content[currentLang].contact.whatsappMessage;
    const encodedMessage = encodeURIComponent(message);
    whatsappLink.href = `https://wa.me/919584464304?text=${encodedMessage}`;
  }
}

/**
 * Update language toggle button text
 */
function updateLanguageToggleText() {
  const toggleButton = document.querySelector('.lang-toggle');
  if (toggleButton) {
    const langText = toggleButton.querySelector('.lang-text');
    if (langText) {
      langText.textContent = content[currentLang].header.langToggle;
    }

    // Update aria-label for accessibility
    const targetLang = currentLang === 'hindi' ? 'English' : 'Hindi';
    toggleButton.setAttribute('aria-label', `Switch language to ${targetLang}`);
  }
}

/**
 * Update HTML lang attribute for accessibility and SEO
 * @param {string} lang - 'hindi' or 'english'
 */
function updateHTMLLangAttribute(lang) {
  const htmlElement = document.documentElement;
  htmlElement.setAttribute('lang', lang === 'hindi' ? 'hi' : 'en');
}

/**
 * Update body class for font switching
 * @param {string} lang - 'hindi' or 'english'
 */
function updateBodyClass(lang) {
  const body = document.body;
  if (lang === 'english') {
    body.classList.add('english');
  } else {
    body.classList.remove('english');
  }
}

/**
 * Save language preference to localStorage
 * @param {string} lang - 'hindi' or 'english'
 */
function saveLanguagePreference(lang) {
  try {
    localStorage.setItem('preferredLanguage', lang);
  } catch (error) {
    console.warn('Could not save language preference:', error);
  }
}

/**
 * Load language preference from localStorage
 * @returns {string} Saved language or default 'hindi'
 */
function loadLanguagePreference() {
  try {
    const saved = localStorage.getItem('preferredLanguage');
    return saved === 'english' ? 'english' : 'hindi'; // Default to hindi
  } catch (error) {
    console.warn('Could not load language preference:', error);
    return 'hindi';
  }
}

/**
 * Get current language
 * @returns {string} Current language ('hindi' or 'english')
 */
function getCurrentLanguage() {
  return currentLang;
}
