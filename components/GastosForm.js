
import React, {useState} from 'react';

export const GastosForm = ({createGasto}) => {
    
    const [name, amount]=useState({name:'', color:''});

    const [error, updateError]=useState(false);
    
    // const {name,color} = tag;

    const updateState= evento =>{updateGasto({...tag,[evento.target.name] : evento.target.value})}

    const submitGasto = evento =>{
        
        evento.preventDefault();

        if(name.trim() === '' || amount.trim()==="color..."){
            updateError(true);
            return;
        }
        
        updateError(false);

        createGasto(name,amount);
        
        updateGasto({name:'', amount:''}); 
    }

    return(
        <div className = "TagsFormContainer">
            {/* <img src = {TagImage} id = "Image"></img> */}
            <form onSubmit = {submitGasto}>
                <div className = "Cont">
                    <input type = "text" name = "name" onChange = {updateState} value = {name} placeholder = "Nuevo tag..." className = "TagField"></input>
                </div>
                <div className = "Cont">
                    
                </div>
                <div className = "Cont">
                    <button type = "submit"  className="btn-outline btn-success">Agregar</button>  
                </div>
            </form>
        </div>
    )
}

export default GastosForm;