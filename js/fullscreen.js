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


function createButton(text, iconSrc, onClickHandler) {
  const button = document.createElement("button");
  button.innerHTML = `<img src='${iconSrc}' style='height: 20px; vertical-align: middle; margin-right: 5px;'/>${text}`;
  button.style.position = "fixed";
  button.style.top = `${100 + 50 * buttonCount}px`;
  button.style.left = "20px";
  button.style.zIndex = "285239232423";
  button.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  button.style.color = "white";
  button.style.padding = "10px";
  button.style.border = "none";
  button.style.opacity = "0.5";
  /* Make it the opisite color from its background */
  button.style.filter = "invert(1)";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.onclick = onClickHandler;
  // append to #root
  document.getElementById("root").style.backgroundColor = "black";
  document.getElementById("root").appendChild(button);
  buttonCount++;
  return button;
}

let buttonCount = 0;

/*const homeButton = createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABj0lEQVRIid2VvUoDQRSFPxQxoKAWAd/AQtRY+FNmLfQZXCxF1trCd0gIxC4S9Tn0Fax8gMRKg2gh2hiSyNqcgetmsptEGz0w7Ow9Z+7cuXd+4L8jZ/p5IFbLD9D0YSKFC4F74Fj/y4Zz/Uia/dFjhytF2wHqQMOsoCFbR/+X40wQGIdZLRjWaajIA+BGg9tAFdgyDreBM3ExcA3saGw4yHkOaCUiewBWjMbZHValsWNaaYWPTF4/5MAiOYGbpG3qFWWlqS5x1dimgIqZoCybw5ns9TTHeeXe7ZYNw1U8hS0bftPsriBxTvqW79qM4V48/LPhZz08ZBw0hyVg3mNfEDc0kinaVWo6nuhiU9QKsDdMihxckT/17QE1oAQ8qZWAc3FWm1pkEts0Bm6BQoq+II1d0cBt6jtoj56zYLHmGfPtoE0acU/kG3ACLALrwKFy+gq8A9OynypNc7pWjpSqGnCXlSp0t/z4skvbpgf6doELoGm4pmzdhHYkhEqZe3CKJuKibJE0Yz04/MaT+ffxBQ4VqzV0SBH2AAAAAElFTkSuQmCC", function() {
  // toggle options
  if (document.getElementById("option").style.display === "none") {
      document.getElementById("option").style.opacity = "0";
      document.getElementById("option1").style.opacity = "0.5";
      document.getElementById("option2").style.opacity = "1";
  }
  else {
      document.getElementById("option").style.display = "none";
      document.getElementById("option1").style.display = "none";
      document.getElementById("option2").style.display = "none";
  }
}); */

createButton("", "home.png", function() {
  window.location.href = "./index.html";
});

createButton("", "elements.png", function() {
  // Check if Eruda is already loaded
      // Initialize a variable to keep track of Eruda's visibility state
window.isErudaVisible = false;

if (window.eruda) {
// Toggle Eruda's visibility based on our custom variable
if (window.isErudaVisible) {
eruda.hide();
window.isErudaVisible = false; // Update the visibility state
} else {
eruda.show();
window.isErudaVisible = true; // Update the visibility state
}
} else {
// If Eruda is not loaded, load it from CDN
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/eruda';
script.onload = function() {
eruda.init();
// Optionally configure Eruda here
window.isErudaVisible = true; // Initialize the visibility state
};
document.body.appendChild(script);
}

    

})

createButton("", "apps.png", function() {
  window.location.href = "./general/utilities.html";
});

createButton("", "reload.png", function() {
  window.location.reload();
});

// Auto hide them 
document.getElementById("option").style.display = "none";
document.getElementById("option1").style.display = "none";
document.getElementById("option2").style.display = "none";

setInterval(function() {
  // if buttons are hidden, shrink "options" to "<"

}, 100);;