document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-btn]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    // If the click is not on a dropdown button, and it is inside a dropdown,
    // then we don't want to do anything. This is because we don't want to
    // close all dropdowns when we click on a dropdown item.

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropDown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropDown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
});