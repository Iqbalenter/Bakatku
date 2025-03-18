import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import VerificationEmail from './pages/Verification';
import FillIdentity from './pages/FillIdentity';
import UploadCv from './pages/UploadCv';
import ResultAnalysis from './pages/ResultAnalysis';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/verification',
    element: <VerificationEmail/>
  },
  {
    path: 'fill-identity',
    element: <FillIdentity/>
  },
  {
    path: 'send-cv',
    element: <UploadCv/>
  },
  {
    path: 'result-analysis',
    element: <ResultAnalysis/>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
