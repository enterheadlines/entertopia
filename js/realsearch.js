// Function to initialize the page
function initPage() {
    const gameCards = document.getElementsByClassName('column');
    const pinnedGames = JSON.parse(localStorage.getItem('pinnedGames')) || [];
}

// Search function
function searchGames() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const gameCards = document.getElementsByClassName('column');

    for (let i = 0; i < gameCards.length; i++) {
        const gameCard = gameCards[i];
        const title = gameCard.getElementsByTagName('p')[0].innerText.toLowerCase();
        const description = gameCard.getElementsByTagName('p')[0].innerText.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            gameCard.style.display = '';
        } else {
            gameCard.style.display = 'none';
        }
    }
}

// Initialize the page on load
window.onload = initPage;