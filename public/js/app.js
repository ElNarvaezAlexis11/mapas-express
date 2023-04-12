document.addEventListener('DOMContentLoaded', event => {
    const locations = document.getElementById('container-map');
    const data = JSON.parse(locations.dataset.locations ?? []);

    if (data == null || data == undefined || data.length == 0) {
        let title = document.createElement('h1');
        title.className = "m-auto";
        title.innerText = "Nothing for mapping";
        locations.innerHTML = "";
        locations.appendChild(title);
        return;
    }

    locations.innerHTML = "";
    const newData = data.map(location => ({
        lat: location.INMUEBLE_LATITUD,
        lng: location.INMUEBLE_LONGITUD
    }));
    const map = new google.maps.Map(locations, {
        zoom: 3,
        center: { lat: 17.0812951, lng: -96.770751 },
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = newData.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });

        marker.addListener("click", () => {
            infoWindow.setContent(label);
            infoWindow.open(map, marker);
        });
        return marker;
    });
    //Creamos el closter para marcarlos 
    const markerCluster = new markerClusterer.MarkerClusterer({
        markers,
        map,
    });
});