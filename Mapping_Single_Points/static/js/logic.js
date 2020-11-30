// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Add a circle to the map
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);