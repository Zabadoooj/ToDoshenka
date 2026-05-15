import './SidePanel.css'
import {
  CalendarDays,
  ListTodo,
  NotebookPen,
  CalendarCheck,
  UserRound,
} from "lucide-react"


import { Link } from 'react-router-dom'



function SidePanel() {

    return(
        <div className="sidePanel">
            
            <div className="upperPart">
                <Link to="/calendar">
                    <button >
                        <CalendarDays/>
                    </button>
                </Link>
                
                
                <button>
                    <ListTodo/>
                </button>

                <button>
                    <NotebookPen/>
                </button>

                <button>
                    <CalendarCheck/>
                </button>
            </div>

            <div className="bottomPart">
                <Link to="/profile">
                    <button>
                        <UserRound/>
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default SidePanel