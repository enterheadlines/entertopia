function fetchTmdbId() {
    let search = document.getElementById("searchbar").value;
    let link;
    let poster;
    let encodedSearch = encodeURIComponent(search);
    let url =
      "https://api.themoviedb.org/3/search/multi?api_key=66ca93aa37686b7a47476585271855c6&language=en-US&query=" +
      encodedSearch +
      "&page=1&include_adult=false";
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = "";
  
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const results = data.results;
          results.forEach(function (movie) {
            let poster;
            if (movie.poster_path === null || !movie.poster_path) {
              poster = "/img/no-media.svg";
            } else {
              poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
            }
  
            let gameHtml;
            if (movie.media_type === "tv") {
              gameHtml = `<div class="card" style="padding-top: 5px">
                <a onclick="promptForSeasonAndEpisode(${movie.id})"> 
                  <div class="image-container">
                    <img loading="eager" src="${poster}" style="border-radius: 25px">
                    <p class="item-name">${movie.name || movie.title}</p> 
                  </div>
                </a>
              </div>`;
            } else if (movie.media_type === "movie") {
              link = getRandomLink(movie.id);
              gameHtml = `<div class="card" style="padding-top: 5px">
                <a onclick="hire('${link}');"> 
                  <div class="image-container">
                    <img loading="eager" src="${poster}" style="border-radius: 25px">
                    <p class="item-name">${movie.name || movie.title}</p> 
                  </div>
                </a>
              </div>`;
            }
            gameContainer.insertAdjacentHTML("beforeend", gameHtml);
          });
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function promptForSeasonAndEpisode(videoId) {
    const season = prompt("Enter season number:");
    const episode = prompt("Enter episode number:");
    const link = getRandomLink(videoId, season, episode);
    hire(link);
  }
  
  function getRandomLink(videoId, season = null, episode = null) {
    const links = [
      "https://multiembed.mov/",
      "https://amethyst-liane-11.tiiny.io/",
      "https://lime-valaree-4.tiiny.io/",
    ];
    const randomLink = links[Math.floor(Math.random() * links.length)];
    if (season !== null && episode !== null) {
      return `${randomLink}?video_id=${videoId}&tmdb=1&s=${season}&e=${episode}`;
    } else {
      return `${randomLink}?video_id=${videoId}&tmdb=1`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let cooldown = false;
  
    document
      .getElementById("searchbar")
      .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          if (cooldown) {
            document.getElementById("cooldownNotice").style.display = "block";
          } else {
            fetchTmdbId();
            document.getElementById("cooldownNotice").style.display = "none";
            cooldown = true;
            setTimeout(function () {
              cooldown = false;
              document.getElementById("cooldownNotice").style.display = "none";
            }, 3000);
          }
        }
      });
  });


  function hire(value) {
    let iframe = document.querySelector(".iframe.active");
  
    window.navigator.serviceWorker
      .register("/assets/uv/sw.js", {
        scope: __uv$config.prefix,
      })
      .then(() => {
        let url = value.trim();
        if (!isUrl(url)) url = "https://duckduckgo.com/?&q=" + url;
        else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "https://" + url;
  
        // Pass the encoded url to the second page
        sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
        location.href = "!";
      });
  }
  
  function isUrl(str = "") {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }