
var drawCheck;
function callDraw(vectorSource){
  if(drawCheck == 1){
    map.removeLayer(my_layer1);
  }

  var sel1 = $('#layer1').val();
  if(sel1 == 'none'){
    return;
  }

  if (sel1 == 7){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle7(feature, resolution);
        }
    });
  }

  else if(sel1 == 8){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle8(feature, resolution);
        }
    });
  }

  else if(sel1 == 9){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle9(feature, resolution);
        }
    });
  }

  else if(sel1 == 10){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle10(feature, resolution);
        }
    });
  }

  else if(sel1 == 11){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle11(feature, resolution);
        }
    });
  }

  else if(sel1 == 12){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle12(feature, resolution);
        }
    });
  }

  else if(sel1 == 13){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle13(feature, resolution);
        }
    });
  }

  else if(sel1 == 14){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle14(feature, resolution);
        }
    });
  }

  else if(sel1 == 15){
    var my_layer1 = new ol.layer.Vector({
        source:new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified_2.geojson',
        format: new ol.format.GeoJSON()
      }),
        style: function (feature, resolution) {
            return getStyle15(feature, resolution);
        }
    });
  }

  map.addLayer(my_layer1);
  drawCheck = 1;
}
