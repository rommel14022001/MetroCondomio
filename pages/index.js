import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "@babel/polyfill";

import LoginPage from './LoginPage';
export default function Home() {
  return (
      <div>
{/* <RecibosPage props={"28013672"}/> */}
      {/* <AdminUserAptosPage/>         */}
       {/* <GastosPage /> */}
        
       {/* <ApolloProvider> */}

           <LoginPage /*props={launches}*//>
       {/* </ApolloProvider> */}
           
         
     </div>
 )

}

// import { createHttpLink } from "apollo-link-http";
// // const link = createHttpLink({ uri: 'http://localhost:4000/graphql' });
// const link = createHttpLink({uri:'https://48p1r2roz4.sse.codesandbox.io'})

// export async function getStaticProps(){
//   const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// });
  
  
// // const { data } = await client.query({
// //   query: gql`
// //     query Gastos {
// //       getGastos{
// //         id
// //         nombre
// //         monto
// //       }
    
// //       getUsuarios{
// //         id
// //         nombre
// //         apellido
// //       }
    
// //   }
  
// //   `
// // });


 
  
//   return {
//   props: {
//     launches: [data.getGastos, data.getUsuarios]
//   }
// }

// }
  
