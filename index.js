// Add your code here
function submitData(userName, userEmail) {
    const body = {
        name: userName,
        email: userEmail
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        const dataElement = document.createElement('p')
        dataElement.textContent = data.id;

        const body = document.querySelector('body');
        body.appendChild(dataElement);
    })
    .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message

        const body = document.querySelector('body');
        body.appendChild(errorElement);
    })
}