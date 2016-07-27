# IoT4ETA
````
Make a tiny, internet-connected lamp or nightlight that alerts you about current traffic on your commute.

Suitable for beginners! Easy! Adaptable! Fun! Non-toxic!

IoT4ETA ("Internet of Things 4 Estimated Time of Arrival") by Rachel Simone Weil <3
````

## Overview and purpose

IoT4ETA brings together a [Particle Photon](http://particle.io) microcontroller and the [Bing Maps Routes API](https://msdn.microsoft.com/en-us/library/ff701713.aspx) to give you real-time traffic updates about a given driving commute. In this project, the Photon's on-board blue LED is used to signify little-to-no traffic delays (an illuminated light), moderate traffic delays (a slowly flashing light), or severe traffic delays (a rapidly flashing light). The start and endpoints of the driving route, as well as what constitutes moderate and severe traffic delays, are completely customizable. Though not detailed here, the use of the Traffic API could be further expanded to monitor public transportation delays or to display graphic or textual information about roadway construction, for example.

**While IoT4ETA might help you beat Friday afternoon gridlock, its true *raison d'etre* is to demonstrate how quickly and easily information and insights from the web can be brought into the physical world through IoT devices and [node.js on Azure](https://azure.microsoft.com/en-us/develop/nodejs/).** The methods used in this simple project can be reproduced to tap into the vast data made available through web APIs and to create from them meaningful physical manifestations.


## Materials and prerequisites list

[ ] [Particle Photon](http://particle.io) WiFi-enabled microcontroller with MicroUSB-to-USB cable

[ ] For local testing of node app: [node](http://nodejs.org), [git](https://git-scm.com/), [npm](https://www.npmjs.com/) _or_ [bower](http://www.bower.io), and a text editor/IDE such as [Code](http://code.visualstudio.com)

[ ] For deployment of node app to Azure: [Azure account](http://portal.azure.com/) (free trial or paid), [git](https://git-scm.com/) _or_ [GitHub account](http://www.github.com)


## Quickstart guide

[ ] [Set up your Photon and Particle Build account](https://docs.particle.io/guide/getting-started/start/photon/) (steps 1-7). Connect your Photon to power via USB; if set up correctly to WiFi, the Photon will display a gently pulsing cyan light. Then, log in to the [Particle Build IDE](http://build.particle.io). On the left sidebar, choose Devices (the crosshair) and confirm that your device appears in the list as has a pulsing cyan circle next to it. *Hint: If you've registered more than one Photon device, be sure to choose your active device by clicking the star to the left of its name.* Finally, choose Settings (the gear) and make note of your access token.

[ ] Register for a [Bing Maps developer account](http://bingmapsportal.com) to get access to the Bing Maps Traffic API and an API key (free for most small, non-commercial projects). Once you've registered your soon-to-exist app, the API key can be found by choosing My Account > My Keys.

[ ] Clone the IoT4ETA repository ([https://github.com/hxlnt/iot4eta.git](https://github.com/hxlnt/iot4eta.git)). Install node dependencies if you plan on testing locally.





 
 
