const geolocalizacion = {}

const { Path } = require('path');

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

geolocalizacion.mostrar = (req, res) => {
    res.render('/geolocalizacion')
}