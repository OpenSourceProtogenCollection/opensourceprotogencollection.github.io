# Drawing Individual Pixels

Say you want to create a particle effect on your display. There are a couple of ways of doing this:

- LEDMatrix has a function called `DrawPixel` which takes x and y coordinates along with the pixel colour
- FastLED can assign individual pixels using `CRGB[index]`
- I've also created a wrapper function, `singleLED`, that uses `CRGB[]` and can also delay at the same time. This makes for neat and efficient code.

```
// Purpose: Draws a single LED, then delays. Good for particle effects.
// Accepts: int index of LED, long int hex code, int time to delay after drawing (optional)
// Returns: Nothing
void singleLED(int number, long int colour, int delaytime = 0) {
  leds[number] = colour;
  if (delaytime > 0) {
    FastLED.show();
    delay(delaytime);
  }
}
```

So, if I wanted to draw a pixel at `2, 3` (index `13`), I can use one of the following.

`ledmatrix.DrawPixel(2, 3, CRGB::White);`

`leds[13] = CRGB::White;`

`singleLED(13, CRGB::White);`