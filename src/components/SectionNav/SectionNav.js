import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { gameDataList } from '../../data/game-data';
import './SectionNav.css'

/**
 * 
 * @SectionNav :
 * - show the sections for user to choose
 * 
 * @props :
 * ...
 * 
 */

function SectionNav(props) {

    let { day, topic } = useParams();
    const navigate = useNavigate();

    const [game, setGame] = useState();

    useEffect(()=>{
        setGame(gameDataList.find(game => { return game.id === topic}))
    }, [topic, game])

    return (
        <div className="section-nav">

            {

                topic != null && typeof game !== 'undefined' &&
                game.sectionList.map((item, index) => (
                    <div key={index} 
                        className={`section-nav-item ${item=="上載截圖" && "important"}`}
                        onClick={()=>{
                            navigate(`/material/${day}/${topic}/${
                                item=="實作試玩"||item=="實作示範"||item=='練習內容'?"demo":"submit"
                            }`)}
                        }
                        >
                        <span>{item}</span>
                    </div>                    
                ))

            }
        
        </div>
    )
}

export default SectionNav
