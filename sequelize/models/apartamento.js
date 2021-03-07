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
        // facturasIds:{
        //     type:DataTypes.ARRAY,
        //     allowNull:true
        // },
        piso:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        aptoNum:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        cedula:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        inquilinoNombre:{
            type:DataTypes.STRING,
            allowNull: true
        },
        alicuota:{ /*es el porcentaje pero en double*/ 
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