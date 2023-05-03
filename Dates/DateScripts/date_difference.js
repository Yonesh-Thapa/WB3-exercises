"use strict";

let startDate = new Date ("July 11, 2022");
let endDate = new Date("November 11, 2022");

let millisec_per_day = 1000 * 60 * 60 * 24;

let elapsedTime = endDate.getTime() - startDate.getTime();
let dayDiff = elapsedTime / millisec_per_day;
let numDays = Math.round(dayDiff);

console.log(`The number of days in between ${startDate.toDateString()} and ${endDate.toDateString()} is ${numDays} days.`);