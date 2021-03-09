
import React, {useState, useEffect} from 'react';

import styles from "../styles/components/gastosForm.module.css"
import {Row,Container,Col} from 'react-bootstrap';
import Image from 'next/image';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'
import AptoIdFunction from './AptoIdFunction';


export const AdminForm = ({AptopNum,edificioId}) => {
    const ADD_PROPIETARIO = gql`
    mutation createUsuario($nombre:String!,$apellido:String!,$rol:Int!,$correo: String!,$aptosIds:String!,$numeroTelf:String!,$fechaDeNacimiento:String!,$cedula:Int!,$active:Boolean!) {
         createUsuario(nombre: $nombre, apellido:$apellido,rol:$rol, correo:$correo,aptosIds:$aptosIds,numeroTelf:$numeroTelf,fechaDeNacimiento:$fechaDeNacimiento, cedula:$cedula,active: $active) {
           id
           nombre
           apellido
           rol
           correo
           aptosIds
           numeroTelf
           fechaDeNacimiento
           cedula
           active
         }
    }
    `;
    
    
    const [propietario, handlePropietario]=useState({name:'', apellido:'',rol:0,correo:'',aptosIds:'',numeroTelf:'',fechaDeNacimiento:'',cedula:0});
    const {name,apellido,rol,numeroTelf,fechaDeNacimiento,cedula,aptosIds,correo}=propietario;
    // const [error, updateError]=useState(false);
    const [aptoId, handleAptoId]=useState(0);
    
    
    

    

    const [createPropietario] = useMutation(ADD_PROPIETARIO);


    const updateState= evento =>{handlePropietario({...propietario,[evento.target.name] : evento.target.value})}

    const submitGasto =  evento =>{
        
        evento.preventDefault();
        // console.log('holaa')
        // if(name.trim() === '' || apellido.trim() === '' || numeroTelf.trim() === '' || correo.trim() === '' || parseInt(cedula)===0){
        //     updateError(true);
        //     return;
        // }
        
        // console.log('holaa')
        // updateError(false);

        // console.log(name,apellido,rol,correo,aptosIds,numeroTelf,fechaDeNacimiento,cedula)
        createPropietario({ variables: { 
                                            nombre: name, 
                                            apellido:apellido,
                                            rol:0,
                                            correo:correo,
                                            aptosIds:aptosIds,
                                            numeroTelf:numeroTelf,
                                            fechaDeNacimiento:fechaDeNacimiento,
                                            cedula: parseInt(cedula), 
                                            active: true } })
        handlePropietario({name:'', apellido:'',rol:1,correo:'',aptosIds:'',numeroTelf:'',fechaDeNacimiento:'',cedula:0}); 
    }
                                        

        
        
    

    return(
        <div className = {styles.GastosFormContainer}>
            {/* <Image 
                src = {transaccion}
                id = "Image"
                width={500}
                height={500}
                /> */}
            
            <form className={styles.formg} onSubmit={e => {submitGasto(e)}}>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "name" onChange = {updateState} value = {name} placeholder = "Nombre del Propietario..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "apellido" onChange = {updateState} value = {apellido} placeholder = "Apellido del Propietario..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "numeroTelf" onChange = {updateState} value = {numeroTelf} placeholder = "Numero de Telefono..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "number" name = "cedula" onChange = {updateState} value = {cedula} placeholder = "Cedula..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "correo" onChange = {updateState} value = {correo} placeholder = "Correo..." ></input>
                        </div>
                    
                    </Col>
                    
                    
                    
                    <Col xs={6} md={4} lg={8}>
                        
                        <div className = "Cont">
                            <button type = "submit"  className="btn-outline btn-success" /*onClick={submitGasto}*/>Agregar</button>  
                        </div>    
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}


export default AdminForm;