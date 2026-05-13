import './SidePanel.css'
import {
  CalendarDays,
  ListTodo,
  NotebookPen,
  CalendarCheck,
  UserRound,
} from "lucide-react";

import { Link } from 'react-router-dom';



function SidePanel() {

    return(
        <div className="sidePanel">
            
            <div className="upperPart">
                <button>
                    <CalendarDays/>
                    <Link to="/calendar">
                    </Link>
                </button>
                
                
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
                <button>
                    <UserRound/>
                </button>
            </div>

        </div>
    )
}

export default SidePanel