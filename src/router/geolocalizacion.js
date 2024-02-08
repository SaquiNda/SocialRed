const express = require('express');
const rutas = express.Router()

const { mostrar } = require('../controller/geolocalizacion.controller')

rutas.get('/geolocalizacion', mostrar)

module.exports = rutas