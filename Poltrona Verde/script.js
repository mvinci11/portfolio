const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 200); // Ritardo progressivo (200ms tra ogni elemento)
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));