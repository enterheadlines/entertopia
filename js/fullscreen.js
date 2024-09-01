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


let panicKey = 'Escape'; // Default panic key

function changeTitleAndFavicon() {
    // Get the input values
    const newTitle = document.getElementById('titleInput').value;
    const newFavicon = document.getElementById('faviconInput').value;

    // Change the document title
    document.title = newTitle;

    // Change the favicon
    const faviconLink = document.getElementById('favicon');
    faviconLink.href = newFavicon;

    // Update the panic key
    panicKey = document.getElementById('panicKeyInput').value.trim() || 'Escape';
    alert(`Panic key set to: ${panicKey}`);
}

// Add event listener for the panic key
document.onkeydown = function(event) {
    if (event.key === panicKey) {
        window.location.href = 'https://www.google.com';
    }
};