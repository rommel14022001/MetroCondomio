import React from "react";
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    <Component {...pageProps} />
                    </Col> 
                </Row>

      </Container>
      
      
    </>
  
  )
}

export default MyApp
