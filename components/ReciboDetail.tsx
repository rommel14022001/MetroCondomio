
import React,{useEffect} from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const ReciboDetails  = () => {

    const GET_GASTOS = gql`
    query getGastos {
        getGastos {
        id
        nombre
        monto
        active
        }
    }
    `;
    const GET_ACTIVE_GASTOS = gql`
    query getActiveGastos {
        getActiveGastos {
        id
        nombre
        monto
        active
        }
    }
    `;
    const DELETE_GASTO = gql`
    mutation updateGasto($id: Int!, $nombre: String!, $monto: Int!, $active:Boolean!) {
         updateGasto(id: $id, nombre: $nombre, monto: $monto,active: $active) {
           id
         }
    }
    `;
    const RECOVER_GASTO = gql`
    mutation updateGasto($id: Int!, $nombre: String!, $monto: Int!, $active:Boolean!) {
         updateGasto(id: $id, nombre: $nombre, monto: $monto,active: $active) {
           id
         }
    }
    `;
    const [deleteGasto] = useMutation(DELETE_GASTO);

    const [recoverGasto] = useMutation(RECOVER_GASTO);

    const { loading, error, data } = useQuery(GET_GASTOS, {
        pollInterval: 500
    })

    // const { activeLoading, activeError, activeData } = useQuery(GET_ACTIVE_GASTOS)
    
    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    const arrayGastos = []
    useEffect(() => {
        console.log(data)
        
    }, [recoverGasto,deleteGasto,data])
    const [gastos, setGastos] = useState([]);
    const UPDATE_GASTO = gql`
    mutation updateGasto($id: Int!, $nombre: String!, $monto: Int!, $active:Boolean!) {
         updateGasto(id: $id, nombre: $nombre, monto: $monto,active: $active) {
           id
         }
    }
    `;
    
    const [updateGasto, { data }] = useMutation(UPDATE_GASTO);
    

    // const {nombre,monto,id, active} = gasto;

    return(
        
        <Col xs={10} lg={10} md={10} className = {styles.gastosDetails}>
            <Col> {nombre} </Col>
            <Col>${monto}</Col>
            {active===false? <button className="btn-outline btn-danger" onClick = {() => recoverGasto({variables: { id:id, nombre: nombre, monto: parseInt(monto), active: true }})}>Recover</button>: <button className="btn-outline btn-danger" onClick = {() => deleteGasto({ variables: { id:id, nombre: nombre, monto: parseInt(monto), active: false } })}>Eliminar</button>}
            
        </Col>
    )
}

export default ReciboDetails;
