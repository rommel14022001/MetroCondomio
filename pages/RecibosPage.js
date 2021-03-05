import ReciboDetails from '../components/GastoDetail';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';
import { gql, useMutation,useQuery } from '@apollo/client';



export const RecibosPage = (props) => {
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
    
    // console.log('las props son: ',props)


    

    let title='No hay gastos';
    if(data!==undefined){

        title= data.getGastos.length===0 ? 'No Hay Gastos' : 'Gastos';
    }

    return(
        <Container>
            <Col className={styles.title}>
                <h1>{props.props}</h1>
                <h1>Administrar Gastos</h1>
            </Col>
            <div className = "TagsManagerBody">
               <Row> 
                <Col className = {styles.GastosManagerDetails}>
                    <h2> {title} </h2>
                    {data===undefined ? <h3>Sin gastos</h3>:data.getGastos.map(gasto=>(
                        
                    <ReciboDetails 
                    key= { gasto.id } 
                    gasto={gasto} 
                    deleteGasto={deleteGasto}
                    recoverGasto={recoverGasto}

                    />))}
                </Col>
                
                </Row>
            </div>
        </Container>
    )
}



export default RecibosPage;