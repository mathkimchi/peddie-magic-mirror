const scriptPath = document.currentScript.src;
/** 
 * Use this if linking relative to script and not html file
 */
const magicMirrorRootPath = scriptPath + "/../..";
// console.log(parentPath);


customElements.define("time-display-widget", class extends HTMLElement {
    connectedCallback() {
        var clock = document.createElement("div");
        clock.id = "clock";
        clock.classList.add("currentblock");
        this.appendChild(clock);

        function updateClock(clock) {
            let date = new Date();
            let hh = date.getHours();
            let mm = date.getMinutes();
            let session = "AM";

            if (hh == 0) {
                hh = 12;
            }
            if (hh >= 12) {
                if (hh != 12) hh = hh - 12;
                session = "PM";
            }

            hh = (hh < 10) ? hh : hh;
            mm = (mm < 10) ? "0" + mm : mm;

            let time = hh + ":" + mm + " " + session;

            // document.getElementById("clock").innerText = time;
            clock.innerText = time;

            // recursively make sure the next updateClock is called again
            let t = setTimeout(function () { updateClock(clock) }, 1000);
        }

        updateClock(clock);
    }
});


customElements.define("weather-widget", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="weather-grid-container">
                <div class="weather-grid-item1">
                    <img src="${magicMirrorRootPath}/res/weather.png" class="weather_img">
                </div>
                <div class="weather-grid-item2">
                    <code class="language-python match-braces temp" id="portfolio-code5temp">64&deg;F</code>
                </div>
                <div class="weather-grid-item3">
                    <code class="language-python match-braces weather" id="portfolio-code5"></code>
                </div>
            </div>
        `;
    }
});

customElements.define("pfs-menu-widget", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h3>
                Menu
    
            </h3>
            <div><code class="language-python match-braces menu" id="pfs-menu-list" style="font-family: serif;"> </code></div>
        `;


        fetch(magicMirrorRootPath + "/data/menu.txt")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Bad Response")
                }
                return response.text()
            })
            .then(text => document.getElementById("pfs-menu-list").innerText = text)
            .catch(errror => document.getElementById("pfs-menu-list").innerText = "Unable to fetch portfolio, try again later")
    }
});

customElements.define("graduation-countdown-widget", class extends HTMLElement {
    connectedCallback() {
        //calculates the days until graduation
        var deadline = new Date("May 25, 2025").getTime(); //change this to set the graduation date
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.ceil(t / (1000 * 60 * 60 * 24)); // round up on the date b/c it counts the time by millis (ex. Sept 30, 11:59:59 = 1000 millis until Oct, but displays 1 full day)
        if (days < 0) days += 365; //after graduation, start counting down to next year (dont display negative)

        this.innerHTML = `
            <h4>
                Days Until Graduation
            </h4>
            <!-- <div> <code class="language-python match-braces counter" id="portfolio-code6"> </code></div> -->
            <div id='counterdays' class='counter' style="font-family: serif;">` + days + " Days Left!" + `</div>
        `;
    }
});

customElements.define("standard-side-bar", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="first-column">
                <img src="${magicMirrorRootPath}/res/peddielogo.png" class="logo alt=" peddie logo>
                <time-display-widget></time-display-widget>
                <weather-widget></weather-widget>
                <pfs-menu-widget></pfs-menu-widget>
                <graduation-countdown-widget>hello</graduation-countdown-widget>
            </div>
        `;
    }
});

customElements.define("title-widget", class extends HTMLElement {
    connectedCallback() {
        // TODO: change the class
        this.innerHTML = `
            <div class='magic-mirror'>
                <h2>
                    ${this.getAttribute("title-string")}
                </h2>
                <div><code class="language-python match-braces weather" id="portfolio-code5"> </code></div>
            </div>
        `;
    }
});

customElements.define("magic-mirror-title", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='magic-mirror'>
                <h2>
                    Magic Mirror
                </h2>
                <div><code class="language-python match-braces weather" id="portfolio-code5"> </code></div>
            </div>
            `;
    }
});

customElements.define("scheldule-widget", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <img src="${magicMirrorRootPath}/res/Screenshot_20240918_152200.png" alt="" srcset="" width="400">
        `;
    }
});

customElements.define("athletics-schedule-widget", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='item2'>
                <p>Athletics Schedule</p>
            </div>
            <div class='schedule'><code class="language-python match-braces athletics" id="portfolio-code3"> </code>

            </div>
        `;
    }
});

customElements.define("upcoming-events-widget", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p2> Upcoming Events</p2>
            <div><code class="language-python match-braces calendar" id="portfolio-code4" style="font-family: serif;"> </code></div>
        `;

        fetch(magicMirrorRootPath + "/data/upcoming.txt")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Bad Response")
                }
                return response.text()
            })
            .then(text => document.getElementById("portfolio-code4").innerText = text)
            .catch(errror => document.getElementById("portfolio-code4").innerText = "Unable to fetch portfolio, try again later")
    }
});

customElements.define("pictures-of-the-week-widget", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='student_section'> Pictures of the Week</div>
            <div class='student_section2'>
                <!-- <iframe src="https://www.peddie.org/tv-monitor/student-photography-test-page"></iframe> -->
                <div>
                <a data-flickr-embed='true' href='https://www.flickr.com/photos/peddieschool/sets/72177720328801800' title='Admission Slideshow 2025'><img src='https://live.staticflickr.com/65535/54765172494_96f0270356_b.jpg' width="500 px" alt='20241108_BlueGoldChapel_0036'></a><script async src='https://embedr.flickr.com/assets/client-code.js' charset='utf-8'></script>
                    </iframe>
                </div>
            </div>
            <div class='signature'>
                (Students: Send your photos to am@peddie.org)
            </div>
        `;
    }
});
