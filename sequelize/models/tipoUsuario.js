module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const TipoUsuario=sequelize.define('TipoUsuario',{
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
    return TipoUsuario

}