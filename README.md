MooGStreet
==========

![Screenshot](http://moog.moonkiki.com/MooG/plugin/MooGStreet/MooGStreet.png)

Include a script containing the class MooGStreet written using Mootools and Google Street View API and you will bind your div to the plugin.
On the same page you can create multiple street view layer.  
Demo is here: <a href="http://moog.moonkiki.com/MooG/plugin/MooGStreet/Source/moogStreetDemo.html">Demo showing Rome and Paris</a>

How to use
----------

Include Mootools 1.4 core. Inlude Google API and charge Google Map api and your <a href="http://code.google.com/intl/it-IT/apis/maps/signup.html">key generated from Google here </a> in this way:

			<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=ABQIAAAAj8zliP7718bYZeNi0dt_UxS0MebhigwuOeAuwGtwZq0Oxln2wBSQCO3rkDsw2AOjW9whN3RUHGYEsQ"></script>



Then include MooGStreet script:

        <script src="MooGStreet.js" type="text/javascript">
        </script>

Link your MooGStreet instance to a div and a city in this way:


	var mgs = new MooGStreet({streetContainer:'moogDiv2',city:'Paris'});
	                           

        

At the end run your mgs instances:

	mgs.run();



More info
-----------------

You can find more info at <a href="http://moog.moonkiki.com
">http://moog.moonkiki.com</a>

Demo is here: <a href="http://moog.moonkiki.com/MooG/plugin/MooGStreet/Source/moogStreetDemo.html">Demo showing Rome and Paris</a>
