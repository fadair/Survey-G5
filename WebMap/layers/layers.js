ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([257204.582029, 662076.202686, 260981.629718, 665202.197350]);
var wms_layers = [];

var format_land_0 = new ol.format.GeoJSON();
var features_land_0 = format_land_0.readFeatures(json_land_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_land_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_land_0.addFeatures(features_land_0);
var lyr_land_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_land_0,
maxResolution:28004.466152261964,
 
                style: style_land_0,
                popuplayertitle: 'land',
                interactive: false,
                title: '<img src="styles/legend/land_0.png" /> land'
            });
var format_urban_areas_1 = new ol.format.GeoJSON();
var features_urban_areas_1 = format_urban_areas_1.readFeatures(json_urban_areas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_urban_areas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urban_areas_1.addFeatures(features_urban_areas_1);
var lyr_urban_areas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_urban_areas_1,
maxResolution:14002.233076130982,
 minResolution:22.403572921809573,

                style: style_urban_areas_1,
                popuplayertitle: 'urban_areas',
                interactive: false,
    title: 'urban_areas<br />\
    <img src="styles/legend/urban_areas_1_0.png" /> National<br />\
    <img src="styles/legend/urban_areas_1_1.png" /> Regional<br />' });
var format_sites_2 = new ol.format.GeoJSON();
var features_sites_2 = format_sites_2.readFeatures(json_sites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_sites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sites_2.addFeatures(features_sites_2);
var lyr_sites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sites_2,
maxResolution:44.807145843619146,
 minResolution:0.00028004466152261963,

                style: style_sites_2,
                popuplayertitle: 'sites',
                interactive: false,
    title: 'sites<br />\
    <img src="styles/legend/sites_2_0.png" /> Air Transport<br />\
    <img src="styles/legend/sites_2_1.png" /> Education<br />\
    <img src="styles/legend/sites_2_2.png" /> Medical Care<br />\
    <img src="styles/legend/sites_2_3.png" /> Road Transport<br />\
    <img src="styles/legend/sites_2_4.png" /> Water Transport<br />' });
var format_greenspace_3 = new ol.format.GeoJSON();
var features_greenspace_3 = format_greenspace_3.readFeatures(json_greenspace_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_greenspace_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_greenspace_3.addFeatures(features_greenspace_3);
var lyr_greenspace_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_greenspace_3,
maxResolution:44.807145843619146,
 minResolution:0.00028004466152261963,

                style: style_greenspace_3,
                popuplayertitle: 'greenspace',
                interactive: false,
                title: '<img src="styles/legend/greenspace_3.png" /> greenspace'
            });
var format_woodland_4 = new ol.format.GeoJSON();
var features_woodland_4 = format_woodland_4.readFeatures(json_woodland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_woodland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_woodland_4.addFeatures(features_woodland_4);
var lyr_woodland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_woodland_4,
maxResolution:560.0893230452392,
 minResolution:0.00028004466152261963,

                style: style_woodland_4,
                popuplayertitle: 'woodland',
                interactive: false,
    title: 'woodland<br />\
    <img src="styles/legend/woodland_4_0.png" /> National<br />\
    <img src="styles/legend/woodland_4_1.png" /> Regional<br />\
    <img src="styles/legend/woodland_4_2.png" /> Local<br />' });
var format_contours_5 = new ol.format.GeoJSON();
var features_contours_5 = format_contours_5.readFeatures(json_contours_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_contours_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_5.addFeatures(features_contours_5);
var lyr_contours_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contours_5,
maxResolution:89.61429168723829,
 minResolution:0.00028004466152261963,

                style: style_contours_5,
                popuplayertitle: 'contours',
                interactive: false,
    title: 'contours<br />\
    <img src="styles/legend/contours_5_0.png" /> Index<br />\
    <img src="styles/legend/contours_5_1.png" /> Normal<br />' });
var format_district_buildings_6 = new ol.format.GeoJSON();
var features_district_buildings_6 = format_district_buildings_6.readFeatures(json_district_buildings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_district_buildings_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_buildings_6.addFeatures(features_district_buildings_6);
var lyr_district_buildings_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_district_buildings_6,
maxResolution:22.403572921809573,
 minResolution:5.600893230452393,

                style: style_district_buildings_6,
                popuplayertitle: 'district_buildings',
                interactive: false,
                title: '<img src="styles/legend/district_buildings_6.png" /> district_buildings'
            });
