var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListEle() {
    var addingLi = document.createElement("li");
    addingLi.appendChild(document.createTextNode(input.value));
    ul.appendChild(addingLi);
    input.value = "";
}

function addListAfterClicked() {
        //to check the click event add console.log("click is working")
        // console.log("it's clicked!");
        // console.log(input.value);
        // to make sure the input.value isn't empty.
        if ( inputLength() > 0) {
            createListEle();
        }
}

function addListAfterKeypress(event) {
      if ( inputLength() > 0 && event.keyT === 13) {
        createListEle();
         }
}


button.addEventListener("click", addListAfterClicked);

input.addEventListener("keypress", addListAfterKeypress
    //listen to enter key press
    // console.log(event);
);

