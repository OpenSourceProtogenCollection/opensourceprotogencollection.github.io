---
layout: docs
title: "Setting Up ProtogenSSH"
postcategory: "ProtogenSSH"
description: "A light SSH client with a configurable user interface that makes it easy for the handler to manipulate the electronics when the suiter cannot."
tags: [ protogenssh, docs ]
---

OSPC includes an Android app called ProtogenSSH, a light SSH client with a configurable user interface that makes it easy for the handler to manipulate the electronics when the suiter cannot. Currently an iOS version of ProtogenSSH is not available. Other SSH iOS clients such as [PiHelper](https://apps.apple.com/us/app/pihelper/id1369930932) may be of interest to iOS users.

To build ProtogenSSH yourself, you'll need [Android Studio](https://developer.android.com/studio). Open your forked version as a project and either connect a test device over USB or configure the Android Emulator, then hit the run button (green arrow, or Shift + F10).

If you wish to use prebuilt releases, you can head to [Releases](https://github.com/OpenSourceProtogenCollection/ProtogenSSH/releases) and download the APK file, which can then be installed easily on the device just by opening it from a file manager or the notification shade.

Once the app launches, you can press `Create Custom Script` and enter a title, command and category. For the command, it's recommended that you create a Python file on the Raspberry Pi that pushes a single serial command, like a simplified version of your `main.py`. Examples of these scripts can be found in the repo.

Here is an example of a custom script in ProtogenSSH.

![Example setup of custom script on ProtogenSSH](https://i.postimg.cc/cHFPyx6B/Screenshot-20200605-183146517.jpg)

Before your buttons are ready for prime-time, make sure you put your Pi credentials in the Settings page:

![Adding credentials to ProtogenSSH](https://i.postimg.cc/8PmKqk3J/Screenshot-20200605-184044658.jpg)