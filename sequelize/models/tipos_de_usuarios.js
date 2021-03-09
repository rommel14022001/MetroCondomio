module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Tipos_De_Usuario=sequelize.define('Tipos_De_Usuario',{
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
    return Tipos_De_Usuario

}