document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector(".accordion-content");
            const arrow = this.querySelector(".arrow");

            if (accordionContent.classList.contains("active")) {
                accordionContent.classList.remove("active");
                arrow.classList.remove("rotate-down");
            } else {
                const activeContent = document.querySelector(".accordion-content.active");
                const activeArrow = document.querySelector(".arrow.rotate-down");
                if (activeContent) {
                    activeContent.classList.remove("active");
                    activeArrow.classList.remove("rotate-down");
                }
                accordionContent.classList.add("active");
                arrow.classList.add("rotate-down");
            }
        });
    });
});