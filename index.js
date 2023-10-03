
// Importar express y asignar a la variable express
const express = require('express')

// express contiene una funcion para ejecutar express que lo asignamos a la variable app
const app = express()

// Definir puerto
const port = process.env.PORT || 4000

// Aquí le decimos arranca el servidor con .listen
app.listen(() => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})