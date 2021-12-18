import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

    const musicGameItem = ["實作試玩", "遞交專案"]
    const changeGameItem = ["實作示範", "遞交專案"]
    const flappyBirdItem = musicGameItem

    const navItemList = [musicGameItem, changeGameItem, flappyBirdItem]
    const [navIndex, setNavIndex] = useState(0)

    useEffect(()=>{
        if(topic == 'music-game')
            setNavIndex(0)
        if(topic == 'make-change')
            setNavIndex(1)
        if(topic == 'flappy-bird')
            setNavIndex(2)
    }, [topic])

    return (
        <div className="section-nav">

            {

                topic != null &&
                navItemList[navIndex].map((item, index) => (
                    <div key={index} 
                        className={`section-nav-item ${item=="遞交專案" && "important"}`}
                        onClick={()=>{navigate(`/material/${day}/${topic}/${
                            item=="實作試玩"?"demo":"submit"
                        }`)}}
                        >
                        <span>{item}</span>
                    </div>                    
                ))

            }
        
        </div>
    )
}

export default SectionNav
