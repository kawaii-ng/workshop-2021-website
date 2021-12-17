import React, { useState, useEffect } from 'react'
import './DemoLayout.css'

import { musicGameData } from '../../../../data/music-game'
import { flappyBirdData } from '../../../../data/flappy-bird'
import { useParams } from 'react-router-dom'

import  firebase from '../../../../config/firebase'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'


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

    const { topic } = useParams();

    // firebase storage
    const storage = getStorage()

    // materials
    const [materialList, setMaterialList] = useState()
    const [gameData, setGameData] = useState()

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

        if(topic == 'music-game'){

            setGameData(musicGameData)
            console.log("music: ", gameData)
        }
        else if(topic == 'flappy-bird'){

            setGameData(flappyBirdData)
            console.log("bird: ", gameData)
        }

    },[topic, gameData])

    return (
        <div className='demo-layout'>

            <div className='demo-left-frame'>
                {
                    typeof gameData != "undefined" &&
                    gameData.demo.scratchUrl
                }
            </div>

            <div className='demo-right-frame'>
                <div>

                    <h1>實作試玩</h1>
                    <h3>遊戲玩法：</h3>
                    { typeof gameData != "undefined" && gameData.demo.instruction}
                </div>

                <div>

                {
                    typeof gameData != "undefined" && typeof materialList != "undefined" && 
                    <>
                        {
                            
                            <>
                                <h1>製作所需的檔案</h1>
                                <h5>{materialList.length} 個檔案</h5>
                                {

                                    materialList.map((item, index) => (
                                        
                                        <a key={index} href={getUrl(item.name)} download={item.name} className='dl-box'>
                                            <span>{item.name} </span>
                                            <div className='dl-btn'>
                                                <box-icon name='download' color="white" type='solid' ></box-icon>
                                                <span>下載</span>
                                            </div>
                                        </a>
                                    ))

                                }
                            </>

                        }
                    </>
                
                }
                </div>

            </div>

        </div>
    )
}

export default DemoLayout
