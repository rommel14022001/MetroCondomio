import FacturaDetails from '../components/FacturaDetails';
import FacturaForm from '../components/facturaForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';
import { ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation} from '@apollo/client';

export const FacturasPage = () => {
    const GET_FACTURAS = gql`
    query getFacturas {
        getFacturas {
        id
        fechaDeCreacion
        fechaDeVencimiento
        monto
        active
        }
    }
    `;
    const ADD_FACTURAS = gql`
    mutation createFactura($fechaDeCreacion:String!,$fechaDeVencimiento:String!,$monto:Float!,$active: Boolean!) {
        createUsuario(fechaDeVencimiento: $fechaDeVencimiento, fechaDeVencimiento:$fechaDeVencimiento,monto:$monto, active:$active) {
        id
        fechaDeCreacion
        fechaDeVencimiento
        monto
        active
        }
    }
    `;

    const [createFactura] = useMutation(ADD_FACTURAS);

    const { loading, error, data } = useQuery(GET_FACTURAS, {
        pollInterval: 500
    })

    // const { activeLoading, activeError, activeData } = useQuery(GET_ACTIVE_GASTOS)
    
    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    const arrayFacturas = []
    useEffect(() => {
        console.log(data)
    
    }, [data])
    const [facturas, setFacturas] = useState([]);
    

    let title='No hay facturas';
    if(data!==undefined){

        title= data.getFacturas.length===0 ? 'No Hay Facturas' : 'Facturas';
    }

    return(
        <Container>
            <Col className={styles.title}>

                <h1>Administrar Facturas</h1>
            </Col>
            <div className = "TagsManagerBody">
               <Row> 
                <Col className = {styles.GastosManagerDetails}>
                    <h2> {title} </h2>
                    {data===undefined ? <h3>Sin facturas</h3>:data.getFacturas.map(factura=>(
                        
                    <FacturaDetails 
                    key= { factura.id } 
                    factura={factura} 

                    />))}
                </Col>
                <Col  className = "TagsManagerForm">
                    <FacturaForm 
                    key={1}
                    />
                </Col>
                </Row>
            </div>
        </Container>
    )
}



export default FacturasPage;