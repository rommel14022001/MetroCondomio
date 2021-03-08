import React, {useState, useEffect} from 'react';
import styles from "../styles/components/gastosForm.module.css"
import {Row,Container,Col} from 'react-bootstrap';
import Image from 'next/image';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'
import { response } from 'express';

export const FacturaForm = () => {
    const ADD_FACTURAS = gql`
    mutation createFactura($fechaDeCreacion:String!,$fechaDeVencimiento:String!,$monto:Float!,$active: Boolean!) {
        createFactura(fechaDeCreacion: $fechaDeCreacion, fechaDeVencimiento:$fechaDeVencimiento,monto:$monto, active:$active) {
        id
        fechaDeCreacion
        fechaDeVencimiento
        monto
        active
        }
    }
    `;
    const [createFactura, { data }] = useMutation(ADD_FACTURAS);
    
    const [factura, handleFactura]=useState({fechaDeCreacion:'', fechaDeVencimiento:'', monto:''});
    const {fechaDeCreacion,fechaDeVencimiento, monto}=factura;
    const [error, updateError]=useState(false);


    const updateState= evento =>{handleFactura({...factura,[evento.target.name] : evento.target.value})}

    const submitFactura = evento =>{
        
        evento.preventDefault();

        // if(name.trim() === '' || amount.trim()==="amount..."){
        //     updateError(true);
        //     return;
        // }
        
        updateError(false);


        handleFactura({fechaDeCreacion:'', fechaDeVencimiento:'', monto:''}); 
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
            createFactura({ variables: { fechaDeCreacion: fechaDeCreacion, fechaDeVencimiento: fechaDeVencimiento, monto: parseFloat(monto) , active: true } })
            
            ;
            
            
            }}>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "fechaDeCreacion" onChange = {updateState} value = {fechaDeCreacion} placeholder = "Fecha de creacion (MM-DD-AAAA)..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "fechaDeVencimiento" onChange = {updateState} value = {fechaDeVencimiento} placeholder = "Fecha de vencimiento (MM-DD-AAAA)..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "monto" onChange = {updateState} value = {monto} placeholder = "Monto del Gasto..." ></input>
                        
                        </div>
                        <div className = "Cont">
                            <button type = "submit"  className="btn-outline btn-success" /*onClick={submitGasto}*/>Crear</button>  
                        </div>    
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}


export default FacturaForm;