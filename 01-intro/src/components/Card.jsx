import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className='Card'>
            <div className='inner-Card'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Card
