#include <WiFi.h>
#include <HTTPCLient.h>
#include <ArduinoJson.h>

const char* ssid = "Wokwi-GUEST";
const char* password = "";

const char* contentfulURL = "https://cdn.contentful.com/spaces/yn1fkqj49xrw/environments/master/entries?content_type=device&select=fields.pin,fields.state";
const char* acessToken = "Bearer ";

unsigned long timerScan = 0;
#define SCAN_DELAY 3000

void setup()
{
    Serial.begin(115200);
    WiFi.begin(ssid,password);
    Serial.println("Starting Wifi Connection!");

    while(WiFi.status() != WL_CONNECTED){
        delay(100);
        Serial.println("*");
    }
    Serial.printf("\n Successfully Connected with: %s", ssid);    
}

void loop()
{
    if( (millis() - timerScan) >= SCAN_DELAY ){
        Serial.println("\n **** SCAN STARTED *** \n");
        timerScan = millis();
        scanRoutine();
        Serial.println("\n **** SCAN ENDED *** \n");
    }    
}

void scanRoutine(){

    HTTPClient http;
    http.begin(contentfulURL);
    http.addHeader("Authorization", accessToken);

    int httpResponseStatus = http.GET();

    if(httpResponseStatus > 0){
        String response = http.getString();
        
        const int responseSize = response.length() *1.1; 
        DynamicJsonDocument json(responseSize);
        deserializeJson(Json,response);

        JsonArray items = json["items"];

        for( JsonObject item : items ){
            int pin = item["fields"]["pin"] | -1;
            bool state = item["fields"]["state"] | false;


        }

    }
    else{
        Seria.printf("\n Error when calling backend: %d \n",httpResponseStatus);
    }

}