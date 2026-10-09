
import DoctoresEspecialidad from "./components/DoctoresEspecialidad";
import HomeComponent from "./components/HomeComponent.jsx";

import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class Router extends Component {
    render() {

        return(

            <BrowserRouter>
            <Routes>

                <Route path="/"element={<HomeComponent/>}/>
                <Route path="/"element={<DoctoresEspecialidad/>}/>





            </Routes>
            
            
            </BrowserRouter>



        )

    }
}

