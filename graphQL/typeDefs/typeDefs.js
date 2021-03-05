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
        cedula: Int!,
        inquilinoNombre: String!,
        alicuota: Float!,
        active:Boolean!
    }
    type Gasto{
        id:Int!,
        nombre:String!,
        monto:Int!,
        active:Boolean!
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
        
    }
    type Mutation{
        createUsuario(nombre:String!,apellido:String!,rol:Int!,correo: String!,aptosIds:String!,numeroTelf:Int!,fechaDeNacimiento:String!,cedula:Int!,active:Boolean!):Usuario
        createGasto(nombre:String!,monto:Int!,active:Boolean!):Gasto
        createEdificio(nombre:String!,pisos:Int!,aptosPPiso: Int!,active:Boolean!):Edificio
        createApartamento(edificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int!,inquilinoNombre: String!,alicuota: Float!,active:Boolean!):Apartamento
        updateGasto(id: Int!, nombre:String!,monto:Int!,active:Boolean!):Gasto
        updateEdificio(id: Int!,nombre:String!,pisos:Int!,aptosPPiso: Int!,active:Boolean!):Edificio
        updateApartamento(id: Int!,edificioId: Int!,piso:Int!,aptoNum: Int!,cedula: Int,inquilinoNombre: String,alicuota: Float!,active:Boolean!):Apartamento
    }
`;

module.exports=typeDefs;