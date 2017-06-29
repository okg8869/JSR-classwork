$(function() {
  		// DOM is now ready
	_500px.init({
		sdk_key: '1dc39d4896fe3308cb51979e348c18067ee67603'
	});
		// When a successful login to 500px is made, they fire off the 'authorization_obtained' event
	_500px.on('authorization_obtained', function() {
		// Successful OAuth login!
		$('.sign-in-view').hide();
		$('.image-results-view').show();
		// Does browser support geolocation
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				var lat = position.coords.latitude;
				var long = position.coords.longitude;
				var radius = "25mi";
				var searchOptions = {
					geo: lat + ',' + long + ',' + radius,
					only: "Landscapes",
					image_size: 3,
					rpp: 25,
					sort: "highest_rating"
				};

                _500px.api('/photos/search', searchOptions, function (response) {
                    if(response.data.photos.length == 0){
                    	alert("We didn't get any photos.")
                    }
                    else {
                    	handleResponseSuccess(response);
                    }
                });

			});
		}
		else {
			alert('Browser does not support Navigator!')
		}



	});

	function handleResponseSuccess(response){
		var allPhotos = response.data.photos;
		$.each(allPhotos, function(){
			var elm = $('<img>').attr('src',this.image_url).addClass('image');
			$('.images').append(elm);
		});
	};

	$('#login').click(function() {
	  _500px.login();
	});


	_500px.getAuthorizationStatus();
});
