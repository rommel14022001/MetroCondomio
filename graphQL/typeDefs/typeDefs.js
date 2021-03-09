const {gql} = require('apollo-server-express');
   
const typeDefs=gql`
    type Usuario{
        cedula:Int!,
        nombre:String!,
        apellido:String!,
        rol: Int!,
        correo: String!,
        aptosIds:String!,
        numeroTelf:String!,
        fechaDeNacimiento:String!,
        active:Boolean!
    }
    type Edificio{
        id:Int!,
        nombre:String!,
        pisos:Int!,
        aptosPPiso: Int!,
        residenciaId: Int!
        active:Boolean!
    }
    type Apartamento{
        id:Int!,
        edificioId: Int!,
        piso:Int!,
        aptoNum: Int!,
        cedula: Int,
        inquilinoNombre: String,
        alicuota: Float!,
        active:Boolean!
    }
    type Gasto{
        id:Int!,
        nombre:String!,
        monto:Int!,
        id_tipo_de_gasto: Int!,
        fechaDeBorrado: String!,
        fechaDeCreacion: String!,
        active:Boolean!
    }
    type Factura{
        id:Int!,
        fechaDeCreacion:String!,
        fechaDeVencimiento:String!,
        active:Boolean!
    }
    type Apartamento_Factura{
        id:Int!,
        facturaId:Int!,
        apartamentoId:Int!,
        monto: Float!
    }
    type Pago{
        id: Int!,
        metodoId: Int!,
        monto: Float!
        active: Boolean!
    }
    type MetodoPago{
        id: Int!,
        metodo: String!,
        active: Boolean!
    }
    type PagoFactura{
        pagoId: Int!,
        facturaId: Int!,
        idPagoFactura: Int!,
        montoPago: Int!
    }
    type UserApartamento{
        aptoId:Int!,
        idUsuario:Int!,
        active: Boolean!
    }
    type Edificio_Gasto{
        edificioId:Int!,
        gastoId:Int!,
        active: Boolean!
    }
    type Residencia{
        id:Int!,
        calle:String!,
        ciudad:String!,
        municipio:String!,
        estado:String!,
        nombre:String!,
        active:Boolean!
    }
    type Tipo_De_Gasto{
        id:Int!,
        tipo:String!,
        active:Boolean!
    }
    type Query{
        getUsuarioCedula(cedula:Int!):Usuario
        getUsuarios:[Usuario]
        getUsuario(id:Int!):Usuario
        getGastos:[Gasto]
        getActiveGastos:[Gasto]
        getGasto(id:Int!):Gasto
        getResidencias:[Residencia]
        getResidencia(id:Int!):Residencia
        getApartamentos: [Apartamento]
        getActiveApartamentos: [Apartamento]
        getApartamento (id:Int!):Apartamento
        getEdificios: [Edificio]
        getActiveEdificios: [Edificio]
        getNotActiveApartamentos:[Apartamento]
        getNotActiveApartamentosByEdif(edificioId:Int!):[Apartamento]
        getEdificio (id:Int!):Edificio
        getEdificioName (nombre:String!):Edificio
        getFacturas: [Factura]
        getActiveFacturas: [Factura]
        getFacturaId (id: Int!):Factura
        getApartamentoFactura : [Apartamento_Factura]
        getPagos: [Pago]
        getActivePagos : [Pago]
        getPagoId (id: Int!): Pago
        getMetodosPago: [MetodoPago]
        getActiveMetodosPago : [MetodoPago]
        getMetodoPagoId (id: Int!) : MetodoPago
        getPagoFactura: [PagoFactura]
        getUserApartamentos:[UserApartamento]
        getUserApartamentoUsuario(idUsuario:Int!):[UserApartamento]
        getUserApartamentoApartamento(idApartamento:Int!):UserApartamento
        getApartamentoByEdifIdByAptoNum(aptoNum:Int!,edificioId:Int!):Apartamento
        getEdificiosGastos:[Edificio_Gasto]
        getTiposDeGasto: [Tipo_De_Gasto]
        
}
    type Mutation{
        createUsuario(cedula:Int!,nombre:String!,apellido:String!,rol:Int!,correo: String!,aptosIds:String!,numeroTelf:String!,fechaDeNacimiento:String!,active:Boolean!):Usuario
        createGasto(nombre:String!,monto:Int!,id_tipo_de_gasto: String!, fechaDeBorrado: String!,fechaDeCreacion: String!,active:Boolean!):Gasto
        createResidencia(calle:String!,ciudad:String!,municipio:String!,estado:String!,nombre:String!,active:Boolean!):Residencia
        createEdificio(nombre:String!,pisos:Int!,aptosPPiso: Int!,residenciaId: Int!,active:Boolean!):Edificio
        createApartamento(edificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int,inquilinoNombre: String,alicuota: Float!,active:Boolean!):Apartamento
        createFactura(fechaDeCreacion: String!, fechaDeVencimiento: String!, active: Boolean!): Factura
        createApartamentoFactura(facturaId: Int!, apartamentoId: Int!, monto: Float!): Apartamento_Factura
        createPago(metodoId: Int!, monto:Int!, active: Boolean!): Pago
        createMetodoPago(metodo: String!, active: Boolean!): MetodoPago
        createPagoFactura(pagoId: Int!, facturaId: Int!,idPagoFactura: Int!,montoPago: Int!): PagoFactura
        createUserApartamento(aptoId:Int!,idUsuario:Int!,active: Boolean!):UserApartamento
        createEdificioGasto(edificioId: Int!, gastoId: Int!, active: Boolean!): Edificio_Gasto
        createTipoDeGasto(tipo: String!, active: Boolean!): Tipo_De_Gasto

        updateFactura(id: Int!, fechaDeCreacion: String!, fechaDeVencimiento: String!, active: Boolean!):Factura
        updateGasto(id: Int!, nombre:String!,monto:Int!,id_tipo_de_gasto: String!, fechaDeBorrado: String!,fechaDeCreacion: String!,active:Boolean!):Gasto
        updateEdificio(id: Int!,nombre:String!,pisos:Int!,aptosPPiso: Int!,residenciaId: Int!,active:Boolean!):Edificio
        updateApartamento(id: Int!,edificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int,inquilinoNombre: String,alicuota: Float!,active:Boolean!):Apartamento
        updateMetodoPago(id: Int!, metodo: String!, active: Boolean!): MetodoPago
        updateUsuario(cedula:Int!,nombre:String!,apellido:String!,rol:Int!,correo: String!,aptosIds:String!,numeroTelf:String!,fechaDeNacimiento:String!,active:Boolean!):Usuario
        updateResidencia(id:Int!,calle:String!,ciudad:String!,municipio:String!,estado:String!,nombre:String!,active:Boolean!):Residencia
        updateUserApartamento(aptoId:Int!,idUsuario:Int!,active: Boolean!):UserApartamento
    }
`;

module.exports=typeDefs;