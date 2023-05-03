"use strict";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const weekday= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let d = new Date();
let monthName = months[d.getMonth()];
let weekdayName = weekday[d.getDay()];

let day = d.getDate();
let year = d.getFullYear();

console.log(`${day}-${monthName}-${year}(${weekdayName})`);