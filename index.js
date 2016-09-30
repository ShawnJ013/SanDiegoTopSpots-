$(document).ready(function(){
 //Retrieves .json file from sandiegotopspots location 
$.getJSON("sandiegotopspots.json", function(result){ 
$(result.topspots).each(function( key, sdspots ) { 
$("#info").append("<tr><td>" + sdspots.name + "</td><td>" + sdspots.description + "</td><td>" + "<a href=https://www.google.com/maps?q=" + sdspots.location[0] + "," + sdspots.location[1] + 
 
"><button type='button' class= 'btn btn-primary'>Open in Google Maps!<button></a>" + "</td></tr>");


}); 
  
});

});



