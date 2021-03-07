
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row,Dropdown,DropdownButton,InputGroup} from 'react-bootstrap';

import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

import EdificioForm from './EdificioForm'


export const ActiveEdifList = ({edif,handleEdif}) => {
    
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
    const GET_ACTIVE_EDIFICIOS = gql`
    query getActiveEdificios {
        getActiveEdificios {
        id
        nombre
        pisos
        aptosPPiso
        active
        }
    }
    `;
    const DELETE_EDIFICIO = gql`
    mutation updateEdificio($id: Int!, $nombre: String!, $pisos: Int!, $aptosPPiso: Int!, $active:Boolean!) {
         updateGasto(id: $id, nombre: $nombre, pisos: $pisos,aptosPPiso: $aptosPPiso ,active: $active) {
           id
         }
    }
    `;
    const RECOVER_EDIFICIO = gql`
    mutation updateEdificio($id: Int!, $nombre: String!, $pisos: Int!, $aptosPPiso: Int!, $active:Boolean!) {
        updateGasto(id: $id, nombre: $nombre, pisos: $pisos,aptosPPiso: $aptosPPiso ,active: $active) {
          id
        }
   }
    `;

    const [deleteEdificio] = useMutation(DELETE_EDIFICIO);

    const [recoverEdificio] = useMutation(RECOVER_EDIFICIO);

    const { loading, error, data } = useQuery(GET_ACTIVE_EDIFICIOS, {
        pollInterval: 500
    })
    
    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    const arrayEdificios = []
    // useEffect(() => {
    //     console.log(data)
    //     console.log(edif)
    //     console.log('ROMMEL')
    // }, [edif])
    const [edificios, setEdificios] = useState([]);
    
    const createEdificio =  (name,floors,aptosPFloor)=> {
    
        setEdificios( (prevEdificio) => {return [...prevEdificio ,{name,floors, aptos, aptosPFloor}]} );
         

    }

    let title='No hay edificios';
    if(data!==undefined){

        title= data.getActiveEdificios.length===0 ? 'No Hay Edificios' : 'Edificios';
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

                                {data===undefined ? <h3>Sin edificios</h3>:data.getActiveEdificios.map(edificio=>(

                                    <Dropdown.Item href="#" 
                                        onClick={(e)=>{handleEdif(e.target.name)}}
                                        name={edificio.nombre}
                                        key={edificio.id}
                                        >{edificio.nombre}
                                    </Dropdown.Item>
                                                                
                                ))}
                        </DropdownButton>
                            
                    </InputGroup>
                </Col>
                
                </Row>
            </div>
        </Container>
    )
}
export default ActiveEdifList;




