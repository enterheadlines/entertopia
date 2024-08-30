
function search() {
    const input = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll('.row').forEach(dock => 
    dock.style.display = (dock.querySelector('p')?.innerText.toLowerCase().includes(input)) ? "" : "none"
    );
    }