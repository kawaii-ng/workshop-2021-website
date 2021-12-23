import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import demo from '../../../../../../images/demo-music.gif'

function ChangeInstruction() {
    return (
        <Scrollbars style={{height: '250px', width: '100%'}}>
                <ol>
                    <li>玩家需要點擊綠色旗子開始遊戲</li>
                    <li>客人進入店舖付款時，客人會隨機地陳述支付的金額和快餐價格</li>
                    <li>玩家需要用相機拍攝紙幣道具進行找續</li>
                    <li>然後，按<span style={{margin: '0em .5em', padding: '0.1em 0.5em', background: '#DDD', color: 'black', borderRadius: '50px'}}>空白揵</span>掃描紙幣以進行找續</li>
                    <li>若成功掃描，紙幣會顯示出來，否則，紙幣會消失</li>
                    <li>若找續款項正確，客人會滿意地離開</li>
                    <li>假若找續款項大於正確金額，客人會不滿地離開</li>
                    <li>最後，下一位客人會進行店舖，玩家需要繼續為客人進行找續</li>
                </ol>
        </Scrollbars>
    )
}

export default ChangeInstruction
