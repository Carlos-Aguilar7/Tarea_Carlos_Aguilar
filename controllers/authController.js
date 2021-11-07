import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import con from '../database/connection.js'

var session

export const carreras = async (req, res) => {
    const { nombrecarrera, descripcion } = req.body

    const data = {
        nombrecarrera: nombrecarrera,
        descripcion: descripcion,
    }

    con.query('INSERT INTO carreras SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/carreras')
    })
    
}

export const registro = async (req, res) => {
    const { nombre, apellido, telefono, correo, idcarrera } = req.body
    
    const data = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo,
        idcarrera: idcarrera
    }

    con.query('INSERT INTO alumnos SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/registro')
    })
    
}

export const mostrarCarreras = async (req, res, next) => {
    const data = {} 

    // query a la base de datos para verificar que exista el usuario
    con.query('SELECT * FROM carreras', data, (err, result) => {
        
        if (err) {
            console.log("Ocurrió un error")
            return
        }

        req.data = result
        next()
    }) 
}

export const mostrarAlumnos = async (req, res, next) => {
    const dataA = {} 

    // query a la base de datos para verificar que exista el usuario
    con.query('SELECT * FROM alumnos as a inner join carreras as c on a.idcarrera = c.idcarrera', dataA, (err, result) => {
        
        if (err) {
            console.log("Ocurrió un error", err)
            return
        }

        req.dataA = result
        next()
    }) 
}

export const eliminarCarreras = async (req, res, next) => {
    const {id} = req.params

    // query a la base de datos para verificar que exista el usuario
    con.query('DELETE FROM carreras WHERE idcarrera = ?', [id], (err, result) => {
        
        if (err) {
            console.log("Ocurrió un error")
            return
        }

        res.redirect('/carreras')
        next()
    }) 
}

export const eliminarAlumnos = async (req, res, next) => {
    const {id} = req.params

    // query a la base de datos para verificar que exista el usuario
    con.query('DELETE FROM alumnos WHERE idalumno = ?', [id], (err, result) => {
        
        if (err) {
            console.log("Ocurrió un error")
            return
        }

        res.redirect('/registro')
        next()
    }) 
}

export const editarCarreras = async (req, res, next) => {
    const { nombrecarrera, descripcion } = req.body
    const {id} = req.params

    const data = [
        nombrecarrera,
        descripcion,
        id
    ]

    // query a la base de datos para verificar que exista el usuario
    con.query('UPDATE carreras SET nombrecarrera = ?, descripcion = ? WHERE idcarrera = ?', data, (err, result) => {
        
        if (err) {
            console.log("Ocurrió un error", err)
            return
        }

        res.redirect('/carreras')
        next()
    }) 
}

export const editarAlumnos = async (req, res, next) => {
    const { nombre, apellido, telefono, correo, idcarrera } = req.body
    const {id} = req.params

    const data = [
        nombre,
        apellido,
        telefono,
        correo,
        idcarrera,
        id
    ]

    // query a la base de datos para verificar que exista el usuario
    con.query('UPDATE alumnos SET nombre = ?, apellido = ?, telefono = ?, correo = ?, idcarrera = ? WHERE idalumno = ?', data, (err, result) => {
        
        if (err) {
            console.log("Ocurrió un error", err)
            return
        }

        res.redirect('/registro')
        next()
    }) 
}