import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DropZone from '../../../../components/DropZone/DropZone'
import './SubmitLayout.css'
import { Scrollbars } from 'react-custom-scrollbars'
import { gameDataList } from '../../../../data/game-data'

function SubmitLayout() {

    const navigate = useNavigate()
    let { day, topic } = useParams()

    const [gameData, setGameData] = useState()

    useEffect(()=>{

        setGameData(gameDataList.find(game => { return game.id === topic}))

    },[topic, gameData])

    return (
        <Scrollbars style={{height: '100%', width: '100%'}}>
        <div className='submit-layout'>
            {
                typeof gameData !== 'undefined' && 
                <>
                    <div style={{margin: '0em 1em'}}>
                        <h1>遞交專案 <br/>「{gameData.name}」</h1>
                        <img src={gameData.imgUrl} alt="" width="250px" height="200px"
                            style={{
                                
                                borderRadius: 50,
                                margin: '.5em 1.5em',
                                objectFit: 'cover'
                                
                            }}/>
                    </div>
                    <DropZone submitDate={gameData.submitDate} title={topic}/>
                </>
            }
        </div>
        </Scrollbars>
    )
}

export default SubmitLayout
