import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import demo from '../../../../../../images/demo-flappy.gif'

function FlappyInstruction() {
    return (
        <Scrollbars style={{height: '250px', width: '100%'}}>
                <ol>
                    <li>按綠色旗子開始遊戲</li>
                    <li>玩家需要按<span style={{margin: '0em .5em', padding: '0.1em 0.5em', background: '#DDD', color: 'black', borderRadius: '50px'}}>空白揵</span>跳躍</li>
                    <li>避過隨機產生的水管便得1分</li>
                    <li>碰到水管便立即挑戰失敗</li>
                    <li>或，玩家掉出遊戲螢幕也會挑戰失敗</li>
                    <li>點擊綠色旗子重新開始遊戲</li>
                </ol>
                <img src={demo} alt="" width='300px' height="300px"
                    style={{objectFit: 'contain'}}/>
        </Scrollbars>
    )
}

export default FlappyInstruction
