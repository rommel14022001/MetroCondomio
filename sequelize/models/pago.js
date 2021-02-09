module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Pago=sequelize.define('Pago',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        metodo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        monto:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Pago

}