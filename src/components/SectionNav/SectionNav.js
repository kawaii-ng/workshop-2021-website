import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

    const musicGameItem = ["實作試玩", "學習重點", "遞交專案"]
    const changeGameItem = ["學習重點", "遞交專案"]
    const flappyBirdItem = musicGameItem

    const navItemList = [ musicGameItem, changeGameItem, flappyBirdItem ]
    const [navIndex, setNavIndex] = useState(0)

    let { topic } = useParams();

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
                    <div key={index}  className={`section-nav-item ${item=="遞交專案" && "important"}`}>
                        <span>{item}</span>
                    </div>                    
                ))

            }
        
        </div>
    )
}

export default SectionNav
