import React, { useContext, useLayoutEffect, useState } from 'react'
import {Nav} from "react-bootstrap";

export const Sidebar = () => {

    return(
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky"></div>

            <Nav.Item>
                <Nav.Link className="navlink">Registrar Pagos</Nav.Link>
            </Nav.Item>
            
        </Nav>
    )
}

export default Sidebar;