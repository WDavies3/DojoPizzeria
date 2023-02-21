//return a pizza object
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//return a random item from the input array
function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//create a random pizza
function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin", "thick"];
    var sauceTypes = ["traditional", "marinara", "white"];
    var cheeseList = ["mozzarella", "feta", "cheddar", "goat"];
    var toppingsList = ["pepperoni", "sausage", "mushrooms", "garlic", "onions", "olives", "peppers"];

    var crust = randomArrayItem(crustTypes);
    var sauce = randomArrayItem(sauceTypes);
    var cheeses = [];
    //1 or 2 cheeses
    var cheeseCount = Math.ceil(Math.random() * 2);
    var toppings = [];
    //1-3 toppings
    var toppingsCount = Math.ceil(Math.random() * 3);
    for (var i = 0; i < cheeseCount; i++) {
        cheeses.push(randomArrayItem(cheeseList));
    }
    for (var i = 0; i < toppingsCount; i++) {
        toppings.push(randomArrayItem(toppingsList));
    }

    return pizzaOven(crust, sauce, cheeses, toppings);
}

//console log 5 pizza objects
console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]));
console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]));
console.log(pizzaOven("thin", "white", ["cheddar"], ["garlic", "onions"]));
console.log(pizzaOven("thick", "traditional", ["goat"], ["peppers", "onions"]));
console.log(randomPizza());