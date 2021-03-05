const resolvers={

    Query:{

        async getUsuarios(root,args,{models}){
            return await models.usuario.findAll()
        },

        async getUsuario(root,args,{models}){
            return await models.usuario.findByPk(args.id)
        },
        async getUsuarioCedula(root,args,{models}){
            return await models.usuario.findOne({ where: { cedula: args.cedula} });
        },
        async getGastos(root,args,{models}){
            return await models.gasto.findAll()
        },
        async getResidencias(root,args,{models}){
            return await models.residencia.findAll()
        },
        async getResidencia(root,args,{models}){
            return await models.residencia.findByPk(args.id)
        },
        

    },
    Mutation:{
        async createUsuario(root,{nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active},{models}){
            return await models.usuario.create({nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active})
        },
        async updateUsuario(root,{id,nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active},{models}){
            await models.usuario.update({nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        
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
        
        },
        async createResidencia(root,{calle,ciudad,municipio,estado,nombre,torres,active},{models}){
            return await models.residencia.create({calle,ciudad,municipio,estado,nombre,torres,active})
        },
        async updateResidencia(root,{id,calle,ciudad,municipio,estado,nombre,torres,active},{models}){
            await models.residencia.update({calle,ciudad,municipio,estado,nombre,torres,active}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        
        }
        
    }

}

module.exports=resolvers;