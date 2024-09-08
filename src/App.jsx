import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
   <>
      <HelmetProvider>
        <BrowserRouter>
          
        </BrowserRouter>
      </HelmetProvider>
   </>
  )
}

export default App
