import GastosDetails from '../components/GastoDetail';
import GastosForm from '../components/GastosForm';
import React, {useState, useEffect,Fragment} from 'react';
import {Container, Button,Col,Row} from 'react-bootstrap';



export const GastosPage = () => {

    const [gastos, setGastos] = useState([]);
    

    const createGasto = (name,amount)=> {
    
        setGastos( (prevGasto) => {return [...prevGasto ,{name,amount}]} );
                
    }
    
    const deleteGasto=  gasto =>{
        
        // deleteGastoDB(gasto);
    
    }

    const title= gastos.length===0 ? 'No Hay Gastos' : 'Gastos';

    return(
        <Container>
            <h1>Administrar Gastos</h1>
            <div className = "TagsManagerBody">
                <div className = "TagsManagerDetails">
                    <h2> {title} </h2>
                    {gastos.map(gasto=>(
                    <GastosDetails 
                    key= { gasto.id } 
                    gasto={gasto} 
                    deleteGasto={deleteGasto}

                    />))}
                </div>
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