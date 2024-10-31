import L from "leaflet"
import { geojsonFeature } from "./geojson.js"

import 'leaflet/dist/leaflet.css'

const map = L.map('leafletmap').setView([42.8, 22.6], 5);

L.tileLayer('https://cawm.lib.uiowa.edu/tiles/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 5,
    attribution: '&copy; <a href="">Ancient World Mapping Center</a>'
}).addTo(map);

// https://gist.github.com/geog4046instructor/80ee78db60862ede74eacba220809b64
// replace Leaflet's default blue marker with a custom icon
function createCustomIcon (feature, latlng) {
  var type = feature.properties.featureType

  let iconType = ''
  if (type == 'city') {
    iconType = '/_assets/images/icons/marker-yellow.png'
  } else {
    iconType = '/_assets/images/icons/marker-blank.png'
  }

  var myIcon = L.icon({
    iconUrl:      iconType,
    iconSize:     [30, 55], // width and height of the image in pixels
    iconAnchor:   [15, 55], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
  })
  return L.marker(latlng, { icon: myIcon })
}

// https://savaslabs.com/blog/mapping-external-geojson-data
L.geoJSON(geojsonFeature, {
  onEachFeature: function(feature, layer) {
    const name = feature.properties.name ? `${feature.properties.name}` : ''
    const type = feature.properties.featureType ? `${feature.properties.featureType}` : ''
    const tgn = feature.properties.tgnID ? `${feature.properties.tgnID}` : '' 
    const pleiades = feature.properties.pleiadesID ? `${feature.properties.pleiadesID}` : ''
    
    const labelText = type == 'region' || type == 'sea' 
      ? `<span style="white-space: break-spaces;">${name}</span>`
      : `${name}`
    layer.bindTooltip(labelText, { permanent: true, className: type, direction: 'center', offset: [0, -30] });

    console.log("labelText :: " + labelText)
    console.log("labelText.length :: " + labelText.length)

    const tgnLink = tgn ? `<a href="https://vocab.getty.edu/page/tgn/${tgn}" target="_blank">Getty TGN ID: ${tgn}</a>` : ''
    const pleiadesLink = pleiades ? `<a href="https://pleiades.stoa.org/places/${pleiades}" target="_blank">Pleiades ID: ${pleiades}</a>` : ''

    const popupText = `
      <strong>${name}</strong>
      ${tgnLink}
      ${pleiadesLink}
    `
    layer.bindPopup(popupText); },
  pointToLayer: createCustomIcon
}).addTo(map);