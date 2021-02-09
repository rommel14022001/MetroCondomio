import React from "react";
import Header from '../components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
