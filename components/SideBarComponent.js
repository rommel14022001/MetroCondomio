import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import {Nav} from "react-bootstrap";
import Link from 'next/link';
import {useRouter} from 'next/router';
import { gql, useMutation,useQuery } from '@apollo/client';

export const Sidebar = () => {
    const router = useRouter();
    const url=router.query;
    var usuario=router.query.admin;
    var rol=0;
    useEffect(async() => {
        // console.log("data")
        usuario=router.query.usuario;
        
        // console.log(router.query);
        // console.log(usuario);
        if(router.query.admin!==undefined || router.query.usuario!==undefined){
            await refetch().then(response=>{
                console.log(response);
                if (response.data.getUsuarioCedula!==undefined){
            
                    // console.log('hola')
                    // console.log(response.data.getUsuarioCedula)
                    if(response.data.getUsuarioCedula!==null){
                        rol=response.data.getUsuarioCedula.rol;
                        console.log(rol);
                    }
                }
                });
            
        }
        
        
        // console.log(dataPropietarios);
    }, [dataPropietarios,usuario,dataUserCedula,rol])
    
    const GET_ALL_PROPIETARIOS = gql`
    query getUsuarioAllPropietarios {
        getUsuarioAllPropietarios {
        id
        nombre
        cedula
        active
        }
    }
    `;
    const GET_ALL_ADMIN = gql`
    query getUsuarioAllAdmin {
        getUsuarioAllAdmin {
        id
        nombre
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
  
  
    
    const { data:dataUserCedula,refetch } = useQuery(GET_USUARIOS_CEDULA, {
        variables: { cedula:parseInt(usuario)},
        pollInterval: 500,
    });
    


    const { data:dataPropietarios,refetch:refetchPropietario } = useQuery(GET_ALL_PROPIETARIOS, {
            pollInterval: 500
        })
    const { data } = useQuery(GET_ALL_ADMIN, {
        pollInterval: 500
    })
    
    

    return(
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        
            <div className="sidebar-sticky">

            
            
           
            {dataUserCedula!==undefined?
                    (dataUserCedula.getUsuarioCedula!==null ? 
                        (dataUserCedula.getUsuarioCedula.rol!==null?
                            (dataUserCedula.getUsuarioCedula.rol===0?
                                <div>

                                    <div className="ml-3 mt-4">
                                        {/* {dataUserCedula.getUsuarioCedula.rol} */}
                                        <Link href={{
                                                pathname: 'usuario/[usuario]/UserRecibos',
                                                query: { usuario: usuario },
                                            }} >Mis Recibos</Link>

                                    </div>
                                    <div className="ml-3 mt-4">

                                                <Link href="/">Cerrar sesion</Link>
                                            
                                    </div>
                                   
                                </div>
                            :
                                        
                                        <div>
                                        <div className="ml-3 mt-4">
            
                                            <Link href={{
                                                pathname: '/admin/[admin]/RecibosPage',
                                                query: { admin: usuario },
                                            }}>Registrar Pagos</Link>
                                        
                                        </div>
                                        
                                        <div className="ml-3 mt-4">

                                            <Link href={{
                                                pathname: '/admin/[admin]/newedifpage',
                                                query: { admin: usuario },
                                            }}>Administrar Edificios</Link>
                                        
                                        </div>
                                        
                                        <div className="ml-3 mt-4">

                                            <Link href={{
                                                pathname: '/admin/[admin]/gastosPage',
                                                query: { admin: usuario },
                                            }} >Administrar Gastos</Link>

                                        </div>
                                        
                                        <div className="ml-3 mt-4">

                                            <Link href={{
                                                pathname: '/admin/[admin]/adminUserAptosPage',
                                                query: { admin: usuario },
                                            }} >Administrar Propietarios de apartamentos</Link>

                                        </div>
                                        
                                        <div className="ml-3 mt-4">

                                            <Link href={{
                                                pathname: '/admin/[admin]/facturasPage',
                                                query: { admin: usuario },
                                            }}>Administrar Facturas</Link>
                                        
                                        </div>
                                        <div className="ml-3 mt-4">

                                            <Link href={{
                                                pathname: '/admin/[admin]/adminAdmin',
                                                query: { admin: usuario },
                                            }}>Gestion de Administradores</Link>
                                        
                                        </div>
                                        <div className="ml-3 mt-4">

                                            <Link href="/">Cerrar sesion</Link>
                                        
                                        </div>
                                        </div>
                            )
                        :null)
                :null)
            :null}
            
            
        </div>

        </Nav>
    )
}

export default Sidebar;