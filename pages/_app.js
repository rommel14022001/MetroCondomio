import React from "react";
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/globals.css';
import {ApolloClient,InMemoryCache,gql, ApolloProvider, useQuery} from '@apollo/client'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
  const router=useRouter()
  console.log(router.query);


  return (

    <>
      <Header></Header>
      <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">  
                    {(router.query.admin!==undefined || router.query.usuario!==undefined) ? 
                      <Sidebar /> 
                    :null}    
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    <ApolloProvider client={client}>
                    <Component {...pageProps} />
                    </ApolloProvider>
                    </Col> 
                </Row>

      </Container>
      
      
    </>
  
  )
}

export default MyApp
