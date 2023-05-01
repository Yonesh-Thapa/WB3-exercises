function displayMailingLabel(name, address, city, state, zip) {
//   console.log(name);
//   console.log(address);
//   console.log(city, state, zip);
  console.log(`
${name}
${address}
${city}, ${state}, ${zip}
  `)
}

function addNumbers(num1, num2) {
  let x = num1 + num2;
  console.log(`${num1} + ${num2} = ${x}`);
}

function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;
  console.log(`Total Due: $${totalDue}`);
  console.log(`Amount Paid: $${amountPaid}`);
  if (amountPaid < totalDue) {
    console.log(`You still need to pay $${Math.abs(changeDue)}`);
  } else {
    console.log(`Change Due: $${changeDue}`);
  }
}
// let name = "Yonesh";
// let address = "123 45st";
// let city = "New York City";
// let state = "NY";
// let zip = 12345;

// displayMailingLabel(name, address, city, state, zip);

displayMailingLabel("Yonesh", "12 45st", "New York City", "NY", 12345);
// name = "Yonesh";
// address = "123 45st";
// city = "New York City";
// state = "NY";
// zip = 12345;

// displayMailingLabel(name, address, city, state, zip);
displayMailingLabel("Yonesh", "123 45st", "New York City", "NY", 12345);


// let num1 = 2;
// let num2 = 4;

// addNumbers(num1, num2);
addNumbers(2,4);

// num1 = 5;
// num2 = 9;

// addNumbers(num1, num2);
addNumbers(5,9);

// let totalDue = 80;
// let amountPaid = 100;
// displayReceipt(totalDue, amountPaid);
displayReceipt(80, 100);

totalDue = 100;
amountPaid = 100;
displayReceipt(totalDue, amountPaid);

totalDue = 100;
amountPaid = 80;
displayReceipt(totalDue, amountPaid);
