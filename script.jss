document.addEventListener("DOMContentLoaded", function() {
    // Auto-update footer year
    const footerYear = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `© ${currentYear} Saiprathap K R | Designed for Professional Use`;

    // Smooth scrolling for anchor links (if added)
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({ inset-block-start: targetElement.offsetTop, behavior: "smooth" });
            }
        });
    });
});