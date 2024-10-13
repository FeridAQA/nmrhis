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
import XeberlerPage from './pages/XeberlerPage';
import HaqqimizdaPage from './pages/Haqqimizda';
import XeberDetailPage from './pages/XeberDetailPage';
import FealiyyetmizPage from './pages/Fealiyyetimiz';
import GenclerSiyaseti from './layout/fealiyyetimizlayout/GenclerSiyaseti/index';
import EmekHuquqlari from './layout/fealiyyetimizlayout/EmekHuquqlari';
import EmeyinTehlukesizliyi from './layout/fealiyyetimizlayout/EmeyinTehlikesizliyi/index';
import SosialTelimatlar from './layout/fealiyyetimizlayout/SosialTelimatlar/index';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Mainlayout />} >
              <Route index element={<Home></Home>}></Route>
              <Route path='about' element={<About></About>}></Route>
              <Route path='form' element={<FormPage></FormPage>}></Route>
              <Route path='xeberler' element={<XeberlerPage />} />
              <Route path='xeber/:id' element={<XeberDetailPage />} />
              <Route path='haqqimizda' element={<HaqqimizdaPage />} />
              <Route path='rehberlik' element={<Rehberlik></Rehberlik>}>
                <Route path='sedr' element={<Sedr></Sedr>}></Route>
                <Route path='muavinler' element={<Muavinler></Muavinler>}></Route>
                <Route path='katibler' element={<Katib></Katib>}></Route>
              </Route>
              <Route path='Fealiyyetimiz' element={<FealiyyetmizPage />}>
                <Route path='gencler_siyaseti' element={<GenclerSiyaseti />} />
                <Route path='emek_huquqlari' element={<EmekHuquqlari />} />
                <Route path='emeyin_tehlukesizliyi' element={<EmeyinTehlukesizliyi />} />
                <Route path='sosial_telimatlar' element={<SosialTelimatlar />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
