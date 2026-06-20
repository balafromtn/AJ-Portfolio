// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Horizontal Scroll for Featured Works
const horizontalScrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
const horizontalScrollContent = document.querySelector('.horizontal-scroll-content');

if (horizontalScrollWrapper && horizontalScrollContent) {
    // Calculate the total width to scroll
    function getScrollAmount() {
        return -(horizontalScrollContent.scrollWidth - window.innerWidth);
    }

    const tween = gsap.to(horizontalScrollContent, {
        x: getScrollAmount,
        ease: "none"
    });

    ScrollTrigger.create({
        trigger: horizontalScrollWrapper,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
    });
}

// Number Counters Animation
const numbers = document.querySelectorAll('.stat-number');

numbers.forEach(num => {
    ScrollTrigger.create({
        trigger: num,
        start: "top 85%",
        onEnter: () => {
            let target = parseInt(num.getAttribute('data-target'));
            gsap.to(num, {
                innerHTML: target,
                duration: 2.5,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
        },
        once: true
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Floating icons — float by default (CSS animation), follow cursor when hovering hero
const heroSection = document.querySelector('.hero-section');
const floatingIcons = document.querySelectorAll('.floating-icon');

// Base rotations to preserve icon tilt
const iconBaseRotations = {
    'icon-picsart': 12,
    'icon-capcut': -15,
    'icon-alight': 10
};

function getBaseRotation(icon) {
    for (const [cls, rot] of Object.entries(iconBaseRotations)) {
        if (icon.classList.contains(cls)) return rot;
    }
    return 0;
}

if (heroSection) {
    // On cursor enter — pause CSS float, let GSAP control
    heroSection.addEventListener('mouseenter', () => {
        floatingIcons.forEach(icon => {
            icon.style.animationPlayState = 'paused';
        });
    });

    // On cursor move — move icons based on cursor position
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width * 2 - 1;
        const normY = (e.clientY - rect.top) / rect.height * 2 - 1;

        floatingIcons.forEach(icon => {
            const speed = parseFloat(icon.getAttribute('data-speed')) || 3;
            const moveX = normX * speed * 15;
            const moveY = normY * speed * 10;
            const baseRot = getBaseRotation(icon);
            const tilt = normX * speed * 3;

            gsap.to(icon, {
                x: moveX,
                y: moveY,
                rotation: baseRot + tilt,
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto"
            });
        });
    });

    // On cursor leave — spring back and resume CSS float
    heroSection.addEventListener('mouseleave', () => {
        floatingIcons.forEach(icon => {
            const baseRot = getBaseRotation(icon);
            gsap.to(icon, {
                x: 0,
                y: 0,
                rotation: baseRot,
                duration: 1,
                ease: "elastic.out(1, 0.4)",
                overwrite: "auto",
                onComplete: () => {
                    // Resume CSS float animation
                    icon.style.animationPlayState = 'running';
                }
            });
        });
    });
}

// Testimonial Cards Fade in
gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});
