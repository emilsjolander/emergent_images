(function () {
	var IMAGE_SIZE = 128;
	
	var canvas = document.getElementById("output");
	canvas.width = 128;
	canvas.height = 128;

	var ctx = canvas.getContext("2d");
	var pixelGrid = new Array(IMAGE_SIZE);

	var ratio = canvas.width / IMAGE_SIZE;

	for(var i = 0; i < IMAGE_SIZE; i++) {
		pixelGrid[i] = new Array(IMAGE_SIZE);
	}

	for(var i = 0; i < IMAGE_SIZE; i++) {
		for(var j = 0; j < IMAGE_SIZE; j++) {
			pixelGrid[i][j] = getRandomColor();
		}
	}


	loadImage("images/house.png", function (err, image) {
		ctx.drawImage(image, 0, 0);
	});
	
	// var imgdata = ctx.getImageData(0,0,IMAGE_SIZE,IMAGE_SIZE);

	//render();

	function loadImage (src, callback) {
		var img = new Image("images/house.png");
		img.src = src;
		img.onload = function() {
			callback(null, img);
		};
	}
	
	function render() {
		for(var i = 0; i < IMAGE_SIZE; i++) {
			for(var j = 0; j < IMAGE_SIZE; j++) {
				ctx.fillStyle = pixelGrid[i][j];
				ctx.fillRect(i*ratio,j*ratio/2,ratio,ratio/2);
			}
		}
	}	

	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.round(Math.random() * 15)];
	    }
    	return color;
	}
})();