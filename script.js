let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul");
let li = document.querySelector("li")
let del = document.getElementsByClassName("del")
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body =document.getElementById("gradient");

//background color

function colorPicker(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // css.textContent = body.style.background + ";";
}
color1.addEventListener("input", colorPicker );
color2.addEventListener("input", colorPicker);


function inputLength() {
    return input.value.length;
}

for (let i = 0; i < del.length; i++){
    del[i].addEventListener("click", removes, false);
}

function removes(etv) {
    etv.target.removeEventListener("click", removes, false);
    etv.target.parentNode.remove();
}

function createListElement() {
    let button = document.createElement("button");

    // functionalitate de stergere a butoanelor din lista
    button.innerHTML = "Sterge";
    button.addEventListener("click", function(e) {
        e.target.parentNode.remove();
    });

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button);
    input.value = "";
}

function addEventAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addEventAfterKey(event){
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addEventAfterClick);

input.addEventListener("keypress", addEventAfterKey);

