// ===== AgriBotics Website JavaScript =====

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initMobileMenu();
    initDarkModeToggle();
    initScrollAnimations();
    initStatsCounter();
    initParallaxEffect();
    initFormValidation();
});

// ===== Smooth Scrolling =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Smooth scroll to target
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    // Create mobile menu button if it doesn't exist
    const header = document.querySelector('header .flex');
    const mobileMenuBtn = createMobileMenuButton();
    header.appendChild(mobileMenuBtn);
    
    // Create mobile menu
    const mobileMenu = createMobileMenu();
    document.body.appendChild(mobileMenu);
    
    // Create overlay
    const overlay = createMobileMenuOverlay();
    document.body.appendChild(overlay);
    
    // Event listeners
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

function createMobileMenuButton() {
    const btn = document.createElement('button');
    btn.id = 'mobile-menu-btn';
    btn.className = 'md:hidden text-[#111816] dark:text-white p-2';
    btn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    return btn;
}

function createMobileMenu() {
    const menu = document.createElement('div');
    menu.id = 'mobile-menu';
    menu.className = 'mobile-menu';
    menu.innerHTML = `
        <div class="p-6">
            <div class="flex justify-between items-center mb-8">
                <h3 class="text-xl font-bold text-[#111816] dark:text-white">Menu</h3>
                <button id="close-menu-btn" class="text-[#111816] dark:text-white">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <nav class="flex flex-col gap-4">
                <a class="text-lg font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200" href="#solutions">Solutions</a>
                <a class="text-lg font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200" href="#robotics">Robotics</a>
                <a class="text-lg font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200" href="#mission">Mission</a>
                <a class="text-lg font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200" href="#blog">Blog</a>
            </nav>
            <div class="mt-8 flex flex-col gap-3">
                <button class="w-full h-10 px-5 rounded-lg bg-[#f0f4f3] hover:bg-[#e0e6e4] dark:bg-[#1E332A] dark:hover:bg-[#2A453A] text-[#111816] dark:text-white text-sm font-bold transition-colors">
                    Log In
                </button>
                <button class="w-full h-10 px-5 rounded-lg bg-primary hover:bg-[#0fb881] text-[#10221c] text-sm font-bold transition-colors">
                    Get the App
                </button>
            </div>
        </div>
    `;
    
    // Add close button event listener
    setTimeout(() => {
        const closeBtn = menu.querySelector('#close-menu-btn');
        closeBtn.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking nav links
        const navLinks = menu.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }, 0);
    
    return menu;
}

function createMobileMenuOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'mobile-menu-overlay';
    overlay.className = 'mobile-menu-overlay';
    return overlay;
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    menu?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Dark Mode Toggle =====
function initDarkModeToggle() {
    // Create dark mode toggle button
    const header = document.querySelector('header .flex .flex.items-center.gap-3');
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'dark-mode-toggle';
    toggleBtn.className = 'hidden sm:flex items-center justify-center h-10 w-10 rounded-lg hover:bg-[#f0f4f3] dark:hover:bg-[#1E332A] transition-colors';
    toggleBtn.innerHTML = '<span class="material-symbols-outlined text-[#111816] dark:text-white">dark_mode</span>';
    
    // Insert before login button
    header.insertBefore(toggleBtn, header.firstChild);
    
    // Event listener
    toggleBtn.addEventListener('click', toggleDarkMode);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateDarkModeIcon();
    } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        updateDarkModeIcon();
    }
}

function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    
    // Save preference
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;
    
    const icon = toggle.querySelector('.material-symbols-outlined');
    const isDark = document.documentElement.classList.contains('dark');
    icon.textContent = isDark ? 'light_mode' : 'dark_mode';
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Add reveal class to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
    
    // Animate feature cards
    const cards = document.querySelectorAll('[class*="bg-white dark:bg-"][class*="rounded-"]');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
        
        card.addEventListener('transitionend', function handler() {
            if (card.classList.contains('active')) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.removeEventListener('transitionend', handler);
            }
        });
    });
}

// ===== Stats Counter Animation =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.glass-panel .text-3xl');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                animateCounter(entry.target);
                entry.target.dataset.counted = 'true';
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/\D/g, ''));
    
    if (isNaN(number)) return;
    
    const duration = 2000;
    const steps = 50;
    const increment = number / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        
        let displayText = Math.floor(current).toString();
        
        // Handle special formats
        if (text.includes('k')) {
            displayText += 'k';
        }
        if (hasPlus) {
            displayText += '+';
        }
        if (hasPercent) {
            displayText += '%';
        }
        if (text.includes('/')) {
            displayText = '24/7';
        }
        
        element.textContent = displayText;
    }, stepDuration);
}

// ===== Parallax Effect =====
function initParallaxEffect() {
    const hero = document.querySelector('section[class*="h-[600px]"]');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = hero.querySelector('.absolute.inset-0');
        
        if (parallax && scrolled < hero.offsetHeight) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ===== Form Validation =====
function initFormValidation() {
    const emailInput = document.querySelector('input[type="email"]');
    const submitBtn = document.querySelector('input[type="email"] + button, input[type="email"] ~ button');
    
    if (!emailInput || !submitBtn) return;
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            showNotification('Please enter your email address', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        submitBtn.innerHTML = '<span class="material-symbols-outlined loading-spinner">refresh</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            emailInput.value = '';
            submitBtn.innerHTML = '<span class="material-symbols-outlined text-lg">arrow_forward</span>';
            submitBtn.disabled = false;
            showNotification('Thanks for subscribing! 🌱', 'success');
        }, 1500);
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== Notifications =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.getElementById('notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md border ${
        type === 'success' ? 'bg-primary/90 border-primary text-[#10221c]' :
        type === 'error' ? 'bg-red-500/90 border-red-600 text-white' :
        'bg-gray-800/90 border-gray-700 text-white'
    } transform translate-x-[400px] transition-transform duration-300`;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Header Scroll Effect =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '';
    }
});

// ===== Add hover effects to buttons =====
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button[class*="bg-primary"], a[class*="bg-primary"]');
    
    buttons.forEach(btn => {
        btn.classList.add('btn-ripple');
    });
});

