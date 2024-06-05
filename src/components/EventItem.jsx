import React from 'react'

function EventItem({ image, name, date }) {
    return (
        <div className='eventItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{date}</p>
        </div>
    )
}

export default EventItem