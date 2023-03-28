// I
//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
// //transformation
// function experiencePoints(bool){
//     return bool;
// }
// //simple one
// let answer = experiencePoints(true) ? "yto" : "mnh";
// //bit more complicated one
// let answer1 = "your number is " + ( experiencePoints(false) ? "bun asa" : "nu-i bun");
// //Using this function, answer the questions below:
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

//#2 return value when moveCommand("forward");
// undefined
//#3 return value when moveCommand("back");
// "you arrived home"
//#4 return value when moveCommand("right");
// "you run intro a troll"
//#5 return value when moveCommand("left");
// "undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// II
// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];   //Create an array using forEach that has all the usernames with a "!" to each of the usernames

// let newUsername = []
//  array.forEach(user=> {
//      newUsername.push(user.items + '!');
// });
// console.log(newUsername);

//Create an array using map that has all the usernames with a "?" to each of the usernames

const mapArray = array.map(user => {
    let { username } = user;
    return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red

let newUsername = array.filter(user =>{
    return user.team === "red";
})
console.log(newUsername);