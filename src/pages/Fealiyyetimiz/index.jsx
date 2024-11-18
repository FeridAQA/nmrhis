import React from 'react'
import { Outlet } from 'react-router-dom'
import PageTabs from '../../components/common components/PageTabs'
import { FealiyyetimizRoutes } from './routes'
import { Helmet } from 'react-helmet-async'

function FealiyyetmizPage() {

  return (
    <div>
      <Helmet>
        <title>Fəaliyyətimiz</title>
      </Helmet>
      <PageTabs title={"FƏALİYYƏTİMİZ"} tabs={FealiyyetimizRoutes} />
      <Outlet />
    </div>
  )
}

export default FealiyyetmizPage
