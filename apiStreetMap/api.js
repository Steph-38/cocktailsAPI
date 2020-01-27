
// Fonction d'initialisation de la carte
function initMap(userlat, userlong) {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    let macarte = L.map('map').setView([userlat, userlong], 14);
    // Récupération de la carte sur openstreetmap avec Leaflet
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    // Ajout du marqueur sur la carte
    let marker = L.marker([userlat, userlong]).addTo(macarte);
}

// Fonction de géolocalisation via l'ip du navigateur
function geoloc() {
    let geoSuccess = function(position) { // Ceci s'exécutera si l'utilisateur accepte la géolocalisation
        startPos = position;
        let userlat = startPos.coords.latitude;
        let userlong = startPos.coords.longitude;
        console.log("lat: "+userlat+" - lon: "+userlong);

        initMap(userlat, userlong);
    };
    let geoFail = function(){ // Ceci s'exécutera si l'utilisateur refuse la géolocalisation
        alert("la géolocalisation est obligatoire pour l'appel API");
    };
    // La ligne ci-dessous cherche la position de l'utilisateur et déclenchera la demande d'accord
    navigator.geolocation.getCurrentPosition(geoSuccess,geoFail); 
}

geoloc();

