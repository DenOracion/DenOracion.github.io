/**
 * Civilization VI Store Page Tab Navigation
 * 
 * This script handles the tab functionality for the Civilization VI store page,
 * allowing users to switch between different product editions.
 */

// Wait until the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all tab buttons and tab content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Loop through each tab button and add a click event listener
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'active' class from all buttons and content sections
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add the 'active' class to the clicked button
            button.classList.add('active');
            
            // Get the associated tab content ID from the button's data attribute
            const tabId = button.getAttribute('data-tab');
            
            // Add the 'active' class to the corresponding tab content section
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Optional: Enable keyboard navigation using arrow keys for accessibility
    document.addEventListener('keydown', function(e) {
        // Proceed only if a tab button currently has focus
        if (document.activeElement.classList.contains('tab-button')) {
            const currentTab = document.activeElement;
            const tabs = Array.from(tabButtons);
            const currentIndex = tabs.indexOf(currentTab);
            
            // Check if the user pressed the left or right arrow key
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                let newIndex;

                // Move focus to the next tab on ArrowRight, loop to start if at end
                if (e.key === 'ArrowRight') {
                    newIndex = (currentIndex + 1) % tabs.length;
                } 
                // Move focus to the previous tab on ArrowLeft, loop to end if at start
                else {
                    newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                }
                
                // Focus and trigger a click on the new tab button
                tabs[newIndex].focus();
                tabs[newIndex].click();
                
                // Prevent default scroll behavior for arrow keys
                e.preventDefault();
            }
        }
    });
});