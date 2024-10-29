document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for nav links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Skill bars animation on scroll
    const skillBars = document.querySelectorAll(".skill-bar .bar");
    function animateSkills() {
        skillBars.forEach(bar => {
            const percent = bar.getAttribute("data-percent");
            if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
                bar.style.width = percent;
            }
        });
    }
    window.addEventListener("scroll", animateSkills);

    // Lightbox for project images
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    document.querySelectorAll(".project-img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            lightbox.style.display = "flex";
        });
    });
    lightbox.addEventListener("click", () => lightbox.style.display = "none");

    // Back to Top button
    const backToTopButton = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
    });
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
