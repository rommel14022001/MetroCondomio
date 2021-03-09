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
        async getUsuarioAllPropietarios(root,args,{models}){
            return await models.usuario.findAll({ where: { rol: 1} });
        },
        async getUsuarioAllAdmin(root,args,{models}){
            return await models.usuario.findAll({ where: { rol: 0} });
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
        
       async getGasto(root,args,{models}){
            return await models.gasto.findByPk(args.id)
        },
        async getApartamentos(root, arg, {models}){
            return await models.apartamento.findAll()
        },
        async getActiveApartamentos(root, arg, {models}){
            return await models.apartamento.findAll({ where:{active: false}})
        },
        async getActiveGastos(root, arg, {models}){
            return await models.gasto.findAll({ where:{active: true}})
        },
        async getNotActiveApartamentos(root, arg, {models}){
            return await models.apartamento.findAll({ where:{active: false}})
        },
        async getNotActiveApartamentosByEdif(root, arg, {models}){
            return await models.apartamento.findAll({ where:{active: false,edificioId:arg.edificioId}})
        },
        async getApartamento(root, arg, {models}){
            return await models.apartamento.findByPk(arg.id)
        },
        async getApartamentoByEdifIdByAptoNum(root, arg, {models}){
            return await models.apartamento.findOne({where:{aptoNum:arg.aptoNum,edificioId:arg.edificioId}})
        },
        async getEdificios(root, arg, {models}){
            return await models.edificio.findAll()
        },
        async getActiveEdificios(root, arg, {models}){
            return await models.edificio.findAll({ where:{active: true}})
        },
        async getEdificio(root, arg, {models}){
            return await models.edificio.findByPk(arg.id)
        },
        async getEdificioName(root, arg, {models}){
            return await models.edificio.findOne({ where:{nombre:arg.nombre}})
        },
// =======
        async getUserApartamentos(root, arg, {models}){
            return await models.UserApartamento.findAll()
        },
        async getUserApartamentoUsuario(root, arg, {models}){
            return await models.UserApartamento.findAll({ where:{idUsuario:arg.idUsuario}})
        },
        async getUserApartamentoApartamento(root, arg, {models}){
            return await models.UserApartamento.findOne({ where:{idApartamento:arg.idApartamento}})
        },
        

       async getFacturas(root, arg, {models}){
            return await models.factura.findAll()
        },
        async getActiveFacturas(root, arg, {models}){
            return await models.factura.findAll({ where:{active: true}})
        },
        async getFacturaId(root, arg, {models}){
            return await models.factura.findByPk(arg.id)
        },
        async getApartamentoFactura(root, arg, {models}){
            return await models.apartamento_factura.findAll()
        },
        async getPagos(root, arg, {models}){
            return await models.pago.findAll()
        },
        async getActivePagos(root, arg, {models}){
            return await models.pago.findAll({ where:{active: true}})
        },
        async getPagoId(root, arg, {models}){
            return await models.pago.findByPk(arg.id)
        },
        async getMetodosPago(root, arg, {models}){
            return await models.metodoPago.findAll()
        },
        async getActiveMetodosPago(root, arg, {models}){
            return await models.metodoPago.findAll({ where:{active: true}})
        },
        async getMetodoPagoId(root, arg, {models}){
            return await models.metodoPago.findByPk(arg.id)
        },
        async getPagoFactura(root, arg, {models}){
            return await models.PagoFactura.findAll()
        },
      async getUserApartamentos(root, arg, {models}){
            return await models.UserApartamento.findAll()
        },
        async getUserApartamentoUsuario(root, arg, {models}){
            return await models.UserApartamento.findAll({ where:{idUsuario:arg.idUsuario}})
        },
        async getUserApartamentoApartamento(root, arg, {models}){
            return await models.UserApartamento.findOne({ where:{idApartamento:arg.idApartamento}})
        }

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
       async createEdificio(root,{nombre,pisos,aptosPPiso,active},{models}){
            return await models.edificio.create({nombre,pisos,aptosPPiso,active})
        },
        async createApartamento(root,{edificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active},{models}){
            return await models.apartamento.create({edificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active})
        },
        async createGasto(root,{nombre,monto,active},{models}){
            return await models.gasto.create({nombre,monto,active})
        },
        async createFactura(root,{fechaDeCreacion,fechaDeVencimiento,active},{models}){
            return await models.factura.create({fechaDeCreacion,fechaDeVencimiento,active})
        },
        async createApartamentoFactura(root,{facturaId,apartamentoId, monto},{models}){
            return await models.apartamento_factura.create({facturaId,apartamentoId, monto})
        },
        async createPago(root,{metodoId,monto,active},{models}){
            return await models.pago.create({metodoId, monto, active})
        },
        async createMetodoPago(root,{metodo,active},{models}){
            return await models.metodoPago.create({metodo,active})
        },
        async createPagoFactura(root,{pagoId,facturaId},{models}){
            return await models.pago_factura.create({pagoId,facturaId})
        },
        async updateMetodoPago(root,{id,metodo,active},{models}){
            await models.metodoPago.create({metodo,active},{where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        },
        async updateFactura(root,{id,fechaDeCreacion,fechaDeVencimiento,active},{models}){
            await models.factura.create({fechaDeCreacion,fechaDeVencimiento,active},{where: {
                id: id
            }
        }).then(()=>{
            return true
        })
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
        async createUserApartamento(root,{aptoId,idUsuario},{models}){
            return await models.UserApartamento.create({aptoId,idUsuario})
        },
        async updateResidencia(root,{id,calle,ciudad,municipio,estado,nombre,torres,active},{models}){
            await models.residencia.update({calle,ciudad,municipio,estado,nombre,torres,active}, {where: {
        }})},
        async updateEdificio(root,{id,nombre,pisos,aptosPPiso,active},{models}){
            await models.edificio.update({nombre,pisos,aptosPPiso}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        },
        async updateApartamento(root,{id,edificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active},{models}){
            await models.apartamento.update({edificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active}, {where: {
               id: id
            }
        }).then(()=>{
            return true
        })
      },
      async updateUserApartamento(root,{idUsuario,idApartamento},{models}){
            await models.UserApartamento.update({idUsuario,idApartamento}, {where: {
               idUsuario: idUsuario
            }
        }).then(()=>{
            return true
        })
      }
    }

    }

module.exports=resolvers;