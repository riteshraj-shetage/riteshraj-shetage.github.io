// Portfolio JavaScript - Vanilla JS Implementation

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const body = document.body;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    body.classList.add('light');
    updateThemeIcons(true);
    updateThemeAriaAttributes(true);
  }
  
  // Desktop toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Mobile toggle
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }
  
  function toggleTheme() {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcons(isLight);
    updateThemeAriaAttributes(isLight);
  }
  
  function updateThemeIcons(isLight) {
    if (sunIcon && moonIcon) {
      if (isLight) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }
  
  function updateThemeAriaAttributes(isLight) {
    const buttons = [themeToggle, themeToggleMobile].filter(Boolean);
    buttons.forEach(btn => {
      btn.setAttribute('aria-checked', isLight ? 'true' : 'false');
      btn.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
    });
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  
  if (!menuToggle || !mobileNav) return;
  
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    
    // Update ARIA attributes
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', isOpen ? 'Close mobile menu' : 'Open mobile menu');
    
    // Update icons
    if (menuIconOpen && menuIconClose) {
      menuIconOpen.style.display = isOpen ? 'none' : 'block';
      menuIconClose.style.display = isOpen ? 'block' : 'none';
    }
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('active') && 
        !mobileNav.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      menuToggle.click();
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      menuToggle.click();
      menuToggle.focus();
    }
  });
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Close mobile menu if open
    const mobileNav = document.getElementById('mobile-nav');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    
    if (mobileNav && mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open mobile menu');
      }
      if (menuIconOpen && menuIconClose) {
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
      }
      document.body.style.overflow = '';
    }
    
    // Focus on the section for screen readers
    element.setAttribute('tabindex', '-1');
    element.focus();
    setTimeout(() => element.removeAttribute('tabindex'), 1000);
  }
}

// Active Navigation Highlighting
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  
  if (sections.length === 0) return;
  
  // Throttle scroll events for better performance
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Update desktop nav
        navItems.forEach(item => {
          const isActive = item.getAttribute('data-section') === sectionId;
          item.classList.toggle('active', isActive);
          item.setAttribute('aria-current', isActive ? 'page' : 'false');
        });
        
        // Update mobile nav
        mobileNavItems.forEach(item => {
          const isActive = item.getAttribute('data-section') === sectionId;
          item.classList.toggle('active', isActive);
          item.setAttribute('aria-current', isActive ? 'page' : 'false');
        });
      }
    });
  }
  
  // Initial call
  updateActiveNav();
}

// Contact Form Handler
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
      };
      
      // Basic validation
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Create mailto link
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
      const body = encodeURIComponent(
        `Hi Riteshraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      
      // Open email client
      window.location.href = `mailto:riteshraj.shetage@outlook.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setTimeout(() => {
        alert('Email client opened! If it didn\'t open automatically, please email me directly at riteshraj.shetage@outlook.com');
      }, 500);
    });
    
    // Add real-time validation feedback
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
          this.style.borderColor = 'var(--accent)';
        } else {
          this.style.borderColor = '';
        }
      });
      
      input.addEventListener('input', function() {
        this.style.borderColor = '';
      });
    });
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Footer Date/Time
function updateFooterDateTime() {
  const dateTimeElement = document.getElementById('footer-datetime');
  
  if (dateTimeElement) {
    function updateTime() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      };
      dateTimeElement.textContent = now.toLocaleString('en-US', options);
    }
    
    updateTime();
    setInterval(updateTime, 60000); // Update every minute
  }
}

// Add Scroll Animations
function initScrollAnimations() {
  // Check if IntersectionObserver is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all elements immediately
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return;
  }
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
}

// Performance optimization: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize All Functions on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  try {
    initThemeToggle();
    initMobileMenu();
    initActiveNavigation();
    initContactForm();
    updateFooterDateTime();
    initScrollAnimations();
    
    // Attach scroll functions to window
    window.scrollToSection = scrollToSection;
    window.scrollToTop = scrollToTop;
    
    // Log successful initialization in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Portfolio initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing portfolio:', error);
    // Fallback: ensure basic functionality works
    if (typeof window.scrollToSection === 'undefined') {
      window.scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      };
    }
    if (typeof window.scrollToTop === 'undefined') {
      window.scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
});

// Handle page visibility changes for better performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause expensive operations when page is hidden
    document.querySelectorAll('.animate-float').forEach(el => {
      el.style.animationPlayState = 'paused';
    });
  } else {
    // Resume animations when page becomes visible
    document.querySelectorAll('.animate-float').forEach(el => {
      el.style.animationPlayState = 'running';
    });
  }
});
