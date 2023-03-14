//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
//transformation
function experiencePoints(bool){
    return bool;
}
//simple one
let answer = experiencePoints(true) ? "yto" : "mnh";
//bit more complocated one
let answer1 = "your number is " + ( experiencePoints(false) ? "bun asa" : "nu-i bun");
//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// undefined
//#3 return value when moveCommand("back");
// "you arived home"
//#4 return value when moveCommand("right");
// "you run intro a troll"
//#5 return value when moveCommand("left");
// "undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!