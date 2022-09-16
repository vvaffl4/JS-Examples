var weather_widget = (function ($) {

    let init, _getForecast, _updateDOM;

    _updateDOM = function (data) {
        console.log('updating DOM');

        console.log(data);

        $('div').append(JSON.stringify(data));
    };

    _getForecast = function () {
        $.ajax({ 
            url: 'https://localhost:44367/game',
            headers: {
                "Access-Control-Request-Headers": "*",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMThiZTljMC1hYTY1LTRhZjgtYmQxNy0wMGJkOTM0NGU1NzUiLCJqdGkiOiJmOGM2MzEyZi01YTlkLTRlZGItYmFkZi0wM2Q5N2E0YTk2OTUiLCJpZCI6ImExOGJlOWMwLWFhNjUtNGFmOC1iZDE3LTAwYmQ5MzQ0ZTU3NSIsInVzZXJuYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsImV4cCI6MTY2MzE0MjE1NSwiaXNzIjoiaHR0cHM6Ly9teXNpdGUuY29tIiwiYXVkIjoiaHR0cHM6Ly9teXNpdGUuY29tIn0.zypcw6Jbn7lZVNLTHXXvhNjPaHwsn6e3SyzjhS1TALA"
            }
        }
            , _updateDOM);
    };

    init = function () {
        setInterval(_getForecast, 5000);
    };

    return {init: init};
}(jQuery));

