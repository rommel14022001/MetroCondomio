const resolvers={

    Query:{

        async getUsuarios(root,args,{models}){
            return await models.usuario.findAll()
        },

        async getUsuario(root,args,{models}){
            return await models.usuario.findByPk(args.id)
        },
        async getGastos(root,args,{models}){
            return await models.gasto.findAll()
        },
        async getActiveGastos(root,args,{models}){
            return await models.gasto.findAll({ where:{active: true}})
        },
        async getGasto(root,args,{models}){
            return await models.gasto.findByPk(args.id)
        }

    },
    Mutation:{
        async createUsuario(root,{nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active},{models}){
            return await models.usuario.create({nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active})
        },
        async createGasto(root,{nombre,monto,active},{models}){
            return await models.gasto.create({nombre,monto,active})
        },
        async updateGasto(root,{id,nombre,monto,active},{models}){
            await models.gasto.update({nombre,monto,active}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        
        }
        
    }

}

module.exports=resolvers;