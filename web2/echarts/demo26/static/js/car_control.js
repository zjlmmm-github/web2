$(function(){getHt();initMap();})
function getHt(){var all_height=$(window).height();var div_height=all_height-84;$("#car_control").css("height",div_height+"px");}
function initMap(){var map=new BMap.Map("map");map.centerAndZoom(new BMap.Point(116.404,39.915),11);var size1=new BMap.Size(10,50);map.addControl(new BMap.MapTypeControl({offset:size1,mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP,]}));function addMarker(point){var marker=new BMap.Marker(point);map.addOverlay(marker);}
var bounds=map.getBounds();var sw=bounds.getSouthWest();var ne=bounds.getNorthEast();var lngSpan=Math.abs(sw.lng-ne.lng);var latSpan=Math.abs(ne.lat-sw.lat);for(var i=0;i<25;i++){var point=new BMap.Point(sw.lng+lngSpan*(Math.random()*0.7),ne.lat-latSpan*(Math.random()*0.7));addMarker(point);};map.setCurrentCity("北京");map.enableScrollWheelZoom(true);var size=new BMap.Size(10,50);map.addControl(new BMap.CityListControl({anchor:BMAP_ANCHOR_TOP_LEFT,offset:size,}));}