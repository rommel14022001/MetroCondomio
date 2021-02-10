import GastosDetails from '../components/GastoDetail';
import GastosForm from '../components/GastosForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery} from '@apollo/client'
export const GastosPage = () => {
    const GET_GASTOS = gql`
    query getGastos {
        getGastos {
        id
        nombre
        monto
        }
    }
    `;
    const { loading, error, data } = useQuery(GET_GASTOS)
    
    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    useEffect(() => {
        console.log(data)
        
    }, [data])
    const [gastos, setGastos] = useState([]);
    
    // console.log('las props son: ',props)

    const createGasto =  (name,amount)=> {
    
        setGastos( (prevGasto) => {return [...prevGasto ,{name,amount}]} );
        // console.log(resolvers.Query.getUsuarios(models.usuario));  
         

    }
    
    const deleteGasto=  gasto =>{
        
        // deleteGastoDB(gasto);
    
    }


    

    let title='No hay gastos';
    if(data!==undefined){

        title= data.getGastos.length===0 ? 'No Hay Gastos' : 'Gastos';
    }

    return(
        <Container>
            <Col className={styles.title}>

                <h1>Administrar Gastos</h1>
            </Col>
            <div className = "TagsManagerBody">
               <Row> 
                <Col className = {styles.GastosManagerDetails}>
                    <h2> {title} </h2>
                    {data===undefined ? <h3>Sin gastos</h3>:data.getGastos.map(gasto=>(
                    <GastosDetails 
                    key= { gasto.id } 
                    gasto={gasto} 
                    deleteGasto={deleteGasto}

                    />))}
                </Col>
                <Col  className = "mt-5 TagsManagerForm">
                    <GastosForm 
                    key={1}
                    createGasto = {createGasto}

                    />
                </Col>
                </Row>
            </div>
        </Container>
    )
}

export default GastosPage;