import GastosDetails from '../components/GastoDetail';
import GastosForm from '../components/GastosForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';

// const {gql} = require('apollo-server-express');

export const GastosPage = () => {

    const [gastos, setGastos] = useState([]);
    

    const createGasto = (name,amount)=> {
    
        setGastos( (prevGasto) => {return [...prevGasto ,{name,amount}]} );
        // console.log(resolvers.Query.getGastos)  
         
    }
    
    const deleteGasto=  gasto =>{
        
        // deleteGastoDB(gasto);
    
    }

    

    const title= gastos.length===0 ? 'No Hay Gastos' : 'Gastos';

    return(
        <Container>
            <Col className={styles.title}>

                <h1>Administrar Gastos</h1>
            </Col>
            <div className = "TagsManagerBody">
                <Col className = {styles.GastosManagerDetails}>
                    <h2> {title} </h2>
                    {gastos.map(gasto=>(
                    <GastosDetails 
                    key= { gasto.id } 
                    gasto={gasto} 
                    deleteGasto={deleteGasto}

                    />))}
                </Col>
                <div className = "TagsManagerForm">
                    <GastosForm 
                    key={1}
                    createGasto = {createGasto}

                    />
                </div>
            </div>
        </Container>
    )
}

export default GastosPage;