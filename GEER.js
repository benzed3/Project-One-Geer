function displayInfo() {

    $(".list-group-item").empty();

    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=ZM6QM7Wzsb7rrLZD&keywords=books&location=Charlotte&date=This+Week&within=15&sort_order=popularity&page_size=6&page_number=1";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var jsonResponse = JSON.parse(response);

            console.log(jsonResponse.events);

            var eventImage = $("<img>");

            eventImage.attr("src", jsonResponse.events.event[0].image.small);
            eventImage.attr("src", jsonResponse.events.event[0].performers.performer);
            eventImage.attr("src", jsonResponse.events.event[0].description)

            $(".card-image-top").append(eventImage);
            $(".list-group-item").text(JSON.stringify(eventImage));
            $(".card-text").text(JSON.stringify(eventImage));

        });
};

displayInfo();

