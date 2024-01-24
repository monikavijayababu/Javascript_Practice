/* Making a GET request */
fetch('https://api.example.com/data')
    .then(response => {
        // Check if the request was successful (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Work with the JSON data
        console.log(data);
    })
    .catch(error => {
        // Handle errors during the fetch operation
        console.error('Fetch error:', error);
    });


/* POST request */
// Making a POST request with JSON data
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2',
    }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
