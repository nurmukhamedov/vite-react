import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { ShoppingCartProvider } from './context/ShoppingCart';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>,
)
