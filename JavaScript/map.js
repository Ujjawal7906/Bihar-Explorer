
const map = L.map('map').setView([25.5941, 85.1376], 7);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const places = [
    {
        name:"Mahabodhi Temple",
        lat:24.6951,
        lng:84.9913
    },
    {
        name:"Nalanda University",
        lat:25.1360,
        lng:85.4440
    },
    {
        name:"Rajgir",
        lat:25.0173,
        lng:85.4245
    },
    {
        name:"Golghar",
        lat:25.6178,
        lng:85.1416
    }
];

places.forEach(place=>{
    L.marker([place.lat, place.lng])
    .addTo(map)
    .bindPopup(`<b>${place.name}</b>`);
    
});