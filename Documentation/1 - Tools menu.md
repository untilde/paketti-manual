# 1 - 'Tools' Menu

Settings for Paketti can be found under Tools -> Paketti. This menu also includes some shortcuts for useful features:

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/115269c2-fc78-4947-bf17-3711535666de)


| Item | Description | Index |
| --- | --- | --- |
| `Preferences` | Shows Paketti Preferences window. | [1.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#11---preferences) |
| `Instruments` | Contains sample and drumkit loaders, plus shortcuts for beatsync and pitchbend. | [1.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#12---instruments) |
| `Pattern Editor` | Random BPM, FX Cheat Sheet, Collapse/Uncollapse All, Double/Halve Pattern | [1.3](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#13---pattern-editor) |
| `Plugin/Devices` | Multiple Plugin/Device functionalities. | [1.4](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#14---pluginsdevices) |
| `Show New Song Dialog` | Allows you to start a new song with the option to keep the same Patterns/Instruments/etc | - |
| `∿ Squigly Sinewave to Clipboard` | Copy this symbol to easily find Paketti in the Keys window (under Renoise Preferences). | - |
| `Paketti MIDI Populator` | Automatically fills current Project with Tracks, Instruments, Sends and Macros for External MIDI Controllers. | [1.5](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#15---midi-populator) |
| `Clean Render Selected Track or Group` | Automatically bypasses FX in Track/Group before resampling. | - |
| `Catch Octave` | (NEEDS EXPLAINING) | - |
| `Clone Current Sequence` | Self-explanatory. | - |
| `Track Routings Dialog` | Displays a pop-up window containing all track audio device routings. | - |

## 1.1 - Preferences

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/d7a9cd74-6921-44c2-960a-a87f4fda788c)

| Item | Description | Notes |
| --- | --- | --- |
| `Upper Frame` | Enables/Disables upper frame control when using Impulse Tracker key commands. | See [insert IT topic - to be written]. |
| `0G01 Loader` | Automatically enables the 0G01 hack for samples inserted using the Paketti loaders. | See [2 - Instrument Box](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/2%20-%20Instrument%20Box.md) to better understand the 0G01 hack. |
| `Random BPM` | (NEEDS EDITING) | - |
| `Pale Green Theme` | Loads Paketti color theme for Renoise. | - |
| `Gifts: Plaid Zap Load` | Insert a special XRNI instrument made from Plaid samples. | See [forum post](https://forum.renoise.com/t/plaidzap-xrni-gift/32521). |
| `Create New Instrument & Loop from Selection` | Quite Self-Explanatory. Works on the Sample Editor (right-click). | - |
| `Paketti Loader Settings` | Changes default settings for Paketti Drumkit/Multisample loaders. | See [1.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#12---instruments) for more details. |
| `Wipe & Slices Settings` | Determines default settings for slices generated via Paketti (under the Sampler window and Instrument Box): Slice Loop Mode, Beatsync, Autoseek, etc. | See [2 - Instrument Box](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/2%20-%20Instrument%20Box.md).
| `Render Settings` | Determines sample rate and bit depth for Paketti resampling procedures. | - |
| `Edit Mode Colouring` | Highlights the track you're currently editing, all tracks or none. | - |

## 1.2 - Instruments

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/f3fa1092-6f7a-43ad-a6a8-7880e55278ba)

| Item | Description | Notes |
| --- | --- | --- |
| `PitchBend Drumkit Sample Loader` | Automatically generates a drumkit from selected samples. Includes some macros. Samples are adjusted according the your Paketti Loader Settings (see 1.1 above). | |
| `PitchBend Multiple Sample Loader` | Automatically generates one instrument for each selected sample. Sample are also adjusted according to Loader Settings. | |
| `Start Sampling (Record)` | Pops up the Renoise Sampler Recorder and starts playback. Useful for resampling DAW sound. | |
| `Beat Sync Lines Halve\Double` | Adjusts the beatsync time for all slices in the selected instrument. Does not affect the first/main sample. | |
| `Xst PitchBend Instrument Init` | Inserts an empty instrument containing several useful macros: PitchBend, Cutoff, Resonance, Cutoff LFO, Filter Drive, etc. | |

## 1.3 - Pattern Editor

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/ed27b39e-28c0-40ae-b9be-d86d66adb9c8)

| Item | Description | Notes |
| --- | --- | --- |
| `Random BPM` | Picks a random BPM value for the project. | |
| `Write Current BPM&LPB to Master column` | Self-explanatory. Useful to keep the project on rails when dealing with BPM and LPB changes. | |
| `Effect Column CheatSheet Dialog` | A pop-up window containg all pattern commands available in Renoise. | See [1.3.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#131---effect-column-cheatsheet-dialog). |
| `Collapse/Uncollapse All Tracks` | Self-explanatory. | |
| `Pattern Doubler` | Doubles the current pattern size while also duplicating its contents accordingly (notes, commands, etc). | |
| `Pattern Halver` | Sets the pattern to 1/2 current size. Works *differently* from the native keybind `CTRL+F8`, as it *does not adapt pattern content* to fit the new length. Simply put: pattern length is changed to half, but notes/commands remain in place. | |
| `Global Visible Column (All)` | Expands all columns in all tracks: Volume, Pan, Delay and FX.| |

### 1.3.1 - Effect Column CheatSheet Dialog

Please note: the FX Column CheatSheet also features sliders for the Volume, Pan, Delay and EFX columns. Moving a slider places the correspondent value in the highlighted track/line in the sequencer. It is very effective for manually programming intricate modulations: pick an effect, move the slider, move to next line, and so on. It's also the perfect companion for Renoise newcomers who still haven't learned the most important commands.

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/4d808eed-b606-4611-98c9-b7d0bcadf0d4)

## 1.4 - Plugins/Devices

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/565e275e-c4dd-4c99-a1ee-529ce2a12181)

| Item | Description | Notes |
| --- | --- | --- |
| `Debug` | Different plugin related utilities for debugging. Can be ignored by the average user. | |
| `Switch Plugin AutoSuspend OFF` | Quickly Enables/Disables the AutoSuspend function in Renoise. From the [user manual](https://tutorials.renoise.com/wiki/Plugin): "Auto Suspend: When enabled, Renoise will completely shut off the plugin when it is no longer producing sound. This is mainly done to reduce CPU usage." | |
| `Expose/Hide Selected Device Parameters in Mixer` | Display plugin parameters in the mixer as sliders. It's the default behavior for some native devices, such as the Compressor and Mixer EQ. | See [1.4.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#141---exposehide-selected-device-parameters-in-mixer). |
| `Expose/Hide Selected Track ALL Device Parameters` | Same as above, but applies to all devices in the selected track. | See [1.4.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#141---exposehide-selected-device-parameters-in-mixer). |
| `Hide Track DSP Devices for All Tracks` | | | 
| `Bypass/Enable All Devices on Track` | Self-explanatory. Useful to check pre/post processing. In other words, how the FX chain is affecting signals in a particular track. | |
| `Load AU/VST/VST3 Plugins Dialog` | A pop-up window to quickly load instrument plugins or add them as keyboard shortcuts. These plugin shortcuts can be found under the Keys tab in Renoise Preferences. | See [1.4.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#142---load-auvstvst3-plugins-dialog). | 
| `Open Visible Pages to Fit Plugin Parameter Count` | Fully expands a plugin/device window so all the parameter sliders are visible. | |

### 1.4.1 - Expose/Hide Selected Device Parameters in Mixer

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/9f779834-0454-41c3-a39f-b6f81d425e61)

### 1.4.2 - Load AU/VST/VST3 Plugins Dialog

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/37facf15-9d5b-46c1-b6dd-d679520b4919)

## 1.5 - MIDI Populator

The Paketti MIDI Populator is a powerful tool to automate project configuration for external MIDI controllers and/or sequencers. It allows the user to pick MIDI inputs/outputs and quickly insert plugin instruments (up to 16), including an option to randomize the VSTi selection. A new track is generated for every selected instrument - and outputs set accordingly. These tracks can be configured for automatic Send devices and number of Volume/Pan/Delay/FX columns. 

For users who do not have external hardware sequencers, a good use case for the MIDI Populator is to receive MIDI information from applications such as VCV Rack and Pure Data. However, a third party virtual MIDI server such as LoopBe1 may be necessary to connect these applications to Renoise. This way, you can build sequences in VCV Rack, for instance, and have audio output from VST plugins inside Renoise. Speaking of audio... a virtual audio cable (VAC) could also be used to simultaneously stream audio from VCV Rack (and other applications) to Renoise.

### 1.5.1 - MIDI Populator Quickstart

1. Select MIDI inputs and outputs.
2. Manually pick a plugin for each MIDI channel or use the `Randomize VST3 Plugin Selection` to randomly pick instruments.
3. Configure the remaining options, which range from number of note columns to automatic Send devices.

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/2528cb59-367c-4be1-ac79-ffbd033b811e)

Paketti will then generate a new track for each plugin, with automatic MIDI configuration and Send placement (if enabled):

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/3787ccc2-041a-48bb-b2e6-ab4ca40125c3)


