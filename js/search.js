// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the search input field
    const searchInput = document.getElementById('search');

    // Function to filter games
    function filterGames() {
        const filter = searchInput.value.toLowerCase();
        const games = document.querySelectorAll('.column > .row');

        games.forEach(game => {
            if (game.textContent.toLowerCase().includes(filter)) {
                game.classList.remove('hidden');
            } else {
                game.classList.add('hidden');
            }
        });
    }

    // Setting up DOM manipulation for input changes
    searchInput.oninput = filterGames;
});