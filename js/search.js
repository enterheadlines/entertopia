const searchInput = document.getElementById('search');

function filterGames() {
    const filter = searchInput.value.toLowerCase();
    const games = document.querySelectorAll('.row > .column');

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