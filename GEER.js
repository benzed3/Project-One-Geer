function displayInfo() {

    $("button").on("click", function (event) {

        event.preventDefault();

        var queryURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=ZM6QM7Wzsb7rrLZD&keywords=books&location=Charlotte&date=This+Week&within=15&sort_order=popularity&page_size=6&page_number=1";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(JSON.parse(response));

                var events;



            });
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

    navigator.geolocation.getCurrentPosition = function(success, failure) { 
        success({ coords: { 
            latitude: 35.2271, 
            longitude: 80.8431,
    
        }, timestamp: Date.now() }); 
    } 

    if(navigator.geolocation) {
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
                const {temperature, summary } = data.currently;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timeZone;

                let celsius = (temperature - 32) * (5 / 9);

               
                })

            });
        

       

    }else{
        h1.textContent = "Please Enable Location"
    }
});

