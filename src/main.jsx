import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import { MemoDemo } from './Learning/usecall & useMemo/MemoDemo';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoDemo/>
  </StrictMode>
)
