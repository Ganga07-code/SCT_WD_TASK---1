document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".nav-link");

    // 🔹 Navbar style on scroll
    function handleScroll() {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
        revealSections();
        highlightNav();
    }

    window.addEventListener("scroll", handleScroll);

    // 🔹 Mobile menu toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // 🔹 Section reveal animation
    function revealSections() {
        const triggerBottom = window.innerHeight - 100;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            }
        });
    }

    // 🔹 Active nav highlight
    function highlightNav() {
        let scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navItems.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }

    // Run once on load
    revealSections();
    highlightNav();
    handleScroll();
});
