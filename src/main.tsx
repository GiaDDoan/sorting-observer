import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AlgoProvider from './contexts/AlgoProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AlgoProvider>
      <App />
    </AlgoProvider>
  </React.StrictMode>,
)
