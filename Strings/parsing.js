"use strict";

function parseAndDisplayName(name) {
  let space = name.indexOf(" ");
  let first = name.substring(0, space);
  let last = name.substring(space + 1);

  console.log(`Name: ${name}
First name: ${first}
Last name: ${last}`);

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
