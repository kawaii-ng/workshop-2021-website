import React from 'react'
import { useNavigate } from 'react-router-dom'
import { gameDataList } from '../../data/game-data'
import './HomePage.css'

import { Scrollbars } from 'react-custom-scrollbars'

/**
 * 
 * @HomePage
 * - show banner
 * - show game selection 
 * 
 */

function HomePage() {

    const navigate = useNavigate()

    return (
        <div className='home-layout'>
            <div className='home-banner'>
                <div>
                    <h1>2021年人工智能STEM 學習營</h1>
                    <h3>Team 8f</h3>
                </div>
            </div>
            <div className='game-selection'>
                <Scrollbars style={{height: '100%', width: '100%'}}>
                    <div style={{display:'flex', alignItems: 'center', height: '100%'}}>
                    {
                        gameDataList.map((item, index) => (
                            <div key={index} 
                                className='game-card' style={{backgroundImage: `url(${item.imgUrl}`}}
                                onClick={()=>{
                                    navigate(`/material/${item.submitDate==28? 'day-one':'day-two'}/${item.id}/${item.firstPath}`)
                                }}
                                >
                                <div>
                                    <h1>{item.name}</h1>
                                    <div>了解更多</div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </Scrollbars>
                
            </div>
        </div>
    )
}

export default HomePage
