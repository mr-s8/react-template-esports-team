import React from 'react'
import EventItem from '../components/EventItem'
import { EventList } from "../helpers/EventList"
import "../styles/Events.css"


function Events() {
    return (
        <div className="eventMenu">
            <h1 className='eventTitle'>Upcoming Events</h1>
            <div className="eventList">
                {EventList.map((eventItem, key) => {
                    return (
                        < EventItem key={key} image={eventItem.image} name={eventItem.name} date={eventItem.date} />
                    );

                })}
            </div>
        </div>
    )
}

export default Events

