import React,{useEffect} from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const EdificioDetail  = ({edificio, deleteEdificio, recoverEdificio}) => {
    

    const {id,nombre,pisos,aptosPPiso,active} = edificio;

    useEffect(() => {
        console.log(edificio)
        
    }, [ recoverEdificio, active, edificio, deleteEdificio])

     return(
        
        <Col xs={10} lg={10} md={10} className = {styles.gastosDetails}>
            <Col> {nombre} </Col>
            <Col>Pisos: {pisos}</Col>
            <Col>Aptos por Piso: {aptosPPiso}</Col>
            {/* {active===false? <button className="btn-outline btn-danger" onClick = {() => recoverEdificio({variables: { id:id, nombre: nombre, monto: parseInt(monto), active: true }})}>Recover</button>: <button className="btn-outline btn-danger" onClick = {() => deleteEdificio({ variables: { id:id, nombre: nombre, monto: parseInt(monto), active: false } })}>Eliminar</button>} */}
            
            <button className="btn-outline btn-danger" onClick = {() => deleteEdificio()}>Editar</button>
        </Col>
    )
}

export default EdificioDetail;
