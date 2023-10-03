// Importar express y asignar a la variable express
import express from 'express'
// Importamos el router que hemos configurado en el index de routes
import router from './routes/index.js'

// express contiene una funcion para ejecutar express que lo asignamos a la variable app
const app = express()

// Definir puerto
const port = process.env.PORT || 4000

// Habilitar PUG
app.set('view engine', 'pug')

// Crear un middleware propio para obtener año actual y pasarlo a la vista del footer
app.use((req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear() //accedemos a locals y podemos añadir una nueva propiedad como una variable que llamaremos actualYear ya que es un objeto
    res.locals.nombreSitio = "Agencia Viajes"
    next()
})

// Definir carpeta publica
app.use(express.static('public'))

// Agregar router desde la pagina principal (/)
app.use('/', router)

// Aquí le decimos arranca el servidor con .listen
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})