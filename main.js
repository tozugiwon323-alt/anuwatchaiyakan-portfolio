// Main JavaScript for Portfolio Website
// Handles animations, interactions, and dynamic content

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeParticles();
    initializeSkillsChart();
    initializeScrollAnimations();
    initializeTypewriter();
    initializeSkillNodes();
});

// Typewriter Effect Initialization
function initializeTypewriter() {
    // Name typewriter effect
    const nameTyped = new Typed('#typed-name', {
        strings: ['Anuwat Chaiyakan'],
        typeSpeed: 100,
        startDelay: 500,
        showCursor: false,
        onComplete: function() {
            initializeTitleTypewriter();
        }
    });
}

function initializeTitleTypewriter() {
    // Title typewriter effect
    const titleTyped = new Typed('#typed-title', {
        strings: [
            'Software Engineer',
            'Blockchain Developer',
            'AI & Automation Specialist',
            'Full-Stack Developer'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 300,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Particle System using Matter.js
function initializeParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const particleContainer = document.getElementById('particles');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    
    particleContainer.appendChild(canvas);
    
    const particles = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            ctx.fill();
            
            // Draw connections
            particles.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Skills Chart using ECharts
function initializeSkillsChart() {
    const chartDom = document.getElementById('skills-chart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#00d4ff',
            textStyle: {
                color: '#ffffff'
            }
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: '#ffffff'
            }
        },
        series: [
            {
                name: 'Skills',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#ffffff'
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 212, 255, 0.5)'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { 
                        value: 35, 
                        name: 'Blockchain Development',
                        itemStyle: { color: '#00d4ff' }
                    },
                    { 
                        value: 30, 
                        name: 'AI & Automation',
                        itemStyle: { color: '#ffb347' }
                    },
                    { 
                        value: 25, 
                        name: 'Full-Stack Development',
                        itemStyle: { color: '#10b981' }
                    },
                    { 
                        value: 10, 
                        name: 'DevOps & Infrastructure',
                        itemStyle: { color: '#8b5cf6' }
                    }
                ]
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Resize handler
    window.addEventListener('resize', () => {
        myChart.resize();
    });
}

// Skill Nodes Interactive Animation
function initializeSkillNodes() {
    const skillNodes = document.querySelectorAll('.skill-node');
    
    skillNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.2,
                rotate: '5deg',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        node.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotate: '0deg',
                boxShadow: '0 0 0px rgba(0, 212, 255, 0)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        node.addEventListener('click', function() {
            const skillName = this.textContent;
            showSkillDetails(skillName);
        });
    });
}

// Show skill details modal
function showSkillDetails(skillName) {
    const skillDetails = {
        'Solidity': 'Expert in smart contract development with gas optimization and security auditing.',
        'EVM': 'Deep understanding of Ethereum Virtual Machine internals and bytecode.',
        'Hardhat': 'Advanced development environment setup with testing and deployment pipelines.',
        'Ethers.js': 'Library integration for seamless blockchain interaction and wallet connectivity.',
        'DeFi': 'Decentralized finance protocol development and yield farming mechanisms.',
        'NFTs': 'Non-fungible token standards and marketplace implementation.',
        'TypeScript': 'Strong typing for large-scale applications and API development.',
        'Node.js': 'Backend development with Express.js and NestJS frameworks.',
        'Python': 'AI/ML model orchestration and data processing pipelines.',
        'NLP': 'Natural language processing for intelligent automation systems.',
        'Agents': 'Multi-agent AI systems with unique personalities and capabilities.',
        'Automation': 'CI/CD pipelines and intelligent workflow automation.',
        'React': 'Modern frontend development with component-based architecture.',
        'Next.js': 'Server-side rendering and full-stack React applications.',
        'PostgreSQL': 'Relational database design and optimization.',
        'Docker': 'Containerization and microservices architecture.',
        'Kubernetes': 'Orchestration and scaling of containerized applications.',
        'CI/CD': 'Continuous integration and deployment automation.'
    };
    
    const detail = skillDetails[skillName] || 'Advanced expertise in this technology.';
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-blue-400">
            <h3 class="text-2xl font-bold text-blue-400 mb-4">${skillName}</h3>
            <p class="text-gray-300 mb-6">${detail}</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal appearance
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    anime({
        targets: modal.querySelector('div'),
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutBack'
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add stagger animation for multiple elements
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 600,
                    delay: index * 100,
                    easing: 'easeOutQuad'
                });
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Main Animations Initialization
function initializeAnimations() {
    // Animate navigation on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const nav = document.querySelector('nav');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        anime({
            targets: '.hero-bg',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuad'
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    // Implementation for mobile menu
    console.log('Mobile menu toggle - implement as needed');
}

// Contact Form Handler (for future use)
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully!', 'success');
        event.target.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    // Auto remove
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => notification.remove()
        });
    }, 3000);
}

// Utility Functions
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

// Performance optimization
const debouncedResize = debounce(() => {
    // Handle resize events
    if (typeof myChart !== 'undefined') {
        myChart.resize();
    }
}, 250);

window.addEventListener('resize', debouncedResize);