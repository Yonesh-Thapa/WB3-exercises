"use strict";

//IF you print name.idexOf(" ") on console that only has first name then it prints -1.
function parseAndDisplayName(name){
    let space1 = name.indexOf(" ");
    let space2 = name.lastIndexOf(" ");
    //if (space1 == -1 && space2 == -1)//this line works
    if (space1 < 0 && space2 < 0)//alternative solution
    {
        console.log(`Name: ${name}`);
        console.log(`Only name: ${name}`);
    }
    //else if (space1 != -1  && space2 == -1) // this line works
    else if (space1 > 0 && space2 <0)
    {
        console.log(`Name: ${name}`);
        console.log(`First name: ${name.substring(0, space1)}`)
        console.log(`Last namme: ${name.substing(space1)}`);
    }
    //else if (space1 != -1  && space2 != -1)// this line also works
    else
    {
        console.log(`Name: ${name}`);
        console.log(`First name: ${name.substring(0, space1)}`)
        console.log(`Middle name: ${name.substring(space1, space2)}`)
        console.log(`Last name: ${name.substring(space2)}`);
        
    }
    
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");