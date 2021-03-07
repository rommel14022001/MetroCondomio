module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Factura=sequelize.define('Factura',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        fechaDeCreacion:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        fechaDeVencimiento:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        monto:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Factura

}