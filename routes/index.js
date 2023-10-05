import express from 'express'
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
} from '../controllers/controllers.js'

const router = express.Router()

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:id_slug', paginaDetalleViaje)

router.get('/testimonios', paginaTestimonios)

export default router