document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".about, .services, .contact");

    function revealSections() {
        sections.forEach((section) => {
            let sectionPos = section.getBoundingClientRect().top;
            let screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); 
});
