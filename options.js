function save_options() {
  var color = parseInt(document.getElementById('color').value);
  var rowNumber = parseInt(document.getElementById('rowNumber').value);
  var hours = parseInt(document.getElementById('hours').value);
  var minutes = parseInt(document.getElementById('minutes').value);
  var seconds = parseInt(document.getElementById('seconds').value);
  chrome.storage.sync.set({
    color: color,
    rowNumber: rowNumber,
	  hours: hours,
    minutes: minutes,
    seconds: seconds
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Ulozeno.';
  });
}

function restore_options() {
  chrome.storage.sync.get({
    color: 1,
    rowNumber: 1,
	  hours: 19,
    minutes: 0,
    seconds: 0
  }, function(items) {
    document.getElementById('color').value = items.color;
    document.getElementById('rowNumber').value = items.rowNumber;
	  document.getElementById('hours').value = items.hours;
    document.getElementById('minutes').value = items.minutes;
    document.getElementById('seconds').value = items.seconds;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);