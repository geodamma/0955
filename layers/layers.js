ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([169287.782005, 2696115.059031, 197407.746804, 2715213.381218]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_4_1 = new ol.format.GeoJSON();
var features_4_1 = format_4_1.readFeatures(json_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_1.addFeatures(features_4_1);
var lyr_4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_1, 
                style: style_4_1,
                interactive: true,
                title: '<img src="styles/legend/4_1.png" /> 集水區4'
            });
var format_4_utf8_2 = new ol.format.GeoJSON();
var features_4_utf8_2 = format_4_utf8_2.readFeatures(json_4_utf8_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_4_utf8_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_utf8_2.addFeatures(features_4_utf8_2);
var lyr_4_utf8_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_utf8_2, 
                style: style_4_utf8_2,
                interactive: true,
                title: '<img src="styles/legend/4_utf8_2.png" /> 集水區4_utf8'
            });
var format_43_3 = new ol.format.GeoJSON();
var features_43_3 = format_43_3.readFeatures(json_43_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_43_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43_3.addFeatures(features_43_3);
var lyr_43_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43_3, 
                style: style_43_3,
                interactive: true,
                title: '<img src="styles/legend/43_3.png" /> 聚落43'
            });
var format_43_utf8_4 = new ol.format.GeoJSON();
var features_43_utf8_4 = format_43_utf8_4.readFeatures(json_43_utf8_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_43_utf8_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43_utf8_4.addFeatures(features_43_utf8_4);
var lyr_43_utf8_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43_utf8_4, 
                style: style_43_utf8_4,
                interactive: true,
                title: '<img src="styles/legend/43_utf8_4.png" /> 聚落43_utf8'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_4_1.setVisible(true);lyr_4_utf8_2.setVisible(true);lyr_43_3.setVisible(true);lyr_43_utf8_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_4_1,lyr_4_utf8_2,lyr_43_3,lyr_43_utf8_4];
lyr_4_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_4_utf8_2.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_43_3.set('fieldAliases', {'分區簡': '分區簡', });
lyr_43_utf8_4.set('fieldAliases', {'分區簡': '分區簡', });
lyr_4_1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', });
lyr_4_utf8_2.set('fieldImages', {'ID': '', 'VALUE': '', 'NAME': '', });
lyr_43_3.set('fieldImages', {'分區簡': '', });
lyr_43_utf8_4.set('fieldImages', {'分區簡': 'TextEdit', });
lyr_4_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'header label', 'NAME': 'header label', });
lyr_4_utf8_2.set('fieldLabels', {'ID': 'header label', 'VALUE': 'header label', 'NAME': 'header label', });
lyr_43_3.set('fieldLabels', {'分區簡': 'header label', });
lyr_43_utf8_4.set('fieldLabels', {'分區簡': 'no label', });
lyr_43_utf8_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});