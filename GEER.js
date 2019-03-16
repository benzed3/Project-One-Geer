function displayInfo() {
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=ZM6QM7Wzsb7rrLZD&keywords=books&location=Charlotte&date=This+Week&within=15&sort_order=popularity&page_size=6&page_number=1&mature=safe&category=Festival";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var jsonResponse = JSON.parse(response);
            console.log(jsonResponse.events);
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            var title1 = jsonResponse.events.event[0].title;
            var startTime1 = jsonResponse.events.event[0].start_time;
            var venue1 = jsonResponse.events.event[0].venue_name;
            var address1 = jsonResponse.events.event[0].venue_address;
            var venueSite1 = jsonResponse.events.event[0].venue_url;
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            $("#title1").text(title1);
            $("#one").text("Date/Time: " + startTime1);
            $("#two").text("Venue: " + venue1);
            $("#three").text("Address: " + address1);
<<<<<<< HEAD

            var a = $("<a>Got to Website</a>");
            a.attr("href", venueSite1);

            $("#a").append(a);

            //2

=======
            var a = $("<a>Got to Website</a>");
            a.attr("href", venueSite1);
            $("#a").append(a);
            //2
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            var title2 = jsonResponse.events.event[1].title;
            var startTime2 = jsonResponse.events.event[1].start_time;
            var venue2 = jsonResponse.events.event[1].venue_name;
            var address2 = jsonResponse.events.event[1].venue_address;
            var venueSite2 = jsonResponse.events.event[1].venue_url;
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            $("#title2").text(title2);
            $("#four").text("Date/Time: " + startTime2);
            $("#five").text("Venue: " + venue2);
            $("#six").text("Address: " + address2);
<<<<<<< HEAD

            var b = $("<a>Go to Website</a>");
            b.attr("href", venueSite2);

            $("#b").append(b);

            //3

=======
            var b = $("<a>Go to Website</a>");
            b.attr("href", venueSite2);
            $("#b").append(b);
            //3
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            var title3 = jsonResponse.events.event[2].title;
            var startTime3 = jsonResponse.events.event[2].start_time;
            var venue3 = jsonResponse.events.event[2].venue_name;
            var address3 = jsonResponse.events.event[2].venue_address;
            var venueSite3 = jsonResponse.events.event[2].venue_url;
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            $("#title3").text(title3);
            $("#seven").text("Date/Time: " + startTime3);
            $("#eight").text("Venue: " + venue3);
            $("#nine").text("Address: " + address3);
<<<<<<< HEAD

            var c = $("<a>Go to Website</a>");
            c.attr("href", venueSite3);

            $("#c").append(c);

            //4

=======
            var c = $("<a>Go to Website</a>");
            c.attr("href", venueSite3);
            $("#c").append(c);
            //4
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            var title4 = jsonResponse.events.event[3].title;
            var startTime4 = jsonResponse.events.event[3].start_time;
            var venue4 = jsonResponse.events.event[3].venue_name;
            var address4 = jsonResponse.events.event[3].venue_address;
            var venueSite4 = jsonResponse.events.event[3].venue_url;
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            $("#title4").text(title4);
            $("#ten").text("Date/Time: " + startTime4);
            $("#eleven").text("Venue: " + venue4);
            $("#twelve").text("Address: " + address4);
<<<<<<< HEAD

            var d = $("<a>Go to Website</a>");
            d.attr("href", venueSite4);

            $("#d").append(d);

            //5

=======
            var d = $("<a>Go to Website</a>");
            d.attr("href", venueSite4);
            $("#d").append(d);
            //5
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            var title5 = jsonResponse.events.event[4].title;
            var startTime5 = jsonResponse.events.event[4].start_time;
            var venue5 = jsonResponse.events.event[4].venue_name;
            var address5 = jsonResponse.events.event[4].venue_address;
            var venueSite5 = jsonResponse.events.event[4].venue_url;
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            $("#title5").text(title5);
            $("#thirteen").text("Date/Time: " + startTime5);
            $("#fourteen").text("Venue: " + venue5);
            $("#fifteen").text("Address: " + address5);
<<<<<<< HEAD

            var e = $("<a>Website</a>");
            e.attr("href", venueSite5);

            $("#e").append(e);

            //6

=======
            var e = $("<a>Website</a>");
            e.attr("href", venueSite5);
            $("#e").append(e);
            //6
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            var title6 = jsonResponse.events.event[5].title;
            var startTime6 = jsonResponse.events.event[5].start_time;
            var venue6 = jsonResponse.events.event[5].venue_name;
            var address6 = jsonResponse.events.event[5].venue_address;
            var venueSite6 = jsonResponse.events.event[5].venue_url;
<<<<<<< HEAD

=======
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
            $("#title6").text(title6);
            $("#sixteen").text("Date/Time: " + startTime6);
            $("#seventeen").text("Venue: " + venue6);
            $("#eighteen").text("Address: " + address6);
<<<<<<< HEAD

            var f = $("<a>Go to Website</a>");
            f.attr("href", venueSite6);

            $("#f").append(f);


=======
            var f = $("<a>Go to Website</a>");
            f.attr("href", venueSite6);
            $("#f").append(f);
>>>>>>> ed6bb53d1e4faa9718f2bd3f424a0a601adca77b
        });
};
displayInfo();
window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");
    navigator.geolocation.getCurrentPosition = function (success, failure) {
        success({
            coords: {
                latitude: 35.2271,
                longitude: 80.8431,
            }, timestamp: Date.now()
        });
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "http://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/b49da12cb5042bef75af1a465390acf6/37.8267,-122.4233`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary } = data.currently;
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timeZone;
                    let celsius = (temperature - 32) * (5 / 9);
                })
        });
    } else {
        h1.textContent = "Please Enable Location"
    }
});