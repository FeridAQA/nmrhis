import React from 'react'
import CardHolder from '../../components/common components/FealiyyetimizCardHolder'
import { Data } from '../../TEST/temporaryApi'
import PageTitle from '../../components/common components/PageTitle'

function SosialTerefdasliq() {
  return (
    <>
      <PageTitle>Sosial Tərəfdaşlıq</PageTitle>
      <CardHolder data={Data} path={"sosial_terefdasliq"} />
    </>
  )
}

export default SosialTerefdasliq
