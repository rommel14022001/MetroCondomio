import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import {Nav} from "react-bootstrap";
import Link from 'next/link';
import {useRouter} from 'next/router';
import {ApolloClient,InMemoryCache,gql, ApolloProvider,useMutation, useQuery} from '@apollo/client'
import SideBarComponent from './SideBarComponent';
export const Sidebar = () => {
    
    
        const client = new ApolloClient({
            uri: 'http://localhost:4000/graphql',
            cache: new InMemoryCache()
        });

    return(
        <ApolloProvider client={client} >
        
            <SideBarComponent/>
        
        </ApolloProvider>
    )
    
}

export default Sidebar;