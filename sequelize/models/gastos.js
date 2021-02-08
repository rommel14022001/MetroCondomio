module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Gasto=sequelize.define('Gasto',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        monto:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Gasto

}