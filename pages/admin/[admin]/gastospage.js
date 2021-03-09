
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../../../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../../../graphQL/resolvers/resolvers';
import GastosComponent from '../../../components/gastosComponent';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery} from '@apollo/client'

export const GastosPage = () => {
    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

    return(
        <ApolloProvider client={client} >
        <Container className={styles.login__container}>
            <GastosComponent/>
        </Container>
           </ApolloProvider>
    )
}



export default GastosPage;