import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PasswordGen from './assets/PasswordGen'
import ImgSlider from './assets/ImgSlider'
import CurrConverter from './assets/CurrConverter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PasswordGen />
    <ImgSlider/>
    <CurrConverter/>
    
  </React.StrictMode>,
)
