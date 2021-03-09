import React,{useEffect} from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const FacturaDetails  = ({factura}) => {

    const {fechaDeCreacion,fechaDeVencimiento,monto,id, active} = factura;

    
    return(
        
        <Col xs={10} lg={10} md={10} className = {styles.gastosDetails}>
            <Col> {id} </Col>
            <Col> {fechaDeCreacion} </Col>
            <Col> {fechaDeVencimiento} </Col>
            <Col>${monto}</Col>
        </Col>
    )
}

export default FacturaDetails;