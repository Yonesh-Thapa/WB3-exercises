
function convertFtoC(farenheit){
    let celsius = parseFloat(farenheit - 32) * (5/9);
    return celsius;
}

let celsius = convertFtoC(-40);
console.log(celsius);

