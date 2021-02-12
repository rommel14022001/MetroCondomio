const {gql} = require('apollo-server-express');


// correo: String!,
        // aptosIds:String!,
        // numeroTelf:Integer!,
        // fechasDeNacimiento:String!,
        // cedula:Integer!,
        
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
        getGasto(id:Int!):Gasto
    }
    type Mutation{
        createUsuario(nombre:String!,apellido:String!,rol:Int!,correo: String!,aptosIds:String!,numeroTelf:Int!,fechaDeNacimiento:String!,cedula:Int!,active:Boolean!):Usuario
        createGasto(nombre:String!,monto:Int!,active:Boolean!):Gasto
    
    }
`;
// ,correo: String!,aptosIds:String!,numeroTelf:Integer!,fechasDeNacimiento:String!,cedula:Integer!
module.exports=typeDefs;