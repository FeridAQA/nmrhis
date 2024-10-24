import './App.scss';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Navigate, Route, Routes, ScrollRestoration } from 'react-router-dom'
import Mainlayout from './layout/mainlayout';
import Home from './pages/Home';
import About from './pages/About';
import FormPage from './pages/FormPage';
import ScrollToTop from './components/səifəni_yuxarı_qaldır';
import Test from './TEST';
import Rehberlik from './pages/rehberlik';
import Sedr from './components/rehberlik-C/rəhbərlik-Sədr';
import Muavinler from './components/rehberlik-C/rehberlik-Muavinler';
import Katib from './components/rehberlik-C/rehberlik-katibelr';
import Struktur from './pages/struktur';
import Uzv_teskilat from './pages/uzvtesgilatlari';
import Tabe_teskilatlar from './pages/tabe_teskilatlar';
import His_sobeleri from './pages/his_sobeleri';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Mainlayout />} >
              <Route path='/test' element={<Test />} />
              {/* <Route path='/struktur' element={<Struktur />} /> */}
              <Route index element={<Home></Home>}></Route>
              <Route path='about' element={<About></About>}></Route>
              <Route path='form' element={<FormPage></FormPage>}></Route>

              <Route path='rehberlik' element={<Rehberlik></Rehberlik>}>
                <Route path='sedr' element={<Sedr></Sedr>}></Route>
                <Route path='muavinler' element={<Muavinler></Muavinler>}></Route>
                <Route path='katibler' element={<Katib></Katib>}></Route>
              </Route>

              <Route path='struktur' element={<Struktur></Struktur>}></Route>
              <Route path='struktur/uzv_teskilatlar' element={<Uzv_teskilat></Uzv_teskilat>}></Route>
              <Route path='struktur/tabe_teskilatlar' element={<Tabe_teskilatlar></Tabe_teskilatlar>}></Route>
              <Route path='struktur/his_sobeleri' element={<His_sobeleri></His_sobeleri>}></Route>


            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
