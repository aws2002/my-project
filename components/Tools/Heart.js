import React from 'react'
import { BsSuitHeartFill,BsSuitHeart } from "react-icons/bs";
export default function Heart (props) {
    let heartIcon = props.isFilled ? <BsSuitHeartFill/> : <BsSuitHeart/>
    return (
        <div>
            <i className=' text-xl text-color_10 cursor-pointer transition-all hover:text-opacity-90' onClick={props.handleClick}>{heartIcon}</i>
        </div>
    )
}

