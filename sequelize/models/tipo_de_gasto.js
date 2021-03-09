module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Tipo_De_Gasto=sequelize.define('Tipo_De_Gasto',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        tipo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Tipo_De_Gasto

}