# OpenControl
An Open Source Locomotive Control Chip for Garry's Mod built on Wiremod's Expression 2 Environment


## Scope

The scope of the OpenControl Project is to build a robust, light-weight and life-like simulation of a Locomotive, that is [Open Source](https://opensource.com/resources/what-open-source), Open to community contributions, and built by a group of diverse Developers.

![pre-release](https://github.com/TitusStudiosMediaGroup/OpenControl/workflows/pre-release/badge.svg)

## To-Do List
This is a list of what we have to complete, fix, or build. *(These may be out of date)*

  * [x] Air Braking System
    * [x] Compressor
    * [x] Compressor Logic
    * [x] Main Reservoir
    * [x] Equalising Reservoir
    * [x] Brake Pipe
    * [x] Brake Cut-in/out
    * [x] Trainline 
    * [x] Trainline EOT drop
    * [x] Dynamic Air 
    * [x] Pressure Equalization between MainRes fill up and EQ
    * [x] Pressure Equalization between EQ and BP (depending on BCO setting)
    * [x] Pressure Equalization between BP and TL (MU & Cars, no Cars, MUed, Single)
    * [x] Pressure Equalization logic between all Res's depending on brake piping
    * [x] PCS
    * [x] MainRes air dryer
    * [ ] Control Air
    * [x] MainRes "jump" on Bail
    * [x] Locomotive Brake res logic
  * [x] Physics System
  * [x] User Control
  * [x] I/O
    * [x] MU Hose Functionality
      * Convert automatic MU E2 to automatic air hose E2
    * [x] Handbrake
      * Make handbrake e2 that uses `eyeTrace()`, meaning you dont need to use buttons. (E to apply, Shift+E to release)
    * [x] Locomotive Fan E2
      * Adds working fans to the locomotive with sounds. This may be required to have on the locomotive for sounds, otherwise no dyno / fan sounds, etc.
  * [x] Control Stand
    * [x] 26L Brake Control 
      * [x] 60 sec PCS cutout
      * [x] Brake Position Logic
    * [x] Communitcation between Control Stand and Main Chip
  * [x] Configs
  
## How it all works

**NOTE:** This explanation is *very* simplified.

## Traction

### DC Traction

The DC Traction system in OpenControl is built on Ohm's Law:

*Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points. Introducing the constant of proportionality, the resistance one arrives at the usual mathematical equation that describes this relationship:*
### *I* = (V/R)

Generator Field Current and the Speed of the Engine (RPM), determines the voltage of the generator.
For most US engines, this is normalised to 600VDC.

 * A Generator, is a motor running in reverse. When you apply a current to the windings of a motor, a magnetic field is induced in the armature of the motor. This magnetic field causes the armature to spin. *(simplified explanation)*.
If you run the motor in reverse, then you will induce a current in the motor windings.

![Motor GIF](/src/figs/GIF/motor.gif)

*GIF provided from Wikipedia, https://en.wikipedia.org/wiki/Electric_motor#/media/File:Electric_motor.gif*

 * Back electromotive force (Back EMF, BEMF) is a voltage that appears in the opposite direction to current flow as a result of the motor's coils moving relative to a magnetic field.

Once we have the Voltage of the Generator, we apply this to the Traction Motors.

The Traction Motor Current is calculated by getting the Generator Voltage (at motor terminals), and subtracting the number of Parallel paths multiplied by the Back EMF of the Traction Motor, which increases linearly to the Speed of the Locomotive.

The final current is determined by dividing the Traction Motor Current by the Resistance of the Motor.
The Resistance of the motor is calculated using Ohm's Law, R = Motor Terminal Voltage divided by the Current.

### Dynamic Braking

This same principle is applied to the Dynamic Brakes.
However the Dynamic Brake Resistor Grid is connected in series with the Traction motors, this will pull power from the Traction Motors, slowing down the Locomotive.

The Dynamic Brake Resistor Grid Resistance is fixed (not including heat losses). OpenControl uses a 700 Amps Dynamic Base line, which is 0.923 Ohm's.

 * A resistor resists the current flow of a circuit, as if you were pushing water through a pipe, and had a smaller pipe at the end. The loss of *"flow"*, is converted from electrical energy into Heat energy. The more current you are *resisting*, the more heat is generated. Depending on the material the resistor is made out of, the resistance will lower as it heats up. The speed of this is dependant on the material.
 
OpenControl uses the Axle RPM, to calculate the voltage of the Traction Motor(s), as if it was a generator.
Then it uses the voltage and Ohm's Law to calculate the Current of the Dynamic Brakes.

The output of this will be a positive, and the code inverts the current output to a negative.

## Logic Flow Charts

![OpenControl Locomotive Air System FIG1](/src/figs/PNG/opencontrol-airsytsemfig1.png)
![OpenControl Locomotive Traction Motor & Electrial System FIG1](/src/figs/PNG/opencontrol-tractioncircuitfig1.png)
![OpenControl Locomotive Traction Curve](/src/figs/PNG/opencontrol-tractioncurve.png)
![OpenControl Locomotive Current Curve](/src/figs/PNG/opencontrol-currentcurve.png)

## Developers & Contributors
We are very grateful for your help with the Project, whether a one time contribution, multiple contributions, or longtime developer.

[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/0)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/0)[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/1)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/1)[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/2)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/2)[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/3)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/3)[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/4)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/4)[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/5)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/5)[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/6)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/6)[![](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/images/7)](https://sourcerer.io/fame/TitusStudiosMediaGroup/TitusStudiosMediaGroup/OpenControl/links/7)

## Addressing the Elephant in the Room

The OpenControl project is in no way associated with RLC, PT Gamma, PT2, or other variants. OpenControl is solely based on community contributions. OpenControl is neither a re-built, edited, or rebranded version of RLC, nor is this project based on events, which is basing this entire project over "revenge" for said events

OpenControl is in no way associated with RLC, PT Gamma, PT2, or other variants. And is neither a re-built, edited, or rebranded version of RLC.

## Licence

OpenControl is licensed under the: **MIT License**

*A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.*

```
MIT License

Copyright (c) 2020 Titus Studios Media Group

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


Copyright © 2018-2020 Titus Studios Media. *Terms and Conditions are available on the [TitusStudios Website](https://www.titusstudios.net/)*
