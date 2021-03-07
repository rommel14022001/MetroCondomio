import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from "../styles/pages/loginpage.module.css";
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery} from '@apollo/client'
import LoginForm from '../components/LoginForm';


const LoginPage = () => {
  

    
    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });


    return ( 
      
    
      <ApolloProvider client={client}>

        <Container  className={styles.login__container}>
            
            <LoginForm/>
                        
          </Container>

      </ApolloProvider>
        

        
     );
}
 
export default LoginPage;