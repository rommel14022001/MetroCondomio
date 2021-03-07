import EdificioDetails from '../components/EdificioDetail';
import EdificioForm from '../components/EdificioForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery, useMutation } from '@apollo/client'
export const NewCondoPage = () => {
    const GET_EDIFICIOS = gql`
    query getEdificios {
        getEdificios {
        id
        nombre
        pisos
        aptosPPiso
        active
        }
    }
    `;
    const GET_GASTOS = gql`
    query getGastos {
        getGastos {
        id
        nombre
        monto
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

    const { loading: loadingGasto, error: errorGasto, data: dataGasto } = useQuery(GET_GASTOS, {
        pollInterval: 500
    })

    const { loading, error, data } = useQuery(GET_EDIFICIOS, {
        pollInterval: 500
    })

    

    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    const arrayEdificios = []
    useEffect(() => {
        console.log(data)
        console.log("la data de gasto es: ", dataGasto);
    }, [recoverEdificio,deleteEdificio,data, dataGasto])
    const [edificios, setEdificios] = useState([]);
    const createEdificio =  (name,floors,aptosPFloor)=> {
    
        setEdificios( (prevEdificio) => {return [...prevEdificio ,{name,floors, aptos, aptosPFloor}]} );
         

    }

    let title='No hay edificios';
    if(data!==undefined){

        title= data.getEdificios.length===0 ? 'No Hay Edificios' : 'Edificios';
    }

    return(
        <Container>
            <Col className={styles.title}>

                <h1>Administrar Condo</h1>


            </Col>
            <div className = "TagsManagerBody">
            <Row> 
                <Col className = {styles.GastosManagerDetails}>
                    <h2> {title} </h2>
                    {data===undefined ? <h3>Sin edificios</h3>:data.getEdificios.map(edificio=>(
                        
                    <EdificioDetails 
                    key= { edificio.id } 
                    edificio={edificio} 
                    deleteEdificio={deleteEdificio}
                    recoverEdificio={recoverEdificio}

                    />))}
                </Col>
                <Col  className = "mt-5 TagsManagerForm">
                    <EdificioForm 
                    key={1}
                    

                    />
                </Col>
                </Row>
            </div>
        </Container>
    )
}
export default NewCondoPage;
