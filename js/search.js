document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const games = document.querySelectorAll('.row > .column');

    games.forEach(game => {
        if (game.textContent.toLowerCase().includes(filter)) {
            game.classList.remove('hidden');
        } else {
            game.classList.add('hidden');
        }
    });
});