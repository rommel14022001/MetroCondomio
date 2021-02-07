module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Usuario=sequelize.define('Usuario',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        apellido:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Usuario

}