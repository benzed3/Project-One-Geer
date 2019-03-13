function displayInfo() {

    $("button").on("click", function (event) {

        event.preventDefault();

        var queryURL = "http://api.eventful.com/docs/events/search?...&api_key=ZM6QM7Wzsb7rrLZD&location=Charlotte&date=This+Week&within=15&sort_order=popularity&page_size=6";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(queryURL);

            });
    });

};

displayInfo();

