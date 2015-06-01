'use strict';

var css = require("../styles/main.less");

var $ = require("zepto-browserify").$;
var _ = require("lodash");

var blockHTML = '<div class="block">'+
        '<div class="front"></div>'+
        '<div class="right"></div>'+
        '<div class="left"></div>'+
        '<div class="back"></div>'+
        '<div class="top"></div>'+
        '<div class="bottom"></div>'+
      '</div>';

var blocks = [];


var mouseStartPos = -1;
var camera = [0,0];


var currentKeys = [];

var rowSize = 10;
var colSize = 10;
var lastTimeStamp = new Date().getTime();

$(document).ready(function() {

	for (var i = 100; i >= 0; i--) {

		var block = $(blockHTML);
		var x = (Math.floor(Math.random() * 10) - 5) * 382;
		var y = (Math.floor(Math.random() * 4)) * 382;
		var z = -(3 + Math.floor(i / 10)) * 382;
		block.css({
			"transform": "translate3d(" + x + "px, " + y + "px, " + z + "px)"
		});
		$(".scene").append(block);
	}


	$("html").on("click", function(event) {
		if (mouseStartPos === -1) {
			mouseStartPos = [event.pageX, event.pageY];
		} else {
			mouseStartPos = -1;
		}
	});

	$("html").on("mousemove", function(event) {
		if (mouseStartPos !== -1) {
			camera = [event.pageX - mouseStartPos[0], event.pageY - mouseStartPos[1]];

			updateCamera();

		}
	});


	$("html").keydown(function(event) {
		currentKeys.push(event.which);
	});

	$("html").keyup(function(event) {
		currentKeys = _.filter(currentKeys, function(key) {
			return key !== event.which;
		});
	});

	setInterval(function() {
		tick();
	}, 1000/60);

});


function updateCamera() {
	console.log(camera[0] / ( $("html").width() / 2 ));
	$(".scene").css({
		"transform": "translate3d(" + ( - playerPosition[0]) + "px, " + (- playerPosition[1]) + "px, " + (-playerPosition[2]) + "px) " + 
						"rotateY(" + (camera[0] / ( 500 / 2 ) * 80 )  + "deg) " + 
						"rotateX(" + (-camera[1] / ( 500 / 2 ) * 20 )  + "deg)"
	});
}


var playerPosition = [0,0,0];

function tick() {
	var d = new Date().getTime() - lastTimeStamp;
	lastTimeStamp = new Date().getTime();

	if (currentKeys.indexOf(87) > -1) {
		playerPosition[2] -= 500 * (d / 1000);
	}
	if (currentKeys.indexOf(83) > -1) {
		playerPosition[2] += 500 * (d / 1000);
	}
	if (currentKeys.indexOf(65) > -1) {
		playerPosition[0] -= 500 * (d / 1000);
	}
	if (currentKeys.indexOf(68) > -1) {
		playerPosition[0] += 500 * (d / 1000);
	}

	updateCamera();


}


















