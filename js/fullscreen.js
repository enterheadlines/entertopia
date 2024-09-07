function toggleFullscreen() {
    let elem = document.querySelector("iframe");
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
        );
      });
    } else {
      document.exitFullscreen();
    }
  }


  function refreshIframe() {
    var ifr = document.getElementsByName('iframe')[0];
    ifr.src = ifr.src;
}

console.log("ENTERTOPIA")


    // Function to change the background color and save it to local storage
    function changeColor(color) {
      document.body.style.backgroundColor = color;
      localStorage.setItem('backgroundColor', color); // Save color to local storage
  }

  // Function to reset the background color and clear local storage
  function resetColor() {
      document.body.style.backgroundColor = '';
      localStorage.removeItem('backgroundColor'); // Clear the saved color
  }

  // On page load, set the background color from local storage if available
  window.onload = function() {
      const savedColor = localStorage.getItem('backgroundColor');
      if (savedColor) {
          document.body.style.backgroundColor = savedColor;
      }
  };

  document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        document.body.classList.add('loading');
        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 100);
            }, 100);
        });
    } else {
        console.error('Loading screen element not found');
    }
});

document.getElementById('show-console').addEventListener('click', function() {
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function() {
      eruda.init();
  };
});


 // Function to change favicon from a file
 function changeFavicon(file) {
  const reader = new FileReader();
  reader.onload = function(event) {
      setFavicon(event.target.result);
  };
  reader.readAsDataURL(file); // Read the file as a data URL
}

// Function to change favicon from a URL
function changeFaviconFromURL(url) {
  setFavicon(url);
}

// Helper function to set favicon
function setFavicon(href) {
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = href; // Use the favicon URL
  document.getElementsByTagName('head')[0].appendChild(link);
  localStorage.setItem('favicon', href); // Save favicon to local storage
}

// Function to update title and favicon
function updateTitleAndFavicon() {
  const newTitle = document.getElementById('titleInput').value;
  const faviconFile = document.getElementById('faviconInput').files[0];
  const predefinedFavicon = document.getElementById('predefinedFavicon').value;

  // Change the document title
  document.title = newTitle;
  localStorage.setItem('title', newTitle); // Save title to local storage

  // Change the favicon based on user selection
  if (faviconFile) {
      changeFavicon(faviconFile);
  } else if (predefinedFavicon) {
      changeFaviconFromURL(predefinedFavicon);
  }
}

// Function to load saved title and favicon from local storage
function loadSavedSettings() {
  const savedTitle = localStorage.getItem('title');
  const savedFavicon = localStorage.getItem('favicon');

  if (savedTitle) {
      document.title = savedTitle;
      document.getElementById('pageTitle').textContent = savedTitle; // Update the title element
      document.getElementById('titleInput').value = savedTitle; // Pre-fill the input
  }

  if (savedFavicon) {
      setFavicon(savedFavicon); // Set the saved favicon
  }
}

// Load saved settings on page load
window.onload = loadSavedSettings;