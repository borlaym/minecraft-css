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

var rowSize = 10;
var colSize = 10;

$(document).ready(function() {

	for (var i = 30; i >= 0; i--) {

		var block = $(blockHTML);
		var x = Math.floor(Math.random() * 3) * 382;
		var y = Math.floor(Math.random() * 3) * 382;
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

});


function updateCamera() {
	$(".perspective").css({
		"transform": "translate3d(" + (-camera[0] * 2) + "px, " + (-camera[1] * 2) + "px, " + 0 + "px)"
	});
}