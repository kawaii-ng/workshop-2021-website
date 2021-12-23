import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import sample from '../../images/sample_screenshot.PNG'
import gif from '../../images/screen_capture_tutorial.gif'
import './CapturePage.css'

function CapturePage() {
    return (
        <Scrollbars style={{height: '100%', width: '100%'}}>
        <div style={{height: '100%'}}>
            <h1>截圖指引</h1>
            <h3>為方便作記錄，煩請為編程積木截圖並上載至本站，謝謝大家！</h3>
            <div className="guide-section">
                <div className='guide-area'>
                    <div style={{margin: '1em'}}>
                        <h5>Window 作業系統</h5>
                        <span>Windows + Shift + S</span>
                    </div>
                </div>
                <div className='guide-area'>
                    <div style={{margin: '1em'}}>
                        <h5>Mac 作業系統</h5>
                        <span>Shift + Command + 3</span>
                    </div>
                </div>
            </div>
            <div className="guide-section">
                <div style={{margin: '1em', width: '100%', borderRadius: 25}}>
                    <h3>Window 10 截圖示範</h3>
                    <img src={gif} width="500px" height="auto" style={{borderRadius: 25, margin: '1em'}} alt="" />
                    
                </div>
                <div style={{margin: '1em', width: '100%', borderRadius: 25}}>
                    <div style={{margin: '1em'}}>
                        
                    
                        <h3>截圖例子</h3>
                        <img src={sample} width="100%" height="100%" alt=""  style={{borderRadius: 50}}/>
                        <div style={{margin: '0em'}}>
                            <h3>圖像名稱格式：</h3>
                            <p>[am/pm]_[英文名首三個字+姓氏首兩個子]_[編號]</p>
                            <p>e.g. Nicky Ng 是上午上工作坊，圖像名稱會是「am_nicng_01」</p>
                            <p>e.g. Nicky Ng 是下午上工作坊，圖像名稱會是「pm_nicng_01」</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        </Scrollbars>
    )
}

export default CapturePage
