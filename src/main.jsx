import React from 'react'
import ReactDOM from 'react-dom/client'
import StateContext from '../context/StateContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <App />
    </StateContext>
  </React.StrictMode>
)
