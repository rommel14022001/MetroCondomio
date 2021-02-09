import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import React from 'react';
import GastosPage from './gastospage';
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
  return (
    
    <div>
      <GastosPage/>
    </div>
  )
}
