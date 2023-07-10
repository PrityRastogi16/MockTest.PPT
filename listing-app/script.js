const input = document.getElementById('input');
const button = document.getElementById('btn');
const container = document.getElementById('webPage');

button.addEventListener("click" , function(){
    var enterText = input.value;
    if(enterText !== " "){
       var nextLine = document.createElement("br");
        var newText = document.createTextNode(enterText);
        container.appendChild(nextLine);
        container.appendChild(newText);
        input.value = "";
    }
});