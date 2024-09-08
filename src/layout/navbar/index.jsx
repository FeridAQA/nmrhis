import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      < Link to={'/'}> Home</Link>
      <br />
      <hr />
      < Link to={'/about'}>About</Link>
      <br />
      <hr />
      < Link to={'/form'}>Form</Link>
    </div>
  )
}

export default Navbar