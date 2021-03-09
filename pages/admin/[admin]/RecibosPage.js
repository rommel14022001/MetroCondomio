
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../../../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery} from '@apollo/client'
import RecibosComponent from '../../../components/recibosComponent';


export const RecibosPage = (props) => {
    
    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

    return(
        <ApolloProvider client={client} >
        <Container className={styles.login__container}>
            <RecibosComponent/>
        </Container>
           </ApolloProvider>
    )
}



export default RecibosPage;