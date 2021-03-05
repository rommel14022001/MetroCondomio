import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import {Nav} from "react-bootstrap";

export const Sidebar = () => {

    useEffect(() => {
        console.log("data")
        
    }, [])
    return(
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky"></div>

            <Nav.Item>
                <Nav.Link className="navlink">Registrar Pagos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navlink">Administrar Condo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navlink" >Administrar Gastos</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Sidebar;