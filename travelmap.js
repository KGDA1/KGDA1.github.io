//21.4691° N, 78.6569° W
var coordinates = [21.4691, -78.6569];

let map = L.map("map", {
center: coordinates,
  zoom:10
});   

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
