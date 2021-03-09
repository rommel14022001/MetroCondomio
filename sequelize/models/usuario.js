module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Usuario=sequelize.define('Usuario',{
        cedula:{
            type:DataTypes.INTEGER,
            allowNull:false,
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
        rol:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        correo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        aptosIds:{
            type:DataTypes.STRING,
            allowNull:false
        },
        numeroTelf:{
            type:DataTypes.STRING,
            allowNull:false
        },
        fechaDeNacimiento:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Usuario

}