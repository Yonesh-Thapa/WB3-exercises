let travelDate = document.getElementById("travelDate");
const submitBtn = document.getElementById("submitBtn");
const travelDays = document.getElementById("travelDays");

function message() {
  let date = new Date();
  travelDate = new Date(travelDate.value);
  let timeDiff = travelDate.getTime() - date.getTime();
  let millisec_per_day = 1000 * 60 * 60 * 24;
  let numDays = Math.ceil(timeDiff / millisec_per_day);
  if (numDays < 0) {
    travelDays.innerHTML = `Sorry your trip has already passed.`;
  }
  else if (numDays == 0){
    travelDays.innerHTML = `Your trip is today. Have a nice day`;
  } else {
    travelDays.innerHTML = `Your trip is in ${numDays} days.`;
  }
  return;
}

document.addEventListener("DOMContentLoaded", () => {
  submitBtn.addEventListener("click", message);
});
