# Using LEDMatrix for Shapes

LEDMatrix is best suited towards simpler patterns that can be drawn using shapes and lines. For more complex patters that require pixel-by-pixel design please see _Using LED `int` arrays_. For text, please see _Using LEDText for Text_.

LEDMatrix is a library that allows you to easily draw shapes onto a matrix. With this, you can combine shapes to create pictures. It's quicker and easier than using `int` arrays, but is a bit less precise and can create sloppy code if your patterns or animations are more complex.

When setting up your project, create a `config.h` file and a `declarations.h` file in the same folder as your sketch .ino file, then add them to the workflow under Sketch > Add File.

![Creating and adding files to your Arduino sketch](https://i.postimg.cc/YSd7V9cs/screenshot-12.png)

To begin using LEDMatrix, first make sure you have all of the essential declarations in your main file, as well as your `config.h`.

`config.h`:

```
#ifndef config_h
#define config_h
#include <FastLED.h>
#include <LEDMatrix.h>
#include <Font12x16.h>
#include <Font16x24.h>
#include <FontMatrise.h>
#include <LEDText.h>

#define MATRIX_TILE_WIDTH   8 // width of matrix (not total display)
#define MATRIX_TILE_HEIGHT  32 // height of matrix
#define MATRIX_TILE_TYPE VERTICAL_ZIGZAG_MATRIX
#define MATRIX_BOARD_CHIP WS2812B
#define MATRIX_TILE_H       1  // number of matrices arranged horizontally
#define MATRIX_TILE_V       1  // number of matrices arranged vertically
#define COLOR_ORDER GRB // hardware-dependent
#define LED_PIN 6 // pin where matrices are connected
#define NUM_LEDS MATRIX_TILE_WIDTH * abs(MATRIX_TILE_HEIGHT)

#define BRIGHTNESS 5 // brightness of LEDs
#endif
```

main:

```
#include "config.h" // this file includes our libraries and device-specific variables
#include "declarations.h" // this file includes variables for LED patterns

// creating the matrix using LEDMatrix
// note that height and width are flipped in this example due to TILE_TYPE
// for further clarification on this, see the LEDText wiki
cLEDMatrix <MATRIX_TILE_HEIGHT, MATRIX_TILE_WIDTH, MATRIX_TILE_TYPE> ledmatrix;
// creating a pointer to the matrix so FastLED can still operate
CRGB *leds = ledmatrix[0];
// declaring LEDText
cLEDText ScrollingMsg;

void setup() {

  // instantiate FastLED
  FastLED.addLeds<MATRIX_BOARD_CHIP, LED_PIN, COLOR_ORDER>(ledmatrix[0], ledmatrix.Size());
  FastLED.setBrightness(BRIGHTNESS);

  // instantiate LEDText
  ScrollingMsg.SetFont(MatriseFontData);
  ScrollingMsg.Init(&ledmatrix, ledmatrix.Width(), ScrollingMsg.FontHeight() + 1, 0, 0);
}

void loop() {
 // this is where your pattern commands will live soon
}

// Purpose: Draws LEDs by running through the pixels, one by one, and seeing if they should be lit up according to their array
// Accepts: uint16_t[] of your desired pattern, int size of the pattern array, long int hex code
// Returns: nothing
void drawPattern(uint16_t patternArray[], int patternSize, long int colour) {
  // PGM comes into play here. For more info about PGM, see the declarations header or the wiki
  
  uint16_t nextPixel; // holds current RAM value from PGM
  int pixelCounter = 0; // increments when a pixel is placed
  for (int i = 0; i < NUM_LEDS; i++) { // loop through LED in the matrix
    for (int j = 0; j < patternSize; j++) { // check every element in the pattern array for the current LED
      nextPixel = pgm_read_word(&patternArray[pixelCounter]); // pull element into RAM
      if (i == nextPixel) { // if the pixel in the matrix matches the array element
        leds[i] = colour; // turn the pixel the specified colour
        pixelCounter++; // move to the next pixel
      }
    }
  }
}
```

With that out of the way, let's whip up some shapes.

A full list of functions can be found on LEDMatrix's [wiki](https://github.com/AaronLiddiment/LEDMatrix/wiki/3.Function-List), but we'll go through creating this coffee mug:

![A pixel image of a coffee mug](https://i.postimg.cc/G2tmcfvz/screenshot-15.png)

First, let's create the outer wall of the mug. In your loop, put the following:

```
FastLED.clear(); // always clear the palette before writing a new pattern set!
ledmatrix.DrawRectange(x1, y1, x2, y2, colourhex);
```

where `x1` and `y1` are the coordinates of the one corner of the rectangle and `x2` and `y2` are the coordinates of the opposite corner, and `colourhex` is a colour hex code proceeded by `0x`. You can look along the sides of the grid for coordinates, the x-axis of my matrix is flipped so I'm going to use the coordinates on top. So, in this case:

`ledmatrix.DrawRectangle(15, 2, 19, 6, 0xFFFFFF);`

Next, we'll do the coffee:

`ledmatrix.DrawFilledRectangle(16, 3, 18, 6, 0x521d00);`

Notice how we use `DrawFilledRectangle` this time, since we have space inside our rectangle that we want to write to as well. Also notice that the command will overwrite the top edge of the mug we created before.

Last, let's make the handle:

`ledmatrix.DrawRectangle(13, 4, 14, 5, 0xFFFFFF);`

And finally, show the graphic:

```
FastLED.show();
```

Because we're in a loop (since normally I'd encourage you to animate your patterns and use `delay` to slow them), we're going to notice some flicker in the LEDs.

Upload the code to your microcontroller, and with any luck you should have the design on your display. If not, and you're having trouble debugging your code, open an [Issue](https://github.com/OpenSourceProtogenCollection/flexOS/issues) or contact me on [Telegram](https://t.me/JaredTamana).

![A coffee cup displayed on a 32x8 LED matrix](https://i.postimg.cc/66n60C6H/IMG-20200524-042121.jpg)