// JUST A TEST SCRIPT

var list = document.getElementById("myList");

for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var button = document.createElement("button");
    button.innerHTML = "Șterge";
    button.addEventListener("click", function(e) {
        e.target.parentNode.remove();
    });
    item.appendChild(button);
}