var format_local_buildings_7 = new ol.format.GeoJSON();
var features_local_buildings_7 = format_local_buildings_7.readFeatures(json_local_buildings_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_local_buildings_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_local_buildings_7.addFeatures(features_local_buildings_7);
var lyr_local_buildings_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_local_buildings_7,
maxResolution:5.600893230452393,
 minResolution:0.00028004466152261963,

                style: style_local_buildings_7,
                popuplayertitle: 'local_buildings',
                interactive: false,
                title: '<img src="styles/legend/local_buildings_7.png" /> local_buildings'
            });
var format_surfacewater_8 = new ol.format.GeoJSON();
var features_surfacewater_8 = format_surfacewater_8.readFeatures(json_surfacewater_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_surfacewater_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surfacewater_8.addFeatures(features_surfacewater_8);
var lyr_surfacewater_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_surfacewater_8,
maxResolution:1120.1786460904784,
 minResolution:0.00028004466152261963,

                style: style_surfacewater_8,
                popuplayertitle: 'surfacewater',
                interactive: false,
    title: 'surfacewater<br />\
    <img src="styles/legend/surfacewater_8_0.png" /> National<br />\
    <img src="styles/legend/surfacewater_8_1.png" /> Regional<br />\
    <img src="styles/legend/surfacewater_8_2.png" /> Local<br />' });
var format_foreshore_9 = new ol.format.GeoJSON();
var features_foreshore_9 = format_foreshore_9.readFeatures(json_foreshore_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_foreshore_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_foreshore_9.addFeatures(features_foreshore_9);
var lyr_foreshore_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_foreshore_9,
maxResolution:89.61429168723829,
 minResolution:0.00028004466152261963,

                style: style_foreshore_9,
                popuplayertitle: 'foreshore',
                interactive: false,
                title: '<img src="styles/legend/foreshore_9.png" /> foreshore'
            });
var format_waterlines_10 = new ol.format.GeoJSON();
var features_waterlines_10 = format_waterlines_10.readFeatures(json_waterlines_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_waterlines_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterlines_10.addFeatures(features_waterlines_10);
var lyr_waterlines_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterlines_10,
maxResolution:280.0446615226196,
 minResolution:0.00028004466152261963,

                style: style_waterlines_10,
                popuplayertitle: 'waterlines',
                interactive: false,
                title: '<img src="styles/legend/waterlines_10.png" /> waterlines'
            });
var format_roads_local_11 = new ol.format.GeoJSON();
var features_roads_local_11 = format_roads_local_11.readFeatures(json_roads_local_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_roads_local_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_local_11.addFeatures(features_roads_local_11);
var lyr_roads_local_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_local_11,
maxResolution:56.00893230452392,
 
                style: style_roads_local_11,
                popuplayertitle: 'roads_local',
                interactive: false,
                title: '<img src="styles/legend/roads_local_11.png" /> roads_local'
            });
var format_roads_regional_12 = new ol.format.GeoJSON();
var features_roads_regional_12 = format_roads_regional_12.readFeatures(json_roads_regional_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_roads_regional_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_regional_12.addFeatures(features_roads_regional_12);
var lyr_roads_regional_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_regional_12,
maxResolution:280.0446615226196,
 minResolution:0.00028004466152261963,

                style: style_roads_regional_12,
                popuplayertitle: 'roads_regional',
                interactive: false,
                title: '<img src="styles/legend/roads_regional_12.png" /> roads_regional'
            });
var format_roads_national_13 = new ol.format.GeoJSON();
var features_roads_national_13 = format_roads_national_13.readFeatures(json_roads_national_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_roads_national_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_national_13.addFeatures(features_roads_national_13);
var lyr_roads_national_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_national_13,
maxResolution:1400.2233076130983,
 minResolution:0.00028004466152261963,

                style: style_roads_national_13,
                popuplayertitle: 'roads_national',
                interactive: false,
                title: '<img src="styles/legend/roads_national_13.png" /> roads_national'
            });
