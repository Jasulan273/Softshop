import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Catalog from './pages/Catalog/Catalog.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/catalog' element={<Catalog />} />
    </Routes>
    </Router>
  </React.StrictMode>,
)
