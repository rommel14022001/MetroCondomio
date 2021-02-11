import GastosDetails from '../components/GastoDetail';
import GastosForm from '../components/GastosForm';
import React, {useState, useEffect,Fragment} from 'react';
import styles from "../styles/pages/gastospage.module.css";
import {Container, Button,Col,Row} from 'react-bootstrap';
import resolvers from '../graphQL/resolvers/resolvers';
import { gql, useMutation,useQuery } from '@apollo/client';




export const GastosPage = ({props}) => {
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

    console.log(props);
    const [gastos, setGastos] = useState([]);


    // const createGasto =  (name,amount)=> {
    
    //     setGastos( (prevGasto) => {return [...prevGasto ,{name,amount}]} );
    //     // console.log(resolvers.Query.getUsuarios(models.usuario));   
        
    // }
    
    const deleteGasto=  gasto =>{
        
        // deleteGastoDB(gasto);
    
    }

    console.log(props)
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
                <Col  className = "TagsManagerForm">
                    <GastosForm 
                    key={1}
                    />
                </Col>
                </Row>
            </div>
        </Container>
    )
}



export default GastosPage;