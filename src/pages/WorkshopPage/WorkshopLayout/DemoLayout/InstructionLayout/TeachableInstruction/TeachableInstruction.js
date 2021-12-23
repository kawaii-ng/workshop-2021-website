import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import demo from '../../../../../../images/demo-music.gif'

function TeachableInstruction() {
    return (
        <Scrollbars style={{height: '250px', width: '100%'}}>
                <ol>
                    <li>透過上載貓和狗的圖片訓練AI 模型辨認物件</li>
                </ol>
        </Scrollbars>
    )
}

export default TeachableInstruction
