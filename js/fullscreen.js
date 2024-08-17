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


updateText(10000);

setInterval(updateText);

console.log(`
███████╗███╗░░██╗████████╗███████╗██████╗░████████╗░█████╗░██████╗░██╗░█████╗░
██╔════╝████╗░██║╚══██╔══╝██╔════╝██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██║██╔══██╗
█████╗░░██╔██╗██║░░░██║░░░█████╗░░██████╔╝░░░██║░░░██║░░██║██████╔╝██║███████║
██╔══╝░░██║╚████║░░░██║░░░██╔══╝░░██╔══██╗░░░██║░░░██║░░██║██╔═══╝░██║██╔══██║
███████╗██║░╚███║░░░██║░░░███████╗██║░░██║░░░██║░░░╚█████╔╝██║░░░░░██║██║░░██║
╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝
    Version 5.0`);

