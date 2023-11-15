import paho.mqtt.client as mqtt
import time


def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.subscribe("your/topic")


def on_message(client, userdata, msg):
    print(f"Message received: {msg.topic} {str(msg.payload)}")


client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("0.0.0.0", 1883, 60)

client.loop_start()

client.publish("your/topic", "Hello MQTT")

# Run for 60 seconds
time.sleep(60)

client.loop_stop()
