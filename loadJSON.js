

var villVisualCheck;
function villVisual(items) {
  // console.log(123);

  // console.log(items);
  villVisualCheck = 0;
  var count = 0;
  var new_items = {"type": "FeatureCollection", "name": "TW_Vill_simplified", "crs": {"properties":{"name": "urn:ogc:def:crs:EPSG::3824"}, "type": "name"}, "features":{}};
  // console.log(featureName);

  for(i in items["features"]){

    for(j in items["features"][i]['geometry']['coordinates'][0]){
      items["features"][i]['geometry']['coordinates'][0][j] = ol.proj.fromLonLat(items["features"][i]['geometry']['coordinates'][0][j]);
    }


    if (items['features'][i]["properties"]["COUNTYNAME"] == featureName){
      //console.log(items['features'][i]["properties"]["VILLNAME"]);
      new_items['features'][count] = items['features'][i];
      count = count + 1;
    }

  }

  new_items["features"] = Object.values(new_items["features"])


  // console.log(new_items);
  // vectorSource.addFeature(new ol.Feature((new ol.format.GeoJSON()).readFeatures(new_items)))
  // features = new ol.Feature()
  vectorSource.clear();

  var feature = (new ol.format.GeoJSON()).readFeatures(new_items);
  console.log(feature);

  vectorSource = new ol.source.Vector({
    features:feature
  });
  // console.log(vectorSource);

  // var villLayer = new ol.layer.Vector({
  //   source: vectorSource
  // });

  // console.log(villLayer);
  // console.log(vectorSource);
  villLayer.setSource(vectorSource);

  // new_items.features = {};
  // console.log(new_items);
  villVisualCheck = 1;
}
