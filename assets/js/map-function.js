	//Map
	google.maps.event.addDomListener(window, 'load', init);

 	function init(){
 		var map = new google.maps.Map(document.getElementById('map'), {
	        center: {lat: 42.3876, lng: 71.0995},
	        zoom: 4,
	        scrollwheel: false,
	        styles: [
			    {elementType: 'geometry', stylers: [{color: '#dddddd'}]},
			    {elementType: 'labels.text.fill', stylers: [{color: '#1b1b1b'}]},
			    {
			      featureType: 'administrative.locality',
			      elementType: 'labels.text.fill',
			      stylers: [{color: '#d59563'}]
			    },
			    {
			      featureType: 'poi',
			      elementType: 'labels.text.fill',
			      stylers: [{color: '#d59563'}]
			    },
			    {
			      featureType: 'poi.park',
			      elementType: 'geometry',
			      stylers: [{color: '#bfbfbf'}]
			    },
			    {
			      featureType: 'poi.park',
			      elementType: 'labels.text.fill',
			      stylers: [{color: '#6b9a76'}]
			    },
			    {
			      featureType: 'road',
			      elementType: 'geometry',
			      stylers: [{color: '#38414e'}]
			    },
			    {
			      featureType: 'road',
			      elementType: 'geometry.stroke',
			      stylers: [{color: '#212a37'}]
			    },
			    {
			      featureType: 'road',
			      elementType: 'labels.text.fill',
			      stylers: [{color: '#9ca5b3'}]
			    },
			    {
			      featureType: 'road.highway',
			      elementType: 'geometry',
			      stylers: [{color: '#746855'}]
			    },
			    {
			      featureType: 'road.highway',
			      elementType: 'geometry.stroke',
			      stylers: [{color: '#1f2835'}]
			    },
			    {
			      featureType: 'road.highway',
			      elementType: 'labels.text.fill',
			      stylers: [{color: '#f3d19c'}]
			    },
			    {
			      featureType: 'transit',
			      elementType: 'geometry',
			      stylers: [{color: '#2f3948'}]
			    },
			    {
			      featureType: 'transit.station',
			      elementType: 'labels.text.fill',
			      stylers: [{color: '#d59563'}]
			    },
			    {
			      featureType: 'water',
			      elementType: 'geometry',
			      stylers: [{color: '#f8f8f8'}]
			    },
			    {
			      featureType: 'water',
			      elementType: 'labels.text.fill',
			      stylers: [{color: '#515c6d'}]
			    },
			    {
			      featureType: 'water',
			      elementType: 'labels.text.stroke',
			      stylers: [{color: '#17263c'}]
			    },
			    {
			      featureType: 'administrative',
			      elementType: 'geometry.fill',
			      stylers: [{color: '#6e6e6e'}]
			    },
			    {
			      featureType: 'administrative',
			      elementType: 'geometry.stroke',
			      stylers: [{color: '#6e6e6e'}]
			    },
			    {
		        	"featureType": "landscape.natural.terrain",
		        	"elementType": "geometry.fill",
		        	"stylers": [
		          	{
		            	"color": "#cecece"
		          		}
		        	]
		      	}
	        ]
	    });

		var marker = new google.maps.Marker({
			position: {lat: 42.3876, lng: 71.0995},
		    map: map,
		    icon: 'assets/images/map-marker.png'
		});
 	}
