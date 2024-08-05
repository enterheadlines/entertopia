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

function cloakPage(selectedCloak) {
  const tabIcons = {
      'google': '/google.webp',
      'docs': '/google-docs.webp',
      'drive': '/google-drive.webp',
      'classroom': '/home.webp',
      'none': '/Screenshot 2024-05-30 20.33.35.png'
  };

  const tabTitles = {
      'google': 'Google',
      'docs': 'Google Docs',
      'drive': 'Google Drive',
      'classroom': 'Google Classroom',
      'none': 'Entertopia'
  };

  document.body.classList.remove('cloak-google', 'cloak-googledrive', 'cloak-docs', 'cloak-classroom', 'cloak-chrome', 'cloak-none');
  if (selectedCloak !== 'none') {
      document.body.classList.add('cloak-' + selectedCloak);
      const titleFormatted = selectedCloak.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      document.title = titleFormatted;

      const faviconPath = `/assets/img/cloak/${selectedCloak}.png`;
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
          favicon.setAttribute('href', faviconPath);
      }


      const tabIcon = tabIcons[selectedCloak];
      if (tabIcon) {
          const tabIconLink = document.querySelector('link[rel="icon"]');
          if (tabIconLink) {
              tabIconLink.setAttribute('href', tabIcon);
          }
      }


      const tabTitle = tabTitles[selectedCloak];
      if (tabTitle) {
          document.title = tabTitle;
      }

      localStorage.setItem('Entertopia||cloak', selectedCloak);
  } else {
      document.title = "Entertopia";

      const defaultFaviconPath = '/assets/favicon.ico';
      const defaultFavicon = document.querySelector('link[rel="icon"]');
      if (defaultFavicon) {
          defaultFavicon.setAttribute('href', defaultFaviconPath);
      }
  }
}
