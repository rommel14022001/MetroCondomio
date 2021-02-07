//Conexion con la Base de Datos

import Sequelize from 'sequelize';

const sequelize = new Sequelize("bd_metrocondominio","root",'Realgud1402.', {
    host:"localhost",
    dialect:"mysql"
});

const models={
    usuario:sequelize.import('./usuario.js')
}

models.sequelize=sequelize;
models.Sequelize=Sequelize;

module.exports=models;
