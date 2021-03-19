//Conexion con la Base de Datos

import Sequelize from 'sequelize';

const sequelize = new Sequelize("bd_metrocondominio","root",'Realgud1402.', {
    host:"localhost",
    dialect:"mysql",
});

const models={
    usuario:sequelize.import('./usuario.js'),
    gasto:sequelize.import('./gasto.js'),
    residencia:sequelize.import('./residencia.js'),
    factura:sequelize.import('./factura.js'),
    apartamento:sequelize.import('./apartamento.js'),
    edificio:sequelize.import('./edificio.js'),
    userApartamento:sequelize.import('./userApartamento'),
    apartamento_Factura:sequelize.import('./apartamento_factura.js'),
    pago:sequelize.import('./pago.js'),
    metodoPago:sequelize.import('./metodoPago.js'),
    pagoFactura: sequelize.import('./pago_factura.js'),
    TipoUsuario:sequelize.import('./tipoUsuario.js'),
    TipoGasto:sequelize.import('./TipoGasto.js'),
    Edificio_Gasto:sequelize.import('./Edificio_Gasto'),
    Apartamento_Gasto:sequelize.import('./Apartamento_Gasto.js'),
    Factura_Gasto:sequelize.import('./Factura_Gasto.js'),
    Pago_Factura:sequelize.import('./pago_factura.js'),
}


//ASOCIACIONES

//EDIFICIO-APARTAMENTO
models.edificio.hasMany(models.apartamento);
models.apartamento.belongsTo(models.edificio,{foreignKey:{allowNull:false}})


//USUARIO-USERAPARTAMENTO
models.usuario.hasMany(models.userApartamento);
models.userApartamento.belongsTo(models.usuario,{foreignKey:{allowNull:false}});


//APARTAMENTO-USERAPARTAMENTO
models.apartamento.hasMany(models.userApartamento)
models.userApartamento.belongsTo(models.apartamento,{foreignKey:{allowNull:false}})


//USUARIO-USERAPARTAMENTO
models.TipoUsuario.hasMany(models.userApartamento)
models.userApartamento.belongsTo(models.TipoUsuario,{foreignKey:{allowNull:false}})

//GASTO-TIPOGASTO
models.TipoGasto.hasMany(models.gasto);
models.gasto.belongsTo(models.TipoGasto, {foreignKey:{allowNull:false}});


//PAGO-METODOPAGO
models.metodoPago.hasMany(models.pago);
models.pago.belongsTo(models.metodoPago, {foreignKey:{allowNull:false}});


// //EDIFICIOGASTO-Edificio-gasto
models.edificio.hasMany(models.Edificio_Gasto);
models.Edificio_Gasto.belongsTo(models.edificio,{foreignKey:{allowNull:false}})
models.gasto.hasMany(models.Edificio_Gasto);
models.Edificio_Gasto.belongsTo(models.gasto,{foreignKey:{allowNull:false}});


// //ApartamentoGASTO-Apartamento-Gasto
models.apartamento.hasMany(models.Apartamento_Gasto);
models.Apartamento_Gasto.belongsTo(models.apartamento,{foreignKey:{allowNull:false}})
models.gasto.hasMany(models.Apartamento_Gasto);
models.Apartamento_Gasto.belongsTo(models.gasto,{foreignKey:{allowNull:false}});


//APARTAMENTOFACTURA-APARTAMENTO-FACTURA
models.apartamento.hasMany(models.apartamento_Factura);
models.apartamento_Factura.belongsTo(models.apartamento,{foreignKey:{allowNull:false}})
models.factura.hasMany(models.apartamento_Factura);
models.apartamento_Factura.belongsTo(models.factura,{foreignKey:{allowNull:false}});


//FACTURAGASTO-FACTURA-GASTO
models.factura.hasMany(models.Factura_Gasto);
models.Factura_Gasto.belongsTo(models.factura,{foreignKey:{allowNull:false}});
models.gasto.hasMany(models.Factura_Gasto);
models.Factura_Gasto.belongsTo(models.gasto,{foreignKey:{allowNull:false}})


//PAGOFACTURA-PAGO-FACTURA-APARTAMENTO
models.pago.hasMany(models.Pago_Factura)
models.Pago_Factura.belongsTo(models.pago)
models.factura.hasMany(models.Pago_Factura)
models.Pago_Factura.belongsTo(models.factura)
models.apartamento.hasMany(models.Pago_Factura)
models.Pago_Factura.belongsTo(models.apartamento)


//RESIDENCIA-EDIFICIO
models.residencia.hasMany(models.edificio);
models.edificio.belongsTo(models.residencia, {foreignKey:{allowNull:false}});


models.sequelize=sequelize;
models.Sequelize=Sequelize;

module.exports=models;

