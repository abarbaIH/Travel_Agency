import { Viaje } from "../models/Viaje.js"

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
const paginaTestimonios = (req, res) => {

    res.render('testimonios', {
        pagina: "Testimonios"
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}