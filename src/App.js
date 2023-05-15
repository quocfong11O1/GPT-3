import React from 'react'

import {Article, CTA, Brand, Navbar, Feature} from "./components";
import {Footer, Blog, Posibility, WhatGPT3, Features, Header} from "./containers";

import './App.css'
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Posibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}
export default App
