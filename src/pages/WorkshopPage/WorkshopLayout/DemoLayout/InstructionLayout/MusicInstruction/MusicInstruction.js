import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import demo from '../../../../../../images/demo-music.gif'

function MusicInstruction() {
    return (
        <Scrollbars style={{height: '250px', width: '100%'}}>
                <ol>
                    <li>按綠色旗子開始遊戲及自動播放小星星</li>
                    <li>點撃不同顏色的樂器以發出不同的音調</li>
                </ol>
                <img src={demo} alt="" width='300px' height="300px"
                    style={{objectFit: 'contain'}}/>
        </Scrollbars>
    )
}

export default MusicInstruction
