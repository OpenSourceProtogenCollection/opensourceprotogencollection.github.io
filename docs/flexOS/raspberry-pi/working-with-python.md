# Working With Python

I'll be the first to admit that I'm a complete Python noob, but it seems like the best way to handle this project. Don't worry, the entire point of this project is that you don't have to struggle as much as I did :3

Alright, first, figure out how many different _facial configuations_ (ie full combinations of emotes that can occur) you have. Your maximum with one Raspberry Pi is 28 without any special add-ons. Declare each one with a proper variable name in the "input pin declarations begin here" area.

```pinName = Button(bcmPinNumber, bounce_time=bounce_delay)```

Where `bcmPinNumber` is the BCM number of the GPIO pin (see htttps://pinout.xyz) and `bounce_delay` is the amount of time after a switch comes in contact with a magnet before the program will consider the switch triggered again. This helps avoid sending the same signal multiple times. I recommend 1 second.

In the "USB declarations begin here" section, you'll need to declare each Arduino you have plugged in. Arduinos that do not emote-switch in realtime do NOT need to be declared.

```visorEyes = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)```

The interface (in this example `dev/ttyUSB0`) can be found by running `ls /dev/tty*` on your Pi before and after plugging in each Arduin. Whichever listing appears after plugging in the Arduino is the one you want. Friendly reminder that you can have more than four Arduinos running by using a USB hub.

In the "serial write functions begin here" section is where you'll be doing the magic. Create a function for every `GPIO.add_event_detect` you created.

```
def writeAttn(): # might not include the mouth, not sure
    visorEyes.write(b"1") # priority 4, left thumb
	visorMouth.write(b"1")
```

Indentation DOES mater in Python. In line 1, we define the function. In line 2, we tell it to write to the visorEyes Serial object I created. Each function needs to have it's own character it writes with, as this is how the Arduino can tell which emote we want. The `b` tells the Pi to send the character as a byte, as that's the format required over serial. In line 3, we do the same for the visorMouth Serial object.

Finally, we tie the `when_pressed` attribute of each pin you declared in step 1 to the function

``` pinName.when_pressed = functionName ```

Good job. Next, we'll make sure everything is set up on the Arduino side.
