ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([257453.999600, 662299.198800, 260579.603300, 664843.179700]);
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
var format_national_parks_1 = new ol.format.GeoJSON();
var features_national_parks_1 = format_national_parks_1.readFeatures(json_national_parks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_national_parks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_national_parks_1.addFeatures(features_national_parks_1);
var lyr_national_parks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_national_parks_1,
maxResolution:14002.233076130982,
 minResolution:11.201786460904787,

                style: style_national_parks_1,
                popuplayertitle: 'national_parks',
                interactive: false,
                title: '<img src="styles/legend/national_parks_1.png" /> national_parks'
            });
var format_urban_areas_2 = new ol.format.GeoJSON();
var features_urban_areas_2 = format_urban_areas_2.readFeatures(json_urban_areas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_urban_areas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urban_areas_2.addFeatures(features_urban_areas_2);
var lyr_urban_areas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_urban_areas_2,
maxResolution:14002.233076130982,
 minResolution:22.403572921809573,

                style: style_urban_areas_2,
                popuplayertitle: 'urban_areas',
                interactive: false,
    title: 'urban_areas<br />\
    <img src="styles/legend/urban_areas_2_0.png" /> National<br />\
    <img src="styles/legend/urban_areas_2_1.png" /> Regional<br />' });
var format_sites_3 = new ol.format.GeoJSON();
var features_sites_3 = format_sites_3.readFeatures(json_sites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_sites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sites_3.addFeatures(features_sites_3);
var lyr_sites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sites_3,
maxResolution:44.807145843619146,
 minResolution:0.00028004466152261963,

                style: style_sites_3,
                popuplayertitle: 'sites',
                interactive: false,
    title: 'sites<br />\
    <img src="styles/legend/sites_3_0.png" /> Air Transport<br />\
    <img src="styles/legend/sites_3_1.png" /> Education<br />\
    <img src="styles/legend/sites_3_2.png" /> Medical Care<br />\
    <img src="styles/legend/sites_3_3.png" /> Road Transport<br />\
    <img src="styles/legend/sites_3_4.png" /> Water Transport<br />' });
var format_greenspace_4 = new ol.format.GeoJSON();
var features_greenspace_4 = format_greenspace_4.readFeatures(json_greenspace_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_greenspace_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_greenspace_4.addFeatures(features_greenspace_4);
var lyr_greenspace_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_greenspace_4,
maxResolution:44.807145843619146,
 minResolution:0.00028004466152261963,

                style: style_greenspace_4,
                popuplayertitle: 'greenspace',
                interactive: false,
                title: '<img src="styles/legend/greenspace_4.png" /> greenspace'
            });
var format_woodland_5 = new ol.format.GeoJSON();
var features_woodland_5 = format_woodland_5.readFeatures(json_woodland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_woodland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_woodland_5.addFeatures(features_woodland_5);
var lyr_woodland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_woodland_5,
maxResolution:560.0893230452392,
 minResolution:0.00028004466152261963,

                style: style_woodland_5,
                popuplayertitle: 'woodland',
                interactive: false,
    title: 'woodland<br />\
    <img src="styles/legend/woodland_5_0.png" /> National<br />\
    <img src="styles/legend/woodland_5_1.png" /> Regional<br />\
    <img src="styles/legend/woodland_5_2.png" /> Local<br />' });
var format_contours_6 = new ol.format.GeoJSON();
var features_contours_6 = format_contours_6.readFeatures(json_contours_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_contours_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_6.addFeatures(features_contours_6);
var lyr_contours_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contours_6,
maxResolution:89.61429168723829,
 minResolution:0.00028004466152261963,

                style: style_contours_6,
                popuplayertitle: 'contours',
                interactive: false,
    title: 'contours<br />\
    <img src="styles/legend/contours_6_0.png" /> Index<br />\
    <img src="styles/legend/contours_6_1.png" /> Normal<br />' });
