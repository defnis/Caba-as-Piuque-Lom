$(document).ready(function(){
	jQuery(".cabanas .col-md-6 .foto a").hide();
jQuery(".cabanas .col-md-6 .foto").hover(function(){
   jQuery(this).find("a").fadeIn();
   

  }, function (){
   jQuery(this).find("a").fadeOut();
   
  });
  jQuery(".actividades .col-md-6 .foto a").hide();
jQuery(".actividades .col-md-6 .foto").hover(function(){
   jQuery(this).find("a").fadeIn();
   

  }, function (){
   jQuery(this).find("a").fadeOut();
   
  });
  });