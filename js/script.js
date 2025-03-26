document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".sidebar input[type='checkbox']");
    const products = document.querySelectorAll(".product-card");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            let selectedFilters = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.nextSibling.textContent.trim().toLowerCase());

            products.forEach(product => {
                let productName = product.querySelector("h3").textContent.toLowerCase();
                if (selectedFilters.length === 0 || selectedFilters.some(filter => productName.includes(filter))) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});
