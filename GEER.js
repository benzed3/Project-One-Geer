function displayInfo() {

    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=ZM6QM7Wzsb7rrLZD&keywords=books&location=Charlotte&date=This+Week&within=15&sort_order=popularity&page_size=6&page_number=1";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var jsonResponse = JSON.parse(response);

            console.log(jsonResponse.events);

            var title = jsonResponse.events.event[0].title;
            var startTime = jsonResponse.events.event[0].start_time;
            var venue = jsonResponse.events.event[0].venue_name;
            var address = jsonResponse.events.event[0].venue_address;
            var venueSite = jsonResponse.events.event[0].venue_url;

            $(".card-title").text(title);
            $(".list-group-item").text("Date/Time: " + startTime);
            $("#two").text("Venue: " + venue);
            $("#three").text("Address: " + address);

            var a = $("<a>");
            a.attr("href", venueSite);

            $(".card-body").append(a);

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

