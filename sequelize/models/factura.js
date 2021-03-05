module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Factura=sequelize.define('Factura',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        residenciaId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        fecha:{
            type:DataTypes.STRING,
            allowNull:false
        },
        pagoIds:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Factura

}