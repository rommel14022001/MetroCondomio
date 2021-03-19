module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Apartamento=sequelize.define('Apartamento',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        EdificioId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            
        },
        piso:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        aptoNum:{
            type:DataTypes.INTEGER,
            allowNull: false
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