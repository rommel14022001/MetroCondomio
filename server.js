const express= require('express');
const {ApolloServer,gql}=require('apollo-server-express');


const models=require('./sequelize/models/index');

models.sequelize.authenticate().then(()=>{ //Conexion a la BD
    console.log('estas conectado a la DB')
})

models.sequelize.sync(); //Sincronizacion de los modelos con la BD



//GraphQL
//typesDefs
import typeDefs from './graphQL/typeDefs/typeDefs';
// const typeDefs=gql`

// type Query{
//     hello:String
// }

// `;



//Resolvers

import resolvers from './graphQL/resolvers/resolvers';
// const resolvers={
//     Query:{
//         hello:()=>"Hello World"
//     }
// }


const server = new ApolloServer({typeDefs,resolvers,context : {models}})
const app=express();
server.applyMiddleware({app});

app.listen({port:4000}, ()=>{
    console.log('Corriendo servidor Apollo en http://localhost:4000'+server.graphqlPath)
})



