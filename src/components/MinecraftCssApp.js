'use strict';

var css = require("../styles/main.less");

var $ = require("zepto-browserify").$;

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
var camera;

$(document).ready(function() {

	for (var i = 0; i < 40; i++) {
		var block = $(blockHTML);
		var x = Math.floor(Math.random() * 40) * 10;
		var y = Math.floor(Math.random() * 40) * 10;
		var z = Math.floor(Math.random() * 40) * 10;
		block.css({
			"transform": "translate3d(" + x + "px, " + y + "px, " + z + "px)"
		});
		$(".scene").append(block);
	}


	$(".perspective").on("click", function(event) {
		if (mouseStartPos === -1) {
			mouseStartPos = [event.pageX, event.pageY];
		} else {
			mouseStartPos = -1;
		}
	});

	$(".perspective").on("mousemove", function(event) {
		if (mouseStartPos !== -1) {
			camera = [event.pageX - mouseStartPos[0], event.pageY - mouseStartPos[1]];

			updateCamera();

		}
	});

});


function updateCamera() {
	$(".scene").css({
		"transform": "translate3d(" + (-camera[0]) + "px, " + (-camera[1]) + "px, " + 0 + "px)"
	});
}