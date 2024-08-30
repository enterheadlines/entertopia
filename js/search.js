function filterNames() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const names = document.getElementsByClassName('dock');
    
    for (let i = 0; i < names.length; i++) {
        const name = names[i].getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            names[i].style.display = ""; // Show the div
        } else {
            names[i].style.display = "none"; // Hide the div
        }
    }
}