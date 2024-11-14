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
import Struktur from './pages/struktur';
import Uzv_teskilat from './pages/uzvtesgilatlari';
import Tabe_teskilatlar from './pages/tabe_teskilatlar';
import His_sobeleri from './pages/his_sobeleri';
import FealiyyetmizPage from './pages/Fealiyyetimiz';
import GenclerSiyaseti from './layout/fealiyyetimizlayout/GenclerSiyaseti/index';
import EmekHuquqlari from './layout/fealiyyetimizlayout/EmekHuquqlari';
import EmeyinTehlukesizliyi from './layout/fealiyyetimizlayout/EmeyinTehlikesizliyi/index';
import SosialTelimatlar from './layout/fealiyyetimizlayout/SosialTelimatlar/index';
import FealiyyetimizDetail from './pages/Fealiyyetimiz/Detail';
import FealiyyetimizDetailPage from './pages/Fealiyyetimiz/Detail';
import EmekHuqulariDetail from './layout/fealiyyetimizlayout/EmekHuquqlari/detail';
import GenclerSiyasetiDetail from './layout/fealiyyetimizlayout/GenclerSiyaseti/detail';
import EmeyinTehlukesizliyiDetail from './layout/fealiyyetimizlayout/EmeyinTehlikesizliyi/detail';
import SosialTelimatlarDetail from './layout/fealiyyetimizlayout/SosialTelimatlar/detail';
import SosialTerefdasliq from './pages/SosialTerefdasliq';
import SosialTerefdasliqDetail from './pages/SosialTerefdasliq/detail';
import FotoXronikaPage from './pages/FotoXronika';
import Organlar from './pages/orqanlar';
import Konfrans from './pages/konfrans';
import MekanSliderWithNav from './pages/Tabe_Teskilatlar_Detail';
import Elaqe from './pages/elaqe';
import Qanunvericilik from './pages/qanunvericilik';

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
                <Route path='orqanlar/konfrans' element={<Konfrans></Konfrans>}></Route>
              <Route path='orqanlar' element={<Organlar></Organlar>}></Route>
              <Route path='about' element={<About></About>}></Route>
              <Route path='qanunvericilik' element={<Qanunvericilik></Qanunvericilik>}></Route>
              <Route path='elaqe' element={<Elaqe></Elaqe>}></Route>
              <Route path='form' element={<FormPage></FormPage>}></Route>
              <Route path='xeberler' element={<XeberlerPage />} />
              <Route path='xeber/:id' element={<XeberDetailPage />} />
              <Route path='haqqimizda' element={<HaqqimizdaPage />} />
              <Route path='rehberlik' element={<Rehberlik></Rehberlik>}>
                <Route path='sedr' element={<Sedr></Sedr>}></Route>
                <Route path='muavinler' element={<Muavinler></Muavinler>}></Route>
                <Route path='katibler' element={<Katib></Katib>}></Route>
              </Route>

              <Route path='struktur' element={<Struktur></Struktur>}></Route>
              <Route path='struktur/uzv_teskilatlar' element={<Uzv_teskilat></Uzv_teskilat>}></Route>
              <Route path='struktur/tabe_teskilatlar/:id' element={<Tabe_teskilatlar />}></Route>
              <Route path='struktur/his_sobeleri' element={<His_sobeleri></His_sobeleri>}></Route>


              <Route path='/' element={<FealiyyetmizPage />}>
                <Route path='gencler_siyaseti' element={<GenclerSiyaseti />} />
                <Route path='emek_huquqlari' element={<EmekHuquqlari />} />
                <Route path='emeyin_tehlukesizliyi' element={<EmeyinTehlukesizliyi />} />
                <Route path='sosial_telimatlar' element={<SosialTelimatlar />} />
              </Route>
              <Route path='/' element={<FealiyyetimizDetailPage />}>
                <Route path='gencler_siyaseti/:id' element={<GenclerSiyasetiDetail />} />
                <Route path='emek_huquqlari/:id' element={<EmekHuqulariDetail />} />
                <Route path='emeyin_tehlukesizliyi/:id' element={<EmeyinTehlukesizliyiDetail />} />
                <Route path='sosial_telimatlar/:id' element={<SosialTelimatlarDetail />} />
              </Route>
              <Route path='/sosial_terefdasliq' element={<SosialTerefdasliq />} />
              <Route path='/sosial_terefdasliq/:id' element={<SosialTerefdasliqDetail />} />
              <Route path='/foto_xronika' element={<FotoXronikaPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
