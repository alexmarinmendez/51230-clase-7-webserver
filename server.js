const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('<h1 style="color:blue">Hola Mundo!!</h1>')
})

app.get('/cursos', (request, response) => {
    response.send({
        message: 'success',
        data: [
            { id: 1, name: 'Backend', teacher: 'Alex Marin Mendez' },
            { id: 2, name: 'ReactJs', teacher: 'Marck Zuckerger' },
            { id: 3, name: 'Angular', teacher: 'Susana Oria' },
        ]
    })
})

app.get('/saludo/:name/:lastname', (request, response) => {
    const name = request.params.name    //URL PARAMS
    const lastname = request.params.lastname    //URL PARAMS
    response.send(`Hola ${name} ${lastname}`)
})

app.get('/alumnos', (request, response) => {
    const id = request.query.id //QUERY PARAMS
    const alumnos = [
        {id: 1, name:'Felipe'},
        {id: 2, name:'Juan'},
        {id: 3, name:'Pepito'},
        {id: 4, name:'Alex'},
    ]
    const result = alumnos.find(item => item.id == id)
    response.send(`Hola ${result.name}`)
})

app.listen(8080, () => console.log('Server Up'))