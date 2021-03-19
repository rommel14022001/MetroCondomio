module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Pago=sequelize.define('Pago',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        metodoPagoId:{
            type: DataTypes.INTEGER,
            allowNull:false,
            
        },
        monto:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        }
    },{});
    return Pago

}