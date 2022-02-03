import './App.css';

import React, { useState } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';


export default function App(){
  // pageSize= 10;
   const apiKey = process.env.REACT_APP_NEW_API
  const [progress, setProgress] = useState(0);
    return (
      <div>
      <BrowserRouter>
       <Navbar/>
       <LoadingBar
        color="rgb(185 49 254)"
        progress={progress}
      />
      <Routes> 
        <Route path="/"           element={<News  setProgress={setProgress}  key="general" apiKey ={apiKey} country="in" category="general"/>} />
        <Route path="/sports"     element={<News  setProgress={setProgress} key="sports"  apiKey ={apiKey} country="in"  category="sports"/>} />
        <Route path="business/"   element={<News  setProgress={setProgress} key="business"  apiKey ={apiKey} country="in"  category="business"/>} />
        <Route path="/technology" element={<News  setProgress={setProgress} key="technology" apiKey ={apiKey} country="in" category="technology"/>} />
        <Route path="/science"    element={<News  setProgress={setProgress} key="science" apiKey ={apiKey} country="in"  category="science"/>}/>
        <Route path="/health"     element={<News  setProgress={setProgress} key="health"  apiKey ={apiKey} country="in" category="health"/>}/>
        <Route path="/entertainment"  element={<News  setProgress={setProgress} key="entertainment" apiKey ={apiKey} country="in" category="entertainment"/>}/>
      </Routes>
      </BrowserRouter>
       <Footer/>
      </div>
    )
} 
