
import React,{useEffect} from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const PaymentMethodDetails  = ({metodoPago, deleteMetodoPago, recoverMetodoPago}) => {
    const UPDATE_METODO_PAGO = gql`
    mutation updateMetodoPago($id: Int!, $metodo: String!, $active:Boolean!) {
         updateMetodoPago(id: $id, metodo: $metodo,active: $active) {
           id
         }
    }
    `;
    
    const [updateMetodoPago, { data }] = useMutation(UPDATE_METODO_PAGO);
    

    const {metodo,active,id} = metodoPago;
    console.log(metodo,active,id)

    // useEffect(() => {
    //     console.log(gasto)
        
    // }, [data, recoverGasto, active, gasto, deleteGasto])

    console.log(metodo);
    return(
        
        <Col xs={10} lg={10} md={10} className = {styles.gastosDetails}>
            <Col> {metodo} </Col>
            {active===false? <button className="btn-outline btn-danger" onClick = {() => recoverMetodoPago({variables: { id:id, metodo: metodo, active: true }})}>Recover</button>: <button className="btn-outline btn-danger" onClick = {() => deleteMetodoPago({ variables: { id:id, metodo: metodo, active: false } })}>Eliminar</button>}
            
            {/* <button className="btn-outline btn-danger" onClick = {() => deleteMetodoPago()}>Editar</button> */}
        </Col>
    )
}

export default PaymentMethodDetails;

