# Initial Raspberry Pi Setup

This portion of the guide is only needed you're going to be doing real-time emote switching. If you're only looking to display one image on your matrices, you don't need a Raspberry Pi and can just power your microcontrollers off an external source. Otherwise, read on!

For this project, I recommend using good old Raspberry Pi OS, as it comes with many of the utilities you need, but you're welcome to use any \*nix system that suits you provided it's compiled for ARM. For instructions on how to flash an SD card with RPOS or any other OS, I'd check [the official documentation](https://www.raspberrypi.org/documentation/installation/installing-images/).

Once you've run through setup, make sure all of your packages are up-to-date by connecting to the internet and running `sudo apt update && sudo apt upgrade`. Run `sudo apt install python3 python3-pip pyserial` as well as `python3 -m pip install pyserial` if you aren't running Raspberry Pi OS.

We'll enable SSH and VNC at this point so it isn't a hassle later. Go into the Raspian menu (top left), under Preferences, and open Raspberry Pi configuration. Under the interfaces tab, enable SSH and VNC. If you aren't running Raspian, use Google to find resources on how to enable SSH and VNC.

Clone this repository using `git clone` as you did on your Windows machine.

Next, you'll want to turn your Raspberry Pi into a wireless access point. You will lose the ability to connect to the internet from your wireless adapter (unless you have more than one), so make sure everything above is done first.

In your terminal, `cd OpenSourceProtogenCollection/raspberry-pi` and run `chmod +x setup.sh`. This will us execute `setup.sh`, which will install and configure everything to activate the AP. To start the script, run `./setup.sh` and follow the on-screen prompts. If you'd rather do this manually, you can follow [the official guide](https://www.raspberrypi.org/documentation/configuration/wireless/access-point-routed.md), but the script is verbatim these steps.

Some people recommend using PuTTY on Windows for SSH connections, but I prefer Windows' inbuilt SSH. Once you've connected to your Pi's AP, open up a Command Prompt window and type `ssh pi@192.168.4.1` (assuming you used that IP in the guide above). It will prompt you for your account password. If you don't know the account password, you can change it using `sudo raspi-config` on the Pi. With any luck, you should have your command prompt. This is what you'll use to issue commands to your Arduinos.

If you want access to the desktop, you'll need to use VNC. You can get it at [VNC's download page](https://www.realvnc.com/en/connect/download/viewer/), or for [Chocolatey](https://chocolatey.org/) users, `choco install vnc-viewer`.

If you ever want to transfer files between your host computer and the RPi, you can use [the scp command](http://www.hypexr.org/linux_scp_help.php) on the host computer. For example:

``` 
# copy a file from your host computer to your Raspberry Pi
scp C:\Users\you\Desktop\yourfile.txt pi@192.168.4.1:/home/pi/Desktop

# copy a file from the Pi to your host computer
scp pi@192.168.4.1:/home/pi/Desktop/yourfile.txt C:\Users\you\Desktop
```

Alright, all the setup is done. Next, we'll go through the serial connection between your Pi and Arduinos.