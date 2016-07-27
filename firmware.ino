// Set up Photon

const int led = D7; // LED pin
const int led_low_traffic = 0; // Milliseconds between illuminations for little to no traffic on commute (0 = constantly on)
const int led_med_traffic = 800; // Milliseconds between illuminations for moderate traffic on commute (800 = slow flash)
const int led_high_traffic = 75; // Milliseconds between illuminations for heavy traffic on commute (75 = rapid flash)

bool traffic_delays;
int flashrate;

void setup() {
   pinMode(led, OUTPUT); // Start with LED off
   digitalWrite(led, LOW);
   traffic_delays = false;
   Particle.subscribe("traffic", myHandler);
}

// Main loop

void loop() {
    if (traffic_delays) { 
    digitalWrite(led, HIGH);
    delay(flashrate);
    digitalWrite(led, LOW);
    delay(flashrate);
    }
}

// Process traffic update from node app

void myHandler(String event, String data) {
    Serial.println(data);
    if (data == "low") { 
        traffic_delays = false;
        flashrate = led_low_traffic;
        digitalWrite(led, HIGH);
    }
    else if (data == "med") {
        traffic_delays = true;
        flashrate = led_med_traffic;
    }
    else if (data == "high") {
        traffic_delays = true;
        flashrate = led_high_traffic;
    }
}
