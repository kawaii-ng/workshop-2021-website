import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkshopPage.css'

import SectionNav from '../../components/SectionNav/SectionNav'
import WorkshopLayout from './WorkshopLayout/WorkshopLayout'

import { Scrollbars } from 'react-custom-scrollbars'

import { gameDataList } from '../../data/game-data'

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

    const [gameList, setGameList] = useState([]);

    useEffect(()=>{

        console.log(gameDataList.filter(game => { return game.submitDate === (day == 'day-one'?28:29)}))
        let newList = gameDataList.filter(game => { return game.submitDate === (day == 'day-one'?28:29)})
        setGameList(newList)
        
    },[day])


    return (
        <div className='workshop-layout'>

            {

                typeof gameList !== 'undefined' && topic == null && 
                (

                    <Scrollbars style={{height: '100%', width: '100%'}}>
                        <div style={{display: 'flex', alignItems:'center', height: '100%', width: '100%'}}>
                            {
                                    gameList.map((item, index)=>(
                                    <div key={index} 
                                        className="topic-item" 
                                        style={{backgroundImage: "url("+item.imgUrl+")", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center"}}
                                        onClick={()=>{navigate("/material/"+ (item.submitDate==28?"day-one/":"day-two/") +item.id+"/"+item.firstPath)}}
                                        >
                                        <h1>{item.name}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </Scrollbars>

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
