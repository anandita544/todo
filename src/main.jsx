import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import todoReducer from './TodoReducer.jsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
  </React.StrictMode>,
)
