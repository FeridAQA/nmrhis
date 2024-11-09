import React from 'react'
import { Data } from '../../../TEST/temporaryApi'
import CardHolder from '../../../components/common components/FealiyyetimizCardHolder'

function EmeyinTehlukesizliyi() {

  // You have to fetch the necessary data

  return (
    <div>
      <CardHolder data={Data} path={"emeyin_tehlukesizliyi"} />
    </div>
  )
}

export default EmeyinTehlukesizliyi