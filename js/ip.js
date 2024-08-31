
 // get user ip
 function getIP() {
    console.log("Getting IP...");
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        console.log("IP: " + ip);
        check(ip);
      })
      .catch(error => {
        console.error("Error getting IP:", error);
      });
  }
  
  function check(ip) {
    if (localStorage.getItem("activated") == "true") {
      let ips = localStorage.getItem("ips");
      if (ips) {
        ips = ips.split(",");
        if (ips.includes("1")) {
           console.log("SKIBIDITOILETRIZZ");
        } else {
          if (ips.includes(ip)) {
            // Do something if IP is found
          } else {
            // Handle unauthorized access
            alert("You aren't authorized.");
            // Redirect unauthorized user
            window.location.href = "https://stackoverflow.com";
          }
        }
      } else {
        // Handle case where 'ips' is not in local storage
        console.error("No IPs found in local storage.");
      }
    } else {
      // Handle case where 'activated' is not in local storage
      console.error("'activated' flag not found in local storage.");
    }
  }
  
  // Call the function to start the process
  getIP();
  
  
   getIP()