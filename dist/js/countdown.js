function fixIntegers(e) {
    return 0 > e && (e = 0), 10 > e ? "0" + e : "" + e
}
setInterval(function() {
    var e = new Date("Jan29 2017 12:30:00 GMT+0200"),
        t = new Date,
        r = Math.floor((e.getTime() - t.getTime()) / 1e3),
        n = fixIntegers(r % 60);
    r = Math.floor(r / 60);
    var a = fixIntegers(r % 60);
    r = Math.floor(r / 60);
    var o = fixIntegers(r % 24);
    r = Math.floor(r / 24);
    var f = r;
    $("#seconds").text(n), $("#minutes").text(a), $("#hours").text(o), $("#days").text(f)
}, 1e3);

$(document).ready(function()
{


/*Map*/
/*
var image = '';
map.addMarker({
	lat: 9.944006,
	lng: 76.695954,
	infoWindow: {
	  content: '<p class="map-info"><strong>St.Mary"s Church</strong> <br/> Nakapuzha</p>'
	}
});
map.addMarker({
	lat: 9.944006,
	lng: 76.695954,
	infoWindow: {
	  content: '<p class="map-info"><strong>St.Mary"s Church</strong> <br/> Nakapuzha</p>'
	}
});
map.addMarker({
	lat: 9.944006,
	lng: 76.695954,
	infoWindow: {
	  content: '<p class="map-info"><strong>St.Mary"s Church</strong> <br/> Nakapuzha</p>'
	}
});


var styles = [ 

{
	"featureType": "road",
	"stylers": [
	{ "color": "#ffffff" }
	]
},{
	"featureType": "water",
	"stylers": [
	{ "color": "#99b3cc" }
	]
},{
	"featureType": "landscape",
	"stylers": [
	{ "color": "#f2efe9" }
	]
},{
	"elementType": "labels.text.fill",
	"stylers": [
	{ "color": "#d3cfcf" }
	]
},{
	"featureType": "poi",
	"stylers": [
	{ "color": "#ded2ac" }
	]
},{
	"elementType": "labels.text",
	"stylers": [
	{ "saturation": 1 },
	{ "weight": 0.1 },
	{ "color": "#000000" }
	]
}

];

map.addStyle({
	styledMapName:"Styled Map",
	styles: styles,
	mapTypeId: "map_style"  
});

map.setStyle("map_style");*/



var sec=new Date()
sec=sec.getSeconds();
console.log(sec)
if(sec<10)
sec=0;
if(sec>=50)
sec=50

$(".banner_timer ul li").css({"border-radius":sec+"%","-webkit-border-radius":sec+"%","-moz-border-radius":sec+"%","-ms-border-radius":sec+"%","-0-border-radius":sec+"%"})
    

}
)