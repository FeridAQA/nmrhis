import React from 'react'
import './index.scss'
import teze from './3Iqp_ped.png'
function Test() {
    return (
        <>
            <div className="test">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <div className="t">
                    <img src={teze} alt="" />
                </div>
            </div>

        </>
    )
}

export default Test