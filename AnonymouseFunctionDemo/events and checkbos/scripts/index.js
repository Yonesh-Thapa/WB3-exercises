let extraPerDay = 0;
let tollTag = document.getElementById("tollTag").check;
if (tollTag) {
  extraPerDay += 3.95;
}

let gps = document.getElementById("gps").checked;
if (gps) {
  extraPerDay += 4.95;
}

let roadside = document.getElementById("roadside").checked;
if (roadside) {
  extraPerDay += 2.95;
}

window.onload = function(){
  let govtChkBox = document.getElementById("govt");
  govtChkBox.onclick = onGovtChkBoxClicked;
  // other events handlers connected here
}

function onGovtChkBoxClicked(){
  let govtChkBox = document.getElementById("govt");
  govtChkBox.onclick = onGovtChkBoxClicked;

  //other events handlers connected here
}

function onGovtChkBoxClicked(){
  let govt = document.getElementById("govt").checked;
  if(govt){
      let roadsideChkBox = document.getElementById("roadside");
      roadsideChkBox.checked = true;
  }
}