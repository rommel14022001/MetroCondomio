import React, { useContext, useLayoutEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Image from 'next/image'
export const Header = () => {

    return(
        <div className = "Header">
            <h1>METROCONDOMINIO</h1>
            <Image
                src="/../public/condoi.png"
                alt="Picture of the author"
                width={180}
                height={120}
            />
        </div>
    )
}

export default Header;