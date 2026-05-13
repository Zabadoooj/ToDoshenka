import './StartPage.css'
import { Link } from 'react-router-dom';

function StartPage() {

    return(
        <div className="startPage">

            <div className="infoBlock">
                <h1>ToDoshecka</h1>

                <div className="buttons">
                    <Link to="/login">
                        <button className='startButton'>Начать пользоваться</button>
                    </Link>

                    
                    <a href="https://github.com/Zabadoooj/ToDoshenka">
                        <button className='sourceButton'>Исходный код</button>
                    </a>
                </div>
            </div>

            
        </div>
    )
}

export default StartPage