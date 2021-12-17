import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkshopPage.css'

import musicGameImg from '../../images/music-game.PNG'
import changeGameImg from '../../images/make-change.PNG'
import birdGameImg from '../../images/flappy-bird.PNG'

import SectionNav from '../../components/SectionNav/SectionNav'
import WorkshopLayout from './WorkshopLayout/WorkshopLayout'

/**
 * 
 * @WorkshopPage :
 * - show the workshop material page
 * - first show the option of the topic
 * - after choosing the topic, it will show the second nav bar for use to choose the section
 * 
 * 
 */

function WorkshopPage() {

    let { day, topic, section } = useParams();
    const navigate = useNavigate();

    const [type, setType] = useState(null)
    const [dayNum, setDayNum] = useState(null)

    // list of data  
    const dayOneItem = ["音樂遊戲"]
    const dayTwoItem = ["找續遊戲", "笨鳥先飛"]
    const dayOneGame = ["music-game"]
    const dayTwoGame = ["make-change", "flappy-bird"]
    const dayOneImg = [musicGameImg]
    const dayTwoImg = [changeGameImg, birdGameImg]

    const daysItem = [dayOneItem, dayTwoItem]
    const gameList = [dayOneGame, dayTwoGame]
    const imgList = [dayOneImg, dayTwoImg]

    // update dayNum for determine which day is chosen
    useEffect(()=>{
        if(day == 'day-one' && topic == null)
            setDayNum(0)
        else if(day == 'day-two' && topic == null)
            setDayNum(1)
        else   
            setDayNum(null)

    }, [day, dayNum, topic])

    // update type
    useEffect(()=>{

        if(section == "實作試玩")
            setType = 'demo'
        if(section == "學習重點")
            setType = 'note'
        if(section == "遞交專案")
            setType = 'submit'
        
    }, [section])

    return (
        <div>

            {

                dayNum != null && 
                (

                    <div className="topic-scroll">
                        {
                            daysItem[dayNum].map((item, index)=>(
                                <div key={index} 
                                    className="topic-item" 
                                    style={{backgroundImage: "url("+imgList[dayNum][index]+")"}}
                                    onClick={()=>{navigate("/material/"+ (dayNum=="0"?"day-one/":"day-two/") +gameList[dayNum][index]+"/demo"); setDayNum(null)}}
                                    >
                                    <h1>{item}</h1>
                                </div>
                            ))
                        }
                    </div>

                )

            }
                    
            {

                topic && (
                    <>
                        <SectionNav />
                        <WorkshopLayout />
                    </>
                )

            }
        </div>
    )
}

export default WorkshopPage
