import Tarragon_Tiny from '../images/Tarragon_Tiny.svg'
import Tarragon_Title from '../images/Tarragon_Title.svg'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <Link to="/">
                <img className="tinylogo" src={Tarragon_Tiny} alt="Tarragon Tiny Logo"/>
                <img className="title" src={Tarragon_Title} alt="Tarragon Title Logo"/>
            </Link>

        </header>
    )
}

export default Navbar