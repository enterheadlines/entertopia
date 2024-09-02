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