document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('categorySelect');

    function filterGames() {
        const selectedCategory = categorySelect.value;
        const games = document.querySelectorAll('.row > .column');

        games.forEach(game => {
            if (selectedCategory === "" || game.getAttribute('data-category') === selectedCategory) {
                game.classList.remove('hidden');
            } else {
                game.classList.add('hidden');
            }
        });
    }

    categorySelect.addEventListener('change', filterGames);
});