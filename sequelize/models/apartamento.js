module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Apartamento=sequelize.define('Apartamento',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        edificioId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        piso:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        aptoNum:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        cedula:{ /*SE TIENE QUE IR */
            type:DataTypes.INTEGER,
            allowNull: true
        },
        inquilinoNombre:{ /*SE TIENE QUE IR */
            type:DataTypes.STRING,
            allowNull: true
        },
        alicuota:{ /*es el porcentaje pero en float*/ 
            type:DataTypes.FLOAT,
            allowNull: false
},
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Apartamento

}