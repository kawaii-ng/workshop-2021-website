import React, { useState, useEffect } from 'react'
import './DemoLayout.css'

import { Navigate, useNavigate, useParams } from 'react-router-dom'

import  firebase from '../../../../config/firebase'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import { gameDataList } from '../../../../data/game-data'

import { Scrollbars } from 'react-custom-scrollbars'

/**
 * 
 * @DemoLayout :
 * - responsible for the layout that show the demo from scratch (embeded into the webpage)
 * - show the instruction of using the demo
 * - provide the url to download the material to build the game
 * 
 * @props 
 * section: which section is choosing
 * 
 */

function DemoLayout() {

    let { topic } = useParams();
    const navigate = useNavigate()

    // firebase storage
    const storage = getStorage()

    // materials
    const [materialList, setMaterialList] = useState()
    const [gameData, setGameData] = useState()
    const [tabItem, setTabItem] = useState('game')

    /**
     * getMaterialList: list the item within firebase storage
     */
    const getMaterialList = () => {

        const listRef = ref(storage, gameData.demo.material)

        listAll(listRef)
        .then((res) => {

            var newList = []

            res.items.forEach((itemRef) => {

                newList.push(itemRef)

            })

            setMaterialList(newList)

        })
        .catch((erorr) => {

            console.log("App.js: Showing File List Error")

        })

    }

    /**
     * getUrl: generate the download url of the specific file 
     */
    const getUrl = (name) => {

        const fileRef = ref(storage, gameData.demo.material+name)
        let mUrl = ""

        getDownloadURL(fileRef)
        .then((url) => {
            mUrl = url
        })
        .catch((error) => {
            console.log("App.js: Can't get url of a file")
        })

        return mUrl

    }

    /**
     * initialize the list of teaching materials
     */
    useEffect(()=>{

        if(typeof materialList == "undefined" && typeof gameData != "undefined") {

            getMaterialList();

        }

    }, [materialList, gameData])

    useEffect(()=>{

        setGameData(gameDataList.find(game => { return game.id === topic}))

    },[topic, gameData])

    useEffect(()=>{}, [tabItem])

    return (
        <Scrollbars style={{height: '100%', width: '100%'}}>
        <div className='demo-layout'>


            <div className='demo-left-frame'>
                {
                    typeof gameData != "undefined" && gameData.demo !== null && 
                    gameData.demo.frame
                }
            </div>

            <div className='demo-right-frame'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {
                        typeof gameData !== 'undefined' && 
                        <h1 style={{marginRight: '50px'}}>{gameData.sectionList[0]}</h1>
                    }
                    <div className='tab-group'>
                        <div className={`tab-btn ${tabItem=="game" ? "tab-active" : ""}`}
                            onClick={()=>{setTabItem('game')}}>
                            <span style={{display: 'flex', alignItems: 'center'}}><box-icon type='solid'color={tabItem == "game" ? 'white' : "black"} name={typeof gameData !== 'undefined' ? gameData.sectionList[0] == "????????????"? "detail":"joystick" : ""}></box-icon> <span>{typeof gameData !== 'undefined' ? gameData.sectionList[0] == "????????????"? "????????????":"????????????" : ""}</span> </span>
                        </div>
                        <div className={`tab-btn ${tabItem=="material" ? "tab-active" : ""}`}
                            onClick={()=>{setTabItem('material')}}>
                            <span style={{display: 'flex', alignItems: 'center'}}><box-icon name='folder' color={tabItem == 'material' ? 'white': 'black'} type='solid' ></box-icon> <span>????????????</span></span>
                        </div>
                    </div>
                </div>

                {

                    tabItem == 'game' 
                    && 
                    <div>
                        <h3 style={{display: 'flex', alignItems: 'center'}}><box-icon type='solid' name={typeof gameData !== 'undefined' ? gameData.sectionList[0] == "????????????"? "detail":"joystick" : ""}></box-icon>{typeof gameData !== 'undefined' ? gameData.sectionList[0] == "????????????"? "????????????":"????????????" : ""}</h3>
                        { typeof gameData != "undefined" && gameData.demo !== null && typeof gameData.demo.url !== "undefined" && <a href={gameData.demo.url} target="blank">?????????????????????</a>}
                        { typeof gameData != "undefined" && gameData.demo !== null && gameData.demo.instruction}
                    </div>

                }

                {

                    tabItem == 'material'
                    &&
                    <div>

                    {
                        typeof gameData != "undefined" && typeof materialList != "undefined" && 
                        <>
                            {
                                
                                <>
                                    <div className="demo-file-title">
                                        <h3 style={{display: 'flex', alignItems: 'center'}}><box-icon name='folder' type='solid' ></box-icon>????????????</h3>
                                        <span className="demo-file-num">{materialList.length} ?????????</span>
                                    </div>
                                    <Scrollbars style={{height: '100px', width: '100%'}}>
                                        {/* <div className='dl-scroll-panel'> */}
                                        <div style={{display: 'flex'}}>
                                        {
        
                                            materialList.map((item, index) => (
                                                
                                                <div key={index} className='dl-box'>
                                                    <span>{item.name} </span>
                                                    <a className='dl-btn' href={getUrl(item.name)} download={item.name}>
                                                        <box-icon name='download' color="white" type='solid' ></box-icon>
                                                        <span>??????</span>
                                                    </a>
                                                </div>
                                            ))
        
                                        }
                                        </div>
                                        {/* </div> */}
                                    </Scrollbars>

                                    <div>
                                        <h3 style={{display: 'flex', alignItems: 'center'}}><box-icon type='solid' name='window-alt'></box-icon>????????????</h3>
                                        <div className='software-url' 
                                            onClick={() => gameData.ide === "Scratch" ? window.open('https://scratch.mit.edu/projects/editor/?tutorial=getStarted', '_blank') : gameData.ide === "Teachable Machine" ? window.open('https://teachablemachine.withgoogle.com/train', '_blank') :navigate('/dl')}
                                            target='_blank'>
                                            {gameData.ide}
                                        </div>
                                    </div>
                                </>
    
                            }
                        </>
                    
                    }
                    </div>
    
                }
                
            </div>           


        </div>
        </Scrollbars>
    )
}

export default DemoLayout
