module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const MetodoPago=sequelize.define('MetodoPago',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        metodo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return MetodoPago

}