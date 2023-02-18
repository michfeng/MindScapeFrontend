import './App.css';
import { useState } from 'react'
import axios from "axios";
import './App.css';
import Screening from './components/Screening'
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component }  from 'react';
import {Upload} from './components/Upload';

function App() {

  const [profileData, setProfileData] = useState(null)

  return (
      <div className='App'>        
        <Upload/>
      </div>
  );
}

export default App;
