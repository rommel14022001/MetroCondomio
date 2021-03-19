module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Pago_Factura=sequelize.define('Pago_Factura',{
        PagoId:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
        },
        FacturaId:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
        },
        ApartamentoId:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
        },
        montoPago:{
            type: DataTypes.FLOAT,
            allowNull: false
        }

    },{});
    return Pago_Factura

}