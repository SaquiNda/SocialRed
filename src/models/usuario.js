const dueño = (sequelize,type)=>{
    return sequelize.define('usuarios', {
        idUsuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: type.STRING,
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,
        
        crearUsuario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false
    })

}

module.exports = dueño