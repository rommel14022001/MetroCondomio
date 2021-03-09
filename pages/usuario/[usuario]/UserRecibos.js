import React from 'react';
import { useRouter } from 'next/router';

import {Container, Row, Col} from 'react-bootstrap';
const UserRecibo = () => {
  const router= useRouter();
  console.log(router.query.UserRecibos);

    return ( 
      
      <>
        <Container  >
          <h1>Recibos</h1>  
        </Container>

        
      </>     
     );
}
 
export default UserRecibo;