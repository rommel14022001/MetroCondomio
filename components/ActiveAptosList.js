
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row,Dropdown,DropdownButton,InputGroup} from 'react-bootstrap';

import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

import EdificioForm from './EdificioForm'
import PropietarioForm from './PropietarioForm';

export const ActiveAptopsList = ({edif}) => {
    
    const GET_APARTAMENTOS = gql`
    query getApartamentos {
        getApartamentos {
            id,
            edificioId ,
            piso,
            aptoNum,
            cedula,
            inquilinoNombre,
            alicuota,
            active
        }
    }
    `;
    const GET_NOT_ACTIVE_APARTAMENTOS = gql`
    query getNotActiveApartamentosByEdif($edificioId: Int!) {
        getNotActiveApartamentosByEdif(edificioId: $edificioId) {
        id
        aptoNum
        piso
        alicuota
        active
        }
    }
    `;
    

    // const [deleteEdificio] = useMutation(DELETE_EDIFICIO);

    
    const arrayEdificios = []
    useEffect(() => {
        console.log(data)
        console.log('ROMMEL')
        console.log(edif)
    }, [aptop,data,edif])
    
    const [aptop,handleAptop]=useState('');
    

    const { loading, error, data } = useQuery(GET_NOT_ACTIVE_APARTAMENTOS, {
        variables: { edificioId:edif},
        pollInterval: 500
    })
    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    let title='No hay Aptops';
    if(data!==undefined){

        title= data.getNotActiveApartamentosByEdif.length===0 ? 'No Hay Apartamentos' : 'Apartamentos';
    }

    
    return(
        <Container>
            
            <div className = "TagsManagerBody">
            <Row> 
                <Col className={styles.GastosManagerDetails}>
                    
                    <h2> {title} </h2>
                    
                    <InputGroup className="mb-3">

                        <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-2"
                                >

                                {data===undefined ? <h3>Sin apartamentos</h3>:data.getNotActiveApartamentosByEdif.map(apto=>(

                                    <Dropdown.Item href="#" 
                                        onClick={(e)=>{handleAptop(e.target.name)}}
                                        name={apto.id}
                                        key={apto.id}
                                        >{apto.aptoNum}
                                    </Dropdown.Item>
                                                                
                                ))}

                                
                        </DropdownButton>
                            
                    </InputGroup>
                </Col>
                
                </Row>
                <Row>
                    {aptop.trim()!='' ? 
                            
                        <Col>
                            <PropietarioForm
                                AptopNum={aptop}
                                edificioId={edif}
                                
                            />
                        </Col>
                
                    :null}
                </Row>
            </div>
        </Container>
    )
}
export default ActiveAptopsList;




