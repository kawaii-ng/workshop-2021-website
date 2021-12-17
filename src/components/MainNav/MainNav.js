import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './MainNav.css'

/**
 * 
 * @MainNav : 
 * - show three options (1. home 2. day one workshop material 3. day two workshop material)
 * 
 */

function MainNav() {

    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("home")

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
        navigate(`/${item!='home' ? 'material/' : ""}`+item)


    }

    return (
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
                <box-icon color={activeItem == "day-one" ? "white" : "black"} type='solid' name={activeItem == "DayOne" ? "book-content" : 'book'}></box-icon>
                <span>第一天</span>
            </div>
            <div className={`main-nav-item ${activeItem == "day-two" && "main-nav-item-active"}`}
                onClick={() => onClick("day-two")}
            >
                <box-icon color={activeItem == "day-two" ? "white" : "black"} type="solid" name={activeItem == "DayTwo" ? "book-content" : 'book'} ></box-icon>
                <span>第二天</span>
            </div>            
        </div>
    )
}

export default MainNav
