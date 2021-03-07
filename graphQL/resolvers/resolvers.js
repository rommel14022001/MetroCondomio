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
        },
        async getApartamentos(root, arg, {models}){
            return await models.apartamento.findAll()
        },
        async getActiveApartamentos(root, arg, {models}){
            return await models.apartamento.findAll({ where:{active: true}})
        },
        async getApartamento(root, arg, {models}){
            return await models.apartamento.findByPk(arg.id)
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


    },
    Mutation:{
        async createUsuario(root,{nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active},{models}){
            return await models.usuario.create({nombre,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula,active})
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
        async createFactura(root,{fechaDeCreacion,fechaDeVencimiento,monto,active},{models}){
            return await models.factura.create({fechaDeCreacion,fechaDeVencimiento,monto,active})
        },
        async createApartamentoFactura(root,{facturaId,apartamentoId},{models}){
            return await models.apartamento_factura.create({facturaId,apartamentoId})
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
        async updateFactura(root,{id,fechaDeCreacion,fechaDeVencimiento,monto,active},{models}){
            await models.factura.create({fechaDeCreacion,fechaDeVencimiento,monto,active},{where: {
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
        }
    }

}

module.exports=resolvers;