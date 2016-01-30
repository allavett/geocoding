/**
 * Converts given address to geocode using Google Maps Geocoding API
 * https://developers.google.com/maps/documentation/geocoding/intro
 *
 * @version 0.1
 * @author Allar Vendla <allarvendla@gmail.com>
 */

var inputAddress = window.location.href.match(/address=(.*)/);
$(document).ready(function () {
    if (inputAddress !== null && inputAddress[1] !== "") {
        var jsonFeed = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + inputAddress[1];
        $.getJSON(jsonFeed, function (data) {
            if (data.status !== "ZERO_RESULTS"){
                var address = data.results[0].formatted_address;
                var latitude = data.results[0].geometry.location.lat;
                var longitude = data.results[0].geometry.location.lng;
                $('#output').append(address + "<br />" + "Latitude: " + latitude + "<br />" + "Longitude: " + longitude);
            } else {
                $('#output').append(inputAddress[1].replace(/\+/g, " ") + " <--: This is not a valid address!");
            }
        });
    } else {
        $('#output').append("Insert an address");
    }
});
