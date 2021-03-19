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
            return await models.gasto.findAll({include:models.TipoGasto})
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
            return await models.apartamento.findAll({ where:{active: false},include:models.edificio})
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
            return await models.edificio.findAll({include: {model: models.residencia}})
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
        async getUserApartamentoUsuario(root, arg, {models}){
            return await models.userApartamento.findAll({ where:{UsuarioId:arg.UsuarioId}})
        },
        async getUserApartamentoApartamento(root, arg, {models}){
            return await models.userApartamento.findOne({ where:{ApartamentoId:arg.ApartamentoId}})
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
            return await models.pago.findAll({include:models.metodoPago})
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
        
      async getUserApartamentos(root, arg, {models}){
            return await models.userApartamento.findAll({include:[{model:models.apartamento},{model:models.TipoUsuario},{model:models.usuario}]})
        },
        
        async getUserApartamentoUsuario(root, arg, {models}){
            return await models.userApartamento.findAll({ where:{idUsuario:arg.idUsuario}})
        },
        async getUserApartamentoApartamento(root, arg, {models}){
            return await models.userApartamento.findOne({ where:{idApartamento:arg.idApartamento}})
        },
        async getTipoUsuario(root, arg, {models}){
            return await models.TipoUsuario.findAll()
        },
        async getTiposDeGasto(root, arg, {models}){
            return await models.TipoGasto.findAll()
        },
        async getEdificiosGastos(root, arg, {models}){
            return await models.Edificio_Gasto.findAll({include:[{model:models.edificio},{model:models.gasto}]});
        },
        async getApartamentosGastos(root, arg, {models}){
            return await models.Apartamento_Gasto.findAll({include:[{model:models.apartamento},{model:models.gasto}]});
        },
        async getApartamentoFactura(root, arg, {models}){
            return await models.apartamento_Factura.findAll({include:[{model:models.factura},{model:models.apartamento}]})
        },
        async getFacturaGasto(root, arg, {models}){
            return await models.Factura_Gasto.findAll({include:[{model: models.factura},{model: models.gasto}]})
        },
        async getPagoFactura(root, arg, {models}){
            return await models.Pago_Factura.findAll({include: [{model: models.pago},{model: models.factura},{model:models.apartamento}]})
        },

    },
    Mutation:{
        async createPagoFactura(root,{PagoId, FacturaId,ApartamentoId,montoPago},{models}){
            return await models.Pago_Factura.create({PagoId, FacturaId,ApartamentoId,montoPago})
        },
        async createFacturaGasto(root,{FacturaId, GastoId},{models}){
            return await models.Factura_Gasto.create({FacturaId, GastoId})
        },
        async createApartamentoFactura(root,{facturaId,apartamentoId, monto},{models}){
            return await models.apartamento_factura.create({facturaId,apartamentoId, monto})
        },
        async createEdificioGasto(root,{EdificioId,GastoId,active},{models}){
            return await models.Edificio_Gasto.create({EdificioId,GastoId,active})
        },
        async createApartamentoGasto(root,{ApartamentoId,GastoId,active},{models}){
            return await models.Apartamento_Gasto.create({ApartamentoId,GastoId,active})
        },
        
        async createUsuario(root,{nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active},{models}){
            return await models.usuario.create({nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active})
        },
        async createTipoDeGasto(root,{tipo,active},{models}){
            return await models.TipoGasto.create({tipo,active})
        },
       async updateUsuario(root,{id,nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active},{models}){
            await models.usuario.update({nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        },
       async createEdificio(root,{nombre,pisos,aptosPPiso,ResidenciaId,active},{models}){
            return await models.edificio.create({nombre,pisos,aptosPPiso,ResidenciaId,active})
        },
        async createApartamento(root,{EdificioId,piso,aptoNum,alicuota,active},{models}){
            return await models.apartamento.create({EdificioId,piso,aptoNum,alicuota,active})
        },
        async createGasto(root,{nombre,monto,active,TipoGastoId},{models}){
            return await models.gasto.create({nombre,monto,active,TipoGastoId})
        },
        async createFactura(root,{fechaDeCreacion,fechaDeVencimiento,active},{models}){
            return await models.factura.create({fechaDeCreacion,fechaDeVencimiento,active})
        },
        async createApartamentoFactura(root,{FacturaId,ApartamentoId, monto},{models}){
            return await models.apartamento_Factura.create({FacturaId,ApartamentoId, monto})
        },
        async createPago(root,{metodoPagoId,monto,active},{models}){
            return await models.pago.create({metodoPagoId, monto, active})
        },
        async createMetodoPago(root,{metodo,active},{models}){
            return await models.metodoPago.create({metodo,active})
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
        async updateGasto(root,{id,nombre,monto,active},{models}){
            await models.gasto.update({nombre,monto,active}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
    },
        async createResidencia(root,{calle,ciudad,municipio,estado,nombre,active},{models}){
            return await models.residencia.create({calle,ciudad,municipio,estado,nombre,active})
        },
        async createUserApartamento(root,{ApartamentoId,UsuarioId,TipoUsuarioId},{models}){
            return await models.userApartamento.create({ApartamentoId,UsuarioId,TipoUsuarioId})
        },
        async createTipoUsuario(root,{tipo,active},{models}){
            return await models.tipoUsuario.create({tipo,active})
        },
        async updateResidencia(root,{id,calle,ciudad,municipio,estado,nombre,active},{models}){
            await models.residencia.update({calle,ciudad,municipio,estado,nombre,active}, {where: {
        }})},
        async updateEdificio(root,{id,nombre,pisos,aptosPPiso,active,ResidenciaId},{models}){
            await models.edificio.update({nombre,pisos,aptosPPiso,active,ResidenciaId}, {where: {
                id: id
            }
        }).then(()=>{
            return true
        })
        },
        async updateApartamento(root,{id,EdificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active},{models}){
            await models.apartamento.update({EdificioId,piso,aptoNum,cedula,inquilinoNombre,alicuota,active}, {where: {
               id: id
            }
        }).then(()=>{
            return true
        })
      },
      async updateUserApartamento(root,{UsuarioId,ApartamentoId,TipoUsuarioId},{models}){
            await models.UserApartamento.update({UsuarioId,ApartamentoId,TipoUsuarioId}, {where: {
               UsuarioId: UsuarioId
            }
        }).then(()=>{
            return true
        })
      }

    }

    }

module.exports=resolvers;