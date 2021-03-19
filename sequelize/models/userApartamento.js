module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const UserApartamento=sequelize.define('UserApartamento',{
        ApartamentoId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        UsuarioId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        TipoUsuarioId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
               
    },{});
    return UserApartamento

}