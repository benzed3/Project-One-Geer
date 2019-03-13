function displayInfo() {

    $("button").on("click", function (event) {

        event.preventDefault();

        var queryURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=ZM6QM7Wzsb7rrLZD&keywords=books&location=Charlotte&date=This+Week&within=15";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(JSON.parse(response));

            });
    });

};

displayInfo();

