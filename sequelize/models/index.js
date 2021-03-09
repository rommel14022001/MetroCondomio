//Conexion con la Base de Datos

import Sequelize from 'sequelize';

const sequelize = new Sequelize("bd_metrocondominio","root",'Realgud1402.', {
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
    UserApartamento:sequelize.import('./userApartamento'),
    apartamento_factura:sequelize.import('./apartamento_factura.js'),
    pago:sequelize.import('./pago.js'),
    metodoPago:sequelize.import('./metodoPago.js'),
    pagoFactura: sequelize.import('./pago_factura.js'),
<<<<<<< HEAD
    UserApartamento:sequelize.import('./userApartamento.js'),
    edificio_gasto:sequelize.import('./edificio_gasto.js'),
    tipo_de_gasto:sequelize.import('./tipo_de_gasto.js'),
    
=======
>>>>>>> 2d9fd22d1adf12f3aef10c7b62a7414a4c6863d1
}

models.sequelize=sequelize;
models.Sequelize=Sequelize;

module.exports=models;

