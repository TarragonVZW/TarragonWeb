import lnoe_title from '../images/2024_LNOE_Title_onBlack.svg';
import {Link} from "react-router-dom";
import DiscordBtn from "../modules/DiscordBtn";
import EventSection from "../modules/EventSection";
import MemberSection from "../modules/MemberSection";
import DragonSection from "../modules/DragonSection";


function Home() {
    return <>
        <div className={"flexing-wrapper"}>
            <div className="section" id={"Home"}>
                <h1>What is Tarragon?</h1>
                <p>We organize events for new & experienced tabletop geeks. Whether you’re a board game veteran or want
                    to
                    get into D&D, we’ve got something for you! <br/><br/>
                    We meet <span className="text-primary">every Wednesday</span> from 19:00 to 22:00 @ Crafty Potions
                    (Sint-Janstraat 21, Kortrijk)</p>
            </div>
            <div className={"section ads"}>
                    <Link to="/LNOE">
                        <h1>Don't Miss This!</h1>
                        <div className="lnoe-panel"><img src={lnoe_title} alt="Last Night on Earth ad"/></div>
                    </Link>
                <div className="section"><DiscordBtn/></div>
            </div>
        </div>
        <EventSection/>
        <div className="section" id={"Kobolds"}><MemberSection/></div>
        <div className={"section"} id={"Dragons"}><DragonSection/></div>
        <div className={"section"} id={"Contact"}>
            <h2>Contact</h2>
            <p>Tarragon v.z.w.<br/>
                Sint-Jansstraat 21,<br/>
                8500 Kortrijk<br/>
                BE 0799.673.542<br/>
                RPR<br/>
                tarragonvzw@gmail.com<br/>
                www.tarragon.be<br/><br/>
                <Link to={"/ToS"}>Membership Terms & Conditions</Link></p>
        </div>
    </>
}

export default Home