function initialize() {
$("#book").fadeOut("slow");
$("#bigtext").hide();
$("#sound-group").hide();
$("#bigtext").fadeIn("slow");
console.log("hey");

	
	
	var startPoint = new google.maps.LatLng(40.77827, -73.98191);
  var soundSources = [
    ['72th st Train Station', 40.77848, -73.98195, 1]
    ['Strawberry Fields', 40.77534, -73.97506, 2]
    ['Home', 40.77573, -73.97895, 3]
  ];
  	var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 16,

                    // The latitude and longitude to center the map (always required)
                    
                    center: startPoint, // New York, 72st

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],
                    disableDefaultUI: true,


                    // scaleControl: true,
                };


  	var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
// //.........................................
//     function setMarkers(map, locations){
//       var markerIcon = {
//       url: '.img/marker.png',
//     // This marker is 20 pixels wide by 32 pixels tall.
//       size: new google.maps.Size(45, 45),
//     // The origin for this image is 0,0.
//       origin: new google.maps.Point(0,0),
//     // The anchor for this image is the base of the flagpole at 0,32.
//       anchor: new google.maps.Point(24.5, 24.5)
//   };
//     for (var i = 0; i < locations.length; i++){
//       var soundSources = locations[i];
//       var myLatLng = new google.maps.LatLng(soundSources[1], soundSources[2]);
//       var marker = new google.maps.Marker({
//         postion: myLatLng,
//         map: map,
//         icon: markerIcon,
//         title: soundSources[0]
//       });
//     }
//     }
// //.........................................

// function setMarkers(map, locations) {
//   // Add markers to the map

//   // Marker sizes are expressed as a Size of X,Y
//   // where the origin of the image (0,0) is located
//   // in the top left of the image.

//   // Origins, anchor positions and coordinates of the marker
//   // increase in the X direction to the right and in
//   // the Y direction down.
//   var image = {
//     url: './img/marker.png',
//     // This marker is 20 pixels wide by 32 pixels tall.
//     size: new google.maps.Size(45, 45),
//     // The origin for this image is 0,0.
//     origin: new google.maps.Point(0,0),
//     // The anchor for this image is the base of the flagpole at 0,32.
//     anchor: new google.maps.Point(22.5, 22.5)
//   };
//   // Shapes define the clickable region of the icon.
//   // The type defines an HTML &lt;area&gt; element 'poly' which
//   // traces out a polygon as a series of X,Y points. The final
//   // coordinate closes the poly by connecting to the first
//   // coordinate.
//   var shape = {
//       coords: [1, 1, 1, 20, 18, 20, 18 , 1],
//       type: 'poly'
//   };
//   for (var i = 0; i < locations.length; i++) {
//     var beach = locations[i];
//     var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         icon: image,
//         shape: shape,
//         title: beach[0],
//         zIndex: beach[3]
//     });
//   }
// }

  // var marker = new google.maps.Marker({
  //   position: map.getCenter(),
  //   map: map,
  //   title: 'Click to zoom'
  // });

  // google.maps.event.addListener(map, 'center_changed', function() {
  //   // 3 seconds after the center of the map has changed, pan back to the
  //   // marker.
  //   window.setTimeout(function() {
  //     map.panTo(marker.getPosition());
  //   }, 3000);
  // });
  var markerIcon = './img/marker.png'
	var marker = new google.maps.Marker({
		position: startPoint,
		map:map,
    icon:markerIcon,
		title:"oSUCK!"
	});


  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(18);
    $("#sound-group").show();
    map.setCenter(marker.getPosition());
    $( ".banner" ).append( "<p>Test</p>" );
  });
}

google.maps.event.addDomListener(window, 'load', initialize);