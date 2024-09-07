document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value;
    const apiKey = 'AIzaSyBpC4Rc2m10OmciB1Ta5GbORxqGP3EGXvM'; // Replace with your API key
    const searchEngineId = 'e1249afade001443c'; // Replace with your Search Engine ID
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${searchEngineId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => console.error('Error:', error));
});

function displayResults(data) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (data.items) {
        data.items.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            resultItem.innerHTML = `<h3><a href="${item.link}" target="_blank">${item.title}</a></h3><p>${item.snippet}</p>`;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
    }
}