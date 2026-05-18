import { useState } from 'react';
import './CalendarPage.css'

import {
    ArrowLeft,
    ArrowRight,
    Plus
} from 'lucide-react'

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTHS_RU = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];




function DayItem({day}) {

    return(
        <div className="daySlot">
            <div className="mainInfo">
                <h1>
                    {day}
                </h1>

                <div className="eventsList">
                    <div className="event">Событие1</div>
                    <div className="event">Событие2</div>
                    <div className="event">Событие3</div>
                </div>
            </div>

            <div className="stats">
                <div className="notesCount">11</div>
                <div className="ToDoCount">25</div>
                <div className="eventsCount">2</div>
            </div>
        </div>
    )
}


function CalendarPage() {

    
    const today = new Date()
    const [currentYear, setYear] = useState(today.getFullYear())
    const [currentMonth, setMonth] = useState(today.getMonth())
    const currentDay = today.getDay()

    let firstDayOfMonth = new Date(currentYear, currentMonth, 1)
    let totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDayOfWeek = firstDayOfMonth.getDay();

    let emptySlotsBefore = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    let emptySlots = Array(emptySlotsBefore).fill(null);
    let daysArray = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);


    const updateMonth = (month: any) => {

        if (currentMonth - 1 != 0) {setMonth(currentMonth + month)}
        else if (currentMonth <= 0) {updateYear(false)}

        else if (currentMonth + 1 != 12) {setMonth(currentMonth + month)}
        else if (currentMonth >= 12) {updateYear(true)}

        
        console.log(currentMonth);
    }


    const updateYear = (plusYear: boolean) => {
        
        if (plusYear) {
            setYear(currentYear + 1)            
            setMonth(0)
        }
        else{
            setYear(currentYear - 1)
            setMonth(0)
        }
        
        console.log(currentYear, currentMonth);
        // plusYear ? setYear(currentYear + 1) : setYear(currentYear - 1)
        // setMonth(1)
        
    }


    return(
        <div className="calendarPage">

            <div className="centerBox">
                <div className="pattern" />
                <div className="switchMonth">
                    <button onClick={() => currentMonth - 1 != 0 ? updateMonth(-1) : updateMonth(1)}>
                        <ArrowLeft/>
                    </button>

                    <div className="currentDate">
                        {MONTHS_RU[currentMonth]} {currentYear}
                    </div>

                    <button onClick={() => currentMonth + 1 != 12 ? setMonth(currentMonth + 1) : setMonth(currentMonth)}>
                        <ArrowRight/>
                    </button>
                </div>
            </div>


            <div className="weekDays">
                {WEEK_DAYS.map((day) => (
                    <div className={day} key={day}>{day}</div>  
                ))}
            </div>


            {/* <div className="emptySlots">
                {emptySlots.map((emptySlot) => (
                    <div className="emptyDay">{emptySlot}</div>  
                ))}
            </div> */}

            <div className="daysList">
                {/* <DayItem day="1"/> */}
                {daysArray.map((day) => (
                    <DayItem day={day}/>
                ))}
            </div>
            

            <div className="calendarBottom">

            <hr/>

            <button>
                Повторяющееся событие

                <div className="plus">
                    <Plus />
                </div>
            </button>

            </div>
            
        </div>
    )
}

export default CalendarPage