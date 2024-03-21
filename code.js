//  Question 22
var friends = ["Maham", "Fari", "Maliha", "Abeer", "Zoha"];
console.log(friends[5]); //Intentional error
console.log(friends[1]);
console.log(friends[0]);
console.log(friends[2]);
// Question 23
var car = "Civic";
console.log("Conditional test : + Is car == 'Civic'? I predict True");
console.log(car == 'Civic');
console.log("Is car == 'City'? I predict False");
console.log(car == 'City');
var dishe = "Biryani";
var serve = dishe == "Biryani";
console.log("Conditional test :" + serve);
var friend = ("Maliha");
var invited = ("Maliha");
var isAllowed = friend === "Maliha" && invited === "Maliha";
console.log("Conditional test :" + isAllowed);
var fri = ("Maliha");
var iv = ("Maliha");
var iA = fri === "Maham" && iv === "Maliha";
console.log("Conditional test :" + iA);
// Question 24
// Equality with strings
console.log("Testing equality with strings");
console.log("apple" === "apple");
console.log("apple" === "apple");
// Numercal test
console.log("Numerical tests:");
console.log(10 > 5);
console.log(2 < 1);
// Using the lower case
console.log("Testing with lower case");
console.log("Apple".toLowerCase() == "apple");
console.log("Testing with lower case");
console.log("Apple".toLowerCase() == "Apple");
// Tests using 'and' and 'or'operators
console.log("Testing with 'and' operator");
var isA = true && true;
console.log(isA);
var isAl = true && false;
console.log(isAl);
console.log("Testing with 'or' operator");
var firstValue = true;
var secondValue = false;
var isAll = firstValue || secondValue;
console.log(isAll);
//Test whether an item in an array
var fruits = ["Banana", "Mango", "Apple"];
// console.log("Is 'Mango' in fruits?");
// console.log (fruits.includes("Mango"));
//Test whether an item is not  in an array
console.log("Is 'Mango' not in fruits?");
console.log(fruits.includes("Mango"));
