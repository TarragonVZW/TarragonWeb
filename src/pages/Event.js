import {useParams} from "react-router-dom";
import events from "../dbs/events.json";
import DiscordBtn from "../modules/DiscordBtn";

function Event() {

    const {id} =useParams();

    let renderedEvents = events;
    renderedEvents.sort(function (a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
    });

    let nextEventIndex = 0;

    for (let x in renderedEvents) {
        if (Date.parse(renderedEvents[x].date) >= Date.now() - 86400000 ) {
            nextEventIndex = parseInt(x);
            break;
        }
    }

    renderedEvents = renderedEvents.slice(nextEventIndex, nextEventIndex + 3);

    return <>

        <div className="section">
            <h1>{renderedEvents[id].name}</h1>
            <h3 className="alt-text-color">{new Date(Date.parse(renderedEvents[id].date)).toDateString() + " " + (renderedEvents[id].time ? renderedEvents[id].time : "19:00 - 22:00")}</h3>
            <br/>
            <p dangerouslySetInnerHTML={{__html: renderedEvents[id].description}}/>
        </div>
        <div className="section"><DiscordBtn/></div>
    </>
}

export default Event;