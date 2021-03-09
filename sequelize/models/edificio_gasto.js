module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Edificio_Gasto=sequelize.define('Edificio_Gasto',{
        edificioId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        gastoId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        active: {
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Edificio_Gasto

}