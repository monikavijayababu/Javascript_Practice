// Attaching a single event listener to the parent element (ul)
document.getElementById('myList').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
        event.target.classList.toggle('selected');
    }
});