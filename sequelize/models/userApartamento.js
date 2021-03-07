module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const UserApartamento=sequelize.define('UserApartamento',{
        aptoId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        idUsuario:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
               
    },{});
    return UserApartamento

}