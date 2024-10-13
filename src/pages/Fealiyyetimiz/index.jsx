import React from 'react'
import { Outlet } from 'react-router-dom'
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
  return (
    <div>
      <PageTabs title={"FƏALİYYƏTİMİZ"} tabs={Data} />
      <Outlet />
    </div>
  )
}

export default FealiyyetmizPage
