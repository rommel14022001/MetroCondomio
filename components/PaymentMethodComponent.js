import PaymentMethodDetails from './PaymentMethodDetails';
import PaymentMethodForm from './PaymentMethodForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'




export const PaymentMethodComponent = () => {
    const GET_METODOS_PAGOS = gql`
    query getMetodosPago {
        getMetodosPago {
        id
        metodo
        active
        }
    }
    `;
    
    const DELETE_METODO_PAGO = gql`
    mutation updateMetodoPago($id: Int!, $metodo: String!, $active:Boolean!) {
         updateMetodoPago(id: $id, metodo: $metodo,active: $active) {
           id
         }
    }
    `;
    const RECOVER_METODO_PAGO = gql`
    mutation updateMetodoPago($id: Int!, $metodo: String!,  $active:Boolean!) {
         updateMetodoPago(id: $id, metodo: $metodo, active: $active) {
           id
         }
    }
    `;
    const [deleteMetodoPago] = useMutation(DELETE_METODO_PAGO);

    const [recoverMetodoPago] = useMutation(RECOVER_METODO_PAGO);

    const { loading, error, data } = useQuery(GET_METODOS_PAGOS, {
        pollInterval: 500
    })

    
    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    useEffect(() => {
        console.log(data)
        
    }, [recoverMetodoPago,deleteMetodoPago,data])
    
    const [metodosPagos, setMetodosPagos] = useState([]);
    
    // console.log('las props son: ',props)

    const createMetodoPago =  (metodo)=> {
    
        setMetodosPagos( (prevMetodoPago) => {return [...prevMetodoPago ,{metodo}]} );
        // console.log(resolvers.Query.getUsuarios(models.usuario));  
         

    }
    
    // const deleteG =  gasto =>{
        
    //     deleteGastoDB(gasto);
    
    // }


    

    let title='No hay metodos de pago';
    if(data!==undefined){

        title= data.getMetodosPago.length===0 ? 'No Hay Metodos de Pago' : 'Metodos de Pago';
    }

    return(
        <Container>
            <Col className={styles.title}>

                <h1>Administrar Metodos de Pago</h1>
            </Col>
            <div className = "TagsManagerBody">
               <Row> 
                <Col className = {styles.GastosManagerDetails}>
                    <h2> {title} </h2>
                    {data===undefined ? <h3>Sin Metodos de pago</h3>:data.getMetodosPago.map(metodoPago=>(
                        
                    <PaymentMethodDetails 
                    key= { metodoPago.id } 
                    metodoPago={metodoPago} 
                    deleteMetodoPago={deleteMetodoPago}
                    recoverMetodoPago={recoverMetodoPago}

                    />))}
                </Col>
                <Col  className = "mt-5 TagsManagerForm">
                    <PaymentMethodForm 
                    key={1}
                    

                    />
                </Col>
                </Row>
            </div>
        </Container>
    )
}



export default PaymentMethodComponent;
