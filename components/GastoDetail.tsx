
import React from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
export const GastosDetails  = ({gasto, deleteGasto}) => {
    
    const {nombre,monto} = gasto;
    console.log(gasto);
    return(
        
        <Col xs={10} lg={10} md={10} className = {styles.gastosDetails}>
            <Col> {nombre} </Col>
            <Col>${monto}</Col>
            <button className="btn-outline btn-danger" onClick = {() => deleteGasto(name)}>Eliminar</button>
        </Col>
    )
}

export default GastosDetails;