/* Make a GET request using fetch */

fetch('http://example.com/movies.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // or response.text() for non-JSON data
    })
    .then(data => {
        // Handle the data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Fetch error:', error);
    });


/*  sending a POST request with JSON data */

fetch('https://api.example.com/save-data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value' }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
