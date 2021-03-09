import React, {useState, useEffect} from 'react';
import styles from "../styles/components/gastosForm.module.css"
import {Row,Container,Col} from 'react-bootstrap';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

const FacturaForm = () => {
    const ADD_FACTURAS = gql`
    mutation createFactura($fechaDeCreacion:String!,$fechaDeVencimiento:String!,$active: Boolean!) {
        createFactura(fechaDeCreacion: $fechaDeCreacion, fechaDeVencimiento:$fechaDeVencimiento, active:$active) {
        id
        fechaDeCreacion
        fechaDeVencimiento
        active
        }
    }
    `;
    const GET_ACTIVE_GASTOS = gql`
    query getActiveGastos {
        getActiveGastos {
        id
        nombre
        monto
        active
        }
    }
    `;
    const GET_ACTIVE_APARTAMENTOS = gql`
    query getActiveApartamentos {
        getActiveApartamentos {
        id
        edificioId
        alicuota
        }
    }
    `;
    const ADD_APARTAMENTO_FACTURA = gql `
    mutation createApartamentoFactura($facturaId: Int!, $apartamentoId: Int!, $monto: Float!){
        createApartamentoFactura(facturaId: $facturaId, apartamentoId: $apartamentoId, monto: $monto){
            id
            facturaId
            apartamentoId
            monto
        }
    }
    `
    const { loading: loagingGasto, error: errorGasto, data: dataGasto } = useQuery(GET_ACTIVE_GASTOS, {
        pollInterval: 500
    })
    const { loading: loading, error: errorApartamento, data: dataApartamento } = useQuery(GET_ACTIVE_APARTAMENTOS, {
        pollInterval: 500
    })
    const [createApartamentoFactura, { data: dataApartamentoFactura }] = useMutation(ADD_APARTAMENTO_FACTURA);
    const [createFactura, { data }] = useMutation(ADD_FACTURAS);
    
    const [factura, handleFactura]=useState({fechaDeCreacion:'', fechaDeVencimiento:''});
    const {fechaDeCreacion,fechaDeVencimiento}=factura;
    const [error, updateError]=useState(false);
    const [sumaTotalEdificio, handleSumaTotalEdificio]=useState(0);


    const updateState= evento =>{handleFactura({...factura,[evento.target.name] : evento.target.value})}
    useEffect(()=>{
        
        if(dataGasto !== undefined && dataGasto !== null){
            console.log(dataGasto.getActiveGastos);
            let numeroActual = 0;
            dataGasto.getActiveGastos.map((gastoActivo)=>{
                numeroActual += gastoActivo.monto
            })
            handleSumaTotalEdificio(numeroActual)
            console.log(numeroActual);
        }
        console.log(dataApartamento);
    },[dataGasto, dataApartamento])
    

    return(
        <div className = {styles.GastosFormContainer}>
            
            <form 
            className={styles.formg}
            onSubmit={e => {
            e.preventDefault();
            createFactura({ variables: { fechaDeCreacion: fechaDeCreacion, fechaDeVencimiento: fechaDeVencimiento, active: true } }).then((response)=>{
                console.log(response.data.createFactura)

                dataApartamento.getActiveApartamentos.map((apartamento)=>{
                    console.log("el id es: ", apartamento.id, " la factura id es: ", response.data.createFactura.id, " y va a pagar: ", (sumaTotalEdificio*(apartamento.alicuota/100)));
                    createApartamentoFactura({ variables:{ facturaId: response.data.createFactura.id, apartamentoId: apartamento.id, monto: (sumaTotalEdificio*(apartamento.alicuota/100))}})
                })

            })
            
            
            ;
            
            
            }}
            >
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "fechaDeCreacion" onChange = {updateState} value = {fechaDeCreacion} placeholder = "Fecha de creacion (MM-DD-AAAA)..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className = "mt-2">
                            <input className={styles.inpGasto} type = "text" name = "fechaDeVencimiento" onChange = {updateState} value = {fechaDeVencimiento} placeholder = "Fecha de vencimiento (MM-DD-AAAA)..." ></input>
                        </div>
                    
                    </Col>
                    <Col xs={6} md={4} lg={8}>
                        <div className = "Cont">
                            <button type = "submit"  className="btn-outline btn-success">Crear</button>  
                        </div>    
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}


export default FacturaForm;