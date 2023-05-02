function init(){
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = dateDisplay;
}
const dateEntered = document.getElementById("dateEntered");



function dateDisplay(){
    let now = new Date();
    let time = now.toLocaleTimeString();
    let d = new Date(dateEntered.value + " " + time);
    document.getElementById("demo").innerHTML = `The date you entered is ${d.toLocaleString()}`;
}




init();

