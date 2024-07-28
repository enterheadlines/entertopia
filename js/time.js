
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

document.addEventListener('DOMContentLoaded', function() {
	setInterval(updateTheme, 1000);
});

function updateTheme() {
if (localStorage.getItem("theme") != null) {
var theme = localStorage.getItem("theme");
// Edit the body's background gradient based on the theme
if (theme == "light") {
	document.body.style.background = "linear-gradient(to right, #b6fbff, #ffffff)"; // light blue to white
} else if (theme == "dark") {
	document.body.style.background = "linear-gradient(to right, #333333, #000000)"; // dark grey to dark blue
} else if (theme == "red") {
	document.body.style.background = "linear-gradient(to right, #000000, red)"; // black to dark grey
} else if (theme == "purple") {
	document.body.style.background = "linear-gradient(to right, #8e44ad, #c154c1)"; // dark purple to light purple
} else if (theme == "blue") {
	document.body.style.background = "linear-gradient(to right, #2c3e50, #4ca1af)"; // darker blue to lighter blue
}
}
}
