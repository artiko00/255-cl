import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import { Landing } from './pages/landing'
import { Films } from './pages/films'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/films" element={<Films />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
