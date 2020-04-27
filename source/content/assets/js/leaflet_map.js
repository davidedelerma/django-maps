window.addEventListener("map:init", function (e) {
    var detail = e.detail;
    var marker = L.marker([40.8345, 14.3447]).addTo(detail.map);
    marker.bindPopup("That's my house!!!!");
}, false);