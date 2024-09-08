
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
                    <img src="res/weather.png" class="weather_img">
                </div>
                <div class="weather-grid-item2">
                    <code class="language-python match-braces temp" id="portfolio-code5temp">64℉</code>
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
            <div><code class="language-python match-braces menu" id="pfs-menu-list"> </code></div>
        `;


        fetch("data/menu2.txt")
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
            <div id='counterdays' class='counter'>` + days + " Days Left!" + `</div>
        `;
    }
});

customElements.define("standard-side-bar", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="first-column">
                <img src="res/peddielogo.png" class="logo alt=" peddie logo>
                <time-display-widget></time-display-widget>
                <weather-widget></weather-widget>
                <pfs-menu-widget></pfs-menu-widget>
                <graduation-countdown-widget>hello</graduation-countdown-widget>
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
            <div><code class="language-python match-braces calendar" id="portfolio-code4"> </code></div>
        `;
    }
});

customElements.define("pictures-of-the-week-widget", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='student_section'> Pictures of the Week</div>
            <div class='student_section2'>
                <!-- <a data-flickr-embed="true" href="https://www.flickr.com/photos/peddieschool/albums/72157720235616434" title="BOYS VARSITY BASKETBALL 2021 PSIT">
        <img src="https://live.staticflickr.com/65535/51746795314_d3636fa4f9.jpg" width="300" height="225" alt="BOYS VARSITY BASKETBALL 2021 PSIT"></a>
        <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> -->

                <!-- <iframe src="https://www.peddie.org/tv-monitor/student-photography-test-page"></iframe> -->
                <div class="embed-responsive">
                    <iframe style="position: relative; top: 0; left: 0; width: 100%; height: 100%;"
                        src="https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=72177720302691153&sort=2&by=album&theme=slider&scale=fit&speed=30000&limit=400&skin=default-light&autoplay=true"
                        scrolling="no" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true"
                        mozallowfullscreen="true">
                        <p><a href="https://www.compareboilercover.co.uk">Compare Boiler Cover UK</a></p>
                        <small>Powered by <a href="https://flickrembed.com">flickr embed</a>.</small>
                    </iframe>
                    <script
                        type="text/javascript">function showpics() { var a = $("#box").val(); $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + a + "&tagmode=any&format=json&jsoncallback=?", function (a) { $("#images").hide().html(a).fadeIn("fast"), $.each(a.items, function (a, e) { $("<img/>").attr("src", e.media.m).appendTo("#images") }) }) }</script>
                </div>
            </div>
            <div class='signature'>
                (Students: Send your photos to am@peddie.org)
            </div>
        `;
    }
});
