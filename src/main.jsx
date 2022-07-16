import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//Agregamos los elementos de react-redux y rtk
import { Provider } from 'react-redux'
import { store } from './store'

// envolvemos el <App /> dentro del provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
)
