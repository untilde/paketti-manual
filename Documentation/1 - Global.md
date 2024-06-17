# 1.0 - Settings

Settings for Paketti can be found under Tools -> Paketti. This menu also includes some shortcuts for useful features:

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/1c8d99e7-562b-4fa6-b503-d0453349060f)

| Item | Description | Subtopic |
| --- | --- | --- |
| `Preferences` | Shows Paketti Preferences window. | 1.1 |
| `Instruments` | Contains sample and drumkit loaders, plus shortcuts for beatsync and pitchbend. | 1.2 |
| `Pattern Editor` | Random BPM, FX Cheat Sheet, Collapse/Uncollapse All, Double/Halve Pattern | 1.3 |
| `Plugin/Devices` | Multiple Plugin/Device functionalities. | 1.4 |
| `Donate` | Self-explanatory. [Buy the dude a hot dog](https://lackluster.gumroad.com/l/paketti). | - |
| `Show New Song Dialog` | Allows you to start a new song with the option to keep the same Patterns/Instruments/etc | - |
| `Open Paketti Path` | Self-explanatory | - |
| `∿ Squigly Sinewave to Clipboard` | Copy this symbol to easily find Paketti in the Keys window (under Renoise Preferences). | - |
| `Paketti MIDI Populator` | Automatically fills current Project with Tracks, Instruments, Sends and Macros for External MIDI Controllers. | 1.5 |
| `Clean Render Selected Track or Group` | Automatically bypasses FX in Track/Group before resampling. | - |
| `Catch Octave` | Self-explanatory. | - |
| `Clone Current Sequence` | Self-explanatory. | - |
| `Track Routings Dialog` | Displays a pop-up window containing all track audio device routings. | - |

## 1.1 - Preferences

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/d7a9cd74-6921-44c2-960a-a87f4fda788c)

| Item | Description | Notes |
| --- | --- | --- |
| `Upper Frame` | Enables/Disables upper frame control when using Impulse Tracker key commands. | See [insert IT topic - TBA] |
| `0G01 Loader` | Automatically enables the 0G01 hack for samples inserted using the Paketti loaders. | See the [Instrument Box chapter](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/2%20-%20Instrument%20Box.md) to better understand the 0G01 hack. |
| `Random BPM` | Self-explanatory. | - |
| `Pale Green Theme` | Loads Paketti color theme for Renoise. | - |
| `Gifts: Plaid Zap Load` | Insert a special XRNI instrument made from Plaid samples. | See [forum post](https://forum.renoise.com/t/plaidzap-xrni-gift/32521) |
| `Create New Instrument & Loop from Selection` | Quite Self-Explanatory. Works on the Sample Editor (right-click). | - |
| `Paketti Loader Settings` | Changes default settings for Paketti Drumkit/Multisample loaders. | See [1.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Global.md#12---instruments) for more details. |
| `Wipe & Slices Settings` | Determines default settings for slices generated via Paketti (under the Sampler window): Slice Loop Mode, Beatsync, Autoseek, etc. | See [3.0](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/3%20-%20Sampler.md)|
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

### 1.2.1 - 0G01 Loader

(under construction)

## 1.3 - Pattern Editor

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/8cef7d1f-e513-48e9-ac41-9fdd1dced4f5)

| Item | Description | Notes |
| --- | --- | --- |
| `Random BPM` | Picks a random BPM value for the project. | |
| `Write Current BPM&LPB to Master column` | Self-explanatory. Useful to keep the project on rails when dealing with BPM and LPB changes. | |
| `Effect Column CheatSheet Dialog` | A pop-up window containg all pattern commands available in Renoise. | More details in [1.3.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Global.md#131---effect-column-cheatsheet-dialog) |
| `Collapse/Uncollapse All Tracks` | Self-explanatory. | |
| `Pattern Doubler` | Doubles the current pattern size while also duplicating its contents accordingly (notes, commands, etc). | |
| `Pattern Halver` | Sets the pattern to 1/2 current size. | |

### 1.3.1 - Effect Column CheatSheet Dialog

Please note: the FX Column CheatSheet also features sliders for the Volume, Pan, Delay and EFX columns. Moving a slider places the correspondent value in the highlighted track/line in the sequencer. It is very effective for manually programming intricate modulations: pick an effect, move the slider, move to next line, and so on. It's also the perfect companion for Renoise newcomers who still haven't learned the most important commands.

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/94a6d838-e820-4b7c-9b59-bcb8763579cb)

## 1.4 - Plugins/Devices

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/6b23c4a5-a5f3-43a9-9440-aa1ed4c54f74)

| Item | Description | Notes |
| --- | --- | --- |
| `Debug` | Different plugin related utilities for debugging. Can be ignored by the average user. | See 1.4.1 |
| `Switch Plugin AutoSuspend OFF` | | |
| `Expose/Hide Selected Device Parameters in Mixer` | | |
| `Expose/Hide Selected Track ALL Device Parameters` | | |
| `Hide Track DSP Devices for All Tracks` | | | 
| `Bypass/Enable All Devices on Track` | | |
| `Load AU/VST/VST3 Plugins Dialog` | | | 
| `Load Native Devices Dialog` | | |
| `Load VST Devices Dialog` | | |
| `Load VST3/AU Devices Dialog` | | |
| `Open Visible Pages to Fit Plugin Parameter Count` | | |

### 1.4.1 - Debug options

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/dcf28bf1-29fe-4ce7-aa95-13f171ced27b)


| Item | Description | Notes |
| --- | --- | --- |

## 1.5 - MIDI Populator

| Item | Description | Notes |
| --- | --- | --- |
