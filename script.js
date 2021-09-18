var date = new Date();

var day = window.document.getElementById('day');
var month = window.document.getElementById('month');
var year = window.document.getElementById('year');

var hours = window.document.getElementById('hours');
var minutes = window.document.getElementById('minutes');

day.innerHTML =
  date.getUTCDate() <= 9 ? `0${date.getUTCDate()}` : date.getUTCDate();
month.innerHTML =
  date.getUTCMonth() <= 9 ? `0${date.getUTCMonth()}` : date.getUTCMonth();
year.innerHTML = date.getUTCFullYear();

hours.innerHTML =
  date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
minutes.innerHTML =
  date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes();

function refresh() {
  setTimeout(function () {
    location.reload();
  }, 50000);
}

refresh();
