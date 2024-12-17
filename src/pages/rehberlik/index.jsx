import React from 'react'
import SubNavbar from '../../components/rehberlik-C/subNavbar'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Rehberlik() {
  return (
    <div>
      <Helmet>
        <title>Rəhbərlik - HİŞ </title>
      </Helmet>
      <SubNavbar />
      <Outlet></Outlet>
    </div>
  )
}

export default Rehberlik