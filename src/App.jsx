import './App.scss';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './layout/mainlayout';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainlayout />} >
              <Route index element={<Home></Home>}></Route>
              <Route path='about' element={<About></About>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
