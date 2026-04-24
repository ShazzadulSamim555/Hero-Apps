import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import { AppProvider } from './Component/Central/AppContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />

      <ToastContainer position='top-right' autoClose={2000}></ToastContainer>
    </AppProvider>
  </StrictMode>,

)
