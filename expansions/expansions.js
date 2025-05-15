// Toggle the display of the features section
document.querySelectorAll('.toggle-features').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // Use computed style to check visibility
        const isVisible = window.getComputedStyle(targetElement).display === 'block';

        if (isVisible) {
            targetElement.style.display = 'none';
            button.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
        } else {
            targetElement.style.display = 'block';
            button.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
        }
    });
});

// Toggle the Civs & Leaders section
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        const isVisible = window.getComputedStyle(content).display === 'block';

        if (isVisible) {
            content.style.display = 'none';
            button.textContent = 'Show Civs & Leaders';
        } else {
            content.style.display = 'block';
            button.textContent = 'Hide Civs & Leaders';
        }
    });
});

