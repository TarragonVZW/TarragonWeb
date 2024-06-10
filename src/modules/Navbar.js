import Tarragon_Tiny from '../images/Tarragon_Tiny.svg'
import Tarragon_Title from '../images/Tarragon_Title.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <Link to="/">
                <img className="tinylogo" src={Tarragon_Tiny} alt="Tarragon Tiny Logo" />
                <img className="title" src={Tarragon_Title} alt="Tarragon Title Logo" />
            </Link>
            <div className={"headerlinks"}>
                <Link to="/#Home"><h2>Home</h2></Link>
                {/* <Link to="/#Kobolds"><h2>Kobolds</h2></Link> */}
                <Link to="/LNOE"><h2>Last Night on Earth</h2></Link>
                <Link to="https://discord.com/invite/TjDUu2Gkag" target="_blank" rel="noreferrer"><h2>Discord</h2></Link>
            </div>
        </header>
    )
}

export default Navbar
