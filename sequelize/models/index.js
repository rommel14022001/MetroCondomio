//Conexion con la Base de Datos

import Sequelize from 'sequelize';

const sequelize = new Sequelize("bd_metrocondominio","root",'root.', {
    host:"localhost",
    dialect:"mysql",
    define: {
        timestamp: false
    }
});

const models={
    usuario:sequelize.import('./usuario.js'),
    gasto:sequelize.import('./gasto.js'),
    residencia:sequelize.import('./residencia.js'),
    factura:sequelize.import('./factura.js'),
    apartamento:sequelize.import('./apartamento.js'),
    edificio:sequelize.import('./edificio.js'),
    apartamento_factura:sequelize.import('./apartamento_factura.js'),
    pago:sequelize.import('./pago.js'),
    metodoPago:sequelize.import('./metodoPago.js'),
    pagoFactura: sequelize.import('./pago_factura.js'),
    UserApartamento:sequelize.import('./userApartamento.js'),
    edificio_gasto:sequelize.import('./edificio_gasto.js'),
    tipo_de_gasto:sequelize.import('./tipo_de_gasto.js'),
    tipos_de_usuario:sequelize.import('./tipos_de_usuarios.js'),
};

//ASOCIACIONES
models.edificio.hasMany(models.apartamento);
models.apartamento.belongsTo(models.edificio, {foreignKey:{allowNull:false}});


models.residencia.hasMany(models.edificio);
models.edificio.belongsTo(models.residencia, {foreignKey:{allowNull:false}});


models.gasto.hasOne(models.tipo_de_gasto);
models.tipo_de_gasto.belongsToMany(models.gasto, {foreignKey:{allowNull:false}});


models.usuario.hasOne(models.tipos_de_usuario);
models.tipos_de_usuario.belongsToMany(models.usuario, {foreignKey:{allowNull:false}});


models.pago.hasOne(models.metodoPago);
models.metodoPago.belongsTo(models.pago, {foreignKey:{allowNull:false}});






models.sequelize=sequelize;
models.Sequelize=Sequelize;

module.exports=models;

