let now = new Date();
let hours = now.getUTCHours();
let minutes = now.getUTCMinutes();
let seconds = now.getUTCSeconds();

let timePeriod = hours > 12 ? 'PM' : 'AM';
console.log(hours);

let clock = document.getElementById('clock');
clock.innerHTML =
  (hours % 12) + ' : ' + minutes + ' : ' + seconds + ' ' + timePeriod + ' UTC';
