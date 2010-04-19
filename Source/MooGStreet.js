/*
 ---
 description: A plugin to create Street View div with a single row comand using Mootools and Google API.
 license: MIT-style
 authors:
 - Nunzio Fiore (http://moog.moonkiki.com)
 requires:
 - Element
 - String
 provides: [MooGStreet]
 ...
 */
var MooGStreet = new Class({

    Implements: [Options, Events],
    options: {
        streetContainer: 'demoContainer',
        city: 'New York'
    },
    initialize: function(options){
        this.setOptions(options);
        
    },
    
    buildMGS: function(lat,lng){
		var obj=this;
        var sc = this.options.streetContainer;
    
	      var fenwayPark = new GLatLng(lat,lng);
	      panoramaOptions = { latlng:fenwayPark };
		 $(sc).set('html','')
	 
	      myPano = new GStreetviewPanorama($(sc), panoramaOptions);
	 
	      GEvent.addListener(myPano, "error", obj.handleNoFlash);
     
        
    },
	
    handleNoFlash:function(errorCode) {
      try{
      if (errorCode == FLASH_UNAVAILABLE) {
        alert("Error: Flash doesn't appear to be supported by your browser");
        return;
      }
     }catch(err){
       alert("Can't find this city.\nSearch it on http://maps.google.it/maps?hl=it&tab=wl ");
     }
    },
    
    run: function(){
     var c = this.options.city;
	 $(this.options.streetContainer).set('html','Searching '+c+' and building MooGStreet')
	 geocoder = new GClientGeocoder();
     var obj=this;
     var marker = new GMarker(new GLatLng(48.89364,      2.33739));  
       var point = marker.getPoint();

        geocoder.getLatLng(
          c,
          function(point) {
           var o={lat:'',lng:''};
   
           if (!point) {
              alert(address + " not found");
            } else {
              o.lat= point.lat().toFixed(5);
              o.lng=point.lng().toFixed(5);
            }
            obj.buildMGS(o.lat,o.lng);
         }

        );
    

    }
    
});


    
    
    
    
   
    
    
