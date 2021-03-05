//Conexion con la Base de Datos

import Sequelize from 'sequelize';

const sequelize = new Sequelize("bd_metrocondominio","root",'root', {
    host:"localhost",
    dialect:"mysql",
});

const models={
    usuario:sequelize.import('./usuario.js'),
    gasto:sequelize.import('./gasto.js'),
    apartamento:sequelize.import('./apartamento.js'),
    edificio:sequelize.import('./edificio.js')
}

models.sequelize=sequelize;
models.Sequelize=Sequelize;

module.exports=models;
