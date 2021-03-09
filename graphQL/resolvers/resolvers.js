const resolvers={

    Query:{

        async getUsuarios(root,args,{models}){
            return await models.usuario.findAll()
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
            return await models.apartamento.findAll({ where:{active: true}})
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
        },
        async getEdificiosGastos(root, arg, {models}){
            return await models.edificio_gasto.findAll()
        },
        async getTiposDeGasto(root, arg, {models}){
            return await models.tipo_de_gasto.findAll()
        },
        async getTiposDeUsuarios(root, arg, {models}){
            return await models.tipos_de_usuarios.findAll()
        }

    },
    Mutation:{
        async createUsuario(root,{cedula,nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,active},{models}){
            return await models.usuario.create({nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active})
        },
       async updateUsuario(root,{cedula,nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,active},{models}){
            await models.usuario.update({cedula,nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,active}, {where: {
                cedula: cedula
            }
        }).then(()=>{
            return true
        })
        },
       async createEdificio(root,{nombre,pisos,aptosPPiso,residenciaId,active},{models}){
            return await models.edificio.create({nombre,pisos,aptosPPiso,residenciaId,active})
        },
        async createApartamento(root,{edificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active},{models}){
            return await models.apartamento.create({edificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active})
        },
        async createGasto(root,{nombre,monto,id_tipo_de_gasto, fechaDeBorrado,fechaDeCreacion,active},{models}){
            return await models.gasto.create({nombre,monto,id_tipo_de_gasto, fechaDeBorrado,fechaDeCreacion,active})
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
        async createPagoFactura(root,{pagoId, facturaId,idPagoFactura,montoPago},{models}){
            return await models.pago_factura.create({pagoId, facturaId,idPagoFactura,montoPago})
        },
        async createEdificioGasto(root,{edificioId,gastoId,active},{models}){
            return await models.edificio_gasto.create({edificioId,gastoId,active})
        },
        async createTipoDeGasto(root,{tipo,active},{models}){
            return await models.tipo_de_gasto.create({tipo,active})
        },
        async createTiposDeUsuarios(root,{tipo,active},{models}){
            return await models.tipos_de_usuarios.create({tipo,active})
        },
        async updateMetodoPago(root,{id,metodo,active},{models}){
            await models.metodoPago.update({metodo,active},{where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        },
        async updateFactura(root,{id,fechaDeCreacion,fechaDeVencimiento,active},{models}){
            await models.factura.update({fechaDeCreacion,fechaDeVencimiento,active},{where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        },
        async updateGasto(root,{id,nombre,monto,id_tipo_de_gasto, fechaDeBorrado,fechaDeCreacion,active},{models}){
            await models.gasto.update({nombre,monto,id_tipo_de_gasto, fechaDeBorrado,fechaDeCreacion,active}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
    },
        async createResidencia(root,{calle,ciudad,municipio,estado,nombre,active},{models}){
            return await models.residencia.create({calle,ciudad,municipio,estado,nombre,active})
        },
        async createUserApartamento(root,{aptoId,idUsuario,tipoUsuarioId,active},{models}){
            return await models.UserApartamento.create({aptoId,idUsuario,tipoUsuarioId,active})
        },
        async updateResidencia(root,{id,calle,ciudad,municipio,estado,nombre,active},{models}){
            await models.residencia.update({calle,ciudad,municipio,estado,nombre,active}, {where: {
        }})},
        async updateEdificio(root,{id,nombre,pisos,aptosPPiso,active},{models}){
            await models.edificio.update({nombre,pisos,aptosPPiso,residenciaId,active}, {where: {
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
      async updateUserApartamento(root,{idUsuario,idApartamento,tipoUsuarioId, active},{models}){
            await models.UserApartamento.update({idUsuario,idApartamento,tipoUsuarioId, active}, {where: {
               idUsuario: idUsuario
            }
        }).then(()=>{
            return true
        })
      }
    }

    }

module.exports=resolvers;