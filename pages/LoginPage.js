import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { gql, useMutation,useQuery } from '@apollo/client';
import styles from "../styles/pages/loginpage.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Redirect, Route, Switch } from 'react-router-dom'
import GastosPage from './gastospage';
import RegisterPage from './RegisterPage';


const LoginPage = () => {
  const router=useRouter();
  const [username, setUsernameReg]=useState(0);
  // const [username, setUsernameReg]=useState(28013672);
  const [password,setPasswordReg]=useState('');
 
  const [modalShow, setModalShow] = useState(false);
  
  const handleLogin =  (e) => {
    e.preventDefault();
    // console.log('hey dude');
    // console.log(data)
    
    if (data.getUsuarioCedula!==null){
      router.push(`/${username}`)
    }

  }

  const GET_USUARIOS = gql`
    query getUsuarios {
        getUsuarios {
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


  const GET_USUARIOS_CEDULA = gql`
    query getUsuarioCedula($cedula:Int!) {
        getUsuarioCedula(cedula:$cedula){
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
  
        
  const { loading, error, data,refetch } = useQuery(GET_USUARIOS_CEDULA, {
    variables: { cedula:parseInt(username)},
    pollInterval: 500,
  });
    
    


    return ( 
      
      <>
        <Container  className={styles.login__container}>
          
         
          
          <Row className={styles.login_box}> 
              <Col lg={ 6 } xs ={ 12 } >
                      
                <h3 className = "login-title">Bienvenido! </h3>
                <span>Inicia Sesión</span>
                  <form 
                  onSubmit={ handleLogin }
                  >

                    <div className="form-group mt-3">
                      <label >Cédula </label>
                      <input 
                        type="number" 
                        className="form-control" 
                        // name="email" value={ email } 
                        onChange={(e)=> 
                          {
                            setUsernameReg(e.target.value)
                            refetch();
                          } }

                      />
                    </div>

                   
                    <Row className='d-flex'>
                      <Col >
                        <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
                      </Col>
                    </Row>
                  </form>
                  
              </Col>

          </Row>

           
        </Container>

        

      </>     
     );
}
 
export default LoginPage;