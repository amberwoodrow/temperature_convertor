var ans;
var num;

do {
  do {
      ans = prompt("Enter 1 if you would you like to convert fahrenheit to celsius.\nEnter 2 if you would like to convert celsius to fahrenheit.\nPress cancel to exit.");
    } while (ans !== "1" && ans !== "2" && ans !== null);
    // null always user to press cancel and break out of the loop.

    if (ans === "1") {
        do {
          num = prompt("Please enter the number you'd like to convert to celsius.");
        } while (!num.match(/^-?\d*$/)); // matches intagers positive and negative.
        num = (num - 32) * (5/9);
        alert(num.toFixed() + " degrees celsius"); // toFixed() to trunkate the decimals and round up to the nearest whole number.
    } else if (ans === "2") {
      do {
        num = prompt("Please enter the number you'd like to convert to fahrenheit.");
      } while (!num.match(/^-?\d*$/));
      num = num * (9/5) + 32;
      alert(num.toFixed() + " degrees fahrenheit");
    }
} while (ans !== null);
