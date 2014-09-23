$(document).ready(function(){

	$(function() {
    new Maplace({
    	map_div: '#gmap',
    	show_markers: false,
    	locations: [{
        lat: 45.9, 
        lon: 10.9,
        zoom: 8
    	}],

        // styles: 
        // {
        // 'Night': [{
        //     featureType: 'all',
        //     stylers: [{ invert_lightness: 'true' }
        //      ] 
        //  }],
        // 'Greyscale': [{ 
        //     featureType: 'all', 
        //     stylers: [
        //     { saturation: -100 },
        //     { gamma: 0.50 }
        //     ] 
        // }]
        // }       

    //     styles: {
    //     'Night': [{
    //         featureType: 'all',
    //         stylers: [
    //             { invert_lightness: 'true' }
    //         ]
    //     }],
    //     'Greyscale': [{              
    //         featureType: 'all',
    //         stylers: [
    //             { saturation: -100 },
    //             { gamma: 0.50 }
    //         ]
    //     }]
    // }

    






		}).Load(); 

	});



});


