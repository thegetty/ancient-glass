import L from "leaflet"
import { geojsonFeature } from "./geojson.js"

import 'leaflet/dist/leaflet.css'

const map = L.map('leafletmap').setView([42.8, 22.6], 5);

L.tileLayer('https://cawm.lib.uiowa.edu/tiles/{z}/{x}/{y}.png', {
    maxZoom: 6,
    attribution: '&copy; <a href="">Ancient World Mapping Center</a>'
}).addTo(map);

// https://gist.github.com/geog4046instructor/80ee78db60862ede74eacba220809b64
// replace Leaflet's default blue marker with a custom icon
// function createCustomIcon (feature, latlng) {
//   let myIcon = L.icon({
//     iconUrl: 'marker.png',
//     iconSize:     [30, 55], // width and height of the image in pixels
//     iconAnchor:   [15, 55], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, -60] // point from which the popup should open relative to the iconAnchor
//   })
//   return L.marker(latlng, { icon: myIcon })
// }

// https://savaslabs.com/blog/mapping-external-geojson-data
L.geoJSON(geojsonFeature, {
  onEachFeature: function(feature, layer) {
    const address = feature.properties.address ? `<strong>${feature.properties.address}</strong>` : ''
    const description = feature.properties.description ? `<br />${feature.properties.description}` : ''
    const popupText = `
      ${address}
      ${description}
    `
    layer.bindPopup(popupText); },
  // pointToLayer: createCustomIcon
}).addTo(map);