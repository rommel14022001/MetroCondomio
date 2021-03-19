const {gql} = require('apollo-server-express');
   
const typeDefs=gql`
    type Usuario{
        id:Int!,
        nombre:String!,
        apellido:String!,
        rol: Int!,
        correo: String!,
        numeroTelf:String!,
        fechaDeNacimiento:String!,
        cedula:Int!,
        active:Boolean!,
        TipoUsuario:TipoUsuario
    }
    type Edificio{
        id:Int!,
        nombre:String!,
        pisos:Int!,
        aptosPPiso: Int!,
        ResidenciaId: Int!,
        active:Boolean!,
        Residencia:Residencia
    }
    type Apartamento{
        id:Int!,
        EdificioId: Int!,
        Edificio:Edificio,
        piso:Int!,
        aptoNum: Int!,
        alicuota: Float!,
        active:Boolean!
    }
    type Gasto{
        id:Int!,
        nombre:String!,
        monto:Int!,
        active:Boolean!,
        TipoGastoId:Int!,
        TipoGasto:TipoGasto
    }
    type UserApartamento{
        ApartamentoId:Int!,
        Apartamento:Apartamento,
        UsuarioId:Int!,
        Usuario:Usuario,
        TipoUsuarioId:Int!,
        TipoUsuario:TipoUsuario
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
  type Factura{
        id:Int!,
        fechaDeCreacion:String!,
        fechaDeVencimiento:String!,
        active:Boolean!
    }
    
    type Pago{
        id: Int!,
        metodoId: Int!,
        monto: Float!,
        active: Boolean!,
        metodoPagoId:Int!,
        metodoPago:metodoPago
    }
    type metodoPago{
        id: Int!,
        metodo: String!,
        active: Boolean!
    }
    
    type TipoUsuario{
        id:Int!,
        tipo:String
        active:Boolean!
    }
    type TipoGasto{
        id:Int!,
        tipo:String!,
        active:Boolean!
    }
    type Edificio_Gasto{
        EdificioId:Int!,
        GastoId:Int!,
        active: Boolean!,
        Gasto:Gasto,
        Edificio:Edificio
    }
    type Apartamento_Gasto{
        ApartamentoId:Int!,
        GastoId:Int!,
        active: Boolean!,
        Gasto:Gasto,
        Apartamento:Apartamento
    }
    type Apartamento_Factura{
        FacturaId:Int!,
        ApartamentoId:Int!,
        Factura: Factura,
        Apartamento: Apartamento,
        monto: Float!
    }
    type Factura_Gasto{
        FacturaId:Int!,
        GastoId:Int!,
        Factura: Factura,
        Gasto: Gasto
    }
    type Pago_Factura{
        PagoId: Int!,
        FacturaId: Int!,
        ApartamentoId: Int!,
        montoPago: Float!,
        Apartamento:Apartamento,
        Pago:Pago,
        Factura:Factura
    }
    type Query{
        getFacturaGasto: [Factura_Gasto]
        getUsuarioCedula(cedula:Int!):Usuario
        getEdificiosGastos:[Edificio_Gasto]
        getApartamentosGastos:[Apartamento_Gasto]
        getUsuarios:[Usuario]
        getUsuario(id:Int!):Usuario
        getUsuarioAllPropietarios:[Usuario]
        getUsuarioAllAdmin:[Usuario]
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
        getMetodosPago: [metodoPago]
        getActiveMetodosPago : [metodoPago]
        getMetodoPagoId (id: Int!) : metodoPago
        
        getUserApartamentos:[UserApartamento]
        getUserApartamentoUsuario(UsuarioId:Int!):[UserApartamento]
        getUserApartamentoApartamento(ApartamentoId:Int!):UserApartamento
        getApartamentoByEdifIdByAptoNum(aptoNum:Int!,edificioId:Int!):Apartamento
        getTipoUsuario(tipo:String!,active:Boolean!):TipoUsuario
        getUserApartamentosTiposUsuario:[UserApartamento]
        getUserApartamentosAptos:[UserApartamento]
        getTiposDeGasto:[TipoGasto]
        getPagoFactura: [Pago_Factura]
        
}
    type Mutation{
        createPagoFactura(PagoId: Int!, FacturaId: Int!,ApartamentoId: Int!,montoPago: Float!): Pago_Factura
        createFacturaGasto(FacturaId: Int!, GastoId: Int!): Factura_Gasto
        createApartamentoFactura(FacturaId: Int!, ApartamentoId: Int!, monto: Float!):Apartamento_Factura
        createUsuario(nombre:String!,apellido:String!,rol:Int!,correo: String!,aptosIds:String!,numeroTelf:String!,fechaDeNacimiento:String!,cedula:Int!,active:Boolean!):Usuario
        createGasto(nombre:String!,monto:Int!,active:Boolean!,TipoGastoId:Int!):Gasto
        createResidencia(calle:String!,ciudad:String!,municipio:String!,estado:String!,nombre:String!,active:Boolean!):Residencia
        createEdificio(nombre:String!,pisos:Int!,aptosPPiso: Int!,ResidenciaId: Int!,active:Boolean!):Edificio
        createApartamento(EdificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int,inquilinoNombre: String,alicuota: Float!,active:Boolean!):Apartamento
        createEdificioGasto(EdificioId: Int!, GastoId: Int!, active: Boolean!): Edificio_Gasto
        createUserApartamento(ApartamentoId:Int!,UsuarioId:Int!,TipoUsuarioId:Int!):UserApartamento
        createFactura(fechaDeCreacion: String!, fechaDeVencimiento: String!, active: Boolean!): Factura
       createPago(metodoPagoId: Int!, monto:Int!, active: Boolean!): Pago
        createMetodoPago(metodo: String!, active: Boolean!): metodoPago
        
        createTipoUsuario(tipo:String!,active:Boolean!): TipoUsuario
        createApartamentoGasto(ApartamentoId: Int!, GastoId: Int!, active: Boolean!): Apartamento_Gasto
       
        createTipoDeGasto(tipo: String!, active: Boolean!,TipoGastoId:Int!): TipoGasto

        updateUsuario(id:Int!,nombre:String!,apellido:String!,rol: Int!,correo: String!,aptosIds:String!,numeroTelf:Int!,fechaDeNacimiento:String!,cedula:Int!,active:Boolean!):Usuario
        updateResidencia(id:Int!,calle:String!,ciudad:String!,municipio:String!,estado:String!,nombre:String!,active:Boolean!):Residencia
        updateEdificio(id: Int!,nombre:String!,pisos:Int!,aptosPPiso: Int!,ResidenciaId:Int!,active:Boolean!):Edificio
        updateApartamento(id: Int!,EdificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int,inquilinoNombre: String,alicuota: Float!,active:Boolean!):Apartamento
        updateUserApartamento(IdUsuario:Int!,idApartamento:Int!):UserApartamento

        updateFactura(id: Int!, fechaDeCreacion: String!, fechaDeVencimiento: String!, monto: Float!, active: Boolean!):Factura
        updateGasto(id: Int!, nombre:String!,monto:Int!,active:Boolean!):Gasto
        updateMetodoPago(id: Int!, metodo: String!, active: Boolean!): metodoPago
    }
     `;

module.exports=typeDefs;