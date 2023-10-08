import { Viaje } from "../models/Viaje.js"
import { Testimonio } from "../models/Testimonio.js"

const paginaInicio = (req, res) => {
    res.render("inicio", {
        pagina: "Inicio" // variables que pasamos a la vista
    })
}

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pagina: "Nosotros"
    })
}

const paginaViajes = async (req, res) => {
    // Consultar BBDD 
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: "Próximos Destinos",
        viajes: viajes

    })
}

const paginaDetalleViaje = async (req, res) => {
    // Traer los datos de los params
    const { id_slug } = req.params
    try {
        // Consultar BBDD pasando el id
        const viaje = await Viaje.findOne({ where: { slug: id_slug } })
        res.render('viajeDetalles', {
            pagina: "Información Destino",
            viaje
        })
    } catch (error) {
        console.log(error)
    }

}
const paginaTestimonios = async (req, res) => {

    try {
        const testimonios = await Testimonio.findAll()
        res.render('testimonios', {
            pagina: "Testimonios",
            testimonios
        })
    } catch (error) {
        console.log(error)
    }

}

const guardarTestimonio = async (req, res) => {
    // Validar valores form
    const { nombre, correo, mensaje } = req.body

    const errores = []

    if (nombre.trim() === "") {
        errores.push({ mensaje: "El campo nombre está vacío" })
    }

    if (correo.trim() === "") {
        errores.push({ mensaje: "El campo nombre está vacío" })
    }

    if (mensaje.trim() === "") {
        errores.push({ mensaje: "El campo nombre está vacío" })
    }

    if (errores.length > 0) {

        // Consultar testimonios exxistentes para que la vista que se carga cuando hay error 
        const testimonios = await Testimonio.findAll()
        //Mostrar errores en la vista
        res.render('testimonios', {
            pagina: "Testimonios",
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        })
    } else {
        //Almacenar en la bbdd si todod está bien
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimonios')
        } catch (error) {
            console.log(error)
        }
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje,
    guardarTestimonio
}