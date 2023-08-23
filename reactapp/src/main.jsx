import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Articles from './Pages/Articles/Articles.jsx'
import Header from './Header.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <App />
     
        
        
  </React.StrictMode>,
)
