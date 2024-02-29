import './LNOE.css';
import lnoe_title from "../images/2024_LNOE_Title_onBlack.svg";
import lnoe_med_logo from "../images/2024_LNoE_Medium_onAccent.svg";
import map from "../images/Map.svg";
import DiscordBtn from "../modules/DiscordBtn";
import * as React from "react";
import {useState} from "react";

function FAQ(question, answer) {

    const [opened, setOpened] = useState(false);
    const toggleOpen = () => {
        setOpened(!opened);
    };

    return <div className={"LNOE-faq"} onClick={toggleOpen}>
        <div className={"question"}>
            <div className={"triangle-right"} style={opened ? {transform: "rotate(90deg)"} : {}}/>
            <h2>{question}</h2>
        </div>
        {opened ? <p className={"answer"}>
            {answer}
        </p> : ""}
    </div>

}

function LNOE() {

    const signupAd = <div className={"section"}>
        <h2 className={"LNOE"} style={{textAlign: "center"}}>Can you survive the Night?</h2>
        <div className={"LNOE-btn"}>
            <h1>Sign up here!</h1>
            <img alt={"LNOE logo"} src={lnoe_med_logo}/>
        </div>
        <small className={"LNOE"} style={{textAlign: "center"}}>Max 100 participants, tickets available while supply
            lasts.</small>
    </div>

    return <div className={"LNOE"}>
        <div style={{width: "100vw", height: "4rem"}}/>
        <div className={"section"}>
            <div className="lnoe-panel"><img src={lnoe_title} alt="Last Night on Earth ad"/></div>
            <h3 className={"LNOE"}><b>June 29th</b> 19:00 - 03:00</h3>
            <br/>
        </div>

        <div className={"flexing-wrapper"}>
            <div className={"section"}>
                <h1 className={"LNOE"}>What is last Night on earth?</h1>
                <p className={"LNOE"}>
                    Last Night on Earth is a Humans versus Zombies event played over the course of a night in
                    Kortrijk.<br/>
                    <br/>
                    It features 2 teams:<br/>
                    <ul>
                        <li>The <b>Humans</b>, who want to complete missions and survive.</li>
                        <li>The <b>Zombies</b>, who want to eat (tag) the humans.</li>
                    </ul>
                    You can buy sandwiches and drinks (free water) on the event.<br/>
                </p>
            </div>
            {signupAd}
        </div>
        <div className={"flexing-wrapper"}>
            <div className={"section"}>
                <h1 className={"LNOE"}>When and Where?</h1>
                <p className={"LNOE"}>This year’s edition takes place <b>June
                    29th</b> from 19:00 until June 30th 03:00.<br/>
                    <br/>
                    The event and signups begins at Howest Campus “The Level”. But is played over an entire terrain (see
                    below).<br/>
                    <br/>
                    Botenkopersstraat 2,<br/>
                    8500 Kortrijk<br/>
                    <br/>
                    Late arrivals or early leaves are possible, report to the bunker (in the level) to do your late
                    sign-up.
                </p>
            </div>
            <div className={"section"}><img src={map} alt={"Play Area Map"}/></div>
        </div>
        <div className={"section"}><a href="https://discord.gg/95KWPNhKkf">
            <div className="LNOE-btn" style={{flexDirection: "column"}}>
                <h1 style={{margin: "0"}}>Join the Discord!</h1>
                <h3 style={{color: "var(--lnoe-accent-text)"}}>All communications happen here.</h3>
            </div>
        </a></div>
        <div className={"section"}>
            <h1 className={"LNOE"}>FAQ</h1>
            {FAQ("What should I bring?", "You should have your id and ticket with you. We recommend bringing a flashlight, a waterbottle (free water available), and some comfortable running shoes.")}
        </div>
        <div className={"section"} id={"Rules"}>
            <h1 className={"LNOE"}>Rules</h1>
            <p className={"LNOE"}>
                <il>
                    <li><b>Objective</b>:
                        <ul>
                            <li>The goal of the game is for humans to survive against increasing numbers of
                                zombies
                                while completing designated missions and challenges.
                            </li>
                        </ul>
                    </li>

                    <li><b>Role Assignment</b>:
                        <ul>
                            <li>Participants will be assigned the role of either a human or a zombie at the beginning of
                                the
                                event.
                                <li>Humans must defend themselves and complete missions to survive.</li>
                                <li>Zombies must infect humans by tagging them.</li>
                                <li>Everybody must wear their (blue) bandana, provided by Tarragon in one of the
                                    following
                                    locations:
                                    <ul>
                                        <li>Around their neck</li>
                                        <li>On their head</li>
                                        <li>Visibly on their waist</li>
                                    </ul>
                                </li>
                                <li>All zombies get reflective armbands they must wear around both their upper arms.
                                </li>
                            </li>
                        </ul>
                    </li>

                    <li><b>Gameplay</b>:
                        <ul>
                            <li>Humans will be armed with safe, foam designated weapons.</li>
                            <li>Zombies will attempt to tag humans to turn them into zombies. To accomplish this zombies
                                may
                                run,
                                surround, and otherwise strategize. They may NOT hide in order to ambush, lie about
                                their
                                role, or
                                pretend to be human.
                            </li>
                            <li>Once tagged, humans must call out “HIT!” and raise their hand. They will become zombies
                                and
                                must
                                join
                                the zombie horde. Both the newly infected zombie and the one who tagged them must
                                convene at
                                the
                                bunker
                                where the kill will be confirmed.
                            </li>
                            <li>Humans can stun zombies by tagging them with foam weapons, removing them temporarily.
                                Zombies must
                                call
                                out “HIT!” and raise their hand. They can respawn in their designated zones (zombie
                                hives).
                            </li>
                            <li>Zombies cannot tag in safe zones, designated areas where gameplay is paused. Camping
                                near
                                safe zones
                                is
                                not allowed.
                            </li>
                            <li>Humans must complete missions and objectives to earn points and advance in the game.
                            </li>
                            <li>Leaving early is possible by signing out at the bunker. (This counts as a loss for you.)
                            </li>
                        </ul>
                    </li>

                    <li><b>Safety Rules</b>:
                        <ul>
                            <li>All participants must adhere to designated safety guidelines and rules provided by event
                                organisers.
                            </li>
                            <li>No physical contact (excl. Tagging), tackling, or rough play is allowed.</li>
                            <li>Participants must respect private property and abide by event boundaries.</li>
                            <li>Use of any mode of transportation excluding “on foot” is prohibited.</li>
                            <li>Use of any non-approved weapons or equipment is strictly prohibited. All flashlights or
                                potentially
                                disturbing equipment must be checked by referees.
                            </li>
                        </ul>
                    </li>

                    <li><b>Ending Conditions</b>:
                        <ul>
                            <li>The game ends when either all humans have been turned into zombies, all mission
                                objectives
                                have been
                                completed, or at 03:00 (am).
                            </li>
                            <li>Arriving late or leaving early is possible by visiting The Bunker.</li>
                            <li>If humans successfully complete all missions, they win the game.</li>
                            <li>If zombies successfully infect all humans, they win the game.</li>
                        </ul>
                    </li>

                    <li><b>Ticketing</b>:
                        <ul>
                            <li>Once purchased tickets cannot be returned. If in any case a ticket holder wants to sell
                                their ticket
                                Tarragon must be contacted in order to change the player list accordingly.
                            </li>
                            <li>Refund requests can be submitted to Tarragonvzw@gmail.com in case of emergency. Tarragon
                                maintains
                                the
                                right to refuse refunds.
                            </li>
                            <li>Tickets are only valid for this edition of Last Night on Earth.</li>
                            <li>By purchasing a ticket you consent to having your picture taken and used by Tarragon for
                                promotional
                                purposes and remain liable for your health and safety during the event.
                            </li>
                        </ul>
                    </li>

                    <li><b>Code of Conduct</b>:
                        <ul>
                            <li>Respect fellow participants, event staff, and bystanders at all times.</li>
                            <li>Follow instructions from event organisers and referees promptly.</li>
                            <li>Cheating, unsportsmanlike behavior, or disruptive conduct will result in immediate
                                disqualification
                                from
                                the game.
                            </li>
                            <li>Return all handed out equipment to the organisers when signing out or at the end of the
                                event.
                            </li>
                            <li>Act like your role. Humans will never want to get infected. Zombies shouldn't have
                                mercy.
                            </li>
                            <li>Have fun, stay active, and embrace the spirit of camaraderie and competition.</li>
                        </ul>
                    </li>
                </il>
                These rules are designed to ensure a safe, fair, and enjoyable experience for all participants of Last
                Night
                on
                Earth.
            </p>
        </div>
        <br/>
        <div className={"section"}><DiscordBtn/></div>
    </div>
}

export default LNOE;