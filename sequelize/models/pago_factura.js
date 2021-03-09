module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Pago_Factura=sequelize.define('Pago_Factura',{
        pagoId:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
            primaryKey:true
        },
        facturaId:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
            primaryKey:true
        },
        idPagoFactura:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
            primaryKey:true
        },
        montoPago:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },{});
    return Pago_Factura

}