var format_rail_14 = new ol.format.GeoJSON();
var features_rail_14 = format_rail_14.readFeatures(json_rail_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_rail_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rail_14.addFeatures(features_rail_14);
var lyr_rail_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rail_14,
maxResolution:44.807145843619146,
 minResolution:0.00028004466152261963,

                style: style_rail_14,
                popuplayertitle: 'rail',
                interactive: false,
    title: 'rail<br />\
    <img src="styles/legend/rail_14_0.png" /> Multi Track<br />\
    <img src="styles/legend/rail_14_1.png" /> Narrow Gauge<br />\
    <img src="styles/legend/rail_14_2.png" /> Single Track<br />\
    <img src="styles/legend/rail_14_3.png" /> Tunnel<br />' });
var format_railway_stations_15 = new ol.format.GeoJSON();
var features_railway_stations_15 = format_railway_stations_15.readFeatures(json_railway_stations_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_railway_stations_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_stations_15.addFeatures(features_railway_stations_15);
var lyr_railway_stations_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_stations_15,
maxResolution:0.5600893230452393,
 minResolution:0.00028004466152261963,

                style: style_railway_stations_15,
                popuplayertitle: 'railway_stations',
                interactive: false,
    title: 'railway_stations<br />\
    <img src="styles/legend/railway_stations_15_0.png" /> Light Rapid Transit Station<br />\
    <img src="styles/legend/railway_stations_15_1.png" /> Light Rapid Transit Station And London Underground Station<br />\
    <img src="styles/legend/railway_stations_15_2.png" /> Light Rapid Transit Station And Railway Station<br />\
    <img src="styles/legend/railway_stations_15_3.png" /> London Underground Station<br />\
    <img src="styles/legend/railway_stations_15_4.png" /> Railway Station<br />\
    <img src="styles/legend/railway_stations_15_5.png" /> Railway Station And London Underground Station<br />' });
var format_Postcode_16 = new ol.format.GeoJSON();
var features_Postcode_16 = format_Postcode_16.readFeatures(json_Postcode_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Postcode_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postcode_16.addFeatures(features_Postcode_16);
var lyr_Postcode_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postcode_16, 
                style: style_Postcode_16,
                popuplayertitle: 'Postcode',
                interactive: false,
                title: '<img src="styles/legend/Postcode_16.png" /> Postcode'
            });
var format_MapBorder_17 = new ol.format.GeoJSON();
var features_MapBorder_17 = format_MapBorder_17.readFeatures(json_MapBorder_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_MapBorder_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapBorder_17.addFeatures(features_MapBorder_17);
var lyr_MapBorder_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapBorder_17, 
                style: style_MapBorder_17,
                popuplayertitle: 'Map Border',
                interactive: false,
                title: '<img src="styles/legend/MapBorder_17.png" /> Map Border'
            });
var format_Survey_18 = new ol.format.GeoJSON();
var features_Survey_18 = format_Survey_18.readFeatures(json_Survey_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Survey_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey_18.addFeatures(features_Survey_18);
var lyr_Survey_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Survey_18, 
                style: style_Survey_18,
                popuplayertitle: 'Survey',
                interactive: true,
                title: '<img src="styles/legend/Survey_18.png" /> Survey'
            });
var group_OSZoomstackOutdoor = new ol.layer.Group({
                                layers: [lyr_land_0,lyr_urban_areas_1,lyr_sites_2,lyr_greenspace_3,lyr_woodland_4,lyr_contours_5,lyr_district_buildings_6,lyr_local_buildings_7,lyr_surfacewater_8,lyr_foreshore_9,lyr_waterlines_10,lyr_roads_local_11,lyr_roads_regional_12,lyr_roads_national_13,lyr_rail_14,lyr_railway_stations_15,],
                                fold: 'close',
                                title: 'OS Zoomstack Outdoor'});

