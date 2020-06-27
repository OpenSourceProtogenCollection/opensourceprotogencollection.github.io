Your 8x8 matrix is wired, and now you want to see it come to life! 

First, we'll install the software we need. Go install `git` for [Windows](https://gitforwindows.org/), [macOS](https://git-scm.com/download/mac) (using `brew`) or Linux (through your package manager). Also install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).

> **NOTE:** If you bought one of the Arduino "knockoffs" that I recommended, you may need to install the CH340 driver so your computer will recognize the microcontroller. [Drivers can be found on this page.](https://sparks.gogo.co.nz/ch340.html)

Now, we'll grab this repository's code. I really encourage anyone looking to use this code to reupload any of their changes so others can learn, so we're going to fork the repository. Go to [the repo homepage](https://github.com/JaredTheWolf/OpenSourceProtogenCollection) while logged in (sign up, if you haven't) and click the fork button. Once it's forked, click Clone or Download and copy the URL.

Open up a command prompt on Windows or Terminal on macOS/Linux and run `git clone` followed by the URL you copied. It will download all the files.

![Forking a repo on GitHub](https://i.postimg.cc/Dwp0nNT6/Screenshot-from-2020-05-29-15-57-58.png)

Let's plug your microcontroller into the computer and launch the Arduino IDE.

Once it's launched, the first thing you want to do is head into Tools and select your board. Next, head to Tools > Port and select your port. Don't know which port? Easy - unplug your microcontroller, close the menu, and reopen it. Whichever port disappeared is the one you want to select.

![Selecting a board in Arduino IDE](https://i.postimg.cc/WzMF7kWx/screenshot-4.png)

![Installing the FastLED library from the Library Manager](https://i.postimg.cc/kGKR53CW/screenshot-16.png)

Head up into Tools > Manage Libraries and search for and install the FastLED library. This library does a lot of the heavy lifting in our code.

Now, head over to [this GitHub repo](https://github.com/Jorgen-VikingGod/LEDMatrix) as well as [this one](https://github.com/AaronLiddiment/LEDText). On each of them, click "Clone or download" and then "Download ZIP". Once they're downloaded, open up the ZIP files and extract the CONTENTS of the folder inside to your IDE's libraries folder, usually found at `{your-user-directory}\Documents\Arduino\libraries` on Windows.

![An example of the folder structure of the Arduino IDE libraries folder on Windows](https://i.postimg.cc/d0PX7GGd/screenshot-17.png)

Your paths should look like `Arduino\libraries\LEDMatrix` and `Arduino\libraries\LEDText`.

Open up your cloned folder from earlier and navigate to `arduino/blink` and open the `blink.ino` file.

![Changing the number of LEDs in an Arduino blink sketch](https://i.postimg.cc/8P4sPDqd/screenshot-5.png)

Find the line that says `#define NUM_LEDS 256` and change `256` to `64` (because that's how many LEDs are on your 8x8 board!), then hit the Upload icon. Once it's uploaded, you should see every LED light up, one after another. Take note of the path it traces, because we'll be using it really soon!

![Upload button in Arduino IDE](https://i.postimg.cc/C5FYWnM3/screenshot-6.png)

If your code DIDN'T upload and you hit an error, don't fret. Hit that "copy error message" button and create an [Issue](https://github.com/OpenSourceProtogenCollection/flexOS/issues) or message me on [Telegram](https://t.me/JaredTamana).

Alright. Ready for the next bit? See you on the next page!
