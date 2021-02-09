import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import GastosPage from './gastospage';
import "bootstrap/dist/css/bootstrap.min.css"

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const server= new ApolloClient({

})

export default function Home() {
  return (
  
    <div>
      <GastosPage/>
    </div>
    // <ApolloProvider client={client}>
    // </ApolloProvider>
      // <Router>
        //<Switch>
          //<Route exact path='/' component={GastosPage}>

          //</Route>
          
        //</Switch>
      //</Router> 
    )
}
