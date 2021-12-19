import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DropZone from '../../../../components/DropZone/DropZone'
import './SubmitLayout.css'
import { Scrollbars } from 'react-custom-scrollbars'

function SubmitLayout() {

    const navigate = useNavigate()
    let { day, topic } = useParams()

    const [date, setDate] = useState(day=="day-one"?28:29)

    useEffect(()=>{
        setDate(day=="day-one"?28:29)        
    }, [day])

    return (
        <Scrollbars style={{height: '100%', width: '100%'}}>
        <div className='submit-layout'>
            <DropZone submitDate={date} title={topic}/>
            <h1>遞交專案 {topic=="flappy-bird"? "「笨鳥先飛」":topic =="music-game"? "「音樂遊戲」": "「找續遊戲」"}</h1>
        </div>
        </Scrollbars>
    )
}

export default SubmitLayout
