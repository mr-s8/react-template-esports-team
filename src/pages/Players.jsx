import React from 'react'
import MenuItem from '../components/MenuItem'
import { MenuList } from "../helpers/MenuList"
import "../styles/Players.css"

function Players() {
    return (
        <div className="menu">
            <h1 className='menuTitle'>Our Players</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                    return (
                        < MenuItem key={key} image={menuItem.image} name={menuItem.name} rating={menuItem.rating} />
                    );

                })}
            </div>
        </div>
    )
}

export default Players