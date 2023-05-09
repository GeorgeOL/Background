const basket = [ `apples`, `orranges`, `grapes`];
const datailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

//for loop
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// forEach
basket.forEach(item => {
    console.log(item);
})

//for of
//iteratin 1 by 1 and look at items
//can be done on arrays, strings
for (item of basket) {
    console.log(itrem);
}

//for in
for (item in detailedBasket){
    console.log(item);
}

