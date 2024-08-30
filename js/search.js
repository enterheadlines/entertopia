
function search() {
    const input = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll('.dock').forEach(dock => 
    dock.style.display = (dock.querySelector('div')?.innerText.toLowerCase().includes(input)) ? "" : "none"
    );
    }