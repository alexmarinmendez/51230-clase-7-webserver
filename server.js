const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Alguien me hizo una request')
    response.end('Hola Mundo Coder!!!')
})

server.listen(8080, () => console.log('Server Up'))