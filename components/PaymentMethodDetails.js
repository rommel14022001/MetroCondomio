
import React,{useEffect} from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const PaymentMethodDetails  = ({metodoPago, deleteMetodoPago, recoverMetodoPago}) => {
    const UPDATE_METODO_PAGO = gql`
    mutation updateMetodoPago($id: Int!, $nombre: String!, $monto: Int!, $active:Boolean!) {
         updateGasto(id: $id, nombre: $nombre, monto: $monto,active: $active) {
           id
         }
    }
    `;
    
    const [updateMetodoPago, { data }] = useMutation(UPDATE_METODO_PAGO);
    

    const {metodo,active} = metodoPago;

    // useEffect(() => {
    //     console.log(gasto)
        
    // }, [data, recoverGasto, active, gasto, deleteGasto])

    console.log(gasto);
    return(
        
        <Col xs={10} lg={10} md={10} className = {styles.gastosDetails}>
            <Col> {metodo} </Col>
            {active===false? <button className="btn-outline btn-danger" onClick = {() => recoverMetodoPago({variables: { id:id, metodo: metodo, active: true }})}>Recover</button>: <button className="btn-outline btn-danger" onClick = {() => deleteMetodoPago({ variables: { id:id, metodo: metodo, active: false } })}>Eliminar</button>}
            
            <button className="btn-outline btn-danger" onClick = {() => deleteGasto()}>Editar</button>
        </Col>
    )
}

export default PaymentMethodDetails;

