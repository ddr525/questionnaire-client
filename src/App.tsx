import React from 'react'
import { createRoutesFromElements } from 'react-router'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Another from './pages/Another';
import { BrowserRouter } from 'react-router-dom';

function App() {
    // const router = createBrowserRouter(createRoutesFromElements(
    //     <Route path='/' >
    //         <Route index element={<Home />}/>
    //         <Route path='another' element={<Another />} />
    //     </Route>
    // ))

    // return (
    //     <RouterProvider router={router} />
    // )

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>}/>
                    <Route path='another' element={<Another/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
