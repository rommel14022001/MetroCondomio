module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Apartamento=sequelize.define('Apartamento',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        piso:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        idResidencia:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        ciPropietario:{
            type:DataTypes.STRING,
            allowNull:false
        },
        nombreInquilino:{
            type:DataTypes.STRING,
            allowNull:false
        },
        idsFacturas:{
            type:DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull:false
        },
        habitado:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{});
    return Apartamento

}