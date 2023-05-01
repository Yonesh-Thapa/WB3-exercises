function convertCtoF(celsius){
    let farenheit = parseFloat((celsius * (9/5)) + 32);
    return farenheit;
}
let farenheit = convertCtoF(0);
console.log(farenheit);