import React, {useState, useEffect} from 'react';
import styles from "../styles/components/gastosForm.module.css"
import {Row,Container,Col} from 'react-bootstrap';
import Image from 'next/image';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'


export const EdificioForm  = () => {
    const GET_EDIFICIOS_NAME = gql`
    query getEdificioName ($nombre: String!){
        getEdificioName (nombre: $nombre){
        id
        nombre
        pisos
        aptosPPiso
        active
        }
    }
    `;
    const ADD_EDIFICIO = gql`
    mutation createEdificio($nombre: String!, $pisos: Int!, $aptosPPiso: Int!, $active:Boolean!) {
        createEdificio(nombre: $nombre, pisos: $pisos, aptosPPiso: $aptosPPiso, active: $active) {
           id
           nombre
           pisos
           aptosPPiso
           active
         }
    }
    `;
    const ADD_APARTAMENTO = gql`
    mutation createApartamento($edificioId: Int!, $piso: Int!, $aptosNum: Int!,$cedula: Int, $inquilinoNombre: String, $alicuota: Int!, $active:Boolean!) {
        createApartamento(edificioId: $edificioId, piso: $piso, aptoNum: $aptosNum, cedula: $cedula, inquilinoNombre: $inquilinoNombre, alicuota: $alicuota, active: $active) {
           id
           nombre
           pisos
           aptosPPiso
           active
         }
    }
    `;
    

    const [createEdificio] = useMutation(ADD_EDIFICIO);
    const [createApartamento] = useMutation(ADD_APARTAMENTO);
    // useEffect(() => {
    //     console.log(createEdificio);
        
    // }, [createEdificio])


    const [edificio, handleEdificio]=useState({name:'', floors:'', aptosPFloor:''});
    const {name,floors, aptosPFloor}=edificio;
    const [error1, updateError]=useState(false);

    const updateState= evento =>{handleEdificio({...edificio,[evento.target.name] : evento.target.value})}
    const { loading, error, data, refetch } = useQuery(GET_EDIFICIOS_NAME, {
        variables: { nombre:name},
        // pollInterval: 500,
      });
    // useEffect(() => {
    //     console.log("ladataes:",data)
        
    // }, [data])
    const submitEdificio = evento =>{
        
        evento.preventDefault();

        // if(name.trim() === '' ){
        //     updateError(true);
        //     return;
        // }
        console.log("deberia funcionar ",data);
        
        createEdificio({ variables: { nombre: name, pisos: parseInt(floors), aptosPPiso: parseInt(aptosPFloor), active: true } }).then(()=>{
            console.log('entre')
            let aptoNumberCounter = 0;
            const totalAptos = parseInt(floors)*parseInt(aptosPFloor)
            const totalAlicuota = 100/totalAptos
            for (let i = 0; i < parseInt(floors); i++) {
                for (let j = 0; j< parseInt(aptosPFloor); i++){
        //             createApartamento({ variables: { edificioId: data.id, piso: i, aptoNum: aptoNumberCounter,cedula: null,inquilinoNombre: null, alicuota: totalAlicuota ,active: true } })
                    aptoNumberCounter++;
                    console.log('piso: ', i, ', Apartamento: ', aptoNumberCounter)
            }
            
        }
        });
        
        // let aptoNumberCounter = 1;
        // const totalAptos = parseInt(floors)*parseInt(aptosPFloor)
        // const totalAlicuota = 100/totalAptos
        // for (let i = 0; i < parseInt(floors); i++) {
        //     for (let j = 0; j< parseInt(aptosPFloor); i++){
                
        //     }
            
        // }
        updateError(false);
        
        // handleEdificio({name:'', floors:'', aptosPFloor:''}); 
    }

    return(
        
        <div className = {styles.GastosFormContainer}>
            {/* <Image 
                src = {transaccion}
                id = "Image"
                width={500}
                height={500}
                /> */}
            
            <form className={styles.formg} onSubmit={(e)=> submitEdificio(e)}>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "name" onChange = {updateState} value = {name} placeholder = "Nombre del edificio..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "floors" onChange = {updateState} value = {floors} placeholder = "Numero de pisos..." ></input>
                        
                        </div>  
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "aptosPFloor" onChange = {updateState} value = {aptosPFloor} placeholder = "Numero de aptos/piso..." ></input>
                        
                        </div>
                        <div className = "Cont">
                            <button type = "submit"  className="btn-outline btn-success" /*onClick={submitGasto}*/>Agregar</button>  
                        </div>    
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}

export default EdificioForm;