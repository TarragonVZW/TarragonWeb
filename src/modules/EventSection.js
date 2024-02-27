import events from "../dbs/events.json";
import {Link} from "react-router-dom";

function EventSection() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

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

    return (
        <div className="eventSection">
            <br/>
            <h1>Upcoming Events:</h1>
            <div className="eventlist">
                {renderedEvents.map((event, i) => {
                    return <Link to={"/event/" + i} key={i} className={"eventComponent event_" + i}>
                        <div className="event_date">
                            <small>{monthNames[new Date(Date.parse(event.date)).getMonth()]}</small>
                            <h1>{new Date(Date.parse(event.date)).getDate()}</h1>
                            <div className="event_date_time"><small>{event.time ? event.time : "19:00 - 22:00"}</small></div>
                        </div>
                        <h2>{event.name}</h2>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default EventSection;