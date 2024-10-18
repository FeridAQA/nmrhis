import React from 'react'
import { Outlet } from 'react-router-dom'
import PageTabs from '../../components/common components/PageTabs'
import { FealiyyetimizRoutes } from './routes'

function FealiyyetmizPage() {

  return (
    <div>
      <PageTabs title={"FƏALİYYƏTİMİZ"} tabs={FealiyyetimizRoutes} />
      <Outlet />
    </div>
  )
}

export default FealiyyetmizPage
