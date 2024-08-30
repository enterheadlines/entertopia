const searchbar = document.querySelector(".search");
const gamediv = document.querySelector(".row");
const games = gamediv.querySelectorAll(".dock")

searchbar.addEventListener("input", search);

function search() {
  const searchQuery = searchbar.value.trim().toLowerCase();

  games.forEach((game) => {
    const gameName = game.textContent.toLowerCase();
    if (gameName.includes(searchQuery)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}

