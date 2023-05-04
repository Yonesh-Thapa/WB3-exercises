window.onload = function(){
    let sameAddrChkBox = document.getElementById("sameAddress");
    sameAddrChkBox.onclick = onHideOrShowShippingDiv;
    //other event handlers connected here
}

function onHideOrShowShippingDiv(){
    let sameAddrChkBox= document.getElementById("sameAddress");
    let shippingDiv = document.getElementById("shippingDiv");

    if (sameAddrChkBox.checked){
        shippingDiv.style.display = "none";

    }
    else {
        shippingDiv.style.display = "block";
    }
}



let basePremium = 0;
if(document.getElementById("auto".checked)){
    basePremium = 175.00;
}
else if (document.getElementById("home").checked){
    basePremium = 395.00;
}
else{ // it must be life!
    basePremium = 225.00;
}
