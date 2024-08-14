
function timeFunction() {
	var currentTime = new Date();


	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

	var ampm = hours >= 12 ? "PM" : "AM";

	hours = (hours % 12) || 12;
	
	hours = (hours < 10 ? "0" : "") + hours;
	minutes = (minutes < 10 ? "0" : "") + minutes;
	seconds = (seconds < 10 ? "0" : "") + seconds;

	document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + ampm ;
}
setInterval(timeFunction, 1000);





document.addEventListener("DOMContentLoaded", function() {



    function createButton(text, iconSrc, onClickHandler) {
        const button = document.createElement("button");
        button.innerHTML = `<img src='${iconSrc}' style='height: 20px; vertical-align: middle; margin-right: 5px;'/>${text}`;
        button.style.position = "fixed";
        button.style.top = `${20 + 50 * buttonCount}px`;
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

    createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAvElEQVRIie3TIU7DUBzH8c/IMkOCQaBn5lDcAIfG7RJLMNhdgQPMcQYcGsMFMDgSLAliiFFM/wk06/raPlT7S76u+by8NI+h7aYs+yZYoyi7w1EufIrNLzy6x6wvfoyHPXj0iJOu+CmeDuDRM87a4nO8JODRKxap+DneWuDROy6a8Et8dMCjT1zV4dfY9sCjLyyr+Aq7DHj0jVvlA6quSP1ZNftjZnuNdZu2+LZ626Sb/vsNxgMGcMC4xv0AJqduYOAOwcoAAAAASUVORK5CYII=", function() {
        window.location.href = "./index.html";
    });

    createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFXElEQVR4nO2dTWgeRRiAn1STqC2BkogVGhAriPQg/gSbBv9LRTwoLYp40IOiWA+1JxGh5uAP/t56kVboqepN68EgKFqIUBWEioI1GGi1rdTESrVNoa4H35WPz2/32515Z3ZmMw/MJd+3u+/Mk3dmf76ZhUQikUgkEolEIpFIJBLhMGCwzSSwG9gF7AGWHMTVBJcAm4ANwA3AOLBGPhsEfgV+AQ4DB4DPgbmGY2YSOAVkUo4A24DhpgOz4FbgXeDPjnpVKc83HXi3jCxyMTcDB2tKiEJGbGJGgL3A37HK2FBRRgxirpN+30REEDKqZkaZmO3ARU1XBLgd+D1mGessZXSLeajBukwBZ2KWATAEzCsJyYAF2adv1gEnYpeRs01RSAbc5Tn+IeCQRbw7PcfbF+0s2e05/ufakhmdaGbJSbnq9cFlwF9tyYxOhmVQjq3b2tlGGTmaWeKj2xow/CeKQgbKWeKj27raIK4DjmOqxIqK31sCXlY65ihwh9K+ipgy2GZ9jfYwZQTYWPaFOgHsAY7axwTA/Ur7KeJKg21WA9c6iCVnBJgBntDcqdZYclICdMUuw7h2OIpnBJiVY8xr7lhzLJl1KOUtw5jedxBLp4y8qNb7KcUzrq+kq9DmBcN4FoELFONYCXzW4zjXKB5D/brERabYdK3XK8XQKzPysknpGP+xGngY2C9nYKFlyoRFLBrjSFFm5GWzwjEKGQUeBT4CzgWSKYPAacM4bMeRsszIy21K9eyLrRxNKe8YCrEZR6rIyCSDvTMKvNKglLststVkHKkqI3N0IlOZaYMG+UJBygMWQhal69ohz+H7XUDXkXHMsl4q+Jay1XI86y4LJYLqyMiAD3Wa1B5fUrRl9BNUR0YGPO6mec1wLcWHDJtyHrjcbRPXx0TKYxX2G7qMDPjAffOa8UyNSlR5th2DjMzwsYA3qmTKdIX9xCLjE+ctqkBZprQpM85q31B0Sa9MaVNmZMCzzltRmc5MaVNmZHLdoXlL3xvTtC8zvpQ7v60lJhmzwKVNN5hLYpLxHnBx0w3mklhkLMitEZPJtNHgW8aP/DuWHa6xzQngRWDMtrKhm9wK7PP4A+05eZp3VNpmQiaHTsk8kzGZDbYot9EPyqPamRZNDy/Ed2b8BFzRdKVDJckIiCQjIJKMgEgyAiLJCIgkIyCSjIBo4gp8bYW4Wn13tohQM2OLLFR2o4c2CIaQZeRxLS4XKTHIyJaLlJhktF5KjDJaKyVmGa2T0gYZrZHSJhmdUhqZ/WRLG2VEK6XNMqKTshxkRCNlOckIXkqoNwoHge8dx/KbzDsMhlBl5IzLNstCykaZ++BLhunzjLU1f/hmUhrvvsaA4wFnRjetz5Q3IsiMbnxkyjHLfxwjVlVYE/dbWfPENotsM6MbH5nysWK8lbivJJhTss5IzhDweiAycnxIudNB3IW8VBLIkz2+PwB8GoiMHNdS9jqM/X+8XRJI0UoF2wOSkeNSys8mAblep7aTqlMf5mUJPK0lacs4Ii96cfG2tTUm0yhMhRwv+WxLj78NyLjTjzmZj6G6lGofXElZAVyovM9C7i1J1T+Aezq+Owy8GVA3VYR297XgM/iVFU57v5OZRVXebtO0jJxxy5eGdZb9voN/TSnwUGTkaEl5xHfgo3JV2iYZObZSfvA5fnQyaXFzMfQfPpuOKeeAW5oMfLMMYHWCng1xZbUejNd8qdhZ4MGmgwa4SgaxfgGflnXZQ3sDaBmr5EL4fJ+6HQJuajrYbiaAV4Gv5exqSc7zZ4Cn5UVdsbJe6vaN9AhnpNvdJ+9D8XmRnUgkEolEIpFIJBKJRMIL/wC4eyl/1IZ1rgAAAABJRU5ErkJggg==", function() {
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

    createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABhJREFUCNdjYIAC/v8fwJhHwgAFkysOBQCx1RPhvIcdyQAAAABJRU5ErkJggg==", function() {
        window.location.href = "./games.html";
    });

    createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAm0lEQVRIiWNgGAUUggIGBob/ZGCcIJ2BgSENTWwetSywZGBg+MHAwPCLgYHBlkwf47RAgoGB4QmSgucMDAzS1LKAlYGB4RAWbx5nYGBgp4YFM/GE5QJqWECSAlItYKLAMKLAqAXDw4KZWFIPjD8DXTE5yRRXRj2GLaOSmw+ILmooyWgWxBSWpBbLi9H0p2Ep7imy4D+0UhoF5AMArsRry92HIzYAAAAASUVORK5CYII=", function() {
        window.location.reload();
    });

    // Auto hide them 
    document.getElementById("option").style.display = "none";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";

    setInterval(function() {
        // if buttons are hidden, shrink "options" to "<"

    }, 100);
});