
import React, {useState, useEffect} from 'react';

import styles from "../styles/components/gastosForm.module.css"
import {Row,Container,Col} from 'react-bootstrap';
import Image from 'next/image';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const PaymentMethodForm = () => {
    const ADD_METODOPAGO = gql`
    mutation createMetodoPago($metodo: String!, $active:Boolean!) {
         createMetodoPago(metodo: $metodo,active: $active) {
           id
           metodo
           active
         }
    }
    `;
    const [createMetodoPago, { data }] = useMutation(ADD_METODOPAGO);
    // useEffect(() => {
    //     console.log(createGasto);
        
    // }, [createGasto])

    
    const [metodoPago, handleMetodoPago]=useState({metodo:''});
    const {metodo}=metodoPago;
    const [error, updateError]=useState(false);


    const updateState= evento =>{handleMetodoPago({...metodoPago,[evento.target.name] : evento.target.value})}

    const submitGasto = evento =>{
        
        evento.preventDefault();

        if(metodo.trim() === '' ){
            updateError(true);
            return;
        }
        
        updateError(false);


        
        
        handleMetodoPago({metodo:''}); 
    }

    return(
        <div className = {styles.GastosFormContainer}>
            {/* <Image 
                src = {transaccion}
                id = "Image"
                width={500}
                height={500}
                /> */}
            
            <form className={styles.formg} onSubmit={e => {
            e.preventDefault();
            createMetodoPago({ variables: { metodo:metodo, active: true } });
            
            
            }}>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "metodo" onChange = {updateState} value = {metodo} placeholder = "Metodo de Pago..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        
                        <div className = "Cont">
                            <button type = "submit"  className="btn-outline btn-success" /*onClick={submitGasto}*/>Agregar</button>  
                        </div>    
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}


export default PaymentMethodForm;