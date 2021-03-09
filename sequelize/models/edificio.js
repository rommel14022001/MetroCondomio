module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Edificio=sequelize.define('Edificio',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        pisos:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        aptosPPiso:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        residenciaId:{
            type: DataTypes.Integer,
            allowNull: false,
            primaryKey:true
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Edificio

}