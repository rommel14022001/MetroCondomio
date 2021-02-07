const {gql} = require('apollo-server-express');

const typeDefs=gql`

    type Usuario{
        id:Int!,
        nombre:String!,
        apellido:String!,
        active:Boolean!
    }

    type Query{
        
        getUsuarios:[Usuario]
        getUsuario(id:Int!):Usuario


    }

    type Mutation{
        createUsuario(nombre:String!,apellido:String!,active:Boolean!):Usuario
    }

`;

module.exports=typeDefs;