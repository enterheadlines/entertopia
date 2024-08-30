  // Wait for the DOM to fully load
  document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('categorySelect');

    // Function to filter games based on dropdown selection
    function filterGames() {
        const selectedCategory = categorySelect.value;
        const games = document.querySelectorAll('.container > .row');

        games.forEach(game => {
            if (selectedCategory === "" || game.getAttribute('data-category') === selectedCategory) {
                game.classList.remove('hidden');
            } else {
                game.classList.add('hidden');
            }
        });
    }

    // Setting up event listener for dropdown changes
    categorySelect.addEventListener('change', filterGames);
});