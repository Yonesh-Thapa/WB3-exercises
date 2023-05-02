// replace only the first match it finds.


let message = "Our corporate offices are located in Dallas. Dallas is awesome.";
function replaceText(){
    console.log(message.replace(/DaLLas/i,"Austin"));// /i for insensistive string
}

replaceText();

// replaces everymatch it finds

message = "Our corporate offices are located in Dallas. Dallas is awesome.";
function replaceText(){
    console.log(message.replace(/DaLLas/g,"Austin")); //g for every match it finds

}

replaceText();