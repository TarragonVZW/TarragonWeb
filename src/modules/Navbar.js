import Tarragon_Tiny from '../images/Tarragon_Tiny.svg'
import Tarragon_Title from '../images/Tarragon_Title.svg'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <a href="/">
                <img className="tinylogo" src={Tarragon_Tiny} alt="Tarragon Tiny Logo"/>
                <img className="title" src={Tarragon_Title} alt="Tarragon Title Logo"/>
            </a>
            <div className={"headerlinks"}>
                <a href="/#Home"><h2>Home</h2></a>
                <a href="/#Kobolds"><h2>Kobolds</h2></a>
                <a href="/LNOE"><h2>Last Night on Earth</h2></a>
                <a href="https://discord.com/invite/TjDUu2Gkag" target="_blank" rel="noreferrer"><h2>Discord</h2></a>
            </div>
        </header>
    )
}

export default Navbar