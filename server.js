//////// Customize this data! /////////
//
var startpoint = "Microsoft, 10900 Stonelake Blvd. Austin, TX 78759"; // Commute starting address
var endpoint = "Pinballz, 8940 Research Blvd Ste 100, Austin, TX 78758"; // Commute ending address
var trafficlowthreshold = 3; // If traffic adds 3 min. or less to commute, traffic is "low."
var traffichighthreshold = 10; // If traffic adds 10 min. or more to commute, traffic is "high." If traffic adds between 3 and 10 minutes to commute, traffic is "medium."
var refreshrate = 5; // Traffic data is updated every 5 minutes.
var myparticleemail = "StoreThisLocallyOrInAzure" // The email address you use to log in to build.particle.io.
var myparticlepw = "StoreThisLocallyOrInAzure" // The password you use to log in to build.particle.io.
var myparticletoken = "StoreThisLocallyOrInAzure" // Photon token (build.particle.io > Settings)
var mybingmapskey = "StoreThisLocallyOrInAzure" // Bing Maps API Key (bingmapsportal.com)
//
///////////////////////////////////////

// Set up Photon

var Particle = require("particle-api-js");
var particle = new Particle();
particle.login({ username: myparticleemail, password: myparticlepw });

// Set up Bing Maps API and traffic data

var http = require("http");
var url = "http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=" + startpoint + "&wp.1=" + endpoint + "&key=" + mybingmapskey
var triplength,
    normallength,
    trafficrating;

// Get traffic estimate from Bing Maps API and publish to Photon

function getTraffic() {
    var request = http.get(url, function (response) {
        var buffer = "",
            data;
        response.on("data", function (chunk) { buffer += chunk; });
        response.on("end", function (err) {
            data = JSON.parse(buffer);

            // Compare route with and without current traffic delays to determine traffic rating (low, med, high)

            triplength = data.resourceSets[0].resources[0].travelDurationTraffic / 60; 
            normallength = data.resourceSets[0].resources[0].travelDuration / 60;
            if (normallength + trafficlowthreshold >= triplength) {
                console.log("Little to no traffic! Your journey should take " + Math.round(triplength) + " minutes.");
                trafficrating = "low";
            }
            else if (normallength + trafficlowthreshold < triplength && normallength + traffichighthreshold > triplength) {
                console.log("Moderate traffic! Your journey should take " + Math.round(triplength) + " minutes.");
                trafficrating = "med";
            }
            else if (normallength + traffichighthreshold <= triplength) {
                console.log("Heavy traffic! Your journey should take " + Math.round(triplength) + " minutes.");
                trafficrating = "high";
            }

            // Publish traffic rating to Photon

            var publishEventPr = particle.publishEvent({ name: 'traffic', data: trafficrating, auth: myparticletoken });
            publishEventPr.then(
                function (data) {
                    console.log("Publishing to Photon...");
                },
                function (err) {
                    console.log("Failed to publish event. :(");
                }
            );
        });
    });
}
getTraffic();

// Refresh and republish

setInterval(getTraffic, [refreshrate * 60 * 1000]);
