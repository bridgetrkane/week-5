/* =====================
Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

$(document).ready(function() {

  $('#button').click(function() {

    $('*').prop('disabled',false);

    var inputs = {
      url: $('#text-input1').val(),
      lat: $('#text-input2').val(),
      lon: $('#text-input3').val()
    };

    var downloadData = $.ajax(inputs.url);

    var parseData = function(x1) {
      return JSON.parse(x1);
    };

    var makeMarkers = function(x2) {
      return _.map(x2, function(x) {
        return L.marker([x.LAT,x.LONG_]).bindPopup(x.NAME);
      });
    };

    var plotMarkers = function(x3) {
      _.each(x3, function(y) {
        y.addTo(map);
      });
    };

downloadData.done(function(data) {
  var parsed = parseData(data);
  console.log('parsed', parsed);
  var markers = makeMarkers(parsed);
  console.log('markers', markers);
  plotMarkers(markers);
});
});
});

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