var format_district_buildings_7 = new ol.format.GeoJSON();
var features_district_buildings_7 = format_district_buildings_7.readFeatures(json_district_buildings_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_district_buildings_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_buildings_7.addFeatures(features_district_buildings_7);
var lyr_district_buildings_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_district_buildings_7,
maxResolution:22.403572921809573,
 minResolution:5.600893230452393,

                style: style_district_buildings_7,
                popuplayertitle: 'district_buildings',
                interactive: false,
                title: '<img src="styles/legend/district_buildings_7.png" /> district_buildings'
            });
var format_local_buildings_8 = new ol.format.GeoJSON();
var features_local_buildings_8 = format_local_buildings_8.readFeatures(json_local_buildings_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_local_buildings_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_local_buildings_8.addFeatures(features_local_buildings_8);
var lyr_local_buildings_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_local_buildings_8,
maxResolution:5.600893230452393,
 minResolution:0.00028004466152261963,

                style: style_local_buildings_8,
                popuplayertitle: 'local_buildings',
                interactive: false,
                title: '<img src="styles/legend/local_buildings_8.png" /> local_buildings'
            });
var format_surfacewater_9 = new ol.format.GeoJSON();
var features_surfacewater_9 = format_surfacewater_9.readFeatures(json_surfacewater_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_surfacewater_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surfacewater_9.addFeatures(features_surfacewater_9);
var lyr_surfacewater_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_surfacewater_9,
maxResolution:1120.1786460904784,
 minResolution:0.00028004466152261963,

                style: style_surfacewater_9,
                popuplayertitle: 'surfacewater',
                interactive: false,
    title: 'surfacewater<br />\
    <img src="styles/legend/surfacewater_9_0.png" /> National<br />\
    <img src="styles/legend/surfacewater_9_1.png" /> Regional<br />\
    <img src="styles/legend/surfacewater_9_2.png" /> Local<br />' });
var format_foreshore_10 = new ol.format.GeoJSON();
var features_foreshore_10 = format_foreshore_10.readFeatures(json_foreshore_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_foreshore_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_foreshore_10.addFeatures(features_foreshore_10);
var lyr_foreshore_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_foreshore_10,
maxResolution:89.61429168723829,
 minResolution:0.00028004466152261963,

                style: style_foreshore_10,
                popuplayertitle: 'foreshore',
                interactive: false,
                title: '<img src="styles/legend/foreshore_10.png" /> foreshore'
            });
var format_waterlines_11 = new ol.format.GeoJSON();
var features_waterlines_11 = format_waterlines_11.readFeatures(json_waterlines_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_waterlines_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterlines_11.addFeatures(features_waterlines_11);
var lyr_waterlines_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterlines_11,
maxResolution:280.0446615226196,
 minResolution:0.00028004466152261963,

                style: style_waterlines_11,
                popuplayertitle: 'waterlines',
                interactive: false,
                title: '<img src="styles/legend/waterlines_11.png" /> waterlines'
            });
var format_roads_local_12 = new ol.format.GeoJSON();
var features_roads_local_12 = format_roads_local_12.readFeatures(json_roads_local_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_roads_local_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_local_12.addFeatures(features_roads_local_12);
var lyr_roads_local_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_local_12,
maxResolution:56.00893230452392,
 
                style: style_roads_local_12,
                popuplayertitle: 'roads_local',
                interactive: false,
                title: '<img src="styles/legend/roads_local_12.png" /> roads_local'
            });
var format_roads_regional_13 = new ol.format.GeoJSON();
var features_roads_regional_13 = format_roads_regional_13.readFeatures(json_roads_regional_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_roads_regional_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_regional_13.addFeatures(features_roads_regional_13);
var lyr_roads_regional_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_regional_13,
maxResolution:280.0446615226196,
 minResolution:0.00028004466152261963,

                style: style_roads_regional_13,
                popuplayertitle: 'roads_regional',
                interactive: false,
                title: '<img src="styles/legend/roads_regional_13.png" /> roads_regional'
            });
var format_roads_national_14 = new ol.format.GeoJSON();
var features_roads_national_14 = format_roads_national_14.readFeatures(json_roads_national_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_roads_national_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_national_14.addFeatures(features_roads_national_14);
var lyr_roads_national_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_national_14,
maxResolution:1400.2233076130983,
 minResolution:0.00028004466152261963,

                style: style_roads_national_14,
                popuplayertitle: 'roads_national',
                interactive: false,
                title: '<img src="styles/legend/roads_national_14.png" /> roads_national'
            });
