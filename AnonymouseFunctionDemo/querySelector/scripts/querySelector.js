let selectedOption = document.querySelector("input[name='policy']:checked");

let basePremium = 0;
if (selectedOption.value == "auto"){
    basePremium = 175.00;

}
else if (selectedOption.value == "home"){
    basePremium = 395.00;
}

else{
    basePremium = 225.00;
}