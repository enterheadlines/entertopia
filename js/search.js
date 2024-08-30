const toggleButton = document.getElementById('toggleButton');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const names = document.querySelectorAll('.name');

// Toggle the search bar visibility
toggleButton.addEventListener('click', () => {
    searchContainer.classList.toggle('hidden');
});

// Search and filter names
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();

    names.forEach(name => {
        if (name.textContent.toLowerCase().includes(query)) {
            name.style.display = 'block'; // Show matching name
        } else {
            name.style.display = 'none'; // Hide non-matching name
        }
    });

    // Clear the input field after searching
    searchInput.value = '';
});