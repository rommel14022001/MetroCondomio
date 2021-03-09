
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../../../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row,Dropdown,DropdownButton,InputGroup} from 'react-bootstrap';

import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

import EdificioForm from '../../../components/EdificioForm'
import ActiveEdifList from '../../../components/ActiveEdifList';
import ActiveAptopsList from '../../../components/ActiveAptosList';
import AdminForm from '../../../components/AdminForm';
export const AdminAdmin = () => {
    
    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
    
  
    return(
        
        <ApolloProvider client={client}>

            <Container  className={styles.login__container}>
                <Col className={styles.title}>

                    <h1>Gestionar Administradores</h1>


                </Col>
                
                <Row className="mb-5">
                        
                        
                        <AdminForm/>
                                    
                </Row>
            </Container>

      </ApolloProvider>
        
    )
}
export default AdminAdmin;