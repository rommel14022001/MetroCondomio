
import React, {useState, useEffect} from 'react';

import styles from "../styles/components/gastosForm.module.css"
import {Row,Container,Col} from 'react-bootstrap';
import Image from 'next/image';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

export const GastosForm = () => {
    const ADD_GASTO = gql`
    mutation createGastos($nombre: String!, $monto: Int!, $id_tipo_de_gasto: String!, $fechaDeBorrado: String!,$fechaDeCreacion: String!, $active:Boolean!) {
         createGasto(nombre: $nombre, monto: $monto,id_tipo_de_gasto: $id_tipo_de_gasto,fechaDeBorrado: $fechaDeBorrado,fechaDeCreacion: $fechaDeCreacion, active: $active) {
           id
           nombre
           monto
           id_tipo_de_gasto
           fechaDeBorrado
           fechaDeCreacion
           active
         }
    }
    `;
    const [createGasto, { data }] = useMutation(ADD_GASTO);
    // useEffect(() => {
    //     console.log(createGasto);
        
    // }, [createGasto])

    
    const [gasto, handleGasto]=useState({name:'', amount:'', type: '',deleteDate: '', creationDate:''});
    const {name,amount, type, deleteDate, creationDate}=gasto;
    const [error, updateError]=useState(false);


    const updateState= evento =>{handleGasto({...gasto,[evento.target.name] : evento.target.value})}

    const submitGasto = evento =>{
        
        evento.preventDefault();

        if(name.trim() === '' || amount.trim()==="amount..."){
            updateError(true);
            return;
        }
        
        updateError(false);


        
        
        handleGasto({name:'', amount:'', type: '',deleteDate: '', creationDate:''}); 
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
            createGasto({ variables: { nombre: name, monto: parseInt(amount),tipo: type, fechaDeBorrado: deleteDate,fechaDeCreacion: creationDate, active: true } });
            
            
            }}>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "type" onChange = {updateState} value = {type} placeholder = "Tipo de Gasto..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "name" onChange = {updateState} value = {name} placeholder = "Nombre del Gasto..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "amount" onChange = {updateState} value = {amount} placeholder = "Monto del Gasto..." ></input>
                        
                        </div>  
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "creationDate" onChange = {updateState} value = {creationDate} placeholder = "Fecha de creacion MM-DD-AAAA..." ></input>
                        </div>  
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "deleteDate" onChange = {updateState} value = {deleteDate} placeholder = "Fecha de eliminacion MM-DD-AAAA..." ></input>
                        </div>
                        <div className = "Cont">
                            <button type = "submit"  className="btn-outline btn-success" /*onClick={submitGasto}*/>Agregar</button>  
                        </div>    
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}


export default GastosForm;