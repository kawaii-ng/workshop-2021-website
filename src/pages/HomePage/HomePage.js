import React from 'react'
import { useNavigate } from 'react-router-dom'
import { gameDataList } from '../../data/game-data'
import './HomePage.css'

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
                {
                    gameDataList.map((item, index) => (
                        <div key={index} 
                            className='game-card' style={{backgroundImage: `url(${item.imgUrl}`}}
                            >
                            <div>
                                <h1>{item.name}</h1>
                                <div
                                    onClick={()=>{
                                        navigate(`/material/${item.submitDate==28? 'day-one':'day-two'}/${item.id}/demo`)
                                    }}>了解更多</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage
