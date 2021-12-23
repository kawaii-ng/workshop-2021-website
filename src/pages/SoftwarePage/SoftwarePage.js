import React from 'react'
import softwareIcon from '../../images/codelab-adaptar.PNG'
import { Scrollbars } from 'react-custom-scrollbars'

function SoftwarePage() {
    return (
        <Scrollbars style={{height: '100%', width: '100%'}}>
            <h1>Codelab Adaptar</h1>
            <img src={softwareIcon} alt="" style={{margin: '1em', borderRadius: 25}}/>
            <h1>下載及安裝Codelab Adaptar</h1>
            <div><b>官方網站： </b><a href="https://adapter.codelab.club/get_start/gs_install/?version=latest" target="_blank">https://adapter.codelab.club/get_start/gs_install/?version=latest</a></div>
            <div><b>安裝教學： </b><a href="https://adapter.codelab.club/get_start/gs_install/?version=latest#win" target="_blank">立即前往</a></div>
            <div><b>下載連結： </b><a href="https://scratch3-files.just4fun.site/codelab-adapter-4_9_6-win64.zip" target="_blank" download="https://scratch3-files.just4fun.site/codelab-adapter-4_9_6-win64.zip">立即下載</a></div>
        </Scrollbars>
    )
}

export default SoftwarePage
