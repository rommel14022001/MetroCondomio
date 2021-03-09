import FacturaDetails from '../../../components/FacturaDetails';
import FacturaForm from '../../../components/facturaForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../../../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../../../graphQL/resolvers/resolvers';
import { ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation} from '@apollo/client';
import FacturasComponent from '../../../components/facturasComponent';
export const FacturasPage = () => {

    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

    return(
        <ApolloProvider client={client} >
        <Container className={styles.login__container}>
            <FacturasComponent/>
        </Container>
           </ApolloProvider>
    )
}



export default FacturasPage;