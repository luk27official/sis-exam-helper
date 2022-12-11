var minutes = 00; // tedy zapni se v 00 minut
var hours = 19; // tedy zapni se v 19h
var seconds = 00; // tedy zapni se v 00 sekund
var color = 1; //0 pro bilou, 1 pro sedou
var rowNumber = 1;
var rowClassName = "row2"; //hleda defaultne sedou

chrome.storage.sync.get([
	'color',
	'rowNumber',
	'hours',
	'minutes',
	'seconds'
   ], function(items) {
	minutes = items.minutes;
	color = items.color;
	rowNumber = items.rowNumber;
	hours = items.hours;
	seconds = items.seconds;
	run();
});

function run() {
	console.log(color, rowNumber, hours, minutes, seconds);

	color == 0 ? rowClassName = "row1" : rowClassName = "row2";

	var date = new Date();
	var currentMinutes = date.getMinutes();
	var currentHours = date.getHours();
	document.getElementsByClassName(rowClassName)[rowNumber-1].children[1].style.backgroundColor = "#ee00ff"; //obarvuje naruzovo ten vybranej element
	if(currentMinutes == minutes && currentHours == hours) {
		window.onload = success();
	}
	else {
		interval = setInterval(resetPage, 250);
	}

	function success() {
		console.log(document.getElementsByClassName(rowClassName)[rowNumber-1].children[1].children[0].innerHTML);
		console.log(document.getElementsByClassName(rowClassName)[rowNumber-1].children[1].children[0].href); //tady je href na ten link na kterej se klika
		window.location.href = document.getElementsByClassName(rowClassName)[rowNumber-1].children[1].children[0].href;
	}

	function resetPage() {
		var date = new Date();
		var currentMinutes = date.getMinutes();
		var currentHours = date.getHours();
		var currentSeconds = date.getSeconds();
		console.log(currentHours + ":" + currentMinutes + ":" + currentSeconds);
		if(currentMinutes == minutes && currentHours == hours && currentSeconds == seconds) {
			clearInterval(interval);
			window.location.reload();
		};
	};
};