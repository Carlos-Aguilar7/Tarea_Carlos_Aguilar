import express from 'express'
import { mostrarCarreras, mostrarAlumnos, carreras, registro, eliminarCarreras, eliminarAlumnos, editarCarreras, editarAlumnos  } from '../controllers/authController.js'
const router = express.Router()

// rutas para las vistas
router.get('/', (req, res) => { 
    res.render('index')
})

router.get('/registro', mostrarAlumnos, mostrarCarreras, (req, res) => { 
    res.render('registro', {datosA: req.dataA, datos: req.data})
})

router.get('/carreras', mostrarCarreras, (req, res) => {
    res.render('carreras', {datos: req.data})
})


// rutas para los controllers
router.post('/carreras', carreras)
router.post('/registro', registro)
router.get('/eliminarAlumno/:id', eliminarAlumnos)
router.get('/eliminarCarrera/:id', eliminarCarreras)
router.post('/editarCarrera/:id', editarCarreras)
router.post('/editarAlumno/:id', editarAlumnos)

export default router