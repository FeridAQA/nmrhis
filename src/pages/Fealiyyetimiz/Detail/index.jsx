import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

function FealiyyetimizDetailPage() {
  return (
    <>
      <Helmet>
        <title>Fəaliyyətimiz</title>
      </Helmet>
      <Outlet />
    </>
  )
}

export default FealiyyetimizDetailPage
