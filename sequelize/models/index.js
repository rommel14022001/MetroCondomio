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
    UserApartamento:sequelize.import('./userApartamento')
}

models.sequelize=sequelize;
models.Sequelize=Sequelize;

module.exports=models;

