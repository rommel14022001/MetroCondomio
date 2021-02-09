
module.exports= (sequelize,DataTypes)=>{
    //Esto te permite crear esa capa de ORM
    const Gasto=sequelize.define('Gasto',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        monto:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }

        // (async () => {
        // await sequelize.sync({ force: true });
        //     // Code here
        //     async function crearGasto(name,amount){
        //         const gasto = await Gasto.build({ name: "obreros",amount:50 });
        //         await gasto.save();
        //     }
        // })
    },{});
    return Gasto

    
}

export const crearGasto = async (Gasto,name,amount)=> {
    
        const gasto = await Gasto.build({ name: name,amount:amount });
        await gasto.save();
        console.log(gasto.name);
    }



