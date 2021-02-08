
import React from 'react';

export const GastosDetails  = ({gasto, deleteGasto}) => {
    
    const {name,amount} = gasto;

    return(
        <div className = "TagsDetailsContainer">
            <div> {name} </div>
            <button className="btn-outline btn-danger" onClick = {() => deleteGasto(name)}>Eliminar</button>
        </div>
    )
}

export default GastosDetails;