// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.onscreen.min

$(document).ready(function(){
	$("#1").click(function(){
		$("#breakfast").fadeIn(1000);
		$("#pasta").hide();
		$("#dessert").hide();
		$("#rice").hide();
		$("#drinks").hide();
		$("#snacks").hide();

	});
	$("#2").click(function(){
		$("#snacks").fadeIn(1000);
		$("#pasta").hide();
		$("#dessert").hide();
		$("#rice").hide();
		$("#drinks").hide();
		$("#breakfast").hide();

	});
	$("#3").click(function(){
		$("#pasta").fadeIn(1000);
		$("#snacks").hide();
		$("#dessert").hide();
		$("#rice").hide();
		$("#drinks").hide();
		$("#breakfast").hide();

	});
	$("#4").click(function(){
		$("#rice").fadeIn(1000);
		$("#snacks").hide();
		$("#dessert").hide();
		$("#pasta").hide();
		$("#drinks").hide();
		$("#breakfast").hide();

	});
	$("#5").click(function(){
		$("#drinks").fadeIn(1000);
		$("#snacks").hide();
		$("#dessert").hide();
		$("#rice").hide();
		$("#pasta").hide();
		$("#breakfast").hide();

	});
	$("#6").click(function(){
		$("#dessert").fadeIn(1000);
		$("#snacks").hide();
		$("#drinks").hide();
		$("#rice").hide();
		$("#pasta").hide();
		$("#breakfast").hide();

	});

});