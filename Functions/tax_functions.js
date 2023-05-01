function getSocSecTax(grossPay){
    let socialTax = grossPay * 0.062;
    return socialTax;
}

function getMedicareTax(grossPay){
    let medicareTax = grossPay * 0.0145;
    return medicareTax;
}

function getFederalTax(grossPay, withholdingCode){
    let taxrate;
    if (withholdingCode == 0){
        taxrate = 0.23;
    }
    else if (withholdingCode == 1){
        taxrate = 0.21;
    }
    else if (withholdingCode == 2){
        taxrate = 0.195;
    }
    else if (withholdingCode == 3){
        taxrate = 0.185;
    }
    else if (withholdingCode == 4){
        taxrate = 0.18;
    }
    else{
        taxrate = ( 0.18 - ((withholdingCode - 4) * 0.005));
    }
    let federalTax = grossPay * taxrate.toFixed(2);
    return {federalTax : federalTax, taxrate : taxrate.toFixed(2)};

}
let grossPay, withholding, withholdingCode;
let socialTax = getSocSecTax(750);
console.log(`Social Security Tax = $${socialTax}`);

let medicareTax = getMedicareTax(1550);
console.log(`Medicare tax = $${medicareTax}`);

function display_output(name, grossPay, withholdingCode){
    result = getFederalTax(grossPay, withholdingCode);
    console.log (`${name}   gross pay $${grossPay}     withholding code ${withholdingCode}`, `federal tax = ${result.federalTax} federal taxrate = ${result.taxrate}`);
    
}
display_output("Person 1:", 750, 0);
display_output("Person 2:", 1550, 2);
display_output("Person 3:", 1100, 6);
