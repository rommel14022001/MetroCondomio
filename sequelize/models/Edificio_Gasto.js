module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Edificio_Gasto=sequelize.define('Edificio_Gasto',{
        EdificioId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            
        },
        GastoId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        active: {
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Edificio_Gasto

}