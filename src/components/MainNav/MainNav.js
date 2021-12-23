import React, { useState, useEffect, useRef } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { useNavigate, useParams } from 'react-router-dom'
import './MainNav.css'

/**
 * 
 * @MainNav : 
 * - show three options (1. home 2. day one workshop material 3. day two workshop material)
 * 
 */

function MainNav() {

    let { page, dayOf } = useParams()
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState()

    /**
     * 
     * @onClick
     * - handle the onclick event to update the current active item
     * - navigate to another page
     * 
     * @item : the chosen item name
     * 
     */
    const onClick = (item) => {

        setActiveItem(item)
        // goto the specific link
        navigate(`/${item!='home' && item!='capture-guide' ? 'material/' : ""}`+item)

    }

    useEffect(()=>{
        setActiveItem(page=='home'?'home': page=='capture-guide'? 'capture-guide' : dayOf)
    }, [page, dayOf, activeItem])

    return (
        <Scrollbars style={{height: '100px', width: '100%', overflow:'hidden'}}>
        <div className='main-nav'>
            <div className={`main-nav-item ${activeItem == "home" && "main-nav-item-active"}`}
                onClick={() => onClick("home")}
            >
                <box-icon color={activeItem == "home" ? "white" : "black"} type='solid' name='home'></box-icon>
                <span>主頁</span>
            </div>
            <div className={`main-nav-item ${activeItem == "day-one" && "main-nav-item-active"}`}
                onClick={() => onClick("day-one")}
            >
                <box-icon color={activeItem == "day-one" ? "white" : "black"} type='solid' name={activeItem == "day-one" ? "book-content" : 'book'}></box-icon>
                <span>第一天</span>
            </div>
            <div className={`main-nav-item ${activeItem == "day-two" && "main-nav-item-active"}`}
                onClick={() => onClick("day-two")}
            >
                <box-icon color={activeItem == "day-two" ? "white" : "black"} type="solid" name={activeItem == "day-two" ? "book-content" : 'book'} ></box-icon>
                <span>第二天</span>
            </div>            
            <div className={`main-nav-item ${activeItem == "capture-guide" && "main-nav-item-active"}`}
                onClick={() => onClick("capture-guide")}
            >
                <box-icon color={activeItem == "capture-guide" ? "white" : "black"} type="solid" name={activeItem == "capture-guide" ? "book-content" : 'book'} ></box-icon>
                <span>截圖指引</span>
            </div>            
            <div className="main-nav-item"
                onClick={() => {window.open("https://steam.oxxostudio.tw/category/scratch/index.html", "_blank")}}
            >
                <box-icon color="black" type="solid" name='book'></box-icon>
                <span>其他資源</span>
            </div>            
        </div>
        </Scrollbars>
    )
}

export default MainNav