var format_rail_15 = new ol.format.GeoJSON();
var features_rail_15 = format_rail_15.readFeatures(json_rail_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_rail_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rail_15.addFeatures(features_rail_15);
var lyr_rail_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rail_15,
maxResolution:44.807145843619146,
 minResolution:0.00028004466152261963,

                style: style_rail_15,
                popuplayertitle: 'rail',
                interactive: false,
    title: 'rail<br />\
    <img src="styles/legend/rail_15_0.png" /> Multi Track<br />\
    <img src="styles/legend/rail_15_1.png" /> Narrow Gauge<br />\
    <img src="styles/legend/rail_15_2.png" /> Single Track<br />\
    <img src="styles/legend/rail_15_3.png" /> Tunnel<br />' });
var format_boundaries_16 = new ol.format.GeoJSON();
var features_boundaries_16 = format_boundaries_16.readFeatures(json_boundaries_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_boundaries_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundaries_16.addFeatures(features_boundaries_16);
var lyr_boundaries_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundaries_16,
maxResolution:28004.466152261964,
 
                style: style_boundaries_16,
                popuplayertitle: 'boundaries',
                interactive: false,
    title: 'boundaries<br />\
    <img src="styles/legend/boundaries_16_0.png" /> National<br />' });
var format_etl_17 = new ol.format.GeoJSON();
var features_etl_17 = format_etl_17.readFeatures(json_etl_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_etl_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etl_17.addFeatures(features_etl_17);
var lyr_etl_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_etl_17,
maxResolution:11.201786460904787,
 minResolution:0.00028004466152261963,

                style: style_etl_17,
                popuplayertitle: 'etl',
                interactive: false,
                title: '<img src="styles/legend/etl_17.png" /> etl'
            });
var format_railway_stations_18 = new ol.format.GeoJSON();
var features_railway_stations_18 = format_railway_stations_18.readFeatures(json_railway_stations_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_railway_stations_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_stations_18.addFeatures(features_railway_stations_18);
var lyr_railway_stations_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_stations_18,
maxResolution:0.5600893230452393,
 minResolution:0.00028004466152261963,

                style: style_railway_stations_18,
                popuplayertitle: 'railway_stations',
                interactive: false,
    title: 'railway_stations<br />\
    <img src="styles/legend/railway_stations_18_0.png" /> Light Rapid Transit Station<br />\
    <img src="styles/legend/railway_stations_18_1.png" /> Light Rapid Transit Station And London Underground Station<br />\
    <img src="styles/legend/railway_stations_18_2.png" /> Light Rapid Transit Station And Railway Station<br />\
    <img src="styles/legend/railway_stations_18_3.png" /> London Underground Station<br />\
    <img src="styles/legend/railway_stations_18_4.png" /> Railway Station<br />\
    <img src="styles/legend/railway_stations_18_5.png" /> Railway Station And London Underground Station<br />' });
var format_airports_19 = new ol.format.GeoJSON();
var features_airports_19 = format_airports_19.readFeatures(json_airports_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_airports_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airports_19.addFeatures(features_airports_19);
var lyr_airports_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airports_19,
maxResolution:89.61429168723829,
 minResolution:0.00028004466152261963,

                style: style_airports_19,
                popuplayertitle: 'airports',
                interactive: false,
                title: '<img src="styles/legend/airports_19.png" /> airports'
            });
