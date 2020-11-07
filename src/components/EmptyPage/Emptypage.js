import React from 'react'
import {useParams} from 'react-router-dom'
import {useStateValue} from '../Provider/StateProvider'
import './emptypage.css'
function Emptypage() {
    const{title} = useParams()
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className= "emptypage__message">
         <h2> 
            <span className="emptypage__user"> {user.displayName} </span>, you are in {title} section </h2>
        </div>
    )
}

export default Emptypage
