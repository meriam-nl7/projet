var wms_layers = [];

var format_medenineshp_0 = new ol.format.GeoJSON();
var features_medenineshp_0 = format_medenineshp_0.readFeatures(json_medenineshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medenineshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medenineshp_0.addFeatures(features_medenineshp_0);
var lyr_medenineshp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medenineshp_0, 
                style: style_medenineshp_0,
                interactive: true,
                title: '<img src="styles/legend/medenineshp_0.png" /> medenineshp'
            });
var format_data_3636_1 = new ol.format.GeoJSON();
var features_data_3636_1 = format_data_3636_1.readFeatures(json_data_3636_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_3636_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_3636_1.addFeatures(features_data_3636_1);
var lyr_data_3636_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data_3636_1, 
                style: style_data_3636_1,
                interactive: true,
                title: '<img src="styles/legend/data_3636_1.png" /> data_3636'
            });

lyr_medenineshp_0.setVisible(true);lyr_data_3636_1.setVisible(true);
var layersList = [lyr_medenineshp_0,lyr_data_3636_1];
lyr_medenineshp_0.set('fieldAliases', {'id': 'id', 'id_1': 'id_1', 'name_1': 'name_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_data_3636_1.set('fieldAliases', {'identdata': 'identdata', 'identdscpt': 'identdscpt', 'nom': 'nom', 'easting': 'easting', 'northing': 'northing', 'zonel': 'zonel', 'x_stt': 'x_stt', 'y_stt': 'y_stt', 'xign': 'xign', 'yign': 'yign', 'x_ntt': 'x_ntt', 'y_ntt': 'y_ntt', 'xwgs84': 'xwgs84', 'yggs84': 'yggs84', 'nmf': 'nmf', 'nom_feuille': 'nom_feuille', 'etat': 'etat', 'ville': 'ville', });
lyr_medenineshp_0.set('fieldImages', {'id': 'TextEdit', 'id_1': 'TextEdit', 'name_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_data_3636_1.set('fieldImages', {'identdata': 'Range', 'identdscpt': 'Range', 'nom': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'zonel': 'TextEdit', 'x_stt': 'TextEdit', 'y_stt': 'TextEdit', 'xign': 'TextEdit', 'yign': 'TextEdit', 'x_ntt': 'TextEdit', 'y_ntt': 'TextEdit', 'xwgs84': 'TextEdit', 'yggs84': 'TextEdit', 'nmf': 'Range', 'nom_feuille': 'TextEdit', 'etat': 'TextEdit', 'ville': 'TextEdit', });
lyr_medenineshp_0.set('fieldLabels', {'id': 'no label', 'id_1': 'no label', 'name_1': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_data_3636_1.set('fieldLabels', {'identdata': 'no label', 'identdscpt': 'no label', 'nom': 'no label', 'easting': 'no label', 'northing': 'no label', 'zonel': 'no label', 'x_stt': 'no label', 'y_stt': 'no label', 'xign': 'no label', 'yign': 'no label', 'x_ntt': 'no label', 'y_ntt': 'no label', 'xwgs84': 'no label', 'yggs84': 'no label', 'nmf': 'no label', 'nom_feuille': 'no label', 'etat': 'no label', 'ville': 'no label', });
lyr_data_3636_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});