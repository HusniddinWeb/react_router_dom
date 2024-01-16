import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './components/pages/home/Home';
import Login from "./components/pages/login/Login"
import About from './components/pages/about/About';
import { useState } from 'react';

function App() {

    const [name, setName] = useState('[]');

  return (
    <div className="App">
      
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='login' element={ <Login setName={setName} /> } />
        <Route path='about'  element={ <About name={name} /> }/>
      </Routes>

    </div>
  );
}

export default App;
