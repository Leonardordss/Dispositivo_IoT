
#define BUTTON_PIN 0
#define LED_PIN 1


void setup()
{
    pinMode(BUTTON_PIN,INPUT);
    pinMode(LED_PIN,OUTPUT);
}

void loop()
{
    if( digitalRead(BUTTON_PIN) == true ){
        digitalWrite(LED_PIN, HIGH); 
    }
}

