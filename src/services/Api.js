const URL = "http://localhost:3000/"
const clientsURL = URL + 'clients'
const parseJSON = res => res.json()

const authHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem('jwt')}`
})

const loginHeaders = {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
}

export function loginRequest(credentials) {
    return fetch(URL + 'login', {
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(credentials)
    })
    .then(parseJSON)
}

export function profileRequest() {
    return fetch(URL + 'profile', {
        headers: authHeaders()
    })
    .then(parseJSON)
}