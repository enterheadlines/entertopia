const gameList = document.getElementById('gameList');
let columns = Array.from(gameList.children);
const initialOrder = columns.map(column => column.getAttribute('data-game'));
let pinnedGames = JSON.parse(localStorage.getItem('pinnedGames')) || [];

function updateGameList() {
    // Clear the list and rebuild it
    gameList.innerHTML = '';

    // Add pinned games first
    pinnedGames.forEach(game => {
        const column = columns.find(col => col.getAttribute('data-game') === game);
        if (column) {
            gameList.appendChild(column);
        }
    });

    // Add unpinned games in original order
    initialOrder.forEach(game => {
        const column = columns.find(col => col.getAttribute('data-game') === game);
        if (column && !pinnedGames.includes(game)) {
            gameList.appendChild(column);
        }
    });

    // Update the pin icon state
    columns.forEach(column => {
        const gameName = column.getAttribute('data-game');
        const pinIcon = column.querySelector('.pin-icon');
        pinIcon.textContent = pinnedGames.includes(gameName) ? '📍' : '📌'; // Use filled or unfilled pin
    });
}

// Initial load
updateGameList();

document.querySelectorAll('.pin-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const column = this.parentElement;
        const gameName = column.getAttribute('data-game');

        if (pinnedGames.includes(gameName)) {
            // Unpin the item
            pinnedGames.splice(pinnedGames.indexOf(gameName), 1); // remove from array
        } else {
            // Pin the item
            pinnedGames.push(gameName); // add to array
        }

        // Save the updated pinned games list to localStorage
        localStorage.setItem('pinnedGames', JSON.stringify(pinnedGames));

        // Update the game list display
        updateGameList();
    });
});