
var drawCheck1;
function callDraw1(vectorSource){
  if(drawCheck1 == 1){
    map.removeLayer(my_layer1);
  }

  // if(vecterSource == )

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
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle8(feature, resolution);
        }
    });
  }

  else if(sel1 == 9){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle9(feature, resolution);
        }
    });
  }

  else if(sel1 == 10){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle10(feature, resolution);
        }
    });
  }

  else if(sel1 == 11){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle11(feature, resolution);
        }
    });
  }

  else if(sel1 == 12){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle12(feature, resolution);
        }
    });
  }

  else if(sel1 == 13){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle13(feature, resolution);
        }
    });
  }

  else if(sel1 == 14){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle14(feature, resolution);
        }
    });
  }

  else if(sel1 == 15){
    var my_layer1 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle15(feature, resolution);
        }
    });
  }

  map.addLayer(my_layer1);
  localStorage.clear();
  drawCheck1 = 1;
}

var drawCheck2;
function callDraw2(vectorSource){
  console.log(123);
  if(drawCheck2 == 1){
    map.removeLayer(my_layer2);
  }

  var sel2 = $('#overlay').val();
  if(sel2 == 'none'){
    return;
  }

  if (sel2 == 7){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle7(feature, resolution);
        }
    });
  }

  else if(sel2 == 8){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle8(feature, resolution);
        }
    });
  }

  else if(sel2 == 9){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle9(feature, resolution);
        }
    });
  }

  else if(sel2 == 10){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle10(feature, resolution);
        }
    });
  }

  else if(sel2 == 11){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle11(feature, resolution);
        }
    });
  }

  else if(sel2 == 12){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle12(feature, resolution);
        }
    });
  }

  else if(sel2 == 13){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle13(feature, resolution);
        }
    });
  }

  else if(sel2 == 14){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle14(feature, resolution);
        }
    });
  }

  else if(sel2 == 15){
    var my_layer2 = new ol.layer.Vector({
        source:vectorSource,
        style: function (feature, resolution) {
            return getStyle15(feature, resolution);
        }
    });
  }
  map.addLayer(my_layer2);
  localStorage.clear();
  drawCheck2 = 1;
}
