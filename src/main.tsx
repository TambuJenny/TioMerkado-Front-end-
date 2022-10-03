import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import RoutesConf from './AplicationCore/Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesConf />
  </React.StrictMode>
)