lyr_land_0.setVisible(true);lyr_urban_areas_1.setVisible(true);lyr_sites_2.setVisible(true);lyr_greenspace_3.setVisible(true);lyr_woodland_4.setVisible(true);lyr_contours_5.setVisible(true);lyr_district_buildings_6.setVisible(true);lyr_local_buildings_7.setVisible(true);lyr_surfacewater_8.setVisible(true);lyr_foreshore_9.setVisible(true);lyr_waterlines_10.setVisible(true);lyr_roads_local_11.setVisible(true);lyr_roads_regional_12.setVisible(true);lyr_roads_national_13.setVisible(true);lyr_rail_14.setVisible(true);lyr_railway_stations_15.setVisible(true);lyr_Postcode_16.setVisible(false);lyr_MapBorder_17.setVisible(true);lyr_Survey_18.setVisible(true);
var layersList = [group_OSZoomstackOutdoor,lyr_Postcode_16,lyr_MapBorder_17,lyr_Survey_18];
lyr_land_0.set('fieldAliases', {'id': 'id', });
lyr_urban_areas_1.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_sites_2.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_greenspace_3.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_woodland_4.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_contours_5.set('fieldAliases', {'id': 'id', 'type': 'type', 'height': 'height', });
lyr_district_buildings_6.set('fieldAliases', {'id': 'id', });
lyr_local_buildings_7.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', });
lyr_surfacewater_8.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_foreshore_9.set('fieldAliases', {'id': 'id', });
lyr_waterlines_10.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_roads_local_11.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_roads_regional_12.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_roads_national_13.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_rail_14.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_railway_stations_15.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', });
lyr_Postcode_16.set('fieldAliases', {'fid': 'fid', 'District': 'District', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MapBorder_17.set('fieldAliases', {'fid': 'fid', 'District': 'District', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'width': 'width', 'height': 'height', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Survey_18.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Time': 'Time', 'Description': 'Description', 'Attachment': 'Attachment', });
lyr_land_0.set('fieldImages', {'id': 'TextEdit', });
lyr_urban_areas_1.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_sites_2.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_greenspace_3.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_woodland_4.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_contours_5.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'height': 'TextEdit', });
lyr_district_buildings_6.set('fieldImages', {'id': 'TextEdit', });
lyr_local_buildings_7.set('fieldImages', {'id': 'TextEdit', 'uuid': 'TextEdit', });
lyr_surfacewater_8.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_foreshore_9.set('fieldImages', {'id': 'TextEdit', });
lyr_waterlines_10.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_roads_local_11.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_roads_regional_12.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_roads_national_13.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_rail_14.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_railway_stations_15.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', });
lyr_Postcode_16.set('fieldImages', {'fid': 'TextEdit', 'District': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MapBorder_17.set('fieldImages', {'fid': 'TextEdit', 'District': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'width': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Survey_18.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Time': 'DateTime', 'Description': 'TextEdit', 'Attachment': 'ExternalResource', });
lyr_land_0.set('fieldLabels', {'id': 'no label', });
lyr_urban_areas_1.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_sites_2.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_greenspace_3.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_woodland_4.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_contours_5.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'height': 'no label', });
lyr_district_buildings_6.set('fieldLabels', {'id': 'hidden field', });
lyr_local_buildings_7.set('fieldLabels', {'id': 'no label', 'uuid': 'no label', });
lyr_surfacewater_8.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_foreshore_9.set('fieldLabels', {'id': 'no label', });
lyr_waterlines_10.set('fieldLabels', {'id': 'no label', 'type': 'inline label - visible with data', });
lyr_roads_local_11.set('fieldLabels', {'id': 'inline label - always visible', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_roads_regional_12.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_roads_national_13.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_rail_14.set('fieldLabels', {'id': 'inline label - always visible', 'type': 'no label', });
lyr_railway_stations_15.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name': 'no label', });
lyr_Postcode_16.set('fieldLabels', {'fid': 'no label', 'District': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MapBorder_17.set('fieldLabels', {'fid': 'no label', 'District': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'width': 'no label', 'height': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Survey_18.set('fieldLabels', {'fid': 'hidden field', 'Date': 'inline label - always visible', 'Time': 'hidden field', 'Description': 'no label', 'Attachment': 'inline label - always visible', });
lyr_Survey_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});