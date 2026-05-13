import './CalendarPage.css'

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTHS_RU = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];




function CalendarPage() {

    
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()

    let firstDayOfMonth = new Date(currentYear, currentMonth, 1)
    let totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDayOfWeek = firstDayOfMonth.getDay();

    let emptySlotsBefore = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    let emptySlots = Array(emptySlotsBefore).fill(null);
    let daysArray = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);



    return(
        <div className="calendarPage">

            <div className="centerBox">
                <div className="switchMonth">
                    <button>{"<"}</button>

                    <div className="currentDate">
                        {MONTHS_RU[currentMonth]} {currentYear}
                    </div>

                    <button>{">"}</button>
                </div>
            </div>


            <div className="weekDays">
                {WEEK_DAYS.map((day) => (
                    <div className={day} key={day}>{day}</div>  
                ))}
            </div>


        </div>
    )
}

export default CalendarPage