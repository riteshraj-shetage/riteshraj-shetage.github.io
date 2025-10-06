// Portfolio JavaScript - Vanilla JS Implementation

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    body.classList.add('light');
    updateThemeIcons(true);
  }
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcons(isLight);
  });
  
  function updateThemeIcons(isLight) {
    if (isLight) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const isOpen = mobileNav.classList.contains('active');
    
    if (isOpen) {
      menuIconOpen.style.display = 'none';
      menuIconClose.style.display = 'block';
    } else {
      menuIconOpen.style.display = 'block';
      menuIconClose.style.display = 'none';
    }
  });
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    const mobileNav = document.getElementById('mobile-nav');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    
    if (mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      menuIconOpen.style.display = 'block';
      menuIconClose.style.display = 'none';
    }
  }
}

// Active Navigation Highlighting
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Update desktop nav
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
          }
        });
        
        // Update mobile nav
        mobileNavItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
          }
        });
      }
    });
  });
}

// Contact Form Handler
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Create mailto link
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
      const body = encodeURIComponent(
        `Hi Riteshraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      
      window.location.href = `mailto:riteshraj.shetage@outlook.com?subject=${subject}&body=${body}`;
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
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
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

// Initialize All Functions on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initActiveNavigation();
  initContactForm();
  updateFooterDateTime();
  initScrollAnimations();
  
  // Attach scroll functions to window
  window.scrollToSection = scrollToSection;
  window.scrollToTop = scrollToTop;
});
