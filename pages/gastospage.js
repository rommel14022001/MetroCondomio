import GastosDetails from '../components/GastoDetail';
import GastosForm from '../components/GastosForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';

export const GastosPage = (props) => {

    const [gastos, setGastos] = useState([]);
    
    console.log(props)

    const createGasto =  (name,amount)=> {
    
        setGastos( (prevGasto) => {return [...prevGasto ,{name,amount}]} );
        // console.log(resolvers.Query.getUsuarios(models.usuario));  
         

    }
    
    const deleteGasto=  gasto =>{
        
        // deleteGastoDB(gasto);
    
    }

    

    const title= props.props.length===0 ? 'No Hay Gastos' : 'Gastos';

    return(
        <Container>
            <Col className={styles.title}>

                <h1>Administrar Gastos</h1>
            </Col>
            <div className = "TagsManagerBody">
               <Row> 
                <Col className = {styles.GastosManagerDetails}>
                    <h2> {title} </h2>
                    {/* {props.props.map(gasto=>(
                    <GastosDetails 
                    key= { gasto.id } 
                    gasto={gasto} 
                    deleteGasto={deleteGasto}

                    />))} */}
                </Col>
                <Col  className = "mt-5 TagsManagerForm">
                    <GastosForm 
                    key={1}
                    createGasto = {createGasto}

                    />
                </Col>
                </Row>
            </div>
        </Container>
    )
}

export default GastosPage;