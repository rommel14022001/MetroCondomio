import GastosDetails from '../components/GastoDetail';
import GastosForm from '../components/GastosForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'
export const NewCondoPage = () => {
    return(
        <Container>
            <Col className={styles.title}>

                <h1>Administrar Condo</h1>


            </Col>
            
        </Container>
    )
}
export default NewCondoPage;
