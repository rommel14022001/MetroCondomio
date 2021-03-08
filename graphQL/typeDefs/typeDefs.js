const {gql} = require('apollo-server-express');
   
const typeDefs=gql`
    type Usuario{
        id:Int!,
        nombre:String!,
        apellido:String!,
        rol: Int!,
        correo: String!,
        aptosIds:String!,
        numeroTelf:String!,
        fechaDeNacimiento:String!,
        cedula:Int!,
        active:Boolean!
    }
    type Edificio{
        id:Int!,
        nombre:String!,
        pisos:Int!,
        aptosPPiso: Int!,
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
        active:Boolean!
    }
    type Factura{
        id:Int!,
        fechaDeCreacion:String!,
        fechaDeVencimiento:String!,
        monto:Float!,
        active:Boolean!
    }
    type Apartamento_Factura{
        facturaId:Int!,
        apartamentoId:Int!
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
        facturaId: Int!
    }
    type UserApartamento{
        aptoId:Int!,
        idUsuario:Int!,
    }
    type Residencia{
        id:Int!,
        calle:String!,
        ciudad:String!,
        municipio:String!,
        estado:String!,
        nombre:String!,
        torres: Int!,
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
        
}
    type Mutation{
        createUsuario(nombre:String!,apellido:String!,rol:Int!,correo: String!,aptosIds:String!,numeroTelf:String!,fechaDeNacimiento:String!,cedula:Int!,active:Boolean!):Usuario
        createGasto(nombre:String!,monto:Int!,active:Boolean!):Gasto
        createResidencia(calle:String!,ciudad:String!,municipio:String!,estado:String!,nombre:String!,torres:Int!,active:Boolean!):Residencia
        createEdificio(nombre:String!,pisos:Int!,aptosPPiso: Int!,active:Boolean!):Edificio
        createApartamento(edificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int,inquilinoNombre: String,alicuota: Float!,active:Boolean!):Apartamento
        createFactura(fechaDeCreacion: String!, fechaDeVencimiento: String!, monto: Float!, active: Boolean!): Factura
        createApartamentoFactura(facturaId: Int!, apartamentoId: Int!): Apartamento_Factura
        createPago(metodoId: Int!, monto:Int!, active: Boolean!): Pago
        createMetodoPago(metodo: String!, active: Boolean!): MetodoPago
        updateFactura(id: Int!, fechaDeCreacion: String!, fechaDeVencimiento: String!, monto: Float!, active: Boolean!):Factura
        updateGasto(id: Int!, nombre:String!,monto:Int!,active:Boolean!):Gasto
        updateEdificio(id: Int!,nombre:String!,pisos:Int!,aptosPPiso: Int!,active:Boolean!):Edificio
        updateApartamento(id: Int!,edificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int,inquilinoNombre: String,alicuota: Float!,active:Boolean!):Apartamento
        updateMetodoPago(id: Int!, metodo: String!, active: Boolean!): MetodoPago
        createPagoFactura(pagoId: Int!, facturaId: Int!): PagoFactura
        createUserApartamento(aptoId:Int!,idUsuario:Int!):UserApartamento
        updateUsuario(id:Int!,nombre:String!,apellido:String!,rol: Int!,correo: String!,aptosIds:String!,numeroTelf:Int!,fechaDeNacimiento:String!,cedula:Int!,active:Boolean!):Usuario
        updateResidencia(id:Int!,calle:String!,ciudad:String!,municipio:String!,estado:String!,nombre:String!,torres: Int!,active:Boolean!):Residencia
        updateUserApartamento(IdUsuario:Int!,idApartamento:Int!):UserApartamento
    }
`;

module.exports=typeDefs;