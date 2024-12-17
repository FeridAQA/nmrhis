import React from 'react'
import SubNavbar_iki from '../../components/Subnav_iki'
import MekanSliderWithNav from '../Tabe_Teskilatlar_Detail'
import { Helmet } from 'react-helmet-async'
import PageTitle from '../../components/common components/PageTitle'

function Tabe_teskilatlar() {
    return (
        <div id='Tabe_teskilatlar'>
            <Helmet>
                <title>Tabe Təşkilatlar - HİŞ </title>
            </Helmet>
            {/* <SubNavbar_iki></SubNavbar_iki> */}
            <PageTitle>Tabe Təşkilatlar</PageTitle>
            <MekanSliderWithNav />
        </div>
    )
}

export default Tabe_teskilatlar