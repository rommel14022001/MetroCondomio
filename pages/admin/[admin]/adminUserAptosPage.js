
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../../../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row,Dropdown,DropdownButton,InputGroup} from 'react-bootstrap';

import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'

import EdificioForm from '../../../components/EdificioForm'
import ActiveEdifList from '../../../components/ActiveEdifList';
import ActiveAptopsList from '../../../components/ActiveAptosList';
export const AdminUserAptosPage = () => {
    
    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
    
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
    const [edif,handleEdif]=useState('');
    const { loading, error, data } = useQuery(GET_EDIFICIOS_NAME, {
        variables: { nombre:edif},
        pollInterval: 500
    })
    useEffect(() => {
        console.log(data)
    }, [data])
  
    return(
        
        <ApolloProvider client={client}>

            <Container  className={styles.login__container}>
                <Col className={styles.title}>

                    <h1>Administrar apartamentos a Propietarios</h1>


                </Col>
                <Container className="mt-5">
                    {data!=null ? 
                    
                        (data.getEdificioName!=null ? 
                            (data.getEdificioName.id!=null ? 
                                <h1>{data.getEdificioName.nombre}</h1>
                            
                            :null )  
                        :null )
                    :null}
                </Container>
                <Row className="mb-5">
                        <Col>

                            <ActiveEdifList
                                edif={edif}
                                handleEdif={handleEdif}
                            />
                        </Col>
                        
                        {data!=null ? 
                            
                            (data.getEdificioName!=null ? 
                                (data.getEdificioName.id!=null ? 
                                    <Col>
                                        <ActiveAptopsList
                                            edif={data.getEdificioName.id}
                                            
                                        />
                                    </Col>
                                
                                :null )  
                            :null )
                        :null}
                                    
                </Row>
            </Container>

      </ApolloProvider>
        
    )
}
export default AdminUserAptosPage;




