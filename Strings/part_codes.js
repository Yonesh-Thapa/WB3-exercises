"use strict";
function productCode(code){

    let character1 = code.indexOf(":");
    let character2 = code.indexOf("-");
    function getSupplier(code){
        let supplierCode = code.substring(0, character1);
        return supplierCode;

    }
    function getProductNumber(code){
        let productNumber = code.substring(character1 + 1, character2);
        return productNumber;

    }
    function getSize(code){
        let size = code.substring(character2 + 1);
        return size;

    }
    console.log(`Supplier Code: ${getSupplier(code)} 
Product Number: ${getProductNumber(code)}
Size: ${getSize(code)}`)
}

productCode("ACME:123-L");
productCode("DI:12345-M");
productCode("ACE:1-12");
