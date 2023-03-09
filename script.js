let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addEventAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addEventAfterKey(event){
    if (inputLength() > 3 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addEventAfterClick);

input.addEventListener("keypress", addEventAfterKey);

