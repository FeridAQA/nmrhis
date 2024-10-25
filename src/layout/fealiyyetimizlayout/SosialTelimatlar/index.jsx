import React from 'react'
import { Data } from '../../../TEST/temporaryApi'
import CardHolder from '../../../components/common components/FealiyyetimizCardHolder'

function SosialTelimatlar() {

  // You have to fetch the necessary data

  return (
    <div>
      <CardHolder data={Data} path={"sosial_telimatlar"} />
    </div>
  )
}

export default SosialTelimatlar
