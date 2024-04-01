import React ,{ useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Users from './components/Users'
import Header from './pages/Header'
import Home from './pages/Home'
import Services from './pages/Services';
import BeATasker from './pages/Be-a-Tasker';
import CreateATask from './pages/Create-a-Task';


export interface IApplicationProps {}

const App : React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Header' element={<Header/>}/>
            <Route path="/Services" element={<Services />} />
            <Route path="/Be-a-Tasker" element={<BeATasker />} />
            <Route path="/Create-a-Task" element={<CreateATask />} />
            
        </Routes>
    </BrowserRouter>
  )
}


export default App;
