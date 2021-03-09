
import React,{useEffect} from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const GastosDetails  = ({gasto, deleteGasto, recoverGasto}) => {
    const UPDATE_GASTO = gql`
    mutation updateGasto($id: Int!, $nombre: String!, $monto: Int!, $active:Boolean!) {
         updateGasto(id: $id, nombre: $nombre, monto: $monto,active: $active) {
           id
         }
    }
    `;
    
    const [updateGasto, { data }] = useMutation(UPDATE_GASTO);
    

    const {nombre,monto,id, active} = gasto;

    // useEffect(() => {
    //     console.log(gasto)
        
    // }, [data, recoverGasto, active, gasto, deleteGasto])

    console.log(gasto);
    return(
        
        <Col xs={10} lg={10} md={10} className = {styles.gastosDetails}>
            <Col> {nombre} </Col>
            <Col>${monto}</Col>
            {active===false? <button className="btn-outline btn-danger" onClick = {() => recoverGasto({variables: { id:id, nombre: nombre, monto: parseInt(monto), active: true }})}>Recover</button>: <button className="btn-outline btn-danger" onClick = {() => deleteGasto({ variables: { id:id, nombre: nombre, monto: parseInt(monto), active: false } })}>Eliminar</button>}
            
            {/* <button className="btn-outline btn-danger" onClick = {() => deleteGasto()}>Editar</button> */}
        </Col>
    )
}

export default GastosDetails;

