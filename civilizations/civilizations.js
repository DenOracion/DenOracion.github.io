// Track current filter selections
let currentDLC = "All";
let currentVictory = "All";

/**
 * Filters civilization cards based on selected DLC and Victory type.
 * @param {string} dlc - The selected DLC filter ("All" means no filter).
 * @param {string} victory - The selected Victory type filter ("All" means no filter).
 */

function filterCivs(dlc, victory) {
  // Update the current filter state variables
  currentDLC = dlc;
  currentVictory = victory;

  // Select all civ cards on the page
  const civCards = document.querySelectorAll(".civ-card");

  civCards.forEach(card => {
    // Get the DLC tag and Victory type(s) of this card from data attributes
    const civDLC = card.getAttribute("data-dlc");
    const civVictories = card.getAttribute("data-victory").split(',').map(v => v.trim());

    // Determine if card matches the current DLC filter
    const matchesDLC = (dlc === "All" || civDLC === dlc);
    // Determine if card matches the current Victory filter
    const matchesVictory = (victory === "All" || civVictories.includes(victory));

    // Show the card only if it matches both filters, otherwise hide it
    card.style.display = (matchesDLC && matchesVictory) ? "block" : "none";
  });
}

/**
 * Resets the filters to default ("All") and applies the filter.
 */
function resetFilters() {
  currentDLC = "All";
  currentVictory = "All";
  filterCivs(currentDLC, currentVictory);
}

// --- IMPORTANT ---
// Call filterCivs on page load to initialize display correctly and avoid layout issues
window.addEventListener('DOMContentLoaded', () => {
  filterCivs(currentDLC, currentVictory);
});