var format_names_20 = new ol.format.GeoJSON();
var features_names_20 = format_names_20.readFeatures(json_names_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_names_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_names_20.addFeatures(features_names_20);
var lyr_names_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_names_20,
maxResolution:1400.2233076130983,
 minResolution:0.00028004466152261963,

                style: style_names_20,
                popuplayertitle: 'names',
                interactive: false,
    title: 'names<br />\
    <img src="styles/legend/names_20_0.png" /> Capital<br />\
    <img src="styles/legend/names_20_1.png" /> City<br />\
    <img src="styles/legend/names_20_2.png" /> Country<br />\
    <img src="styles/legend/names_20_3.png" /> Greenspace<br />\
    <img src="styles/legend/names_20_4.png" /> Hamlet<br />\
    <img src="styles/legend/names_20_5.png" /> Landcover<br />\
    <img src="styles/legend/names_20_6.png" /> Landform<br />\
    <img src="styles/legend/names_20_7.png" /> Motorway Junctions<br />\
    <img src="styles/legend/names_20_8.png" /> National Park<br />\
    <img src="styles/legend/names_20_9.png" /> Sites<br />\
    <img src="styles/legend/names_20_10.png" /> Small Settlements<br />\
    <img src="styles/legend/names_20_11.png" /> Suburban Area<br />\
    <img src="styles/legend/names_20_12.png" /> Town<br />\
    <img src="styles/legend/names_20_13.png" /> Village<br />\
    <img src="styles/legend/names_20_14.png" /> Water<br />\
    <img src="styles/legend/names_20_15.png" /> Woodland<br />' });
var format_District_21 = new ol.format.GeoJSON();
var features_District_21 = format_District_21.readFeatures(json_District_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_District_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_21.addFeatures(features_District_21);
var lyr_District_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_21, 
                style: style_District_21,
                popuplayertitle: 'District',
                interactive: false,
                title: '<img src="styles/legend/District_21.png" /> District'
            });
var format_Extent_22 = new ol.format.GeoJSON();
var features_Extent_22 = format_Extent_22.readFeatures(json_Extent_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Extent_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extent_22.addFeatures(features_Extent_22);
var lyr_Extent_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extent_22, 
                style: style_Extent_22,
                popuplayertitle: 'Extent',
                interactive: false,
                title: '<img src="styles/legend/Extent_22.png" /> Extent'
            });
var format_Survey_23 = new ol.format.GeoJSON();
var features_Survey_23 = format_Survey_23.readFeatures(json_Survey_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Survey_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey_23.addFeatures(features_Survey_23);
var lyr_Survey_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Survey_23, 
                style: style_Survey_23,
                popuplayertitle: 'Survey',
                interactive: true,
                title: '<img src="styles/legend/Survey_23.png" /> Survey'
            });
var group_OSZoomstackOutdoor = new ol.layer.Group({
                                layers: [lyr_land_0,lyr_national_parks_1,lyr_urban_areas_2,lyr_sites_3,lyr_greenspace_4,lyr_woodland_5,lyr_contours_6,lyr_district_buildings_7,lyr_local_buildings_8,lyr_surfacewater_9,lyr_foreshore_10,lyr_waterlines_11,lyr_roads_local_12,lyr_roads_regional_13,lyr_roads_national_14,lyr_rail_15,lyr_boundaries_16,lyr_etl_17,lyr_railway_stations_18,lyr_airports_19,lyr_names_20,lyr_District_21,lyr_Extent_22,],
                                fold: 'open',
                                title: 'OS Zoomstack Outdoor'});

