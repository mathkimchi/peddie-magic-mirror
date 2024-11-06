/// the time is based on hour in military time
///
/// the game state can be [tie, peddie, blair, ongoing, waiting]
///
/// when determining whether an event is current, scheduled, or finished, the game state should override the time.
/// [tie, peddie, blair] means game is finished.
/// ongoing means the game is current
/// waiting means the game is either current or scheduled, in this case look at the time
///
/// REVIEW: add a delayed state?
/// NOTE: rn, time isn't being accounted for
function registerEvent(eventName, eventLocation, eventState) {
    console.log(eventName, eventLocation, eventState);

    var eventList;
    if (["tie", "peddie", "blair"].includes(eventState)) {
        // finished event
        eventList = document.getElementById("finished-event-list");

        if (eventState == "peddie") {
            eventList = document.getElementById("peddie-wins");
            const newEventName = document.createElement("p");
            newEventName.innerText = eventName;
            eventList.appendChild(newEventName);
        }
        if (eventState == "blair") {
            eventList = document.getElementById("blair-wins");
            const newEventName = document.createElement("p");
            newEventName.innerText = eventName;
            eventList.appendChild(newEventName);
        }
        if (eventState == "tie") {
            eventList = document.getElementById("ties");
            const newEventName = document.createElement("p");
            newEventName.innerText = eventName;
            eventList.appendChild(newEventName);
        }
        return;
    } else if (eventState == "ongoing") {
        // current event
        eventList = document.getElementById("current-event-list");
    } else if (eventState == "waiting") {
        // TODO: automate with time

        // scheduled event
        eventList = document.getElementById("scheduled-event-list");
    } else {
        console.error("invalid game state:", eventState);
    }

    // prepare elements
    const newEventName = document.createElement("p2");
    const newEventLocation = document.createElement("p2");

    newEventName.classList.add("event-name");
    newEventLocation.classList.add("event-location");

    // set the text based on the data
    newEventName.innerText = eventName;
    newEventLocation.innerText = eventLocation;

    // add the elements to event list
    // NOTE: order of the following lines matters
    eventList.appendChild(newEventName);
    eventList.appendChild(newEventLocation);
}

function updateEvents(events) {
    var peddieScore = 0;
    var blairScore = 0;

    /// NOTE: `event` is a keyword
    for (eventObject of events) {
        registerEvent(eventObject["display-name"], eventObject["location"], eventObject["state"]);

        if (eventObject["state"] == "peddie") {
            peddieScore++;
        } else if (eventObject["state"] == "blair") {
            blairScore++;
        }
    }

    document.getElementById("peddie-score-value").innerText = peddieScore;
    document.getElementById("blair-score-value").innerText = blairScore;
}

function update() {
    fetch("../blair-day/data/events.json").then(response => {
        if (!response.ok) {
            throw new Error("Bad Response")
        }
        return response.text()
    }).then(JSON.parse).then(updateEvents)
        .catch(error => {
            console.error(error);
            // document.getElementById("portfolio-code3").innerText = "Unable to fetch portfolio, try again later"
        });
}

update();
