
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../../../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery} from '@apollo/client'
import PaymentMethodComponent from '../../../components/PaymentMethodComponent';


export const adminPaymentMethodPage = () => {
    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

    return(
        <ApolloProvider client={client} >
        <Container className={styles.login__container}>
            <PaymentMethodComponent/>
        </Container>
           </ApolloProvider>
    )
}



export default adminPaymentMethodPage;