module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Factura_Gasto=sequelize.define('Factura_Gastos',{
        FacturaId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        GastoId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
               
    },{});
    return Factura_Gasto

}