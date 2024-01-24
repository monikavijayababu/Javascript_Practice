/* Event Handling */

// 1. Event Listener Setup
// 2. Event Object
// 3. Preventing Default Behavior
// 4. Event Delegation

/* 1. Event Listener Setup */

{/* <button id="myButton">Click me</button> */ }
var myButton = document.getElementById("myButton");
function handleClick() {
    alert("Button clicked!");
}

myButton.addEventListener("click", handleClick);



/* 2. Event Object */

var myButton = document.getElementById("myButton");
function handleClick(event) {
    console.log("Event type: " + event.type);
    console.log("Mouse coordinates: (" + event.clientX + ", " + event.clientY + ")");
    alert("Button clicked!");
}
myButton.addEventListener("click", handleClick);



/* 3. Preventing Default Behavior */


var myForm = document.getElementById("myForm");
function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the value of the text input
    var inputValue = document.getElementById("textInput").value;
    console.log("Input value: " + inputValue);
}
myForm.addEventListener("submit", handleSubmit);



/* 4. Event Delegation */

var myList = document.getElementById("myList");
myList.addEventListener("click", function (event) {
    // Check if the clicked element is an li element
    if (event.target.tagName === 'LI') {
        // Access the text content of the clicked li element
        var clickedItem = event.target.textContent;
        console.log("Clicked item: " + clickedItem);
    }
});

