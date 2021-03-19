module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const TipoGasto=sequelize.define('TipoGasto',{
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
    return TipoGasto

}