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

// Parallax effect on Hero floating icons
const heroSection = document.querySelector('.hero-section');
const floatingIcons = document.querySelectorAll('.floating-icon');

if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;

        floatingIcons.forEach(icon => {
            gsap.to(icon, {
                x: x,
                y: y,
                duration: 1,
                ease: "power1.out"
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
