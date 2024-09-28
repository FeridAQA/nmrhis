import React from 'react'
import SubNavbar from '../../components/rehberlik-C/subNavbar'
import { Outlet } from 'react-router-dom'

function Rehberlik() {
  return (
    <div>
        <SubNavbar/>
        <Outlet></Outlet>
    </div>
  )
}

export default Rehberlik