var size = 0;
var placement = 'point';

var style_roads_national_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Verdana\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#ffffff";
    var bufferWidth = 2.4000000000000004;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null && resolution > 0 && resolution < 56) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,153,153,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
