"use strict";

function parseAndDisplayName(name){
    let space = name.indexOf(" ");
    let first = name.substring(0, space);
    let space2= first.indexOf(" ");
    let second = name.substring (0, space);
    let space3 = second.indexOf(" ");
    let last = name.substring(space3 + 1);
    console.log(first);
    console.log(second);
    console.log(last);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");