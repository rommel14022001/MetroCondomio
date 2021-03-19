module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Apartamento_Factura=sequelize.define('Apartamento_Factura',{
        
        FacturaId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            
        },
        ApartamentoId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            
        },
        monto:{
            type:DataTypes.FLOAT,
            allowNull:false
        }
    },{});
    return Apartamento_Factura

}