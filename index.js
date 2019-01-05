var view = new ol.View({
  center: ol.proj.fromLonLat([121, 23.5]),
  // minZoom: 7.2,
  zoom: 7.5
})

var raster = new ol.layer.Tile({
  source: new ol.source.XYZ({
    crossOrigin: 'anonymous',
    url: 'https://mt{0-3}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
  }),
})

var vector = new ol.layer.Vector({
  renderMode: 'image',
  source: new ol.source.Vector({
    url: 'https://raw.githubusercontent.com/Bourbon0212/Diana-Visualization/master/assets/twCounty.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#c7daf3',
      width: 1
    }),
  }),
})

var pointLayer = new ol.layer.Vector({});


//generate map
var map = new ol.Map({
  target: 'map',
  layers: [raster, vector, pointLayer],
  view: view
});

//---------------------------------------------
$(function() {

  // Failed to connect
  if (navigator.onLine) {
    console.log('online');
  } else {
    console.log('offline');
    var network = document.getElementById("network");
    network.style.visibility = 'visible';
  }
})
