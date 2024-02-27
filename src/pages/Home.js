import lnoe_title from '../images/2024_LNOE_Title_onBlack.svg';
import {Link} from "react-router-dom";
import DiscordBtn from "../modules/DiscordBtn";
import EventSection from "../modules/EventSection";
import MemberSection from "../modules/MemberSection";


function Home() {
    return <>
        <div className="section">
            <h1>What is Tarragon?</h1>
            <p>We organize events for new & experienced tabletop geeks. Whether you’re a board game veteran or want to
                get into D&D, we’ve got something for you! <br/><br/>
                We meet <span className="text-primary">every Wednesday</span> from 19:00 to 22:00 @ Crafty Potions
                (Sint-Janstraat 21, Kortrijk)</p>
        </div>
        <div className="section">
            <Link to="/LNOE">
                <h1>Don't Miss This!</h1>
                <div className="lnoe-panel"><img src={lnoe_title} alt="Last Night on Earth ad"/></div>
            </Link>
        </div>
        <div className="section"><DiscordBtn/></div>
        <EventSection />
        <div className="section"><MemberSection /></div>
    </>
}

export default Home