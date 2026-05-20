import { useState } from 'react'
import './EventsPanel.css'

import {
    Plus
} from 'lucide-react'


const EventItem = ({eventName, eventDescription, eventDate}) => {

    return(
        <div className="eventItem">
            <div className="eventDate">
                {eventDate[0]} - {eventDate[2]}

                <div className="eventTime">
                    {eventDate[1]} - {eventDate[3]}
                </div>
            </div>

            <div className="mainInfo">
                <div className="eventName">{eventName}</div>
                <div className="eventDescription">{eventDescription}</div>
            </div>
            
        </div>
    )
}

function EventsPanel(){

    const [eventsList, setEventsList] = useState([
        {
            "eventName": "Тестовое Событие",
            "eventDescription": "Описание события, длинное какое-нибудь МалаяТокмачкаМалаяТокмачкаМалаяТокмачкаМалаяТокмачкаМалаяТокмачка",
            "eventDate": ["20.04.2026", "14:50", "20.04.2026", "15:00"]
        },
        {
            "eventName": "Тестовое Событие2",
            "eventDescription": "Описание события, длинное какое-нибудь МалаяТокмачкаМалаяТокмачкаМалаяТокмачкаМалаяТокмачкаМалаяТокмачка",
            "eventDate": ["20.04.2026", "14:50", "21.04.2026", "22:00"]
        },{
            "eventName": "Тестовое Событи3",
            "eventDescription": "Описание события, длинное какое-нибудь МалаяТокмачкаМалаяТокмачкаМалаяТокмачкаМалаяТокмачкаМалаяТокмачка",
            "eventDate": ["21.04.2026", "00:50", "20.05.2026", "05:00"]
        }
    ])

    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = today.getMonth()
    const t = todayDate.toString() + todayMonth.toString()

    const test = eventsList.sort((a, b) => 1 - 1)

    console.log();
    

    return(
        <div className="eventsPanel">

            <div className="upperPart">
                <div className="mainText">Список Событий</div>
                <hr/>
                
                <div className="eventsList">
                    {eventsList.map((eventItem) => (
                        <EventItem eventName={eventItem.eventName}
                            eventDescription={eventItem.eventDescription}
                            eventDate={eventItem.eventDate}
                        />
                    ))}
                </div>
            </div>

            <div className="addEventButton">
                Новое событие
                <Plus />
            </div>

        </div>
    )
}

export default EventsPanel