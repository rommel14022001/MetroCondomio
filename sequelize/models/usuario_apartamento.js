module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Usuario_Apartamento=sequelize.define('Usuario_Apartamento',{
        aptoId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        idUsuario:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        tipoUsuarioId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull: false
        }
               
    },{});
    return Usuario_Apartamento

}