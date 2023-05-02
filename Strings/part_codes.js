"use strict";
function productCode(code) {
  let character1 = code.indexOf(":");
  let character2 = code.indexOf("-");
  function getSupplier(code) {
    let supplierCode = code.substring(0, character1);
    return supplierCode;
  }
  function getProductNumber(code) {
    let productNumber = code.substring(character1 + 1, character2);
    return productNumber;
  }
  function getSize(code) {
    let size = code.substring(character2 + 1);
    return size;
  }
  console.log(`Supplier Code: ${getSupplier(code)} 
Product Number: ${getProductNumber(code)}
Size: ${getSize(code)}`);
}

productCode("ACME:123-L");
productCode("DI:12345-M");
productCode("ACE:1-12");
/*
    alternate solution

function showName(name){

    


    indexFirstSpace = name.indexOf(SPACE)
    if (indexFirstSpace === -1){
    output = name; // only one so use it all

}
else{
    indexSecondSpace = name.indexOf (SPACE, indexFirstSpace);
    if (indexSecondSpace === -1){
        part 1 = name.substring(0, indexFirstSpace);
        part 2 = name.substring(indexFirstSpace);
        output = `${part2}, ${part1}`;

    }
    else{
        indexThirdSpace = name.indexOf(SPACE, indexSecondSpace);
        part1 = name.substring(0, indexFirstSpace)
        part2 = name.substring(indexFirstSpace, indexSecondSpace)
        part3 = name.substring(indexSecondSpace);
        output = `${part3}, ${part1} ${part2}`}
    }
}
return output;
}

console.log(showName("Madona"))
console.log(showName("Yonesh Thapa"))
console.log(showName("Yonesh K Thapa"))