lyr_land_0.setVisible(true);lyr_national_parks_1.setVisible(true);lyr_urban_areas_2.setVisible(true);lyr_sites_3.setVisible(true);lyr_greenspace_4.setVisible(true);lyr_woodland_5.setVisible(true);lyr_contours_6.setVisible(true);lyr_district_buildings_7.setVisible(true);lyr_local_buildings_8.setVisible(true);lyr_surfacewater_9.setVisible(true);lyr_foreshore_10.setVisible(true);lyr_waterlines_11.setVisible(true);lyr_roads_local_12.setVisible(true);lyr_roads_regional_13.setVisible(true);lyr_roads_national_14.setVisible(true);lyr_rail_15.setVisible(true);lyr_boundaries_16.setVisible(true);lyr_etl_17.setVisible(true);lyr_railway_stations_18.setVisible(true);lyr_airports_19.setVisible(true);lyr_names_20.setVisible(true);lyr_District_21.setVisible(true);lyr_Extent_22.setVisible(true);lyr_Survey_23.setVisible(true);
var layersList = [group_OSZoomstackOutdoor,lyr_Survey_23];
lyr_land_0.set('fieldAliases', {'id': 'id', });
lyr_national_parks_1.set('fieldAliases', {'id': 'id', });
lyr_urban_areas_2.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_sites_3.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_greenspace_4.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_woodland_5.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_contours_6.set('fieldAliases', {'id': 'id', 'type': 'type', 'height': 'height', });
lyr_district_buildings_7.set('fieldAliases', {'id': 'id', });
lyr_local_buildings_8.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', });
lyr_surfacewater_9.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_foreshore_10.set('fieldAliases', {'id': 'id', });
lyr_waterlines_11.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_roads_local_12.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_roads_regional_13.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_roads_national_14.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_rail_15.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_boundaries_16.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_etl_17.set('fieldAliases', {'id': 'id', });
lyr_railway_stations_18.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', });
lyr_airports_19.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_names_20.set('fieldAliases', {'id': 'id', 'type': 'type', 'name1': 'name1', 'name1language': 'name1language', 'name2': 'name2', 'name2language': 'name2language', });
lyr_District_21.set('fieldAliases', {'fid': 'fid', 'District': 'District', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Extent_22.set('fieldAliases', {'fid': 'fid', 'District': 'District', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'width': 'width', 'height': 'height', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Survey_23.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Time': 'Time', 'Species': 'Species', });
lyr_land_0.set('fieldImages', {'id': 'TextEdit', });
lyr_national_parks_1.set('fieldImages', {'id': 'TextEdit', });
lyr_urban_areas_2.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_sites_3.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_greenspace_4.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_woodland_5.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_contours_6.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'height': 'TextEdit', });
lyr_district_buildings_7.set('fieldImages', {'id': 'TextEdit', });
lyr_local_buildings_8.set('fieldImages', {'id': 'TextEdit', 'uuid': 'TextEdit', });
lyr_surfacewater_9.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_foreshore_10.set('fieldImages', {'id': 'TextEdit', });
lyr_waterlines_11.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_roads_local_12.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_roads_regional_13.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_roads_national_14.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_rail_15.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_boundaries_16.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_etl_17.set('fieldImages', {'id': 'TextEdit', });
lyr_railway_stations_18.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', });
lyr_airports_19.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_names_20.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name1': 'TextEdit', 'name1language': 'TextEdit', 'name2': 'TextEdit', 'name2language': 'TextEdit', });
lyr_District_21.set('fieldImages', {'fid': '', 'District': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Extent_22.set('fieldImages', {'fid': 'TextEdit', 'District': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'width': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Survey_23.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Time': 'DateTime', 'Species': 'TextEdit', });
lyr_land_0.set('fieldLabels', {'id': 'no label', });
lyr_national_parks_1.set('fieldLabels', {'id': 'no label', });
lyr_urban_areas_2.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_sites_3.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_greenspace_4.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_woodland_5.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_contours_6.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'height': 'no label', });
lyr_district_buildings_7.set('fieldLabels', {'id': 'hidden field', });
lyr_local_buildings_8.set('fieldLabels', {'id': 'no label', 'uuid': 'no label', });
lyr_surfacewater_9.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_foreshore_10.set('fieldLabels', {'id': 'no label', });
lyr_waterlines_11.set('fieldLabels', {'id': 'no label', 'type': 'inline label - visible with data', });
lyr_roads_local_12.set('fieldLabels', {'id': 'inline label - always visible', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_roads_regional_13.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_roads_national_14.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_rail_15.set('fieldLabels', {'id': 'inline label - always visible', 'type': 'no label', });
lyr_boundaries_16.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_etl_17.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_railway_stations_18.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name': 'no label', });
lyr_airports_19.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_names_20.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name1': 'no label', 'name1language': 'no label', 'name2': 'no label', 'name2language': 'no label', });
lyr_District_21.set('fieldLabels', {'fid': 'no label', 'District': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Extent_22.set('fieldLabels', {'fid': 'no label', 'District': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'width': 'no label', 'height': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Survey_23.set('fieldLabels', {'fid': 'no label', 'Date': 'no label', 'Time': 'no label', 'Species': 'no label', });
lyr_Survey_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});