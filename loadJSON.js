


function villVisual(items) {
  console.log(items);

  for(i in items["features"]){
    //console.log(items.features.i.geometry.coordinate.length);
    for(j in items["features"][i]['geometry']['coordinates'][0]){
      // console.log(ol.proj.fromLonLat(items["features"][i]['geometry']['coordinates'][0][j]));
      items["features"][i]['geometry']['coordinates'][0][j] = ol.proj.fromLonLat(items["features"][i]['geometry']['coordinates'][0][j]);
    }
    //items['features'][i]['geometry']['coordinates'] = Taipei;
    // items['features'][i]['geometry']['type'] = "Point";
    //console.log(items['features'][i]["properties"]["COUNTYNAME"]);
    if (items['features'][i]["properties"]["COUNTYNAME"] != featureName){
      //console.log(items['features'][i]["properties"]["VILLNAME"]);
      delete items['features'][i];
    }
  }


  items["features"] = Object.values(items["features"])

  map.removeLayer(vector);
  vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(items)
  });

  villLayer = new ol.layer.Vector({
    source: vectorSource
  });

  map.addLayer(villLayer);

  //vectorSource.addFeature(new ol.Feature((new ol.format.GeoJSON()).readFeatures(items)));


  // box = [[]];
  // for(i in items["features"]){
  //   //console.log(items['features'][i]["properties"]['coordinates']);
  //   box[0].push(items['features'][i]["geometry"]['coordinates']);
  // }
  // //console.log(box);
  //
  //
  // var thing = new ol.geom.Vector(box);
  // //console.log(thing);
  //
  // var featurething = new ol.Feature({
  //     name: "Thing",
  //     geometry: thing
  // });

  // vectorSource.addFeature();
}
