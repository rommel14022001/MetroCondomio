
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
        async getGasto(root,args,{models}){
            return await models.gasto.findByPk(args.id)
        }

    },
    Mutation:{

        async createUsuario(root,{nombre,apellido,active},{models}){
            return await models.usuario.create({nombre,apellido,active})
        },
        async createGasto(root,{nombre,monto,active},{models}){
            return await models.gasto.create({nombre,monto,active})
        }

    }

}

module.exports=resolvers;