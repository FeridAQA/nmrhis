import './App.scss';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes, ScrollRestoration } from 'react-router-dom'
import Mainlayout from './layout/mainlayout';
import Home from './pages/Home';
import About from './pages/About';
import FormPage from './pages/FormPage';
import ScrollToTop from './components/səifəni_yuxarı_qaldır';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Mainlayout />} >
              <Route index element={<Home></Home>}></Route>
              <Route path='about' element={<About></About>}></Route>
              <Route path='form' element={<FormPage></FormPage>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
