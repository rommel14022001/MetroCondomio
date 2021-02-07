
const resolvers={

    Query:{

        async getUsuarios(root,args,{models}){
            return await models.usuario.findAll()
        },

        async getUsuario(root,args,{models}){
            return await models.usuario.findByPk(args.id)
        }

    },
    Mutation:{

        async createUsuario(root,{nombre,apellido,active},{models}){
            return await models.usuario.create({nombre,apellido,active})
        }

    }

}

module.exports=resolvers;