import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataProvider } from './Context'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <DataProvider>
      <App />
  </DataProvider>

)
