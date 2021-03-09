module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Apartamento_Factura=sequelize.define('Apartamento_Factura',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        facturaId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        apartamentoId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        monto:{
            type:DataTypes.FLOAT,
            allowNull:false
        }
    },{});
    return Apartamento_Factura

}