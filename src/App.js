import './App.css';
import { useState } from 'react'
import axios from "axios";
import './App.css';
import Screening from './components/Screening'
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component }  from 'react';
import Upload from './components/Upload';
import {Start }from './components/Start';
import {Class }from './components/Class';
import {Map} from './components/Map';
import {Social} from './components/Social';
import{
  BrowserRouter as Router,
  Routes,
  Route, useNavigation
} from "react-router-dom";

function App() {

  const id = localStorage.getItem("session_id");
  console.log(id);
  const userExists = (id !== null);
  console.log(userExists)

  return (
    <div className='App'>
      <Social/>
    </div>
  );

  /*return (
      <div className='App'>        
      <Router>
        <Routes>          
          <Route path="/social" element={<Map id={id}/>}/>
          <Route path="/" element={<Start userExists={userExists}/>}/>
          <Route path="/screening" element={<Screening id={id}/>}/> 
          <Route path="/upload" element={<Upload id={id}/>}/>
          <Route path="/class/:classId" element={<Class id={id}/>}/>
          <Route path="/visual" element={<Map id={id}/>}/>
        </Routes>
      </Router>
      </div>
  );*/
}

export default App;
