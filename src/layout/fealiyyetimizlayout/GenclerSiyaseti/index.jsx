import React from 'react'
import { Data } from '../../../TEST/temporaryApi'
import CardHolder from '../../../components/common components/FealiyyetimizCardHolder'

function GenclerSiyaseti() {
  
  // You have to fetch the necessary data

  return (
    <div>
      <CardHolder data={Data} />
    </div>
  )
}

export default GenclerSiyaseti
