# IoT4ETA
Make a tiny, internet-connected lamp or nightlight that alerts you about current traffic on your commute.

Suitable for beginners! Easy! Adaptable! Fun! Non-toxic!

Level up on basic * Javascript * electronics * node on [Azure](http://azure.microsoft.com/) * web APIs * microcontrollers *

Follow along with step-by-step instructions at [github.com/hxlnt/iot4eta](http://www.github.com/hxlnt/iot4eta)

IoT4ETA ("Internet of Things 4 Estimated Time of Arrival") by [Rachel Simone Weil](http://www.nobadmemories.com/) <3

## What you'll need
This is a preview of the materials, software, and accounts you'll need for this project. Don't worry if you don't recognize or know how to get a hold of these things--the step-by-step instructions will guide you through setup!

Materials | Accounts and credentials | (Free) software and packages
--------- | ------------------------ | ----------------------------
[Particle Photon](http://particle.io) | WiFi access | [node](http://nodejs.org)
MicroUSB-to-USB cable | [Particle Build account](http://build.particle.io) (free) | [git](https://git-scm.com/)
PC or Mac with a USB port | [Bing Maps developer account](http://bingmapsportal.com) (free) | [npm](https://www.npmjs.com/) or [bower](http://www.bower.io)
*Recommended:* Mini-breadboard, LEDs, LCD display, art supplies, or other goodies for customizing this project | *Recommended:* [Azure account](http://portal.azure.com/) (free trial or paid) for hosting node app in the cloud | [Particle phone app](https://docs.particle.io/guide/getting-started/start/photon/#prerequisites-for-setup) or the Particle CLI for [Windows](https://docs.particle.io/guide/getting-started/connect/photon/#using-windows) or [Mac OS X](https://docs.particle.io/guide/getting-started/connect/photon/#using-osx)
                                         | | [particle-api-js](https://github.com/spark/particle-api-js) node package
                                         | | *Recommended:* Text editor/IDE such as [Code](http://code.visualstudio.com)


## Step 1: Install node, git, and npm or bower
Many developers already have these tools installed. If you do, feel free to skip this step. Otherwise, here are the links to [node](http://nodejs.org), [git](https://git-scm.com/), [npm](https://www.npmjs.com/), and [bower](http://www.bower.org). These tools have a considerable learning curve for beginners, so if they're completely new to you, take a break, read up on them, and come back when you're ready.

## Step 2: Set up your Photon and Particle Build account
Particle has a great [Photon setup guide](https://docs.particle.io/guide/getting-started/start/photon/) that walks you through connecting your Photon device to the internet and getting set up in the Particle Build programming environment. If you haven't already, complete steps 1-7. Connect your Photon to power via USB; if set up correctly to WiFi, the Photon will display a gently pulsing cyan light. Then, log in to the [Particle Build IDE](http://build.particle.io). On the left sidebar, choose Devices (the crosshair) and confirm that your device appears in the list as has a pulsing cyan circle next to it. *Hint: If you've registered more than one Photon device, be sure to choose your active device by clicking the star to the left of its name.* Finally, choose Settings (the gear) and make note of your access token. *Hint: Take care not to post, share, or upload access tokens and keys.*

## Step 3: Set up your Bing Maps developer account
We'll use the Bing Maps Traffic API for finding traffic along a certain driving route. To use the API, we'll need an API key, and to get that, we need to register for a [Bing Maps developer account](http://bingmapsportal.com) and register our app. Use of the API is free for most small, non-commercial projects. Once you've registered your soon-to-exist app, choose My Account > My Keys, and take note of the very long key.

## Step 4: Save the iot4eta repository locally and install node dependencies
Using a tool such as Git Bash/Terminal, the Git for Windows client, or Github's web interface, clone (or download) the iot4eta repository ([https://github.com/hxlnt/iot4eta.git](https://github.com/hxlnt/iot4eta.git)) to your local machine. Then, install node dependencies by navigating to the new directory in CLI and entering ``npm install``. A new folder called node_modules should be created inside the iot4eta repository folder.




 
 
