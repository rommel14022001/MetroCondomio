const {gql} = require('apollo-server-express');
   
const typeDefs=gql`
    type Usuario{
        id:Int!,
        nombre:String!,
        apellido:String!,
        rol: Int!,
        correo: String!,
        aptosIds:String!,
        numeroTelf:Int!,
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
    type Query{
                
        getUsuarios:[Usuario]
        getUsuario(id:Int!):Usuario
        getGastos:[Gasto]
        getActiveGastos:[Gasto]
        getGasto(id:Int!):Gasto
        getApartamentos: [Apartamento]
        getActiveApartamentos: [Apartamento]
        getApartamento (id:Int!):Apartamento
        getEdificios: [Edificio]
        getActiveEdificios: [Edificio]
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
        
    }
    type Mutation{
        createUsuario(nombre:String!,apellido:String!,rol:Int!,correo: String!,aptosIds:String!,numeroTelf:Int!,fechaDeNacimiento:String!,cedula:Int!,active:Boolean!):Usuario
        createGasto(nombre:String!,monto:Int!,active:Boolean!):Gasto
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
    }
`;

module.exports=typeDefs;