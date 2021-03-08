module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Apartamento_Factura=sequelize.define('Apartamento_Factura',{
        facturaId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        apartamentoId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        }
    },{});
    return Apartamento_Factura

}