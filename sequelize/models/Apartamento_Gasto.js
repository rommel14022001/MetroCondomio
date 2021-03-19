module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Apartamento_Gasto=sequelize.define('Apartamento_Gasto',{
        ApartamentoId:{
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
    return Apartamento_Gasto

}