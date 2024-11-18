import React from 'react'
import SubNavbar_iki from '../../components/Subnav_iki'
import MekanSliderWithNav from '../Tabe_Teskilatlar_Detail'
import { Helmet } from 'react-helmet-async'

function Tabe_teskilatlar() {
    return (
        <div id='Tabe_teskilatlar'>
            <Helmet>
                <title>Tabe Təşkilatlar</title>
            </Helmet>
            <SubNavbar_iki></SubNavbar_iki>
            <MekanSliderWithNav />
        </div>
    )
}

export default Tabe_teskilatlar