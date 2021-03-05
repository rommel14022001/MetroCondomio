import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Axios from 'axios';
import resolvers from '../graphQL/resolvers/resolvers';
import { gql, useMutation,useQuery } from '@apollo/client';
import { LessThan } from 'typeorm';



const RegisterPage = () => {

  const [username, setUsernameReg]=useState(0);
  // const [username, setUsernameReg]=useState(28013672);
  const [password,setPasswordReg]=useState('');
 
  const [modalShow, setModalShow] = useState(false);
  
  const handleLogin =  (e) => {
    e.preventDefault();
    console.log('hey dude');
    console.log(data)
    // console.log(username);
    // console.log(data);

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
        <Container  className=" login__container fluid">
          <Row className="login-box"> 
              <Col lg={ 6 } xs ={ 12 } >
                      
                <h3 className = "login-title">Bienvenido! </h3>
                <span>Inicia Sesión </span>
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

                    <div className="form-group">
                      <label >Contraseña</label>
                      <input 
                        type="password" 
                        className="form-control"  
                        // name="password" value={ password } 
                        
                        onChange={(e)=> 
                          {
                            // setPasswordReg(e.target.value)
                           
                          
                          } }
                        
                      />
                    </div>
                    <Row className='d-flex'>
                      <Col >
                        <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
                      </Col>
                    </Row>
                  </form>
                  <Row>
                      <Col  >
                        <button  
                          onClick={() => setModalShow(true)} 
                          className="btn btn-primary mt-3">
                          Recuperar contraseña
                        </button>
                      </Col>
                  </Row>
              </Col>

              

        
          </Row>

           <div className="form-group mt-3">
                      <label >Email </label>
                      <input 
                        type="number" 
                        className="form-control" 
                        // name="email" value={ email } 
                        // onChange={ handleInputChange } 

                      />
                    </div>

                    <div className="form-group">
                      <label >Contraseña</label>
                      <input 
                        type="password" 
                        className="form-control"  
                        // name="password" value={ password } 
                        // onChange={ handleInputChange } 
  
                      />
                    </div>
                    <Row className='d-flex'>
                      <Col >
                        <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
                      </Col>
                    </Row>
                  
                  <Row>
                      <Col  >
                        <button  
                          onClick={() => setModalShow(true)} 
                          className="btn btn-primary mt-3">
                          Recuperar contraseña
                        </button>
                      </Col>
                  </Row>
        </Container>

        

      </>     
     );
}
 
export default RegisterPage;