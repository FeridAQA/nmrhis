import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import PageTabs from '../../components/common components/PageTabs'

const Data = [
  {
    path: "gencler_siyaseti",
    title: "Gənclər Siyasəti",
  },
  {
    path: "emek_huquqlari",
    title: "Əmək Hüquqları",
  },
  {
    path: "emeyin_tehlukesizliyi",
    title: "Əməyin Təhlükəsizliyi",
  },
  {
    path: "sosial_telimatlar",
    title: "Sosial Təlimatlar",
  },
]

function FealiyyetmizPage() {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop()
    if (!Data.some(tab => tab.path === currentPath)) {
      navigate("/fealiyyetimiz/gencler_siyaseti")
    }
  }, [location.pathname])


  return (
    <div>
      <PageTabs title={"FƏALİYYƏTİMİZ"} tabs={Data} />
      <Outlet />
    </div>
  )
}

export default FealiyyetmizPage
