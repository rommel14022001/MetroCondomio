import GastosDetails from '../components/GastoDetail';
import GastosForm from '../components/GastosForm';
import React, {useState, useEffect,Fragment} from 'react';



export const GastosPage = () => {

    const [gastos, setGastos] = useState([]);
    

    const createGasto =  (name,amount) => {
    
         addNewGastos(name,amount);
    
    }
    
    const deleteGasto=  gasto =>{
        
        deleteGastoDB(gasto);
    
    }

    const title= gastos.length===0 ? 'No Hay Gastos' : 'Gastos';

    return(
        <div className = "TagsManagerContainer">
        hola
            <h1>Administrar Tags</h1>
            <div className = "TagsManagerBody">
                <div className = "TagsManagerDetails">
                    <h2> {title} </h2>
                    {gastos.map(gasto=>(
                    <GastosDetails 
                    key= { gasto.id } 
                    tag={gasto} 
                    deleteTag={deleteGasto}

                    />))}
                </div>
                <div className = "TagsManagerForm">
                    <GastosForm 
                    key={1}
                    createTag = {createGasto}

                    />
                </div>
            </div>
        </div>
    )
}

export default GastosPage;