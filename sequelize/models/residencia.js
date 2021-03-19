module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Residencia=sequelize.define('Residencia',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        
        calle:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ciudad:{
            type:DataTypes.STRING,
            allowNull:false
        },
        municipio:{
            type:DataTypes.STRING,
            allowNull:false
        },
        estado:{
            type:DataTypes.STRING,
            allowNull:false
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Residencia

}