const fetch = require('node-fetch')

fetch('https://postman-echo.com/status/200').then(res => {
    if (res.ok) {
        return res.json()
    }
    throw new Error(res)
}).then(json => {
    console.log('Mon retour est :' + JSON.stringify(json))
})
    .catch(console.err)
