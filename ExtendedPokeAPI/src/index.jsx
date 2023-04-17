import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'
import './scss/main.scss'

const root = createRoot(document.getElementById('app'))
root.render(
  <>
    <App />
  </>
)
