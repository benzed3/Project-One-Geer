function displayInfo() {

    $("button").on("click", function (event) {

        event.preventDefault();

        var trial = $(".form-control").val().trim();

        var queryURL = "http://api.eventful.com/docs/events/new?q=" + trial + "&api_key=ZM6QM7Wzsb7rrLZD";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {


                var results = response;

                $(".card").append(results);

                console.log(response);
            });


    })
};
displayInfo();


