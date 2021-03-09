//Conexion con la Base de Datos

import Sequelize from 'sequelize';

const sequelize = new Sequelize("bd_metrocondominio","root",'root', {
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
    factura:sequelize.import('./factura.js'),
    apartamento_factura:sequelize.import('./apartamento_factura.js'),
    pago:sequelize.import('./pago.js'),
    metodoPago:sequelize.import('./metodoPago.js'),
    pagoFactura: sequelize.import('./pago_factura.js'),
    UserApartamento:sequelize.import('./userApartamento.js'),
    edificio_gasto:sequelize.import('./edificio_gasto.js'),
    tipo_de_gasto:sequelize.import('./tipo_de_gasto.js'),
    
}

models.sequelize=sequelize;
models.Sequelize=Sequelize;

module.exports=models;

