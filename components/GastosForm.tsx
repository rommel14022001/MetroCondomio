
import React, {useState} from 'react';

import styles from "../styles/components/gastosForm.module.css"
import {Row,Container,Col} from 'react-bootstrap';
import Image from 'next/image';

export const GastosForm = ({createGasto}) => {
    
    const [gasto, handleGasto]=useState({name:'', amount:''});
    const {name,amount}=gasto;
    const [error, updateError]=useState(false);


    const updateState= evento =>{handleGasto({...gasto,[evento.target.name] : evento.target.value})}

    const submitGasto = evento =>{
        
        evento.preventDefault();

        if(name.trim() === '' || amount.trim()==="amount..."){
            updateError(true);
            return;
        }
        
        updateError(false);


         createGasto(name,amount);
        
        handleGasto({name:'', amount:''}); 
    }

    return(
        <div className = {styles.GastosFormContainer}>
            {/* <Image 
                src = {transaccion}
                id = "Image"
                width={500}
                height={500}
                /> */}
            
            <form className={styles.formg} onSubmit = {submitGasto}>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "name" onChange = {updateState} value = {name} placeholder = "Nombre del Gasto..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "amount" onChange = {updateState} value = {amount} placeholder = "Monto del Gasto..." ></input>
                        
                        </div>
                        <div className = "Cont">
                            <button type = "submit"  className="btn-outline btn-success" onClick={submitGasto}>Agregar</button>  
                        </div>    
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}


export default GastosForm;