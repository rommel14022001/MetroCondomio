
import React from 'react';
import styles from '../styles/components/gastosDetails.module.css';
import {Col} from 'react-bootstrap'
export const GastosDetails  = ({gasto, deleteGasto}) => {
    
    const {name,amount} = gasto;

    return(
        <Col xs={5} lg={5} md={5} className = {styles.gastosDetails}>
            <div> {name} </div>
            <button className="btn-outline btn-danger" onClick = {() => deleteGasto(name)}>Eliminar</button>
        </Col>
    )
}

export default GastosDetails;