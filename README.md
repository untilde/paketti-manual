<link rel="stylesheet" href="dark-mode.css">

| [Patreon Paketti](http://patreon.com/esaruoho) |
[GitHub Paketti](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/) |
[Discord Paketti](https://discord.gg/Qex7k5j4wG) |
[Gumroad Paketti](http://lackluster.gumroad.com/l/paketti) |

 1. [What is Paketti?](#What-is-paketti)
 2. [What people say about Paketti](#what-people-say-about-paketti)
 3. [Where to say things about Paketti](#where-to-say-things-about-paketti)
 4. [How to Support](#How-to-support)
 5. [Brickwall](#Brickwall)
 6. [Roadmap](#Roadmap)
 7. [Old About](#old-about)
 8. [Credits](#Credits)
 9. [Old Index](#Index)

# What is Paketti?

Paketti has been called a firmware update or a framework for Renoise. It introduces thousands of shortcuts, hundreds of midimappings, over 30 dialogs and multiple multiple tweaks to Renoise. 

## What people say about Paketti

"It's like it's Renoise+"

"Your extension has so much to it. I was playing around with it the other day and I feel like I need to spend just a day to learn everything I can do with it. It's like Renoise+"

"Your tool is really well thought out - most well thought out Renoise tool I've come across actually. Functions I even didn't think about and it's already inside your tool. Speaking of dedication."

"I was mostly in awe and started immediately imagining new ways to use renoise"

"This is by far the most thought out tool ever. Why is this not natively implemented?"

"every renoise user should know and use paketti, without it renoise is not so fun"

"got to be one of the most (if not the most) organized set of tools ive ever seen for Renoise."

"I found Paketti to be the most versatile and flexible in its development direction. It has made Renoise very useful and enjoyable to use. Thank you."

"You are essentially writing... a completely new framework over the engine.

## Where to say things about Paketti

- Join the [Paketti Discord](https://discord.gg/Qex7k5j4wG)
- Leave issues here on [GitHub](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/issues)
- Hit the mostly dead [Renoise Forum Paketti thread](https://forum.renoise.com/t/new-tool-3-1-paketti-now-compatible-with-renoise-v3-v3-4-4/)

# How to Support

You can 
- Join my [Patreon](http://patreon.com/esaruoho) as a monthly supporter. This adds up and would help me. There are different level tiers from 3€ to 300€.
- Sponsor me on GitHub at [GitHub Sponsors](https://github.com/sponsors/esaruoho)
- Send me a donation via [PayPal](http://paypal.me/esaruoho). 
- Buy Paketti via [Gumroad](https://lackluster.gumroad.com/l/paketti) for a one time purchase.

# Roadmap
I'm slowly processing through a bunch of Renoise Forums, such as "Ideas and Suggestions", "Beginners Questions" and filtering through them one thread at a time to see new ideas, deciding "This can be scripted" -> and add it to the todo-list.

The Ideas and Suggestions forum dump I created, has all the thread posts from 2002 onwards to 2024 April, all 7361 of them and as of October 30th I had only 4400 of them left to go through. This is only the beginning, because once I have made it through that list, it's time to check out the 5000+ Beginners questions, and the other couple of thousand threads from "Renoise Tools Discussion" & "Renoise Tools" for abandoned tools. 

After I've filtered up a list of things I can do, it's time to turn them into tickets. As of today, I have 543 items picked from "Ideas and Suggestions" - some of which I have already scripted.

I'm also running through contacting people and asking for more details, trying to get more ideas of their issues with Renoise or trackers.. And one thing leads to another.

If there's anything in the manual here, that feels obscure or requires more explaining, please send me a message or leave an issue, and I'll try to flesh it out and write it more clearly.

So to repeat, I'm adding features people have requested over the past 22 years, I'm adding features from other trackers, and also tweaking abandoned tools and making them work again, but the Paketti way, and introducing them.

Hence why it's useful if I can get as much support as I can to keep going at this, it feels like this'll take 3-5 years to cover everything. 

# Brickwall

Paketti tries to circumvent some of the most painful points of Renoise, and replace them with better, easier, faster, more user-friendly solutions.

#### Loading and Saving Samples

One of them is the complete dismissal of the Disk Browser. You don't need to use it to load samples. In fact, I would encourage you to never use it for loading or saving samples - just use the Paketti solutions.

For that, you just use the "Paketti PitchBend Multiple Sample Loader" & "Paketti PitchBend Drumkit Loader" shortcuts. they will load a sample, and immediately initialize it with:
PitchBend 2. Cutoff 3. Resonance 4. Cutoff LFO Frequency 5. Cutoff LFO Amp (4+5 are used for autofilter like features) 6. OverDrive 7. Parallel Compression 8. PitchBend Glide/Inertia (set it to max, and your regular midicontroller pitchbend input will be very slow, set it to minimum, pitchbending will be immediate). Everytime you load something using Paketti Loaders, the Paketti Preferences are used to introduce your preferred loopmode, autofade, autoseek, oneshot, interpolation setting, New note Action, selected FilterType.  for these, there's a Default XRNI instrument being used, which comes with Paketti. you can of course replace it with a completely different XRNI - which will then get it's sample overwritten on every load.

The `*Instr. Macros` device that is added to the track you are on, when you load the sample, allows you to directly start automating the macro parameters. Meaning, you would load a sample using Paketti, input a few notes to the pattern editor, and immediately be able to start drawing automation for any of the 8 macro controls. so you could for instance put in a drumloop, and start drawing a cutoff automation curve directly to modulate the cutoff parameter.

The DrumKit loader loads a max of 120 samples into the instrument. load more, it will only load 120 samples. same with the 8 macros, same with the instr macros. the drums are mapped automatically from C0 to B9. the Windows Explorer or macOS Finder is used for selecting files, meaning no Disk Browser use at all.

There's shortcuts and midimappings for saving the current sample as .WAV or .FLAC. There's also shortcuts+midimappings for saving the current selection in the Sample Editor to .WAV or .FLAC.

#### Loading Devices and Plugins

another is the introduction of shortcuts and midimappings for loading your preferred native devices (both regular, and hidden/legacy effects), your favorite VST,VST3,AudioUnit/LADSPA/DSSI devices. this means that you go to the Tools -> Paketti -> Plugins/Devices -> Device Loader dialog, and check your favorites, click on "add as shortcut/midimapping" and from here onwards, you can map the newly created shortcuts for loading your devices onto the track you are on. if you're in sample fx chain mode, those devices will be loaded instead of to track dsp. it means you can for instance (in my usecase) press shift-q e r t z a v  and out come 7 devices to the selected track.  same with midibuttons, after selecting your favorites, you can use the midi mappings to set up midibuttons for loading your desired device onto your selected track.

#### Wipe & Slice

there's a mathematical slicer, which takes your drumloop and, depending on which shortcut you pick, slices it in half (two slices), or 4 to max 128 slices. meaning if your loop already loops well, you can just split it into 16-32-64 slices and start drumming away at the loop.

for slices, there's also a method for adjusting the slices left & right by nudging the start / endpoint, much like MPC does it. it really is to be seen to be believed. it means you no longer need to keep zooming in and zooming out to adjust the slices, you can just view the slice itself, and adjust where it starts and stops.

there's also, to go with this logic, "Isolate Slices to New Instruments", which creates brand new instruments into your song, and if you say, were on slice 6 (let's say a snare), when you run the isolate slices, you'll still be on the snare, but snare as a newly created instrument.

#### Freeze & Flatten a.k.a. Clean Render Selected Track or Group.

there's a Clean Render Selected Track / Group. this will solo the selected track, render it as a wavefile, create a new track (named with a matching title such as "Bass (Rendered)" (if your original track was called Bass, input C-4 to the newly created track, ingest the 8 macros to it, mute the original track, collapse the original track, and if you select it, also bypass the effects in the original track. and it's ready to be automated, by default, too. if you have a line input device on the track, instead of "Highest" diskwriting speed it will switch to "Realtime" - meaning, if you have incoming audio being processed through renoise effects, that incoming audio will be recorded to the new instrument, with the effects. perfect for external synthesizers being controlled by midi, for instance.

#### Improved Automation drawing, including multi-pattern automation.

since the renoise automation drawing is quite limited, i've added midi shortcuts and menu entries for drawing curves up/down (exponential, linear), and also added logic that if you're trying to do an "exponential to max" curve on a pitchbend/panning automation lane, it will be drawn from the center to the top, instead of from the bottom to the top.
there's also multipattern automation drawing, meaning, you make a selection from pattern matrix and it will draw an exponential curve or linear curve from patternStart to patternEnd.

there's also midimappings for automation start and automation end, and a third midimapping knob for deciding which automation curve is drawn and from where to where. so you can pick an automation area, and use a knob to decide what the curve would look like.

i've also introduced a "Draw Automation to Selected Automation Parameter". this means, you're in ANY automation lane whatsoever, have playback on, set record on, set follow pattern on, and turn the knob == result == you are drawing automation to that lane. you don't need to map the midi anywhere in the track device or anywhere, just map it once to the "automate selected parameter" and just select any parameter and just draw in. it also works with selections, meaning, you select a section and draw with the knob, and it writes to the section (this with follow pattern off, of course).

<div style="position: relative; padding-bottom: 64.90384615384616%; height: 0;"><iframe src="https://www.loom.com/embed/5b46a1dd7d5e4d82b87ff145fc38c3cb?sid=7383c8f2-6daf-44ea-a9f2-305d602f5a21" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Paketti Theme Selector
This dialog comes in pre-populated with 518 themes, and you can pick your favorite themes out of the mix, and have Renoise randomize through the favorites (or all themes). So every time you boot up Renoise or load a new song, a different theme will load. Great for discovering new themes.

https://public-files.gumroad.com/i8xgettth9an6ibvc6l8oto44b05![image](https://github.com/user-attachments/assets/f5fcebe7-749d-417d-8fe9-fa95915c651e)

#### Paketti Gater
This allows directly writing in looping volume, retrig, backwardsplayback and panning gates. E
Each of these rows have their own steps, min 1 max 16. so if you have a 512 row pattern and use a 16 row volume gater, then it'll keep looping till the end of the 512 row patterns. or if you have a 3 row panning step, those 3 steps will repeat until the end of the pattern, and so on. these are also designed to type directly to the pattern editor, either for volume control of sample, or volume control of the mixer channel.

https://public-files.gumroad.com/w9a7t5n7ya2or8bpe8s795x7yn47![image](https://github.com/user-attachments/assets/5f7f8612-2cd5-44d8-8cfd-c36508022632)

Example:
![gater improvement updates](https://github.com/user-attachments/assets/97b3dc3e-6e06-4991-99d6-e9bb42fd00d6)

#### Paketti Groovebox 8120

There's a 8 part 16 step stepsequencer which writes directly to the Pattern Editor. You can load 120 samples into each part, pick your preferred sound, and use checkboxes to make them play. Probability checkboxes to modify how likely the step per part is to play, can draw automation directly by clicking on Show Automation (leveraging the 8 macros introduced on every Sample Load) and use buttons to randomize step sequencer content, select a random sample for all parts, or selecting random samples for each part, reverse any of the part or all part samples.. and you can limit the steps from 16 to 1 at will.
a brief demo at **SO HEY TWITCH DELETES STREAMS SO ITS GONE** // TODO I need to make a new one.

There's dozens of impulsetracker/screamtracker3 shortcuts for pattern editing and modification, some of which have been recently supercharged to also allow for selecting automation, gif here meaning when you select something using paketti shortcuts, it will also select the automation, if automation is visible. this can be combined with the midiknobs for drawing automation curves easily.
![alt-d alt-u with automation](https://github.com/user-attachments/assets/d58d4e85-d79a-4593-b738-2712dae5e098)

#### Dynamic Views for cycling through with shortcuts.

The Dynamic Views let you have a max of 8 shortcuts which cycle through the view settings that you have picked. each of the 8 shortcuts can have max 8 different cycles. 
<img width="1468" alt="Screenshot 2024-10-23 at 15 46 33" src="https://github.com/user-attachments/assets/246e911d-9522-4ed0-8e06-e0c57e31370e">
so you have maximum control over "view presets" but they're much more powerful than the 8 that renoise allows you to have, because they remember their state. You could, for instance, cycle, with one shortcut, from Pattern Editor to Sample Editor + show Sample Recorder, then press the same shortcut to hit Mixer, show Disk Browser + Pattern Matrix + Instrument Box, then again to only show Pattern Editor and Automation.

#### MIDI Populator

there's a method of creating 16 new tracks with 16 midi input channels and 16 midi output channels and 16 plugin devices, automatic send generation and line input generation, for those who want to use renoise with an external sequencer with a multi-out soundcard, or those who want to use renoise as a sequencer for external synthesizers and want to map the midioutput channels themselves. all of the generated samples will have midi control devices set up directly, and automation ready to go.
<img width="824" alt="Screenshot 2024-10-28 at 17 47 40" src="https://github.com/user-attachments/assets/40ad3f08-72d9-4f74-b668-c6cf38fd1f8c">

#### Default Phrase Settings
This allows you to set your Phrase Preferences - i.e., when you use the Paketti -specific shortcut for creating or modifying current Phrase, the settings will be added.
<img width="684" alt="Screenshot 2024-10-28 at 17 47 52" src="https://github.com/user-attachments/assets/db5aea29-5634-4dde-a61a-178e46711123">

#### eSpeak Text-to-Speech speechsynthesizer

This uses `espeak-ng` for creating spoken word samples using text-to-speech synthesis.
<img width="385" alt="Screenshot 2024-10-28 at 17 48 14" src="https://github.com/user-attachments/assets/b62eadd9-3afa-402b-a17e-35f9d87db8df">


there's randomizers for parameters of selected device, a mono-device which can be added or toggled on/off from the channel for quickly monoing
<img width="969" alt="Screenshot 2024-10-28 at 17 48 30" src="https://github.com/user-attachments/assets/b45988d9-f566-4b97-bc25-e729c3ab2c92">


the same shortcut + midimapping loader for devices, is also available for plugins, so vst,vst3,audiounit,ladspa,dssi softsynths can be shot to the instrument box with shortcuts + midimappings


there's an inverter device which inverts the audio - using the Gainer device. This can be added to both the Sample FX Chain and the Track DSP Chains.

The send and multiband send shortcuts load the native devices "correctly" aka "Keep Source and volume at zero" as opposed to "mute source and volume at max".. 
<img width="1036" alt="Screenshot 2024-10-28 at 17 49 45" src="https://github.com/user-attachments/assets/7e6f6ac2-c007-47a0-94c8-ef50820f95e7">

### 0G01 Loader

This uses the `G01` (Glide to note) trick to allow for playing really long samples, even if the pattern would be shorter than the length of the sample. The sample will play until the end, and then replay again at the start of the next replay. This means you can have a 4 second drumloop but play 20 minutes of pads on top of it.

there's a midimapping + shortcut that 1) shows sample recorder 2) starts recording 3) press the shortcut again, it stops the recording, throws in the 8 macros
so you can quickly start recording anything by just pressing the shortcut or holding down a midi button, let go of the midibutton, sampling stops

there's a pattern cheatsheet which lets you input pattern commands to either selected row or selection in pattern:
<img width="621" alt="Screenshot 2024-10-28 at 17 50 01" src="https://github.com/user-attachments/assets/57086eb7-b7c9-47f0-a4da-ff4f22e4624d">


there's shortcuts + midimappings for inputting volume, panning, delay, samplefx effect commands and effect parameters to the selection in pattern

there's "flood fill by editstep" shortcuts which let you take what's under your cursor and repeat it every 6th row or 8th row etc, or every row.

there's a replicate at cursor shortcut, which enables this kind of stuff:

<div style="position: relative; padding-bottom: 64.90384615384616%; height: 0;"><iframe src="https://www.loom.com/embed/a437d74618934e9db634ceb41b1c5b9a?sid=10a1da7b-de26-4b44-87b0-dcc735ba62c9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

https://www.loom.com/share/a437d74618934e9db634ceb41b1c5b9a?sid=ead6a274-1a6a-4ea1-a068-344fed4aef23

there's a "Set Repeater Value" Knob midimapping which will either 1) add repeater and activate it 2)detect repeater exists and modify the parameters, allowing for stuff like this:

https://www.loom.com/share/f4f94d05045a4df49896d52202d3adf7?sid=9c7c6c79-005d-48f4-ba21-ac06475b5bfc

there's shortcuts for changing pattern length to 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512 - methods for duplicating content with 1-256 row patterns to double it, then `LPB*2` diskwriting aka rendering a new sample, but making a clone of the pattern and setting it's LPB to current LPB, then the clone of the pattern has LPB times two, and the audio playing there.  there's seamless rendering, aka if you have anything below 257 rows of pattern, it will duplicate it, render it, select the beginning 256 rows (so you can delete them if you like) and add a loop to the other 256 rows so you can have a reliably looping (mostly) long pad with tail mixed in..  mono to stereo converters for sample data (mono to left, right blank, mono to right, left blank, mono to stereo with both).. there's a yt-dlp downloader that downloads the full audio from a youtube video, instagram, facebook, twitter posts, and it already has the macros loaded in.. and there's multiple missing shortcuts for sample pitch finetune panning loop etc controls, same for midi.. i could go on. i've done max 4 hour demos of going through all the features, normally around 45minutes to 1,5hours depending on what i remember to show

there's "Duplicate Instrument and Reverse" - which both makes a copy of the currently selected instrument, and then reverses the sample, and selects the sample.
Duplicate Track and Instrument - will take the notes that are there in the current track. + track dsps, and make a new track, select the track, and duplicate the instrument. and if you have a plugin open in the original instrument, and duplicate the instrument with this script, then it closes the plugin external editor, and duplicates the instrument, jumps to the newly created track, and opens the plugin's external editor for it.
there's a dialog that lets you randomize a selected device, or all devices in a selected track, or selected plugin, or all selected plugins,  -- there's 5 different flavors of all four of those, with percentages you can set for them.
there's a "duplicate track with selected instrument", meaning you can keep copying the note content, but it'll be branded with your current instrument, instead of it being a duplicated instrument.

the randomize with percentage was from ModPlugTracker. there's also a bunch of features from PlayerPro, such as this note inputting dialog, which lets you input notes, with editstep, to selection, or current row, meaning you can do stuff like this. there's also a method of hovering the mouse to write effect columns to the selection in pattern..
i've also replicated the OctaMED Pick/Put Note technique, which lets you pick any note column + effect column content, and put it down. think of it like macros for note column + effect column content.  you can do them with shortcuts (both picking up and putting down) but also with midi. so you could for instance have chords grabbed and keep slamming them down - there's also controls for printing the information with a specific instrument.

one thing i keep forgetting is the Launch App Selection. you can define 6 apps, and when you run the shortcut, or menu entry, or click on "Send selected sample" in the dialog, it saves a temporary file and loads it in the app. such as audacity, apple music, ableton live (straight to session view). there's also a backup folder (3 places) where it saves to one of the three places depending on the shortcut

I've also built two dialogs for showing keybindings - with fuzzy search. one shows Paketti shortcuts only, the other shows all Renoise KeyBindings but can be filtered with tools or without tools, etc.

then there's tiny audio tools such as "strip silence", "move beginning silence to the end".. shortcuts for invert left channel, invert right channel (or invert both channels). audio rotators, so moving the beginning to the left until it crosses over to the end, i.e. "nudge audio left / right", then there's rotation for moving the audio waveform up and down for extreme dcoffset and clippy distortion. then there's a DC Offset kick generator,  "Selection in pattern to group" (turn selected tracks into one group), 
midimappings for toggling effects on and off. midimappings + shortcuts for displaying the external editor on Master or selected track, of a specific track. i.e. if you use renoise for mastering and always have certain types of effects on master, you can show/hide that specifically named effect, no matter where it is in the effect chain. and if it's not in the track dsp chain, then it will be loaded and added in.
uncollapse/collapse all tracks for clearing up visual clutter
Convolver IR export and IR import - when you export the selected IR, it opens up in the sample editor, so you can modify it, then import it back in.
Switch Plugin Auto-Suspend On/Off
"Save All Samples to Backup Folder 1...3" - all samples in the song will be saved to your preferred folder
Unison Generator, takes a chipsound and makes 8 identical copies of it, shifts each of them left by 1/8 to 7/8 - modifies the volume, randomizes finetune, randomizes panning, and drops the overall volume (and includes the instrument macros in the copy) - for a nicer chipsound
there's hundreds of Section/Sequence/Selection shortcuts for queueing what plays next, or skipping to the next section or previous section or "what's next in the queue" and wiping the queue
there's a global shortcut for Clone Current Sequence, 
Resize all non-empty patterns to 96 rows..  and Resize all non-empty patterns to <current pattern> rows
Create Identical Track - takes the Note Columns / Effect Columns & Visible Columns&copies

For a selection in sample editor, you can press a shortcut to "create new instrument & loop". there's "mute or solo selection in pattern",  expand/shrink selection content shortcuts, set selection to selected instrument.. bypass all effects in track, or enable.. show all parameters of all devices in track

Oblique Strategies Dialog / Loader - it will randomly pick one Oblique Strategy from a list on the status whenever you save or load a song or restart Renoise
Paketti Midi Mappings - it shows some of the Paketti MidiMappings and if you have Midi Mapping "Learn" mode on, you can actually pick them yourself and assign them easily. for better discoverability
Output Routings dialog that shows all the tracks and lets you set the Output Routings in case you have a multi-out soundcard
Shortcuts for setting each track, or the Master, to a specific output routing channel (01-64) for those with multi-out soundcards
Track Renamer - select a bunch of tracks with selection-in-pattern and rename them all in one go, one track at a time
Phrase Doubler / Halver (takes the content of the Phrase and increases the size or decreases the size
Set Phrase Length to 001-004-006-008-012-016-024-032-048-064-096-128-192-256-384-512
Set Phrase LPB 1-256
same for pattern LPB
Print current BPM & LPB to Master track of Pattern - so can modify the tempo in another pattern -good for `LPB*2` i.e. increasing resolution
Keep Sequence Sorted True/False/Toggle
15 frame fade in fade out for reducing clicks
Duplicate sample, maximize audio, turn to 16bit, save as wav or flac (in case you want to deliver them or post them somewhere)
Flip Sample - this allows for 1/2 1/4 1/8 1/16 flipping/rotating of a sample, good for beats if you wanna flip it or any other type of sample
select first half of sample buffer shortcut - and second half too. midimappings for select sample buffer start and end, so you can just use two knobs to select the length and modify
set loop mode off, forward, pingpong, backwards
copy note-on sample to note-off at transpose 0, +12, +24, -12, -24 meaning when you hit a note off on a bassnote, the same basenote can play an octave higher or lower - good for octave basses
jump to first track in next group / jump to first track in previous group

midimappings for select instrument, select track, keyboard octave, editstep 0-64 and 1-64, double editstep halve editstep, beatsync line control / double beatsync / halve beatsync
8 midimappings for controlling the macros of the current instrument. meaning, you use the 8 midimappings on any track and you can control macro knobs without having to assign them to a specific instrument. i.e. they're "free" / "dynamic" for lack of a better word
Interval generator. shortcuts for adding +1 to +12 to the current note - adds a new note column, moves to it and adds a note that is +x or -x higher/lower than the original basenote. also midimappings for selecting multiple chord intervals 
good for experimenting with basenotes and writing intervals in and seeing what happens. couple that with the Paketti Gater and you can go wherever you please really.
Wipe Effects from selection in pattern
shortcuts for showing a specific number of note columns, or effect columns
expose / hide note columns or effect columns - this replaces the Renoise "add new note column" by actually exposing it AND selecting it. much more intuitive
direct shortcuts for writing Axx to Zxx effects and their content (+1 -1 +10 -10) to selection or row
match delay column to current row  (or panning, or volume).. means you have a row you've selected, run the shortcut, every row in the pattern gets the same delay, or panning, or volume setting
Note Interpolation (entering notes from beginning to end of selection so c-1 at 00 and c-5 at 64? every step has an interpolated value based on math
randomize delay, panning and volume value for selected tracks and their columns
flood fill with selection - takes your selection and fills the pattern with it in a loop
shortcuts for setting visible columns (vol,pan,delay,samplefx) for all tracks globally
clear/delete track dsp effects from current track
bpm increase +0.1 -0.1 +0.5 -0.5 +1 -1 +5 -5 
bypass all devices on all tracks
bypass all devices on selected track

set master output volume in dB to -INF or 0 or -0.1 +0.1 -1 +1 for better control
midi mappings for setting global groove control 1,2,3,4
multi-combos like "shortcut for toggling play, record, follow pattern, metronome on/off" or "toggle play,record,followpattern on/off, or record+followpattern on/off
hide open track dsp device + sample fx device external editors
shortcuts + menu entries for adding sample modulation devices (all available for volume, pan, cutoff, resonance, overdrive, pitch) 
shortcut for adding and opening formula device
direct shortcut for exposing the pitchstep device external editor, which is included in all Paketti-loaded samples so you can immediately start pitching it up and around for extra randomness
visual editmode for highlighting which track is selected, for those with aged eyes and who have grown tired of trying to figure out which track they've selected
volume, panning, delay dialog with 16 sliders - basically another step control for setting specific settings, again 16 steps but can be reduced to 1-16 steps for each, so they can be offset
shortcuts for starting playback at a specific row (000-512)..
shortcuts for starting playback at a random line of the pattern, or random 2nd or 4th or 8th row (in order to be able to step across it in a stair/stepped way
play current line and step forwards, play current line and step backwards, for those who want to use renoise as a.. musical box? @tkna how would you describe this with words?
shortcuts for selecting a specific track i.e. 1-32, you set the shortcut and it jumps you there
sample fx group + mod group shortcuts for modifying them, same with mute groups
show/hide selected track's device 1 to 64, another external editor shower/hider
a mode to enter where if you're in effect column, it'll jump you to the next row in that track that has a note. so you can enter effects to where the notes are

okay.. just realized i completely neglected to talk about the "Paketti Automation" setup.

This brings Master track automation of Global Groove, LPB (1-32), BPM (20-300), EditStep, Octave, EditMode, Recorder, Pattern Length, Instrument Pitch, Instrument LoopStart, Instrument LoopEnd, and 3 other things that remain to be figured out and configured.

this means you can actually automate when the recording is on or off, when sample is being recorded (!), what the selected instrument pitch ir or selected instrument loopstart+loopend, and there's 3 more additional things that could be automated, if i could just figure out what they are. any ideas?

the reason why there's LPB + BPM control is that the BPM in Renoise Master track automation is 20-999 (!) and LPB is 1-256, so  just a bit too much, i asked around a lot and 20-300 and 1-32 seemed to be the agreed upon, anything more, just let me know (64?). but to maintain automation resolution and "keeping it making sense", for most uses, these artifiical limitations are alright

i think the reason why i forgot to mention this was that i have had a tough time finding anyone to tell me what else could be done. i did experiments of using automation to change lower frame, middle frame, upper frame views, for instance. basically any script can be run like this. but i couldn't get anyone to talk to me about what they wanted and gave up and forgot about it

# Old About

Paketti is a multipurpose Renoise tool. Working like an expansion pack, it delivers hundreds of new functionalities to the app, ranging from Quality-of-Life (QoL) improvements to new advanced features inspired by Impulse Tracker, Schism Tracker, ModPlugTracker, Player Pro, John Player/Quantum SoundTracker/PollyTracker, OctaMED and many others. It also addresses multiple community requests from the Renoise Forum that were not yet considered by the developers. 

It is far too complex to sum up in just a few words. However, some notable changes include:

* Over three thousand new keybinds covering multiple areas of Renoise;
* Default XRNI functionality - each loaded instrument or drumkit has Pitchbend, Glide Amount, Cutoff, Resonance, Cutoff LFO Amount, Cutoff LFO Frequency, Overdrive, Parallel Compression.
* Automatically load multiple samples into sequential instrument slots;
* Device parameter randomizer;
* Plugin parameter randomizer;
* Change default computer keyboard Velocity with Midi Mapping;
* Change Global Grooves with Midi Mapping;
* Freeze & Flatten Track -> Creates a new Track with content playing. Also Records incoming audio if `#Line-in Device` is in the Selected Track;
* Quick switch autosuspend for Selected Plugin;
* Bypass all devices in Selected Track;
* Floating window to insert plugins or Devices and add them as keybinds and MidiMappings;
* Floating interactable FX column cheat sheet, including sliders to quickly write changes to row or selection in pattern in your pattern;
* Pattern doubler/halver (duplicates the Pattern content, and the automation);
* Color/highlight the selected track in Pattern Editor (with EditMode (Record On/Off);
* Dozens of shortcuts for Pattern AND Phrase editing;
* Impulse Tracker (.it) key commands (`ALT-D *2`, `ALT-L *2`, `ALT-U`, `ALT-F`, `ALT-G`, `ALT-Y`, `Home *2`, `End *2`, `F2 F3 F4 F5 F6 F8 F12`);
* Quickly add Automation curves to pattern automation (fade ins/fade outs (linear or exponential), pitchbend/panning);
* Show/Hide Device parameters as sliders in the Mixer;
* Control Selected Sample loop start/endpoints with MIDI;
* Control Automation start / endSelection via MidiMappings
* Control Sample Buffer start / endSelection via MidiMappings
* And much much more!

# Credits

The original Paketti Manual projects was started by @un, thanks a lot for that. He donated it to me, @esaruoho - and I started tweaking it a bit.

Paketti is a project by Esa Ruoho, a.k.a Lackluster (@esaruoho). More information [here](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/blob/master/README.md#thanks).
This documentation was originally started by @un


# Index

For better comprehension, this manual is divided into sections. Each chapter corresponds to a different Renoise screen/tab and can be accessed from the list below:

## Global

## 1 - 'Tools' Menu

Settings for Paketti can be found under `Main Menu -> Tools -> Paketti..`. This menu also includes some shortcuts for useful features:

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

### 1.1 - Preferences

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

### 1.2 - Instruments

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/f3fa1092-6f7a-43ad-a6a8-7880e55278ba)

| Item | Description | Notes |
| --- | --- | --- |
| `PitchBend Drumkit Sample Loader` | Automatically generates a drumkit from selected samples. Includes some macros. Samples are adjusted according the your Paketti Loader Settings (see 1.1 above). | |
| `PitchBend Multiple Sample Loader` | Automatically generates one instrument for each selected sample. Sample are also adjusted according to Loader Settings. | |
| `Start Sampling (Record)` | Pops up the Renoise Sampler Recorder and starts playback. Objective for usage is to set "Pattern" mode, and record multi-pattern length content. | |
| `Beat Sync Lines Halve/Double` | Adjusts the Beatsync time for all slices in the Selected Instrument. Does not affect the first/main sample. | |
| `Xst PitchBend Instrument Init` | Inserts an empty instrument containing several useful macros: PitchBend, Cutoff, Resonance, Cutoff LFOAmp, Cutoff LFOFreq, Overdrive, Parallel Compression and PitchBend Glide Inertia. | |

### 1.3 - Pattern Editor

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/ed27b39e-28c0-40ae-b9be-d86d66adb9c8)

| Item | Description | Notes |
| --- | --- | --- |
| `Random BPM` | Picks a random BPM value for the project. | |
| `Write Current BPM&LPB to Master column` | This writes both the current BPM and the LPB to the Master Track. Useful when you change LPB / BPM across the song patterns. | |
| `Effect Column CheatSheet Dialog` | A pop-up window containg all pattern commands available in Renoise. | See [1.3.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#131---effect-column-cheatsheet-dialog). |
| `Collapse/Uncollapse All Tracks` | Collapses (minimizes) or Uncollapses (maximizes) all the Tracks, Groups, Master and Sends. | |
| `Pattern Doubler` | Doubles the current pattern size while also duplicating its contents accordingly (notes, volume, panning, delay, samplefx columns and effect columns, and automation. | |
| `Pattern Halver` | Sets the pattern to 1/2 current size. Works *differently* from the native keybind `CTRL+F8`, as it *does not adapt pattern content* to fit the new length. Simply put: pattern length is changed to half, but notes/commands remain in place. | |
| `Global Visible Column (All)` | Expands all columns in all tracks: Volume, Pan, Delay and SampleFX.| |

#### 1.3.1 - Effect Column CheatSheet Dialog

Please note: the Effect Column CheatSheet also features sliders for the Volume, Pan, Delay, SampleFX and Effect Columns. Moving a slider places the correspondent value in the highlighted row or selection in pattern. It is very effective for manually programming intricate modulations: pick an effect, move the slider, move to next line, and so on. It's also the perfect companion for Renoise newcomers who still haven't learned the most important commands.
<img width="587" alt="Screenshot 2024-09-05 at 21 07 59" src="https://github.com/user-attachments/assets/30f3622b-39ce-47b4-a3c9-3e77007577f2">

### 1.4 - Plugins/Devices

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/565e275e-c4dd-4c99-a1ee-529ce2a12181)

| Item | Description | Notes |
| --- | --- | --- |
| `Debug` | Different plugin related utilities for debugging. Can be ignored by the average user. | |
| `Switch Plugin AutoSuspend OFF` | Quickly Enables/Disables the AutoSuspend function in Renoise. From the [user manual](https://tutorials.renoise.com/wiki/Plugin): "Auto Suspend: When enabled, Renoise will completely shut off the plugin when it is no longer producing sound. This is mainly done to reduce CPU usage." | |
| `Expose/Hide Selected Device Parameters in Mixer` | Display plugin parameters in the mixer as sliders. It's the default behavior for some native devices, such as the Compressor and Mixer EQ. | See [1.4.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#141---exposehide-selected-device-parameters-in-mixer). |
| `Expose/Hide Selected Track ALL Device Parameters` | Same as above, but applies to all devices in the selected track. | See [1.4.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#141---exposehide-selected-device-parameters-in-mixer). |
| `Hide Track DSP Devices for All Tracks` | If External Editors for any devices on Track DSP are visible, this will hide their External Editors. | | 
| `Bypass/Enable All Devices on Track` | Self-explanatory. Useful to check pre/post processing. In other words, how the FX chain is affecting signals in a particular track. | |
| `Load AU/VST/VST3 Plugins Dialog` | A pop-up window to quickly load instrument plugins or add them as keyboard shortcuts. These plugin shortcuts can be found under the Keys tab in Renoise Preferences. | See [1.4.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#142---load-auvstvst3-plugins-dialog). | 
| `Open Visible Pages to Fit Plugin Parameter Count` | Fully expands a plugin/device window so all the parameter sliders are visible. | |

#### 1.4.1 - Expose/Hide Selected Device Parameters in Mixer

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/9f779834-0454-41c3-a39f-b6f81d425e61)

#### 1.4.2 - Load AU/VST/VST3 Plugins Dialog

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/37facf15-9d5b-46c1-b6dd-d679520b4919)

### 1.5 - MIDI Populator

The Paketti MIDI Populator is a powerful tool to automate project configuration for external MIDI controllers and/or sequencers. It allows the user to pick MIDI inputs/outputs and quickly insert plugin instruments (up to 16), including an option to randomize the VSTi selection. A new track is generated for every selected instrument - and outputs set accordingly. These tracks can be configured for automatic Send devices and number of Volume/Pan/Delay/FX columns. 

For users who do not have external hardware sequencers, a good use case for the MIDI Populator is to receive MIDI information from applications such as VCV Rack and Pure Data. However, a third party virtual MIDI server such as LoopBe1 may be necessary to connect these applications to Renoise. This way, you can build sequences in VCV Rack, for instance, and have audio output from VST plugins inside Renoise. Speaking of audio... a virtual audio cable (VAC) could also be used to simultaneously stream audio from VCV Rack (and other applications) to Renoise.

#### 1.5.1 - MIDI Populator Quickstart

1. Select MIDI inputs and outputs.
2. Manually pick a plugin for each MIDI channel or use the `Randomize VST3 Plugin Selection` to randomly pick instruments.
3. Configure the remaining options, which range from number of note columns to automatic Send devices.

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/b840bc3b-7f6a-4a83-8e45-89e08cba3b76)

Paketti will then generate a new track for each plugin, with automatic MIDI In/Out configuration and Send population (if enabled), and also `#Line-In Device` placement for all tracks, in case the objective is to use audio inputs..

## Instrument Box

By right-clicking the Instrument Box (by default, located on the right corner of the screen) another set of Paketti features is available:

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/d99f524c-1924-455f-ab63-bdf59bde3d07)

| Item | Description | Subtopic |
| --- | --- | --- |
| `Initialize...` | Creates a new empty instrument which includes pre-configured macros for common modulations: PitchBend, Filter Cutoff, Amp Envelope, Drive, etc. If the 0G01 hack is enabled, a new track is created and the command placed in the first line of current pattern alongside the C-4 note. This will be further explained later in the current chapter, so bear with me. | 2.1 |
| `Launch App...` | Sends the selected samples to desired applications. Can be used to bounce stems into another DAW or to export files into a sample manager, such as Sononym. | 2.2 |
| `Smart Folders...` | | |
| `Wipe & Slice...` | Clears all slice markers in the selected instrument. It can also replace the current slices with a new set of equally distributed slices (2/4/8/16/32/64/128). In vanilla Renoise the slices have to be manually removed in the Sampler window - so this option automates this process. | |
| `Duplicate and Select New Instrument` | Self-explanatory. | |
| `Switch Plugin AutoSuspend Off` | Quickly Enables/Disables the AutoSuspend function in Renoise. From the user manual: "Auto Suspend: When enabled, Renoise will completely shut off the plugin when it is no longer producing sound. This is mainly done to reduce CPU usage". This option is also available in the Tools menu. | |
| `Create Phrase` | Self-explanatory. | |
| `PitchBend Drumkit Sample Loader` | Automatically generates a drumkit from selected samples. Includes some macros. Samples are adjusted according the your Paketti Loader Settings (see 1.1 above). This option is also available in the Tools menu. | |
| `PitchBend Multiple Sample Loader` | Automatically generates one instrument for each selected sample. Sample are also adjusted according to Loader Settings. This option is also available in the Tools menu. | |
| `Save Selected Sample .WAV/.FLAC` | Self-explanatory. | |
| `Wipe Song Retain Sample` | Self-explanatory. | |
| `Clean Render Selected Track or Group` | Works like the "Freeze and Flatten" option in some other DAWs. It renders the current (source) track into a new instrument and automatically places a C-4 on the first line of a new track. After that, the source track is automatically muted and collapsed. Useful to share your .xrns without fearing plugin dependencies, to free up CPU or maybe just to support your resampling needs. | |
| `Record to Current Track` | | |
| `Start Sampling (Record)` | | |

### 2.1 - The 0G01 Hack

UNDER CONSTRUCTION

### 2.2 - Launch App

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/5090fc14-a94a-43c9-9178-47ed4f08ae48)

## Sampler

| Item | Description | Subtopic |
| --- | --- | --- |


## Pattern Editor

## Automation

## Pattern Matrix

## Mixer

## Phrase Editor

## Paketti KeyBindings

(Extracted on 2024-09-08 (YYYY-MM-DD) using "Paketti KeyBindings Dialog".

```
0001     Global                   Paketti                  ∿ 12st PitchBend Instrument Init                                  <Shortcut not Assigned>
0002     Global                   Paketti                  ∿ 24st PitchBend Instrument Init                                  <Shortcut not Assigned>
0003     Global                   Paketti                  ∿ 36st PitchBend Instrument Init                                  <Shortcut not Assigned>
0004     Global                   Paketti                  ∿ 48st PitchBend Instrument Init                                  <Shortcut not Assigned>
0005     Global                   Paketti                  ∿ 64st PitchBend Instrument Init                                  <Shortcut not Assigned>
0006     Global                   Paketti                  ∿ 96st PitchBend Instrument Init                                  <Shortcut not Assigned>
0007     Global                   Paketti                  ∿ AU/VST/VST3/Native Plugins/Effects Lister Dump                  <Shortcut not Assigned>
0008     Global                   Paketti                  ∿ Add 84 Sample Slots to Instrument                               <Shortcut not Assigned>
0009     Global                   Paketti                  ∿ Add Current Section to Scheduled Sequences                      <Shortcut not Assigned>
0010     Global                   Paketti                  ∿ Add Current Sequence to Scheduled List                          <Shortcut not Assigned>
0011     Global                   Paketti                  ∿ Add Filter & LFO (AutoFilter)                                   Shift + Command + F
0012     Global                   Paketti                  ∿ Add New Phrase                                                  Shift + Control + A
0013     Global                   Paketti                  ∿ Add Sample Slot to Instrument                                   <Shortcut not Assigned>
0014     Global                   Paketti                  ∿ Add Sequence 00 to Scheduled List                               <Shortcut not Assigned>
0015     Global                   Paketti                  ∿ Add Sequence 01 to Scheduled List                               <Shortcut not Assigned>
0016     Global                   Paketti                  ∿ Add Sequence 02 to Scheduled List                               <Shortcut not Assigned>
0017     Global                   Paketti                  ∿ Add Sequence 03 to Scheduled List                               <Shortcut not Assigned>
0018     Global                   Paketti                  ∿ Add Sequence 04 to Scheduled List                               <Shortcut not Assigned>
0019     Global                   Paketti                  ∿ Add Sequence 05 to Scheduled List                               <Shortcut not Assigned>
0020     Global                   Paketti                  ∿ Add Sequence 06 to Scheduled List                               <Shortcut not Assigned>
0021     Global                   Paketti                  ∿ Add Sequence 07 to Scheduled List                               <Shortcut not Assigned>
0022     Global                   Paketti                  ∿ Add Sequence 08 to Scheduled List                               <Shortcut not Assigned>
0023     Global                   Paketti                  ∿ Add Sequence 09 to Scheduled List                               <Shortcut not Assigned>
0024     Global                   Paketti                  ∿ Add Sequence 10 to Scheduled List                               <Shortcut not Assigned>
0025     Global                   Paketti                  ∿ Add Sequence 11 to Scheduled List                               <Shortcut not Assigned>
0026     Global                   Paketti                  ∿ Add Sequence 12 to Scheduled List                               <Shortcut not Assigned>
0027     Global                   Paketti                  ∿ Add Sequence 13 to Scheduled List                               <Shortcut not Assigned>
0028     Global                   Paketti                  ∿ Add Sequence 14 to Scheduled List                               <Shortcut not Assigned>
0029     Global                   Paketti                  ∿ Add Sequence 15 to Scheduled List                               <Shortcut not Assigned>
0030     Global                   Paketti                  ∿ Add Sequence 16 to Scheduled List                               <Shortcut not Assigned>
0031     Global                   Paketti                  ∿ Add Sequence 17 to Scheduled List                               <Shortcut not Assigned>
0032     Global                   Paketti                  ∿ Add Sequence 18 to Scheduled List                               <Shortcut not Assigned>
0033     Global                   Paketti                  ∿ Add Sequence 19 to Scheduled List                               <Shortcut not Assigned>
0034     Global                   Paketti                  ∿ Add Sequence 20 to Scheduled List                               <Shortcut not Assigned>
0035     Global                   Paketti                  ∿ Add Sequence 21 to Scheduled List                               <Shortcut not Assigned>
0036     Global                   Paketti                  ∿ Add Sequence 22 to Scheduled List                               <Shortcut not Assigned>
0037     Global                   Paketti                  ∿ Add Sequence 23 to Scheduled List                               <Shortcut not Assigned>
0038     Global                   Paketti                  ∿ Add Sequence 24 to Scheduled List                               <Shortcut not Assigned>
0039     Global                   Paketti                  ∿ Add Sequence 25 to Scheduled List                               <Shortcut not Assigned>
0040     Global                   Paketti                  ∿ Add Sequence 26 to Scheduled List                               <Shortcut not Assigned>
0041     Global                   Paketti                  ∿ Add Sequence 27 to Scheduled List                               <Shortcut not Assigned>
0042     Global                   Paketti                  ∿ Add Sequence 28 to Scheduled List                               <Shortcut not Assigned>
0043     Global                   Paketti                  ∿ Add Sequence 29 to Scheduled List                               <Shortcut not Assigned>
0044     Global                   Paketti                  ∿ Add Sequence 30 to Scheduled List                               <Shortcut not Assigned>
0045     Global                   Paketti                  ∿ Add Sequence 31 to Scheduled List                               <Shortcut not Assigned>
0046     Global                   Paketti                  ∿ All Samples Loop Cycler (Backwards)                             <Shortcut not Assigned>
0047     Global                   Paketti                  ∿ All Samples Loop Cycler (Forwards)                              <Shortcut not Assigned>
0048     Global                   Paketti..                ∿ Automation Bottom to Center (Exp)                               <Shortcut not Assigned>
0049     Global                   Paketti..                ∿ Automation Bottom to Center (Lin)                               <Shortcut not Assigned>
0050     Global                   Paketti..                ∿ Automation Center to Bottom (Exp)                               <Shortcut not Assigned>
0051     Global                   Paketti..                ∿ Automation Center to Bottom (Lin)                               <Shortcut not Assigned>
0052     Global                   Paketti..                ∿ Automation Center to Top (Exp)                                  <Shortcut not Assigned>
0053     Global                   Paketti..                ∿ Automation Center to Top (Lin)                                  <Shortcut not Assigned>
0054     Global                   Paketti..                ∿ Automation Ramp Down (Exp)                                      <Shortcut not Assigned>
0055     Global                   Paketti..                ∿ Automation Ramp Down (Lin)                                      <Shortcut not Assigned>
0056     Global                   Paketti..                ∿ Automation Ramp Up (Exp)                                        <Shortcut not Assigned>
0057     Global                   Paketti..                ∿ Automation Ramp Up (Lin)                                        <Shortcut not Assigned>
0058     Global                   Paketti..                ∿ Automation Top to Center (Exp)                                  <Shortcut not Assigned>
0059     Global                   Paketti..                ∿ Automation Top to Center (Lin)                                  <Shortcut not Assigned>
0060     Global                   Paketti                  ∿ BPM Decrease (-0.1)                                             Shift + RBracket
0061     Global                   Paketti                  ∿ BPM Decrease (-0.5)                                             Shift + Control + Backslash
0062     Global                   Paketti                  ∿ BPM Decrease (-1)                                               Backslash
0063     Global                   Paketti                  ∿ BPM Decrease (-5)                                               <Shortcut not Assigned>
0064     Global                   Paketti                  ∿ BPM Increase (+0.1)                                             Command + RBracket
0065     Global                   Paketti                  ∿ BPM Increase (+0.5)                                             Control + Backslash
0066     Global                   Paketti                  ∿ BPM Increase (+1)                                               Shift + Backslash
0067     Global                   Paketti                  ∿ BPM Increase (+5)                                               <Shortcut not Assigned>
0068     Global                   Paketti                  ∿ Bypass All Other Track DSP Devices (Toggle)                     <Shortcut not Assigned>
0069     Global                   Paketti                  ∿ Catch Octave                                                    <Shortcut not Assigned>
0070     Global                   Paketti                  ∿ Change Master Track Volume by +0.1dB                            <Shortcut not Assigned>
0071     Global                   Paketti                  ∿ Change Master Track Volume by -0.1dB                            <Shortcut not Assigned>
0072     Global                   Paketti                  ∿ Clean Render&Save Selected Track/Group (.FLAC)                  <Shortcut not Assigned>
0073     Global                   Paketti                  ∿ Clean Render&Save Selected Track/Group (.WAV)                   Shift + Control + R
0074     Global                   Paketti                  ∿ Clear Pattern Sequence Loop                                     <Shortcut not Assigned>
0075     Global                   Paketti                  ∿ Clone Current Pattern to Current Sequence                       <Shortcut not Assigned>
0076     Global                   Paketti                  ∿ Clone Current Pattern to Current Sequence (2nd)                 <Shortcut not Assigned>
0077     Global                   Paketti                  ∿ Clone Current Pattern to Current Sequence (3rd)                 <Shortcut not Assigned>
0078     Global                   Paketti                  ∿ Clone Current Sequence                                          <Shortcut not Assigned>
0079     Global                   Paketti                  ∿ Clone and Expand Pattern to LPB*2                               <Shortcut not Assigned>
0080     Global                   Paketti                  ∿ Clone and Shrink Pattern to LPB/2                               <Shortcut not Assigned>
0081     Global                   Paketti                  ∿ Collapse All Tracks                                             <Shortcut not Assigned>
0082     Global                   Paketti                  ∿ Column Cycle Keyjazz 01_Special                                 Shift + Option + Control + 1
0083     Global                   Paketti                  ∿ Column Cycle Keyjazz 1                                          <Shortcut not Assigned>
0084     Global                   Paketti                  ∿ Column Cycle Keyjazz 10                                         <Shortcut not Assigned>
0085     Global                   Paketti                  ∿ Column Cycle Keyjazz 11                                         <Shortcut not Assigned>
0086     Global                   Paketti                  ∿ Column Cycle Keyjazz 12                                         Shift + Option + Control + 5
0087     Global                   Paketti                  ∿ Column Cycle Keyjazz 2                                          <Shortcut not Assigned>
0088     Global                   Paketti                  ∿ Column Cycle Keyjazz 3                                          <Shortcut not Assigned>
0089     Global                   Paketti                  ∿ Column Cycle Keyjazz 4                                          Shift + Option + Control + 4
0090     Global                   Paketti                  ∿ Column Cycle Keyjazz 5                                          <Shortcut not Assigned>
0091     Global                   Paketti                  ∿ Column Cycle Keyjazz 6                                          <Shortcut not Assigned>
0092     Global                   Paketti                  ∿ Column Cycle Keyjazz 7                                          <Shortcut not Assigned>
0093     Global                   Paketti                  ∿ Column Cycle Keyjazz 8                                          <Shortcut not Assigned>
0094     Global                   Paketti                  ∿ Column Cycle Keyjazz 9                                          <Shortcut not Assigned>
0095     Global                   Paketti                  ∿ Computer Keyboard Velocity (+1)                                 <Shortcut not Assigned>
0096     Global                   Paketti                  ∿ Computer Keyboard Velocity (+10)                                <Shortcut not Assigned>
0097     Global                   Paketti                  ∿ Computer Keyboard Velocity (+16)                                <Shortcut not Assigned>
0098     Global                   Paketti                  ∿ Computer Keyboard Velocity (-1)                                 <Shortcut not Assigned>
0099     Global                   Paketti                  ∿ Computer Keyboard Velocity (-10)                                <Shortcut not Assigned>
0100     Global                   Paketti                  ∿ Computer Keyboard Velocity (-16)                                <Shortcut not Assigned>
0101     Global                   Paketti                  ∿ Continue Current Sequence From Same Line                        <Shortcut not Assigned>
0102     Global                   Paketti                  ∿ Continue Sequence 00 From Same Line                             <Shortcut not Assigned>
0103     Global                   Paketti                  ∿ Continue Sequence 01 From Same Line                             <Shortcut not Assigned>
0104     Global                   Paketti                  ∿ Continue Sequence 02 From Same Line                             <Shortcut not Assigned>
0105     Global                   Paketti                  ∿ Continue Sequence 03 From Same Line                             <Shortcut not Assigned>
0106     Global                   Paketti                  ∿ Continue Sequence 04 From Same Line                             <Shortcut not Assigned>
0107     Global                   Paketti                  ∿ Continue Sequence 05 From Same Line                             <Shortcut not Assigned>
0108     Global                   Paketti                  ∿ Continue Sequence 06 From Same Line                             <Shortcut not Assigned>
0109     Global                   Paketti                  ∿ Continue Sequence 07 From Same Line                             <Shortcut not Assigned>
0110     Global                   Paketti                  ∿ Continue Sequence 08 From Same Line                             <Shortcut not Assigned>
0111     Global                   Paketti                  ∿ Continue Sequence 09 From Same Line                             <Shortcut not Assigned>
0112     Global                   Paketti                  ∿ Continue Sequence 10 From Same Line                             <Shortcut not Assigned>
0113     Global                   Paketti                  ∿ Continue Sequence 11 From Same Line                             <Shortcut not Assigned>
0114     Global                   Paketti                  ∿ Continue Sequence 12 From Same Line                             <Shortcut not Assigned>
0115     Global                   Paketti                  ∿ Continue Sequence 13 From Same Line                             <Shortcut not Assigned>
0116     Global                   Paketti                  ∿ Continue Sequence 14 From Same Line                             <Shortcut not Assigned>
0117     Global                   Paketti                  ∿ Continue Sequence 15 From Same Line                             <Shortcut not Assigned>
0118     Global                   Paketti                  ∿ Continue Sequence 16 From Same Line                             <Shortcut not Assigned>
0119     Global                   Paketti                  ∿ Continue Sequence 17 From Same Line                             <Shortcut not Assigned>
0120     Global                   Paketti                  ∿ Continue Sequence 18 From Same Line                             <Shortcut not Assigned>
0121     Global                   Paketti                  ∿ Continue Sequence 19 From Same Line                             <Shortcut not Assigned>
0122     Global                   Paketti                  ∿ Continue Sequence 20 From Same Line                             <Shortcut not Assigned>
0123     Global                   Paketti                  ∿ Continue Sequence 21 From Same Line                             <Shortcut not Assigned>
0124     Global                   Paketti                  ∿ Continue Sequence 22 From Same Line                             <Shortcut not Assigned>
0125     Global                   Paketti                  ∿ Continue Sequence 23 From Same Line                             <Shortcut not Assigned>
0126     Global                   Paketti                  ∿ Continue Sequence 24 From Same Line                             <Shortcut not Assigned>
0127     Global                   Paketti                  ∿ Continue Sequence 25 From Same Line                             <Shortcut not Assigned>
0128     Global                   Paketti                  ∿ Continue Sequence 26 From Same Line                             <Shortcut not Assigned>
0129     Global                   Paketti                  ∿ Continue Sequence 27 From Same Line                             <Shortcut not Assigned>
0130     Global                   Paketti                  ∿ Continue Sequence 28 From Same Line                             <Shortcut not Assigned>
0131     Global                   Paketti                  ∿ Continue Sequence 29 From Same Line                             <Shortcut not Assigned>
0132     Global                   Paketti                  ∿ Continue Sequence 30 From Same Line                             <Shortcut not Assigned>
0133     Global                   Paketti                  ∿ Continue Sequence 31 From Same Line                             <Shortcut not Assigned>
0134     Global                   Paketti                  ∿ Contour Shuttle Record Off                                      <Shortcut not Assigned>
0135     Global                   Paketti                  ∿ Contour Shuttle Record On                                       <Shortcut not Assigned>
0136     Global                   Paketti                  ∿ Contour Shuttle Record Prototype                                <Shortcut not Assigned>
0137     Global                   Paketti                  ∿ Create Identical Track                                          <Shortcut not Assigned>
0138     Global                   Paketti                  ∿ Create New Instrument & Loop from Selection                     Option + Command + Right
0139     Global                   Paketti                  ∿ Create New Phrase using Paketti Settings                        <Shortcut not Assigned>
0140     Global                   Paketti                  ∿ Delete / Clear / Wipe Entire Row                                <Shortcut not Assigned>
0141     Global                   Paketti                  ∿ Delete / Clear / Wipe Selected Note Column with EditStep        Shift + Command + G
0142     Global                   Paketti                  ∿ Diagonal Line to 16800 length Sample                            <Shortcut not Assigned>
0143     Global                   Paketti                  ∿ Display Sample Recorder with #Line Input                        <Shortcut not Assigned>
0144     Global                   Paketti                  ∿ Double Beatsync Lines (All)                                     <Shortcut not Assigned>
0145     Global                   Paketti                  ∿ Double Beatsync Lines (Selected Sample)                         <Shortcut not Assigned>
0146     Global                   Paketti                  ∿ Double LPB                                                      <Shortcut not Assigned>
0147     Global                   Paketti                  ∿ Dump Current Instrument parameters                              <Shortcut not Assigned>
0148     Global                   Paketti                  ∿ Duplicate Effect Column Content to Pattern or Selection         Option + X
0149     Global                   Paketti                  ∿ Duplicate Instrument and Select Last Instrument                 <Shortcut not Assigned>
0150     Global                   Paketti                  ∿ Duplicate Instrument and Select New Instrument                  Shift + Command + D
0151     Global                   Paketti                  ∿ Duplicate Instrument and Select New Instrument (2nd)            <Shortcut not Assigned>
0152     Global                   Paketti                  ∿ Duplicate Instrument and Select New Instrument (3rd)            <Shortcut not Assigned>
0153     Global                   Paketti                  ∿ Duplicate Track Duplicate Instrument                            <Shortcut not Assigned>
0154     Global                   Paketti                  ∿ Duplicate Track, set to Selected Instrument                     <Shortcut not Assigned>
0155     Global                   Paketti                  ∿ Duplicate and Reverse Instrument                                Shift + Command + R
0156     Global                   Paketti                  ∿ Expose/Hide Selected Device Parameters in Mixer                 <Shortcut not Assigned>
0157     Global                   Paketti                  ∿ Expose/Hide Selected Track ALL Device Parameters                <Shortcut not Assigned>
0158     Global                   Paketti..                ∿ FT2 Minimize Selected Sample                                    <Shortcut not Assigned>
0159     Global                   Paketti                  ∿ Fullscreen (2nd)                                                <Shortcut not Assigned>
0160     Global                   Paketti                  ∿ Gainer Exponential Curve Down                                   <Shortcut not Assigned>
0161     Global                   Paketti                  ∿ Gainer Exponential Curve Up                                     <Shortcut not Assigned>
0162     Global                   Paketti                  ∿ Generate Paketti Midi Mappings to Console                       <Shortcut not Assigned>
0163     Global                   Paketti                  ∿ Global Edit Mode Toggle                                         <Shortcut not Assigned>
0164     Global                   Paketti                  ∿ Group Tracks Note Column Solo Toggle                            <Shortcut not Assigned>
0165     Global                   Paketti                  ∿ Halve Beatsync Lines (All)                                      <Shortcut not Assigned>
0166     Global                   Paketti                  ∿ Halve Beatsync Lines (Selected Sample)                          <Shortcut not Assigned>
0167     Global                   Paketti                  ∿ Halve LPB                                                       <Shortcut not Assigned>
0168     Global                   Paketti                  ∿ Hide Track DSP Device External Editors                          <Shortcut not Assigned>
0169     Global                   Paketti                  ∿ Hide Track DSP Device External Editors for All Tracks           Command + H
0170     Global                   Paketti                  ∿ Impulse Tracker 8 Play Current Line & Advance by EditStep       <Shortcut not Assigned>
0171     Global                   Paketti                  ∿ Impulse Tracker ALT-F10 (Solo Toggle)                           <Shortcut not Assigned>
0172     Global                   Paketti                  ∿ Impulse Tracker ALT-Y Swap Block                                Command + Y
0173     Global                   Paketti                  ∿ Impulse Tracker CTRL-N New Song Dialog                          Control + N
0174     Global                   Paketti                  ∿ Impulse Tracker F11 Order List                                  F11
0175     Global                   Paketti                  ∿ Impulse Tracker F12 Master                                      F12
0176     Global                   Paketti                  ∿ Impulse Tracker F2 Pattern Editor                               F2
0177     Global                   Paketti                  ∿ Impulse Tracker F2 Pattern Editor Mini                          <Shortcut not Assigned>
0178     Global                   Paketti                  ∿ Impulse Tracker F2 Pattern Editor ONLY                          <Shortcut not Assigned>
0179     Global                   Paketti                  ∿ Impulse Tracker F3 Sample Editor                                F3
0180     Global                   Paketti                  ∿ Impulse Tracker F3 Sample Editor Only                           <Shortcut not Assigned>
0181     Global                   Paketti                  ∿ Impulse Tracker F4 Instrument Editor                            F4
0182     Global                   Paketti                  ∿ Impulse Tracker F5 Start Playback                               F5
0183     Global                   Paketti                  ∿ Impulse Tracker F5 Start Playback (2nd)                         <Shortcut not Assigned>
0184     Global                   Paketti                  ∿ Impulse Tracker F7 Start Playback from Cursor Row               F7
0185     Global                   Paketti                  ∿ Impulse Tracker F7 Start Playback from Cursor Row (2nd)         RControl
0186     Global                   Paketti                  ∿ Impulse Tracker F8 Stop Playback (Panic)                        F8
0187     Global                   Paketti                  ∿ Impulse Tracker F8 Stop Playback (Panic) (2nd)                  <Shortcut not Assigned>
0188     Global                   Paketti                  ∿ Impulse Tracker F8 Stop/Start Playback (Panic)                  <Shortcut not Assigned>
0189     Global                   Paketti                  ∿ Impulse Tracker PageDown Jump Lines                             <Shortcut not Assigned>
0190     Global                   Paketti                  ∿ Impulse Tracker PageUp Jump Lines                               <Shortcut not Assigned>
0191     Global                   Paketti                  ∿ Impulse Tracker Pattern (Next)                                  <Shortcut not Assigned>
0192     Global                   Paketti                  ∿ Impulse Tracker Pattern (Previous)                              <Shortcut not Assigned>
0193     Global                   Paketti                  ∿ Init Selected Sample (Autofade,Interpolation,Oversample)        <Shortcut not Assigned>
0194     Global                   Paketti                  ∿ Insert Random Delay to Selected Row                             Shift + Option + 1
0195     Global                   Paketti                  ∿ Insert Random Panning to Selected Row                           Shift + Option + 2
0196     Global                   Paketti                  ∿ Insert Random Volume to Selected Row                            Shift + Option + 3
0197     Global                   Paketti                  ∿ Insert Stereo -&gt; Mono device to Beginning of DSP Chain       <Shortcut not Assigned>
0198     Global                   Paketti                  ∿ Insert Stereo -&gt; Mono device to Beginning of Master          <Shortcut not Assigned>
0199     Global                   Paketti                  ∿ Insert Stereo -&gt; Mono device to End of DSP Chain             Option + S
0200     Global                   Paketti                  ∿ Insert Stereo -&gt; Mono device to End of Master                <Shortcut not Assigned>
0201     Global                   Paketti                  ∿ Insert Track (2nd)                                              <Shortcut not Assigned>
0202     Global                   Paketti                  ∿ Inspect Device in Slot 2                                        <Shortcut not Assigned>
0203     Global                   Paketti                  ∿ Inspect Plugin                                                  <Shortcut not Assigned>
0204     Global                   Paketti                  ∿ Interpolate Effect Column Parameters                            Shift + Option + I
0205     Global                   Paketti                  ∿ Isolate Slices or Samples to New Instruments                    <Shortcut not Assigned>
0206     Global                   Paketti                  ∿ Jump to Sends                                                   Shift + Command + Control + Right
0207     Global                   Paketti                  ∿ Jump to Sequence (Next)                                         <Shortcut not Assigned>
0208     Global                   Paketti                  ∿ Jump to Sequence (Previous)                                     <Shortcut not Assigned>
0209     Global                   Paketti                  ∿ KeybOctave Down                                                 <Shortcut not Assigned>
0210     Global                   Paketti                  ∿ KeybOctave Up                                                   <Shortcut not Assigned>
0211     Global                   Paketti                  ∿ LPB Decrease (-1)                                               <Shortcut not Assigned>
0212     Global                   Paketti                  ∿ LPB Increase (+1)                                               <Shortcut not Assigned>
0213     Global                   Paketti                  ∿ Load Device Chain SimpleSend                                    Shift + Control + S
0214     Global                   Paketti                  ∿ Load FabFilter One                                              Option + Command + F
0215     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) AHDSR                        <Shortcut not Assigned>
0216     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) Envelope                     <Shortcut not Assigned>
0217     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) Fader                        <Shortcut not Assigned>
0218     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) Key Tracking                 <Shortcut not Assigned>
0219     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) LFO                          <Shortcut not Assigned>
0220     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) Operand                      <Shortcut not Assigned>
0221     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) Stepper                      <Shortcut not Assigned>
0222     Global                   Paketti                  ∿ Load Modulation Device (01 Volume) Velocity Tracking            <Shortcut not Assigned>
0223     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) AHDSR                       <Shortcut not Assigned>
0224     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) Envelope                    <Shortcut not Assigned>
0225     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) Fader                       <Shortcut not Assigned>
0226     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) Key Tracking                <Shortcut not Assigned>
0227     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) LFO                         <Shortcut not Assigned>
0228     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) Operand                     <Shortcut not Assigned>
0229     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) Stepper                     <Shortcut not Assigned>
0230     Global                   Paketti                  ∿ Load Modulation Device (02 Panning) Velocity Tracking           <Shortcut not Assigned>
0231     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) AHDSR                         <Shortcut not Assigned>
0232     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) Envelope                      <Shortcut not Assigned>
0233     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) Fader                         <Shortcut not Assigned>
0234     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) Key Tracking                  <Shortcut not Assigned>
0235     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) LFO                           <Shortcut not Assigned>
0236     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) Operand                       <Shortcut not Assigned>
0237     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) Stepper                       <Shortcut not Assigned>
0238     Global                   Paketti                  ∿ Load Modulation Device (03 Pitch) Velocity Tracking             <Shortcut not Assigned>
0239     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) AHDSR                        <Shortcut not Assigned>
0240     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) Envelope                     <Shortcut not Assigned>
0241     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) Fader                        <Shortcut not Assigned>
0242     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) Key Tracking                 <Shortcut not Assigned>
0243     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) LFO                          <Shortcut not Assigned>
0244     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) Operand                      <Shortcut not Assigned>
0245     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) Stepper                      <Shortcut not Assigned>
0246     Global                   Paketti                  ∿ Load Modulation Device (04 Cutoff) Velocity Tracking            <Shortcut not Assigned>
0247     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) AHDSR                     <Shortcut not Assigned>
0248     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) Envelope                  <Shortcut not Assigned>
0249     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) Fader                     <Shortcut not Assigned>
0250     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) Key Tracking              <Shortcut not Assigned>
0251     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) LFO                       <Shortcut not Assigned>
0252     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) Operand                   <Shortcut not Assigned>
0253     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) Stepper                   <Shortcut not Assigned>
0254     Global                   Paketti                  ∿ Load Modulation Device (05 Resonance) Velocity Tracking         <Shortcut not Assigned>
0255     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) AHDSR                         <Shortcut not Assigned>
0256     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) Envelope                      <Shortcut not Assigned>
0257     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) Fader                         <Shortcut not Assigned>
0258     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) Key Tracking                  <Shortcut not Assigned>
0259     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) LFO                           <Shortcut not Assigned>
0260     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) Operand                       <Shortcut not Assigned>
0261     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) Stepper                       <Shortcut not Assigned>
0262     Global                   Paketti                  ∿ Load Modulation Device (06 Drive) Velocity Tracking             <Shortcut not Assigned>
0263     Global                   Paketti                  ∿ Load Plugin (AU) Amigo                                          Shift + Option + A
0264     Global                   Paketti                  ∿ Load Plugin (AU) Attack                                         Option + A
0265     Global                   Paketti                  ∿ Load Plugin (AU) Bucket ONE                                     Shift + Command + B
0266     Global                   Paketti                  ∿ Load Plugin (AU) Knif Audio Knifonium                           <Shortcut not Assigned>
0267     Global                   Paketti                  ∿ Load Plugin (AU) Kontakt 7                                      <Shortcut not Assigned>
0268     Global                   Paketti                  ∿ Load Plugin (AU) One                                            <Shortcut not Assigned>
0269     Global                   Paketti                  ∿ Load Plugin (AU) PPG Wave 2.V                                   Shift + Option + P
0270     Global                   Paketti                  ∿ Load Plugin (AU) Scaler 2                                       <Shortcut not Assigned>
0271     Global                   Paketti                  ∿ Load Plugin (AU) Vintage                                        Option + V
0272     Global                   Paketti                  ∿ Load Plugin (AU) XO                                             Shift + Command + X
0273     Global                   Paketti                  ∿ Load Plugin (AU) Zebralette                                     <Shortcut not Assigned>
0274     Global                   Paketti                  ∿ Load Plugin (VST) ANA2                                          <Shortcut not Assigned>
0275     Global                   Paketti                  ∿ Load Plugin (VST) BucketOne                                     <Shortcut not Assigned>
0276     Global                   Paketti                  ∿ Load Plugin (VST) Scaler2                                       <Shortcut not Assigned>
0277     Global                   Paketti                  ∿ Load Plugin (VST) XO                                            <Shortcut not Assigned>
0278     Global                   Paketti                  ∿ Load Plugin (VST3) Bucket ONE                                   <Shortcut not Assigned>
0279     Global                   Paketti                  ∿ Load Plugin (VST3) Kontakt                                      <Shortcut not Assigned>
0280     Global                   Paketti                  ∿ Load Plugin (VST3) Kontakt 7                                    <Shortcut not Assigned>
0281     Global                   Paketti                  ∿ Load Rhino 2.1 AU                                               <Shortcut not Assigned>
0282     Global                   Paketti                  ∿ Load Surge (VST)                                                <Shortcut not Assigned>
0283     Global                   Paketti                  ∿ Load U-He Zebra (VST)                                           Option + Z
0284     Global                   Paketti                  ∿ Load Waldorf Attack (VST)                                       <Shortcut not Assigned>
0285     Global                   Paketti                  ∿ Load Waldorf PPG v2 (VST)                                       Option + Command + P
0286     Global                   Paketti                  ∿ Master TDR Kotelnikov Show/Hide                                 <Shortcut not Assigned>
0287     Global                   Paketti                  ∿ Metronome BPB Decrease (-1)                                     <Shortcut not Assigned>
0288     Global                   Paketti                  ∿ Metronome BPB Increase (+1)                                     <Shortcut not Assigned>
0289     Global                   Paketti                  ∿ Metronome LPB Decrease (-1)                                     <Shortcut not Assigned>
0290     Global                   Paketti                  ∿ Metronome LPB Increase (+1)                                     <Shortcut not Assigned>
0291     Global                   Paketti                  ∿ Modify Current Phrase using Paketti Settings                    <Shortcut not Assigned>
0292     Global                   Paketti                  ∿ Move Beginning Silence to End                                   <Shortcut not Assigned>
0293     Global                   Paketti                  ∿ Move Slice End Left by 10                                       <Shortcut not Assigned>
0294     Global                   Paketti                  ∿ Move Slice End Left by 100                                      <Shortcut not Assigned>
0295     Global                   Paketti                  ∿ Move Slice End Left by 300                                      <Shortcut not Assigned>
0296     Global                   Paketti                  ∿ Move Slice End Left by 500                                      <Shortcut not Assigned>
0297     Global                   Paketti                  ∿ Move Slice End Right by 10                                      <Shortcut not Assigned>
0298     Global                   Paketti                  ∿ Move Slice End Right by 100                                     <Shortcut not Assigned>
0299     Global                   Paketti                  ∿ Move Slice End Right by 300                                     <Shortcut not Assigned>
0300     Global                   Paketti                  ∿ Move Slice End Right by 500                                     <Shortcut not Assigned>
0301     Global                   Paketti                  ∿ Move Slice Start Left by 10                                     <Shortcut not Assigned>
0302     Global                   Paketti                  ∿ Move Slice Start Left by 100                                    <Shortcut not Assigned>
0303     Global                   Paketti                  ∿ Move Slice Start Left by 300                                    <Shortcut not Assigned>
0304     Global                   Paketti                  ∿ Move Slice Start Left by 500                                    <Shortcut not Assigned>
0305     Global                   Paketti                  ∿ Move Slice Start Right by 10                                    <Shortcut not Assigned>
0306     Global                   Paketti                  ∿ Move Slice Start Right by 100                                   <Shortcut not Assigned>
0307     Global                   Paketti                  ∿ Move Slice Start Right by 300                                   <Shortcut not Assigned>
0308     Global                   Paketti                  ∿ Move Slice Start Right by 500                                   <Shortcut not Assigned>
0309     Global                   Paketti                  ∿ Note Column Solo Toggle                                         <Shortcut not Assigned>
0310     Global                   Paketti                  ∿ Note Off / Caps Lock replacement                                <Shortcut not Assigned>
0311     Global                   Paketti                  ∿ Numpad SelectPlay 0                                             <Shortcut not Assigned>
0312     Global                   Paketti                  ∿ Numpad SelectPlay 1                                             <Shortcut not Assigned>
0313     Global                   Paketti                  ∿ Numpad SelectPlay 2                                             <Shortcut not Assigned>
0314     Global                   Paketti                  ∿ Numpad SelectPlay 3                                             <Shortcut not Assigned>
0315     Global                   Paketti                  ∿ Numpad SelectPlay 4                                             <Shortcut not Assigned>
0316     Global                   Paketti                  ∿ Numpad SelectPlay 5                                             <Shortcut not Assigned>
0317     Global                   Paketti                  ∿ Numpad SelectPlay 6                                             <Shortcut not Assigned>
0318     Global                   Paketti                  ∿ Numpad SelectPlay 7                                             <Shortcut not Assigned>
0319     Global                   Paketti                  ∿ Numpad SelectPlay 8                                             <Shortcut not Assigned>
0320     Global                   Paketti                  ∿ Numpad SelectPlay 9                                             <Shortcut not Assigned>
0321     Global                   Paketti                  ∿ Octave Basenote Down                                            <Shortcut not Assigned>
0322     Global                   Paketti                  ∿ Octave Basenote Up                                              <Shortcut not Assigned>
0323     Global                   Paketti                  ∿ Open External Editor for Plugin                                 Apostrophe
0324     Global                   Paketti                  ∿ Open External Editor for Plugin (2nd)                           <Shortcut not Assigned>
0325     Global                   Paketti                  ∿ Open External Editor of Selected Effect                         <Shortcut not Assigned>
0326     Global                   Paketti                  ∿ Open FormulaDevice Dialog...                                    Command + Control + F
0327     Global                   Paketti                  ∿ Open Oblique Strategies Dialog...                               Control + O
0328     Global                   Paketti                  ∿ Open Paketti Init Phrase Dialog...                              Command + I
0329     Global                   Paketti Theme Selector   ∿ Open Paketti Theme Selector Dialog                              Shift + Option + Comma
0330     Global                   Paketti                  ∿ Open User Preferences Dialog                                    <Shortcut not Assigned>
0331     Global                   Paketti                  ∿ Open Visible Pages to Fit Parameters                            <Shortcut not Assigned>
0332     Global                   Paketti                  ∿ Paketti Audio Processing Tools Dialog...                        Control + A
0333     Global                   Paketti                  ∿ Paketti Automation                                              Option + T
0334     Global                   Paketti                  ∿ Paketti Gater Dialog...                                         Control + G
0335     Global                   Paketti                  ∿ Paketti MIDI Mappings                                           Shift + Command + M
0336     Global                   Paketti                  ∿ Paketti MIDI Populator Dialog...                                <Shortcut not Assigned>
0337     Global                   Paketti                  ∿ Paketti PitchBend Drumkit Sample Loader                         Shift + Command + O
0338     Global                   Paketti                  ∿ Paketti PitchBend Multiple Sample Loader                        Command + O
0339     Global                   Paketti                  ∿ Paketti Save Selected Sample .FLAC                              <Shortcut not Assigned>
0340     Global                   Paketti                  ∿ Paketti Save Selected Sample .WAV                               Command + W
0341     Global                   Paketti                  ∿ Paketti Save Selected Sample Range .FLAC                        <Shortcut not Assigned>
0342     Global                   Paketti                  ∿ Paketti Save Selected Sample Range .WAV                         Shift + Command + W
0343     Global                   Paketti                  ∿ Paketti Track Dater & Titler                                    Control + S
0344     Global                   Paketti                  ∿ Paketti Unison Generator                                        Option + U
0345     Global                   Paketti                  ∿ Paketti eSpeak Generate Sample                                  <Shortcut not Assigned>
0346     Global                   Paketti                  ∿ Paketti eSpeak Generate Selection                               <Shortcut not Assigned>
0347     Global                   Paketti                  ∿ Paketti eSpeak Refresh                                          <Shortcut not Assigned>
0348     Global                   Paketti                  ∿ Paketti eSpeak Text-to-Speech                                   Control + E
0349     Global                   Paketti                  ∿ Pakettify Current Instrument                                    <Shortcut not Assigned>
0350     Global                   Paketti                  ∿ Pattern Editor &lt;-&gt; Midi Editor Switcher                   <Shortcut not Assigned>
0351     Global                   Paketti                  ∿ Pattern Effect Command CheatSheet                               F1
0352     Global                   Paketti                  ∿ Pattern Resize and Fill 032                                     <Shortcut not Assigned>
0353     Global                   Paketti                  ∿ Pattern Resize and Fill 064                                     <Shortcut not Assigned>
0354     Global                   Paketti                  ∿ Pattern Resize and Fill 128                                     <Shortcut not Assigned>
0355     Global                   Paketti                  ∿ Pattern Resize and Fill 256                                     <Shortcut not Assigned>
0356     Global                   Paketti                  ∿ Pattern Resize and Fill 512                                     <Shortcut not Assigned>
0357     Global                   Paketti                  ∿ Phrase Editor Visible                                           <Shortcut not Assigned>
0358     Global                   Paketti Theme Selector   ∿ Pick a Random Theme (All)                                       Shift + Option + Control + Comma
0359     Global                   Paketti Theme Selector   ∿ Pick a Random Theme (Favorites)                                 Shift + Control + Comma
0360     Global                   Paketti                  ∿ PitchBend Drumkit Instrument Init                               <Shortcut not Assigned>
0361     Global                   Paketti                  ∿ Play at 100% Speed (Song BPM)                                   <Shortcut not Assigned>
0362     Global                   Paketti                  ∿ Play at 75% Speed (Song BPM)                                    <Shortcut not Assigned>
0363     Global                   Paketti                  ∿ Populate Send Tracks for All Tracks                             <Shortcut not Assigned>
0364     Global                   Paketti                  ∿ Populate Send Tracks for Selected Track                         <Shortcut not Assigned>
0365     Global                   Paketti                  ∿ Quantization Decrease (-1)                                      <Shortcut not Assigned>
0366     Global                   Paketti                  ∿ Quantization Increase (+1)                                      <Shortcut not Assigned>
0367     Global                   Paketti                  ∿ Random BPM from List                                            <Shortcut not Assigned>
0368     Global                   Paketti                  ∿ Randomize All Devices of Track with User1 (%)                   <Shortcut not Assigned>
0369     Global                   Paketti                  ∿ Randomize All Devices of Track with User2 (%)                   <Shortcut not Assigned>
0370     Global                   Paketti                  ∿ Randomize All Devices of Track with User3 (%)                   <Shortcut not Assigned>
0371     Global                   Paketti                  ∿ Randomize All Devices of Track with User4 (%)                   <Shortcut not Assigned>
0372     Global                   Paketti                  ∿ Randomize All Devices of Track with User5 (%)                   <Shortcut not Assigned>
0373     Global                   Paketti                  ∿ Randomize All Plugins in Song with User1 (%)                    <Shortcut not Assigned>
0374     Global                   Paketti                  ∿ Randomize All Plugins in Song with User2 (%)                    <Shortcut not Assigned>
0375     Global                   Paketti                  ∿ Randomize All Plugins in Song with User3 (%)                    <Shortcut not Assigned>
0376     Global                   Paketti                  ∿ Randomize All Plugins in Song with User4 (%)                    <Shortcut not Assigned>
0377     Global                   Paketti                  ∿ Randomize All Plugins in Song with User5 (%)                    <Shortcut not Assigned>
0378     Global                   Paketti                  ∿ Randomize Devices and Plugins Dialog                            <Shortcut not Assigned>
0379     Global                   Paketti                  ∿ Randomize Effect Column Parameters                              Shift + Option + X
0380     Global                   Paketti                  ∿ Randomize Selected Device                                       Option + R
0381     Global                   Paketti                  ∿ Randomize Selected Device with User1 (%)                        <Shortcut not Assigned>
0382     Global                   Paketti                  ∿ Randomize Selected Device with User2 (%)                        <Shortcut not Assigned>
0383     Global                   Paketti                  ∿ Randomize Selected Device with User3 (%)                        <Shortcut not Assigned>
0384     Global                   Paketti                  ∿ Randomize Selected Device with User4 (%)                        <Shortcut not Assigned>
0385     Global                   Paketti                  ∿ Randomize Selected Device with User5 (%)                        <Shortcut not Assigned>
0386     Global                   Paketti                  ∿ Randomize Selected Instrument Modulation Filter Type            Shift + Option + M
0387     Global                   Paketti                  ∿ Randomize Selected Plugin                                       <Shortcut not Assigned>
0388     Global                   Paketti                  ∿ Randomize Selected Plugin with User1 (%)                        <Shortcut not Assigned>
0389     Global                   Paketti                  ∿ Randomize Selected Plugin with User2 (%)                        <Shortcut not Assigned>
0390     Global                   Paketti                  ∿ Randomize Selected Plugin with User3 (%)                        <Shortcut not Assigned>
0391     Global                   Paketti                  ∿ Randomize Selected Plugin with User4 (%)                        <Shortcut not Assigned>
0392     Global                   Paketti                  ∿ Randomize Selected Plugin with User5 (%)                        <Shortcut not Assigned>
0393     Global                   Paketti                  ∿ Randomize Selected Sample Finetune/Transpose +6/-6              <Shortcut not Assigned>
0394     Global                   Paketti                  ∿ Randomize Selected Sample Transpose +6/-6 Finetune +127/-127    <Shortcut not Assigned>
0395     Global                   Paketti                  ∿ Record Follow                                                   <Shortcut not Assigned>
0396     Global                   Paketti                  ∿ Record to Current Track                                         <Shortcut not Assigned>
0397     Global                   Paketti                  ∿ Record to Current Track w/Metronome                             <Shortcut not Assigned>
0398     Global                   Paketti                  ∿ Record to Current Track+Plus                                    <Shortcut not Assigned>
0399     Global                   Paketti                  ∿ Record+Follow Toggle (2nd)                                      RShift
0400     Global                   Paketti                  ∿ Record+Follow Toggle (3rd)                                      <Shortcut not Assigned>
0401     Global                   Paketti                  ∿ Record+Follow Toggle (4th)                                      <Shortcut not Assigned>
0402     Global                   Paketti                  ∿ Record+Follow+Metronome Precount 1 Bar                          <Shortcut not Assigned>
0403     Global                   Paketti                  ∿ Record+Follow+Metronome Precount 2 Bar                          <Shortcut not Assigned>
0404     Global                   Paketti                  ∿ Record+Follow+Metronome Precount 3 Bar                          <Shortcut not Assigned>
0405     Global                   Paketti                  ∿ Record+Follow+Metronome Precount 4 Bar                          <Shortcut not Assigned>
0406     Global                   Paketti                  ∿ Record+Follow+Metronome Toggle                                  Shift + Escape
0407     Global                   Paketti                  ∿ Recordammajic9000                                               <Shortcut not Assigned>
0408     Global                   Paketti                  ∿ Repeater 1 / 1 Dotted                                           <Shortcut not Assigned>
0409     Global                   Paketti                  ∿ Repeater 1 / 1 Even                                             <Shortcut not Assigned>
0410     Global                   Paketti                  ∿ Repeater 1 / 1 Triplet                                          <Shortcut not Assigned>
0411     Global                   Paketti                  ∿ Repeater 1 / 128 Dotted                                         <Shortcut not Assigned>
0412     Global                   Paketti                  ∿ Repeater 1 / 128 Even                                           <Shortcut not Assigned>
0413     Global                   Paketti                  ∿ Repeater 1 / 128 Triplet                                        <Shortcut not Assigned>
0414     Global                   Paketti                  ∿ Repeater 1 / 16 Dotted                                          Shift + Command + 1
0415     Global                   Paketti                  ∿ Repeater 1 / 16 Even                                            Shift + Command + 2
0416     Global                   Paketti                  ∿ Repeater 1 / 16 Triplet                                         <Shortcut not Assigned>
0417     Global                   Paketti                  ∿ Repeater 1 / 2 Dotted                                           <Shortcut not Assigned>
0418     Global                   Paketti                  ∿ Repeater 1 / 2 Even                                             <Shortcut not Assigned>
0419     Global                   Paketti                  ∿ Repeater 1 / 2 Triplet                                          <Shortcut not Assigned>
0420     Global                   Paketti                  ∿ Repeater 1 / 32 Dotted                                          <Shortcut not Assigned>
0421     Global                   Paketti                  ∿ Repeater 1 / 32 Even                                            <Shortcut not Assigned>
0422     Global                   Paketti                  ∿ Repeater 1 / 32 Triplet                                         <Shortcut not Assigned>
0423     Global                   Paketti                  ∿ Repeater 1 / 4 Dotted                                           <Shortcut not Assigned>
0424     Global                   Paketti                  ∿ Repeater 1 / 4 Even                                             <Shortcut not Assigned>
0425     Global                   Paketti                  ∿ Repeater 1 / 4 Triplet                                          <Shortcut not Assigned>
0426     Global                   Paketti                  ∿ Repeater 1 / 64 Dotted                                          <Shortcut not Assigned>
0427     Global                   Paketti                  ∿ Repeater 1 / 64 Even                                            <Shortcut not Assigned>
0428     Global                   Paketti                  ∿ Repeater 1 / 64 Triplet                                         <Shortcut not Assigned>
0429     Global                   Paketti                  ∿ Repeater 1 / 8 Dotted                                           <Shortcut not Assigned>
0430     Global                   Paketti                  ∿ Repeater 1 / 8 Even                                             <Shortcut not Assigned>
0431     Global                   Paketti                  ∿ Repeater 1 / 8 Triplet                                          <Shortcut not Assigned>
0432     Global                   Paketti                  ∿ Reset Slice Counter                                             <Shortcut not Assigned>
0433     Global                   Paketti                  ∿ Resize all non-empty Patterns to 96                             <Shortcut not Assigned>
0434     Global                   Paketti                  ∿ Resize all non-empty Patterns to current Pattern length         <Shortcut not Assigned>
0435     Global                   Paketti                  ∿ Rewind Playback by 4 steps                                      <Shortcut not Assigned>
0436     Global                   Paketti                  ∿ Sample Editor Tab Switcher (01 Phrases)                         <Shortcut not Assigned>
0437     Global                   Paketti                  ∿ Sample Editor Tab Switcher (02 Keyzones)                        <Shortcut not Assigned>
0438     Global                   Paketti                  ∿ Sample Editor Tab Switcher (03 Waveform)                        <Shortcut not Assigned>
0439     Global                   Paketti                  ∿ Sample Editor Tab Switcher (04 Modulation)                      <Shortcut not Assigned>
0440     Global                   Paketti                  ∿ Sample Editor Tab Switcher (05 Effects)                         <Shortcut not Assigned>
0441     Global                   Paketti                  ∿ Sample Editor Tab Switcher (06 Plugin Editor)                   <Shortcut not Assigned>
0442     Global                   Paketti                  ∿ Sample Editor Tab Switcher (07 Midi Editor)                     <Shortcut not Assigned>
0443     Global                   Paketti                  ∿ Sample Loop Cycler (Backwards)                                  <Shortcut not Assigned>
0444     Global                   Paketti                  ∿ Sample Loop Cycler (Forwards)                                   <Shortcut not Assigned>
0445     Global                   Paketti                  ∿ Sample NOW then F3 (Record)                                     <Shortcut not Assigned>
0446     Global                   Paketti                  ∿ Save All Samples to Smart/Backup Folder 1                       <Shortcut not Assigned>
0447     Global                   Paketti                  ∿ Save All Samples to Smart/Backup Folder 2                       <Shortcut not Assigned>
0448     Global                   Paketti                  ∿ Save All Samples to Smart/Backup Folder 3                       <Shortcut not Assigned>
0449     Global                   Paketti                  ∿ Save Sample to Smart/Backup Folder 1                            <Shortcut not Assigned>
0450     Global                   Paketti                  ∿ Save Sample to Smart/Backup Folder 2                            <Shortcut not Assigned>
0451     Global                   Paketti                  ∿ Save Sample to Smart/Backup Folder 3                            <Shortcut not Assigned>
0452     Global                   Paketti                  ∿ Save Song (2nd)                                                 <Shortcut not Assigned>
0453     Global                   Paketti                  ∿ Section Loop (Next)                                             <Shortcut not Assigned>
0454     Global                   Paketti                  ∿ Section Loop (Previous)                                         <Shortcut not Assigned>
0455     Global                   Paketti                  ∿ Select Group (Next)                                             <Shortcut not Assigned>
0456     Global                   Paketti                  ∿ Select Group (Previous)                                         <Shortcut not Assigned>
0457     Global                   Paketti                  ∿ Select Instrument 0                                             <Shortcut not Assigned>
0458     Global                   Paketti                  ∿ Select Instrument 1                                             <Shortcut not Assigned>
0459     Global                   Paketti                  ∿ Select Instrument 10                                            <Shortcut not Assigned>
0460     Global                   Paketti                  ∿ Select Instrument 11                                            <Shortcut not Assigned>
0461     Global                   Paketti                  ∿ Select Instrument 12                                            <Shortcut not Assigned>
0462     Global                   Paketti                  ∿ Select Instrument 13                                            <Shortcut not Assigned>
0463     Global                   Paketti                  ∿ Select Instrument 14                                            <Shortcut not Assigned>
0464     Global                   Paketti                  ∿ Select Instrument 15                                            <Shortcut not Assigned>
0465     Global                   Paketti                  ∿ Select Instrument 16                                            <Shortcut not Assigned>
0466     Global                   Paketti                  ∿ Select Instrument 17                                            <Shortcut not Assigned>
0467     Global                   Paketti                  ∿ Select Instrument 18                                            <Shortcut not Assigned>
0468     Global                   Paketti                  ∿ Select Instrument 19                                            <Shortcut not Assigned>
0469     Global                   Paketti                  ∿ Select Instrument 2                                             <Shortcut not Assigned>
0470     Global                   Paketti                  ∿ Select Instrument 20                                            <Shortcut not Assigned>
0471     Global                   Paketti                  ∿ Select Instrument 21                                            <Shortcut not Assigned>
0472     Global                   Paketti                  ∿ Select Instrument 22                                            <Shortcut not Assigned>
0473     Global                   Paketti                  ∿ Select Instrument 23                                            <Shortcut not Assigned>
0474     Global                   Paketti                  ∿ Select Instrument 24                                            <Shortcut not Assigned>
0475     Global                   Paketti                  ∿ Select Instrument 25                                            <Shortcut not Assigned>
0476     Global                   Paketti                  ∿ Select Instrument 26                                            <Shortcut not Assigned>
0477     Global                   Paketti                  ∿ Select Instrument 27                                            <Shortcut not Assigned>
0478     Global                   Paketti                  ∿ Select Instrument 28                                            <Shortcut not Assigned>
0479     Global                   Paketti                  ∿ Select Instrument 29                                            <Shortcut not Assigned>
0480     Global                   Paketti                  ∿ Select Instrument 3                                             <Shortcut not Assigned>
0481     Global                   Paketti                  ∿ Select Instrument 30                                            <Shortcut not Assigned>
0482     Global                   Paketti                  ∿ Select Instrument 31                                            <Shortcut not Assigned>
0483     Global                   Paketti                  ∿ Select Instrument 32                                            <Shortcut not Assigned>
0484     Global                   Paketti                  ∿ Select Instrument 4                                             <Shortcut not Assigned>
0485     Global                   Paketti                  ∿ Select Instrument 5                                             <Shortcut not Assigned>
0486     Global                   Paketti                  ∿ Select Instrument 6                                             <Shortcut not Assigned>
0487     Global                   Paketti                  ∿ Select Instrument 7                                             <Shortcut not Assigned>
0488     Global                   Paketti                  ∿ Select Instrument 8                                             <Shortcut not Assigned>
0489     Global                   Paketti                  ∿ Select Instrument 9                                             <Shortcut not Assigned>
0490     Global                   Paketti                  ∿ Select LoopBlock Backwards (Previous)                           <Shortcut not Assigned>
0491     Global                   Paketti                  ∿ Select LoopBlock Forwards (Next)                                <Shortcut not Assigned>
0492     Global                   Paketti                  ∿ Select Specific Track 1                                         Shift + 1
0493     Global                   Paketti                  ∿ Select Specific Track 10                                        <Shortcut not Assigned>
0494     Global                   Paketti                  ∿ Select Specific Track 11                                        <Shortcut not Assigned>
0495     Global                   Paketti                  ∿ Select Specific Track 12                                        <Shortcut not Assigned>
0496     Global                   Paketti                  ∿ Select Specific Track 13                                        <Shortcut not Assigned>
0497     Global                   Paketti                  ∿ Select Specific Track 14                                        <Shortcut not Assigned>
0498     Global                   Paketti                  ∿ Select Specific Track 15                                        <Shortcut not Assigned>
0499     Global                   Paketti                  ∿ Select Specific Track 16                                        <Shortcut not Assigned>
0500     Global                   Paketti                  ∿ Select Specific Track 2                                         Shift + 2
0501     Global                   Paketti                  ∿ Select Specific Track 3                                         Shift + 3
0502     Global                   Paketti                  ∿ Select Specific Track 4                                         Shift + 4
0503     Global                   Paketti                  ∿ Select Specific Track 5                                         Shift + 5
0504     Global                   Paketti                  ∿ Select Specific Track 6                                         Shift + 6
0505     Global                   Paketti                  ∿ Select Specific Track 7                                         Shift + 7
0506     Global                   Paketti                  ∿ Select Specific Track 8                                         Shift + 8
0507     Global                   Paketti                  ∿ Select Specific Track 9                                         Shift + 9
0508     Global                   Paketti                  ∿ Select Track (Next)                                             <Shortcut not Assigned>
0509     Global                   Paketti                  ∿ Select Track (Previous)                                         <Shortcut not Assigned>
0510     Global                   Paketti                  ∿ Select and Loop Section (Next)                                  <Shortcut not Assigned>
0511     Global                   Paketti                  ∿ Select and Loop Section (Previous)                              <Shortcut not Assigned>
0512     Global                   Paketti                  ∿ Select and Loop Sequence Section 01                             <Shortcut not Assigned>
0513     Global                   Paketti                  ∿ Select and Loop Sequence Section 02                             <Shortcut not Assigned>
0514     Global                   Paketti                  ∿ Select and Loop Sequence Section 03                             <Shortcut not Assigned>
0515     Global                   Paketti                  ∿ Select and Loop Sequence Section 04                             <Shortcut not Assigned>
0516     Global                   Paketti                  ∿ Select and Loop Sequence Section 05                             <Shortcut not Assigned>
0517     Global                   Paketti                  ∿ Select and Loop Sequence Section 06                             <Shortcut not Assigned>
0518     Global                   Paketti                  ∿ Select and Loop Sequence Section 07                             <Shortcut not Assigned>
0519     Global                   Paketti                  ∿ Select and Loop Sequence Section 08                             <Shortcut not Assigned>
0520     Global                   Paketti                  ∿ Select and Loop Sequence Section 09                             <Shortcut not Assigned>
0521     Global                   Paketti                  ∿ Select and Loop Sequence Section 10                             <Shortcut not Assigned>
0522     Global                   Paketti                  ∿ Select and Loop Sequence Section 11                             <Shortcut not Assigned>
0523     Global                   Paketti                  ∿ Select and Loop Sequence Section 12                             <Shortcut not Assigned>
0524     Global                   Paketti                  ∿ Select and Loop Sequence Section 13                             <Shortcut not Assigned>
0525     Global                   Paketti                  ∿ Select and Loop Sequence Section 14                             <Shortcut not Assigned>
0526     Global                   Paketti                  ∿ Select and Loop Sequence Section 15                             <Shortcut not Assigned>
0527     Global                   Paketti                  ∿ Select and Loop Sequence Section 16                             <Shortcut not Assigned>
0528     Global                   Paketti                  ∿ Select and Loop Sequence Section 17                             <Shortcut not Assigned>
0529     Global                   Paketti                  ∿ Select and Loop Sequence Section 18                             <Shortcut not Assigned>
0530     Global                   Paketti                  ∿ Select and Loop Sequence Section 19                             <Shortcut not Assigned>
0531     Global                   Paketti                  ∿ Select and Loop Sequence Section 20                             <Shortcut not Assigned>
0532     Global                   Paketti                  ∿ Select and Loop Sequence Section 21                             <Shortcut not Assigned>
0533     Global                   Paketti                  ∿ Select and Loop Sequence Section 22                             <Shortcut not Assigned>
0534     Global                   Paketti                  ∿ Select and Loop Sequence Section 23                             <Shortcut not Assigned>
0535     Global                   Paketti                  ∿ Select and Loop Sequence Section 24                             <Shortcut not Assigned>
0536     Global                   Paketti                  ∿ Select and Loop Sequence Section 25                             <Shortcut not Assigned>
0537     Global                   Paketti                  ∿ Select and Loop Sequence Section 26                             <Shortcut not Assigned>
0538     Global                   Paketti                  ∿ Select and Loop Sequence Section 27                             <Shortcut not Assigned>
0539     Global                   Paketti                  ∿ Select and Loop Sequence Section 28                             <Shortcut not Assigned>
0540     Global                   Paketti                  ∿ Select and Loop Sequence Section 29                             <Shortcut not Assigned>
0541     Global                   Paketti                  ∿ Select and Loop Sequence Section 30                             <Shortcut not Assigned>
0542     Global                   Paketti                  ∿ Select and Loop Sequence Section 31                             <Shortcut not Assigned>
0543     Global                   Paketti                  ∿ Select and Loop Sequence Section 32                             <Shortcut not Assigned>
0544     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 00                     <Shortcut not Assigned>
0545     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 01                     <Shortcut not Assigned>
0546     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 02                     <Shortcut not Assigned>
0547     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 03                     <Shortcut not Assigned>
0548     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 04                     <Shortcut not Assigned>
0549     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 05                     <Shortcut not Assigned>
0550     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 06                     <Shortcut not Assigned>
0551     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 07                     <Shortcut not Assigned>
0552     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 08                     <Shortcut not Assigned>
0553     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 09                     <Shortcut not Assigned>
0554     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 10                     <Shortcut not Assigned>
0555     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 11                     <Shortcut not Assigned>
0556     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 12                     <Shortcut not Assigned>
0557     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 13                     <Shortcut not Assigned>
0558     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 14                     <Shortcut not Assigned>
0559     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 15                     <Shortcut not Assigned>
0560     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 16                     <Shortcut not Assigned>
0561     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 17                     <Shortcut not Assigned>
0562     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 18                     <Shortcut not Assigned>
0563     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 19                     <Shortcut not Assigned>
0564     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 20                     <Shortcut not Assigned>
0565     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 21                     <Shortcut not Assigned>
0566     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 22                     <Shortcut not Assigned>
0567     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 23                     <Shortcut not Assigned>
0568     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 24                     <Shortcut not Assigned>
0569     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 25                     <Shortcut not Assigned>
0570     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 26                     <Shortcut not Assigned>
0571     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 27                     <Shortcut not Assigned>
0572     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 28                     <Shortcut not Assigned>
0573     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 29                     <Shortcut not Assigned>
0574     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 30                     <Shortcut not Assigned>
0575     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 31                     <Shortcut not Assigned>
0576     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 32                     <Shortcut not Assigned>
0577     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 33                     <Shortcut not Assigned>
0578     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 34                     <Shortcut not Assigned>
0579     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 35                     <Shortcut not Assigned>
0580     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 36                     <Shortcut not Assigned>
0581     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 37                     <Shortcut not Assigned>
0582     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 38                     <Shortcut not Assigned>
0583     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 39                     <Shortcut not Assigned>
0584     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 40                     <Shortcut not Assigned>
0585     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 41                     <Shortcut not Assigned>
0586     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 42                     <Shortcut not Assigned>
0587     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 43                     <Shortcut not Assigned>
0588     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 44                     <Shortcut not Assigned>
0589     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 45                     <Shortcut not Assigned>
0590     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 46                     <Shortcut not Assigned>
0591     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 47                     <Shortcut not Assigned>
0592     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 48                     <Shortcut not Assigned>
0593     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 49                     <Shortcut not Assigned>
0594     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 50                     <Shortcut not Assigned>
0595     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 51                     <Shortcut not Assigned>
0596     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 52                     <Shortcut not Assigned>
0597     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 53                     <Shortcut not Assigned>
0598     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 54                     <Shortcut not Assigned>
0599     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 55                     <Shortcut not Assigned>
0600     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 56                     <Shortcut not Assigned>
0601     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 57                     <Shortcut not Assigned>
0602     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 58                     <Shortcut not Assigned>
0603     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 59                     <Shortcut not Assigned>
0604     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 60                     <Shortcut not Assigned>
0605     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 61                     <Shortcut not Assigned>
0606     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 62                     <Shortcut not Assigned>
0607     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 63                     <Shortcut not Assigned>
0608     Global                   Paketti                  ∿ Select, Add to Schedule and Loop Section 64                     <Shortcut not Assigned>
0609     Global                   Paketti                  ∿ Select, Schedule and Loop Section 00                            <Shortcut not Assigned>
0610     Global                   Paketti                  ∿ Select, Schedule and Loop Section 01                            <Shortcut not Assigned>
0611     Global                   Paketti                  ∿ Select, Schedule and Loop Section 02                            <Shortcut not Assigned>
0612     Global                   Paketti                  ∿ Select, Schedule and Loop Section 03                            <Shortcut not Assigned>
0613     Global                   Paketti                  ∿ Select, Schedule and Loop Section 04                            <Shortcut not Assigned>
0614     Global                   Paketti                  ∿ Select, Schedule and Loop Section 05                            <Shortcut not Assigned>
0615     Global                   Paketti                  ∿ Select, Schedule and Loop Section 06                            <Shortcut not Assigned>
0616     Global                   Paketti                  ∿ Select, Schedule and Loop Section 07                            <Shortcut not Assigned>
0617     Global                   Paketti                  ∿ Select, Schedule and Loop Section 08                            <Shortcut not Assigned>
0618     Global                   Paketti                  ∿ Select, Schedule and Loop Section 09                            <Shortcut not Assigned>
0619     Global                   Paketti                  ∿ Select, Schedule and Loop Section 10                            <Shortcut not Assigned>
0620     Global                   Paketti                  ∿ Select, Schedule and Loop Section 11                            <Shortcut not Assigned>
0621     Global                   Paketti                  ∿ Select, Schedule and Loop Section 12                            <Shortcut not Assigned>
0622     Global                   Paketti                  ∿ Select, Schedule and Loop Section 13                            <Shortcut not Assigned>
0623     Global                   Paketti                  ∿ Select, Schedule and Loop Section 14                            <Shortcut not Assigned>
0624     Global                   Paketti                  ∿ Select, Schedule and Loop Section 15                            <Shortcut not Assigned>
0625     Global                   Paketti                  ∿ Select, Schedule and Loop Section 16                            <Shortcut not Assigned>
0626     Global                   Paketti                  ∿ Select, Schedule and Loop Section 17                            <Shortcut not Assigned>
0627     Global                   Paketti                  ∿ Select, Schedule and Loop Section 18                            <Shortcut not Assigned>
0628     Global                   Paketti                  ∿ Select, Schedule and Loop Section 19                            <Shortcut not Assigned>
0629     Global                   Paketti                  ∿ Select, Schedule and Loop Section 20                            <Shortcut not Assigned>
0630     Global                   Paketti                  ∿ Select, Schedule and Loop Section 21                            <Shortcut not Assigned>
0631     Global                   Paketti                  ∿ Select, Schedule and Loop Section 22                            <Shortcut not Assigned>
0632     Global                   Paketti                  ∿ Select, Schedule and Loop Section 23                            <Shortcut not Assigned>
0633     Global                   Paketti                  ∿ Select, Schedule and Loop Section 24                            <Shortcut not Assigned>
0634     Global                   Paketti                  ∿ Select, Schedule and Loop Section 25                            <Shortcut not Assigned>
0635     Global                   Paketti                  ∿ Select, Schedule and Loop Section 26                            <Shortcut not Assigned>
0636     Global                   Paketti                  ∿ Select, Schedule and Loop Section 27                            <Shortcut not Assigned>
0637     Global                   Paketti                  ∿ Select, Schedule and Loop Section 28                            <Shortcut not Assigned>
0638     Global                   Paketti                  ∿ Select, Schedule and Loop Section 29                            <Shortcut not Assigned>
0639     Global                   Paketti                  ∿ Select, Schedule and Loop Section 30                            <Shortcut not Assigned>
0640     Global                   Paketti                  ∿ Select, Schedule and Loop Section 31                            <Shortcut not Assigned>
0641     Global                   Paketti                  ∿ Select, Schedule and Loop Section 32                            <Shortcut not Assigned>
0642     Global                   Paketti                  ∿ Select, Schedule and Loop Section 33                            <Shortcut not Assigned>
0643     Global                   Paketti                  ∿ Select, Schedule and Loop Section 34                            <Shortcut not Assigned>
0644     Global                   Paketti                  ∿ Select, Schedule and Loop Section 35                            <Shortcut not Assigned>
0645     Global                   Paketti                  ∿ Select, Schedule and Loop Section 36                            <Shortcut not Assigned>
0646     Global                   Paketti                  ∿ Select, Schedule and Loop Section 37                            <Shortcut not Assigned>
0647     Global                   Paketti                  ∿ Select, Schedule and Loop Section 38                            <Shortcut not Assigned>
0648     Global                   Paketti                  ∿ Select, Schedule and Loop Section 39                            <Shortcut not Assigned>
0649     Global                   Paketti                  ∿ Select, Schedule and Loop Section 40                            <Shortcut not Assigned>
0650     Global                   Paketti                  ∿ Select, Schedule and Loop Section 41                            <Shortcut not Assigned>
0651     Global                   Paketti                  ∿ Select, Schedule and Loop Section 42                            <Shortcut not Assigned>
0652     Global                   Paketti                  ∿ Select, Schedule and Loop Section 43                            <Shortcut not Assigned>
0653     Global                   Paketti                  ∿ Select, Schedule and Loop Section 44                            <Shortcut not Assigned>
0654     Global                   Paketti                  ∿ Select, Schedule and Loop Section 45                            <Shortcut not Assigned>
0655     Global                   Paketti                  ∿ Select, Schedule and Loop Section 46                            <Shortcut not Assigned>
0656     Global                   Paketti                  ∿ Select, Schedule and Loop Section 47                            <Shortcut not Assigned>
0657     Global                   Paketti                  ∿ Select, Schedule and Loop Section 48                            <Shortcut not Assigned>
0658     Global                   Paketti                  ∿ Select, Schedule and Loop Section 49                            <Shortcut not Assigned>
0659     Global                   Paketti                  ∿ Select, Schedule and Loop Section 50                            <Shortcut not Assigned>
0660     Global                   Paketti                  ∿ Select, Schedule and Loop Section 51                            <Shortcut not Assigned>
0661     Global                   Paketti                  ∿ Select, Schedule and Loop Section 52                            <Shortcut not Assigned>
0662     Global                   Paketti                  ∿ Select, Schedule and Loop Section 53                            <Shortcut not Assigned>
0663     Global                   Paketti                  ∿ Select, Schedule and Loop Section 54                            <Shortcut not Assigned>
0664     Global                   Paketti                  ∿ Select, Schedule and Loop Section 55                            <Shortcut not Assigned>
0665     Global                   Paketti                  ∿ Select, Schedule and Loop Section 56                            <Shortcut not Assigned>
0666     Global                   Paketti                  ∿ Select, Schedule and Loop Section 57                            <Shortcut not Assigned>
0667     Global                   Paketti                  ∿ Select, Schedule and Loop Section 58                            <Shortcut not Assigned>
0668     Global                   Paketti                  ∿ Select, Schedule and Loop Section 59                            <Shortcut not Assigned>
0669     Global                   Paketti                  ∿ Select, Schedule and Loop Section 60                            <Shortcut not Assigned>
0670     Global                   Paketti                  ∿ Select, Schedule and Loop Section 61                            <Shortcut not Assigned>
0671     Global                   Paketti                  ∿ Select, Schedule and Loop Section 62                            <Shortcut not Assigned>
0672     Global                   Paketti                  ∿ Select, Schedule and Loop Section 63                            <Shortcut not Assigned>
0673     Global                   Paketti                  ∿ Select, Schedule and Loop Section 64                            <Shortcut not Assigned>
0674     Global                   Paketti                  ∿ Select, Trigger and Loop Section 00                             <Shortcut not Assigned>
0675     Global                   Paketti                  ∿ Select, Trigger and Loop Section 01                             <Shortcut not Assigned>
0676     Global                   Paketti                  ∿ Select, Trigger and Loop Section 02                             <Shortcut not Assigned>
0677     Global                   Paketti                  ∿ Select, Trigger and Loop Section 03                             <Shortcut not Assigned>
0678     Global                   Paketti                  ∿ Select, Trigger and Loop Section 04                             <Shortcut not Assigned>
0679     Global                   Paketti                  ∿ Select, Trigger and Loop Section 05                             <Shortcut not Assigned>
0680     Global                   Paketti                  ∿ Select, Trigger and Loop Section 06                             <Shortcut not Assigned>
0681     Global                   Paketti                  ∿ Select, Trigger and Loop Section 07                             <Shortcut not Assigned>
0682     Global                   Paketti                  ∿ Select, Trigger and Loop Section 08                             <Shortcut not Assigned>
0683     Global                   Paketti                  ∿ Select, Trigger and Loop Section 09                             <Shortcut not Assigned>
0684     Global                   Paketti                  ∿ Select, Trigger and Loop Section 10                             <Shortcut not Assigned>
0685     Global                   Paketti                  ∿ Select, Trigger and Loop Section 11                             <Shortcut not Assigned>
0686     Global                   Paketti                  ∿ Select, Trigger and Loop Section 12                             <Shortcut not Assigned>
0687     Global                   Paketti                  ∿ Select, Trigger and Loop Section 13                             <Shortcut not Assigned>
0688     Global                   Paketti                  ∿ Select, Trigger and Loop Section 14                             <Shortcut not Assigned>
0689     Global                   Paketti                  ∿ Select, Trigger and Loop Section 15                             <Shortcut not Assigned>
0690     Global                   Paketti                  ∿ Select, Trigger and Loop Section 16                             <Shortcut not Assigned>
0691     Global                   Paketti                  ∿ Select, Trigger and Loop Section 17                             <Shortcut not Assigned>
0692     Global                   Paketti                  ∿ Select, Trigger and Loop Section 18                             <Shortcut not Assigned>
0693     Global                   Paketti                  ∿ Select, Trigger and Loop Section 19                             <Shortcut not Assigned>
0694     Global                   Paketti                  ∿ Select, Trigger and Loop Section 20                             <Shortcut not Assigned>
0695     Global                   Paketti                  ∿ Select, Trigger and Loop Section 21                             <Shortcut not Assigned>
0696     Global                   Paketti                  ∿ Select, Trigger and Loop Section 22                             <Shortcut not Assigned>
0697     Global                   Paketti                  ∿ Select, Trigger and Loop Section 23                             <Shortcut not Assigned>
0698     Global                   Paketti                  ∿ Select, Trigger and Loop Section 24                             <Shortcut not Assigned>
0699     Global                   Paketti                  ∿ Select, Trigger and Loop Section 25                             <Shortcut not Assigned>
0700     Global                   Paketti                  ∿ Select, Trigger and Loop Section 26                             <Shortcut not Assigned>
0701     Global                   Paketti                  ∿ Select, Trigger and Loop Section 27                             <Shortcut not Assigned>
0702     Global                   Paketti                  ∿ Select, Trigger and Loop Section 28                             <Shortcut not Assigned>
0703     Global                   Paketti                  ∿ Select, Trigger and Loop Section 29                             <Shortcut not Assigned>
0704     Global                   Paketti                  ∿ Select, Trigger and Loop Section 30                             <Shortcut not Assigned>
0705     Global                   Paketti                  ∿ Select, Trigger and Loop Section 31                             <Shortcut not Assigned>
0706     Global                   Paketti                  ∿ Select, Trigger and Loop Section 32                             <Shortcut not Assigned>
0707     Global                   Paketti                  ∿ Select, Trigger and Loop Section 33                             <Shortcut not Assigned>
0708     Global                   Paketti                  ∿ Select, Trigger and Loop Section 34                             <Shortcut not Assigned>
0709     Global                   Paketti                  ∿ Select, Trigger and Loop Section 35                             <Shortcut not Assigned>
0710     Global                   Paketti                  ∿ Select, Trigger and Loop Section 36                             <Shortcut not Assigned>
0711     Global                   Paketti                  ∿ Select, Trigger and Loop Section 37                             <Shortcut not Assigned>
0712     Global                   Paketti                  ∿ Select, Trigger and Loop Section 38                             <Shortcut not Assigned>
0713     Global                   Paketti                  ∿ Select, Trigger and Loop Section 39                             <Shortcut not Assigned>
0714     Global                   Paketti                  ∿ Select, Trigger and Loop Section 40                             <Shortcut not Assigned>
0715     Global                   Paketti                  ∿ Select, Trigger and Loop Section 41                             <Shortcut not Assigned>
0716     Global                   Paketti                  ∿ Select, Trigger and Loop Section 42                             <Shortcut not Assigned>
0717     Global                   Paketti                  ∿ Select, Trigger and Loop Section 43                             <Shortcut not Assigned>
0718     Global                   Paketti                  ∿ Select, Trigger and Loop Section 44                             <Shortcut not Assigned>
0719     Global                   Paketti                  ∿ Select, Trigger and Loop Section 45                             <Shortcut not Assigned>
0720     Global                   Paketti                  ∿ Select, Trigger and Loop Section 46                             <Shortcut not Assigned>
0721     Global                   Paketti                  ∿ Select, Trigger and Loop Section 47                             <Shortcut not Assigned>
0722     Global                   Paketti                  ∿ Select, Trigger and Loop Section 48                             <Shortcut not Assigned>
0723     Global                   Paketti                  ∿ Select, Trigger and Loop Section 49                             <Shortcut not Assigned>
0724     Global                   Paketti                  ∿ Select, Trigger and Loop Section 50                             <Shortcut not Assigned>
0725     Global                   Paketti                  ∿ Select, Trigger and Loop Section 51                             <Shortcut not Assigned>
0726     Global                   Paketti                  ∿ Select, Trigger and Loop Section 52                             <Shortcut not Assigned>
0727     Global                   Paketti                  ∿ Select, Trigger and Loop Section 53                             <Shortcut not Assigned>
0728     Global                   Paketti                  ∿ Select, Trigger and Loop Section 54                             <Shortcut not Assigned>
0729     Global                   Paketti                  ∿ Select, Trigger and Loop Section 55                             <Shortcut not Assigned>
0730     Global                   Paketti                  ∿ Select, Trigger and Loop Section 56                             <Shortcut not Assigned>
0731     Global                   Paketti                  ∿ Select, Trigger and Loop Section 57                             <Shortcut not Assigned>
0732     Global                   Paketti                  ∿ Select, Trigger and Loop Section 58                             <Shortcut not Assigned>
0733     Global                   Paketti                  ∿ Select, Trigger and Loop Section 59                             <Shortcut not Assigned>
0734     Global                   Paketti                  ∿ Select, Trigger and Loop Section 60                             <Shortcut not Assigned>
0735     Global                   Paketti                  ∿ Select, Trigger and Loop Section 61                             <Shortcut not Assigned>
0736     Global                   Paketti                  ∿ Select, Trigger and Loop Section 62                             <Shortcut not Assigned>
0737     Global                   Paketti                  ∿ Select, Trigger and Loop Section 63                             <Shortcut not Assigned>
0738     Global                   Paketti                  ∿ Select, Trigger and Loop Section 64                             <Shortcut not Assigned>
0739     Global                   Paketti                  ∿ Selected Instrument Midi Program +1 (Next)                      <Shortcut not Assigned>
0740     Global                   Paketti                  ∿ Selected Instrument Midi Program -1 (Previous)                  <Shortcut not Assigned>
0741     Global                   Paketti                  ∿ Selected Sample Exit Loop Note-Off Off                          <Shortcut not Assigned>
0742     Global                   Paketti                  ∿ Selected Sample Exit Loop Note-Off On                           <Shortcut not Assigned>
0743     Global                   Paketti                  ∿ Selected Sample Exit Loop Note-Off Toggle                       <Shortcut not Assigned>
0744     Global                   Paketti                  ∿ Selected Sample Transpose (0)                                   <Shortcut not Assigned>
0745     Global                   Paketti                  ∿ Selected Specific Sequence 00                                   <Shortcut not Assigned>
0746     Global                   Paketti                  ∿ Selected Specific Sequence 01                                   <Shortcut not Assigned>
0747     Global                   Paketti                  ∿ Selected Specific Sequence 02                                   <Shortcut not Assigned>
0748     Global                   Paketti                  ∿ Selected Specific Sequence 03                                   <Shortcut not Assigned>
0749     Global                   Paketti                  ∿ Selected Specific Sequence 04                                   <Shortcut not Assigned>
0750     Global                   Paketti                  ∿ Selected Specific Sequence 05                                   <Shortcut not Assigned>
0751     Global                   Paketti                  ∿ Selected Specific Sequence 06                                   <Shortcut not Assigned>
0752     Global                   Paketti                  ∿ Selected Specific Sequence 07                                   <Shortcut not Assigned>
0753     Global                   Paketti                  ∿ Selected Specific Sequence 08                                   <Shortcut not Assigned>
0754     Global                   Paketti                  ∿ Selected Specific Sequence 09                                   <Shortcut not Assigned>
0755     Global                   Paketti                  ∿ Selected Specific Sequence 10                                   <Shortcut not Assigned>
0756     Global                   Paketti                  ∿ Selected Specific Sequence 11                                   <Shortcut not Assigned>
0757     Global                   Paketti                  ∿ Selected Specific Sequence 12                                   <Shortcut not Assigned>
0758     Global                   Paketti                  ∿ Selected Specific Sequence 13                                   <Shortcut not Assigned>
0759     Global                   Paketti                  ∿ Selected Specific Sequence 14                                   <Shortcut not Assigned>
0760     Global                   Paketti                  ∿ Selected Specific Sequence 15                                   <Shortcut not Assigned>
0761     Global                   Paketti                  ∿ Selected Specific Sequence 16                                   <Shortcut not Assigned>
0762     Global                   Paketti                  ∿ Selected Specific Sequence 17                                   <Shortcut not Assigned>
0763     Global                   Paketti                  ∿ Selected Specific Sequence 18                                   <Shortcut not Assigned>
0764     Global                   Paketti                  ∿ Selected Specific Sequence 19                                   <Shortcut not Assigned>
0765     Global                   Paketti                  ∿ Selected Specific Sequence 20                                   <Shortcut not Assigned>
0766     Global                   Paketti                  ∿ Selected Specific Sequence 21                                   <Shortcut not Assigned>
0767     Global                   Paketti                  ∿ Selected Specific Sequence 22                                   <Shortcut not Assigned>
0768     Global                   Paketti                  ∿ Selected Specific Sequence 23                                   <Shortcut not Assigned>
0769     Global                   Paketti                  ∿ Selected Specific Sequence 24                                   <Shortcut not Assigned>
0770     Global                   Paketti                  ∿ Selected Specific Sequence 25                                   <Shortcut not Assigned>
0771     Global                   Paketti                  ∿ Selected Specific Sequence 26                                   <Shortcut not Assigned>
0772     Global                   Paketti                  ∿ Selected Specific Sequence 27                                   <Shortcut not Assigned>
0773     Global                   Paketti                  ∿ Selected Specific Sequence 28                                   <Shortcut not Assigned>
0774     Global                   Paketti                  ∿ Selected Specific Sequence 29                                   <Shortcut not Assigned>
0775     Global                   Paketti                  ∿ Selected Specific Sequence 30                                   <Shortcut not Assigned>
0776     Global                   Paketti                  ∿ Selected Specific Sequence 31                                   <Shortcut not Assigned>
0777     Global                   Paketti                  ∿ Send Reverser                                                   <Shortcut not Assigned>
0778     Global                   Paketti                  ∿ Send Selected Sample to AppSelection1                           <Shortcut not Assigned>
0779     Global                   Paketti                  ∿ Send Selected Sample to AppSelection2                           <Shortcut not Assigned>
0780     Global                   Paketti                  ∿ Send Selected Sample to AppSelection3                           <Shortcut not Assigned>
0781     Global                   Paketti                  ∿ Send Selected Sample to AppSelection4                           <Shortcut not Assigned>
0782     Global                   Paketti                  ∿ Send Selected Sample to AppSelection5                           <Shortcut not Assigned>
0783     Global                   Paketti                  ∿ Send Selected Sample to AppSelection6                           <Shortcut not Assigned>
0784     Global                   Paketti                  ∿ Sequence Loop Selection (Next)                                  <Shortcut not Assigned>
0785     Global                   Paketti                  ∿ Sequence Loop Selection (Previous)                              <Shortcut not Assigned>
0786     Global                   Paketti                  ∿ Sequence Selection (Next)                                       Command + Control + 2
0787     Global                   Paketti                  ∿ Sequence Selection (Previous)                                   Command + Control + 1
0788     Global                   Paketti                  ∿ Set Current Section as Scheduled Sequence                       <Shortcut not Assigned>
0789     Global                   Paketti                  ∿ Set Current Sequence as Scheduled List                          <Shortcut not Assigned>
0790     Global                   Paketti                  ∿ Set Current Sequence as Scheduled and Loop                      <Shortcut not Assigned>
0791     Global                   Paketti                  ∿ Set Master Track Output Routing 00                              <Shortcut not Assigned>
0792     Global                   Paketti                  ∿ Set Master Track Output Routing 01                              <Shortcut not Assigned>
0793     Global                   Paketti                  ∿ Set Master Track Output Routing 02                              <Shortcut not Assigned>
0794     Global                   Paketti                  ∿ Set Master Track Output Routing 03                              <Shortcut not Assigned>
0795     Global                   Paketti                  ∿ Set Master Track Output Routing 04                              <Shortcut not Assigned>
0796     Global                   Paketti                  ∿ Set Master Track Output Routing 05                              <Shortcut not Assigned>
0797     Global                   Paketti                  ∿ Set Master Track Output Routing 06                              <Shortcut not Assigned>
0798     Global                   Paketti                  ∿ Set Master Track Output Routing 07                              <Shortcut not Assigned>
0799     Global                   Paketti                  ∿ Set Master Track Output Routing 08                              <Shortcut not Assigned>
0800     Global                   Paketti                  ∿ Set Master Track Output Routing 09                              <Shortcut not Assigned>
0801     Global                   Paketti                  ∿ Set Master Track Output Routing 10                              <Shortcut not Assigned>
0802     Global                   Paketti                  ∿ Set Master Track Output Routing 11                              <Shortcut not Assigned>
0803     Global                   Paketti                  ∿ Set Master Track Output Routing 12                              <Shortcut not Assigned>
0804     Global                   Paketti                  ∿ Set Master Track Output Routing 13                              <Shortcut not Assigned>
0805     Global                   Paketti                  ∿ Set Master Track Output Routing 14                              <Shortcut not Assigned>
0806     Global                   Paketti                  ∿ Set Master Track Output Routing 15                              <Shortcut not Assigned>
0807     Global                   Paketti                  ∿ Set Master Track Output Routing 16                              <Shortcut not Assigned>
0808     Global                   Paketti                  ∿ Set Master Track Output Routing 17                              <Shortcut not Assigned>
0809     Global                   Paketti                  ∿ Set Master Track Output Routing 18                              <Shortcut not Assigned>
0810     Global                   Paketti                  ∿ Set Master Track Output Routing 19                              <Shortcut not Assigned>
0811     Global                   Paketti                  ∿ Set Master Track Output Routing 20                              <Shortcut not Assigned>
0812     Global                   Paketti                  ∿ Set Master Track Output Routing 21                              <Shortcut not Assigned>
0813     Global                   Paketti                  ∿ Set Master Track Output Routing 22                              <Shortcut not Assigned>
0814     Global                   Paketti                  ∿ Set Master Track Output Routing 23                              <Shortcut not Assigned>
0815     Global                   Paketti                  ∿ Set Master Track Output Routing 24                              <Shortcut not Assigned>
0816     Global                   Paketti                  ∿ Set Master Track Output Routing 25                              <Shortcut not Assigned>
0817     Global                   Paketti                  ∿ Set Master Track Output Routing 26                              <Shortcut not Assigned>
0818     Global                   Paketti                  ∿ Set Master Track Output Routing 27                              <Shortcut not Assigned>
0819     Global                   Paketti                  ∿ Set Master Track Output Routing 28                              <Shortcut not Assigned>
0820     Global                   Paketti                  ∿ Set Master Track Output Routing 29                              <Shortcut not Assigned>
0821     Global                   Paketti                  ∿ Set Master Track Output Routing 30                              <Shortcut not Assigned>
0822     Global                   Paketti                  ∿ Set Master Track Output Routing 31                              <Shortcut not Assigned>
0823     Global                   Paketti                  ∿ Set Master Track Output Routing 32                              <Shortcut not Assigned>
0824     Global                   Paketti                  ∿ Set Master Track Output Routing 33                              <Shortcut not Assigned>
0825     Global                   Paketti                  ∿ Set Master Track Output Routing 34                              <Shortcut not Assigned>
0826     Global                   Paketti                  ∿ Set Master Track Output Routing 35                              <Shortcut not Assigned>
0827     Global                   Paketti                  ∿ Set Master Track Output Routing 36                              <Shortcut not Assigned>
0828     Global                   Paketti                  ∿ Set Master Track Output Routing 37                              <Shortcut not Assigned>
0829     Global                   Paketti                  ∿ Set Master Track Output Routing 38                              <Shortcut not Assigned>
0830     Global                   Paketti                  ∿ Set Master Track Output Routing 39                              <Shortcut not Assigned>
0831     Global                   Paketti                  ∿ Set Master Track Output Routing 40                              <Shortcut not Assigned>
0832     Global                   Paketti                  ∿ Set Master Track Output Routing 41                              <Shortcut not Assigned>
0833     Global                   Paketti                  ∿ Set Master Track Output Routing 42                              <Shortcut not Assigned>
0834     Global                   Paketti                  ∿ Set Master Track Output Routing 43                              <Shortcut not Assigned>
0835     Global                   Paketti                  ∿ Set Master Track Output Routing 44                              <Shortcut not Assigned>
0836     Global                   Paketti                  ∿ Set Master Track Output Routing 45                              <Shortcut not Assigned>
0837     Global                   Paketti                  ∿ Set Master Track Output Routing 46                              <Shortcut not Assigned>
0838     Global                   Paketti                  ∿ Set Master Track Output Routing 47                              <Shortcut not Assigned>
0839     Global                   Paketti                  ∿ Set Master Track Output Routing 48                              <Shortcut not Assigned>
0840     Global                   Paketti                  ∿ Set Master Track Output Routing 49                              <Shortcut not Assigned>
0841     Global                   Paketti                  ∿ Set Master Track Output Routing 50                              <Shortcut not Assigned>
0842     Global                   Paketti                  ∿ Set Master Track Output Routing 51                              <Shortcut not Assigned>
0843     Global                   Paketti                  ∿ Set Master Track Output Routing 52                              <Shortcut not Assigned>
0844     Global                   Paketti                  ∿ Set Master Track Output Routing 53                              <Shortcut not Assigned>
0845     Global                   Paketti                  ∿ Set Master Track Output Routing 54                              <Shortcut not Assigned>
0846     Global                   Paketti                  ∿ Set Master Track Output Routing 55                              <Shortcut not Assigned>
0847     Global                   Paketti                  ∿ Set Master Track Output Routing 56                              <Shortcut not Assigned>
0848     Global                   Paketti                  ∿ Set Master Track Output Routing 57                              <Shortcut not Assigned>
0849     Global                   Paketti                  ∿ Set Master Track Output Routing 58                              <Shortcut not Assigned>
0850     Global                   Paketti                  ∿ Set Master Track Output Routing 59                              <Shortcut not Assigned>
0851     Global                   Paketti                  ∿ Set Master Track Output Routing 60                              <Shortcut not Assigned>
0852     Global                   Paketti                  ∿ Set Master Track Output Routing 61                              <Shortcut not Assigned>
0853     Global                   Paketti                  ∿ Set Master Track Output Routing 62                              <Shortcut not Assigned>
0854     Global                   Paketti                  ∿ Set Master Track Output Routing 63                              <Shortcut not Assigned>
0855     Global                   Paketti                  ∿ Set Master Track Volume to -INF dB                              <Shortcut not Assigned>
0856     Global                   Paketti                  ∿ Set Master Track Volume to 0.0dB                                <Shortcut not Assigned>
0857     Global                   Paketti                  ∿ Set ReWire Channel (Next)                                       <Shortcut not Assigned>
0858     Global                   Paketti                  ∿ Set Sample to One-Shot + NNA Continue                           <Shortcut not Assigned>
0859     Global                   Paketti                  ∿ Set Section Loop and Schedule Section                           <Shortcut not Assigned>
0860     Global                   Paketti                  ∿ Set Selected Instrument All Autofade Off                        <Shortcut not Assigned>
0861     Global                   Paketti                  ∿ Set Selected Instrument All Autofade On                         <Shortcut not Assigned>
0862     Global                   Paketti                  ∿ Set Selected Instrument All Autofade On/Off                     <Shortcut not Assigned>
0863     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 01                            <Shortcut not Assigned>
0864     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 02                            <Shortcut not Assigned>
0865     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 03                            <Shortcut not Assigned>
0866     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 04                            <Shortcut not Assigned>
0867     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 05                            <Shortcut not Assigned>
0868     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 06                            <Shortcut not Assigned>
0869     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 07                            <Shortcut not Assigned>
0870     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 08                            <Shortcut not Assigned>
0871     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 09                            <Shortcut not Assigned>
0872     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 10                            <Shortcut not Assigned>
0873     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 11                            <Shortcut not Assigned>
0874     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 12                            <Shortcut not Assigned>
0875     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 13                            <Shortcut not Assigned>
0876     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 14                            <Shortcut not Assigned>
0877     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 15                            <Shortcut not Assigned>
0878     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 16                            <Shortcut not Assigned>
0879     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 17                            <Shortcut not Assigned>
0880     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 18                            <Shortcut not Assigned>
0881     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 19                            <Shortcut not Assigned>
0882     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 20                            <Shortcut not Assigned>
0883     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 21                            <Shortcut not Assigned>
0884     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 22                            <Shortcut not Assigned>
0885     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 23                            <Shortcut not Assigned>
0886     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 24                            <Shortcut not Assigned>
0887     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 25                            <Shortcut not Assigned>
0888     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 26                            <Shortcut not Assigned>
0889     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 27                            <Shortcut not Assigned>
0890     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 28                            <Shortcut not Assigned>
0891     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 29                            <Shortcut not Assigned>
0892     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 30                            <Shortcut not Assigned>
0893     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 31                            <Shortcut not Assigned>
0894     Global                   Paketti                  ∿ Set Selected Instrument All Fx to 32                            <Shortcut not Assigned>
0895     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 00                           <Shortcut not Assigned>
0896     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 01                           <Shortcut not Assigned>
0897     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 02                           <Shortcut not Assigned>
0898     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 03                           <Shortcut not Assigned>
0899     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 04                           <Shortcut not Assigned>
0900     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 05                           <Shortcut not Assigned>
0901     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 06                           <Shortcut not Assigned>
0902     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 07                           <Shortcut not Assigned>
0903     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 08                           <Shortcut not Assigned>
0904     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 09                           <Shortcut not Assigned>
0905     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 10                           <Shortcut not Assigned>
0906     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 11                           <Shortcut not Assigned>
0907     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 12                           <Shortcut not Assigned>
0908     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 13                           <Shortcut not Assigned>
0909     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 14                           <Shortcut not Assigned>
0910     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 15                           <Shortcut not Assigned>
0911     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 16                           <Shortcut not Assigned>
0912     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 17                           <Shortcut not Assigned>
0913     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 18                           <Shortcut not Assigned>
0914     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 19                           <Shortcut not Assigned>
0915     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 20                           <Shortcut not Assigned>
0916     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 21                           <Shortcut not Assigned>
0917     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 22                           <Shortcut not Assigned>
0918     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 23                           <Shortcut not Assigned>
0919     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 24                           <Shortcut not Assigned>
0920     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 25                           <Shortcut not Assigned>
0921     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 26                           <Shortcut not Assigned>
0922     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 27                           <Shortcut not Assigned>
0923     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 28                           <Shortcut not Assigned>
0924     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 29                           <Shortcut not Assigned>
0925     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 30                           <Shortcut not Assigned>
0926     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 31                           <Shortcut not Assigned>
0927     Global                   Paketti                  ∿ Set Selected Instrument All Mod to 32                           <Shortcut not Assigned>
0928     Global                   Paketti                  ∿ Set Selected Instrument FX Group (Next)                         <Shortcut not Assigned>
0929     Global                   Paketti                  ∿ Set Selected Instrument FX Group (Previous)                     <Shortcut not Assigned>
0930     Global                   Paketti                  ∿ Set Selected Instrument Finetune (+1)                           <Shortcut not Assigned>
0931     Global                   Paketti                  ∿ Set Selected Instrument Finetune (+10)                          <Shortcut not Assigned>
0932     Global                   Paketti                  ∿ Set Selected Instrument Finetune (-1)                           <Shortcut not Assigned>
0933     Global                   Paketti                  ∿ Set Selected Instrument Finetune (-10)                          <Shortcut not Assigned>
0934     Global                   Paketti                  ∿ Set Selected Instrument Finetune (0)                            <Shortcut not Assigned>
0935     Global                   Paketti                  ∿ Set Selected Instrument Global Volume (+0.01)                   <Shortcut not Assigned>
0936     Global                   Paketti                  ∿ Set Selected Instrument Global Volume (-0.01)                   <Shortcut not Assigned>
0937     Global                   Paketti                  ∿ Set Selected Instrument Global Volume (-INF dB)                 <Shortcut not Assigned>
0938     Global                   Paketti                  ∿ Set Selected Instrument Global Volume (0.0dB)                   <Shortcut not Assigned>
0939     Global                   Paketti                  ∿ Set Selected Instrument Mod Group (Next)                        <Shortcut not Assigned>
0940     Global                   Paketti                  ∿ Set Selected Instrument Mod Group (Previous)                    <Shortcut not Assigned>
0941     Global                   Paketti                  ∿ Set Selected Instrument Transpose (+1)                          <Shortcut not Assigned>
0942     Global                   Paketti                  ∿ Set Selected Instrument Transpose (+12)                         <Shortcut not Assigned>
0943     Global                   Paketti                  ∿ Set Selected Instrument Transpose (-1)                          <Shortcut not Assigned>
0944     Global                   Paketti                  ∿ Set Selected Instrument Transpose (-12)                         <Shortcut not Assigned>
0945     Global                   Paketti                  ∿ Set Selected Instrument Transpose 0 (Reset)                     <Shortcut not Assigned>
0946     Global                   Paketti                  ∿ Set Selected Instrument Velocity Tracking Off                   <Shortcut not Assigned>
0947     Global                   Paketti                  ∿ Set Selected Instrument Velocity Tracking On                    <Shortcut not Assigned>
0948     Global                   Paketti                  ∿ Set Selected Instrument Volume (All) (+0.01)                    <Shortcut not Assigned>
0949     Global                   Paketti                  ∿ Set Selected Instrument Volume (All) (-0.01)                    <Shortcut not Assigned>
0950     Global                   Paketti                  ∿ Set Selected Instrument Volume (All) (-INF dB)                  <Shortcut not Assigned>
0951     Global                   Paketti                  ∿ Set Selected Instrument Volume Reset (All) (0.0dB)              <Shortcut not Assigned>
0952     Global                   Paketti                  ∿ Set Selected Sample (+1) Velocity Range 7F others 00            <Shortcut not Assigned>
0953     Global                   Paketti                  ∿ Set Selected Sample (-1) Velocity Range 7F others 00            <Shortcut not Assigned>
0954     Global                   Paketti                  ∿ Set Selected Sample (Random) Velocity Range 7F others 00        <Shortcut not Assigned>
0955     Global                   Paketti                  ∿ Set Selected Sample Autofade Off                                <Shortcut not Assigned>
0956     Global                   Paketti                  ∿ Set Selected Sample Autofade On                                 <Shortcut not Assigned>
0957     Global                   Paketti                  ∿ Set Selected Sample Autofade On/Off                             <Shortcut not Assigned>
0958     Global                   Paketti                  ∿ Set Selected Sample Autoseek On/Off                             <Shortcut not Assigned>
0959     Global                   Paketti                  ∿ Set Selected Sample Beatsync 1 (Repitch)                        <Shortcut not Assigned>
0960     Global                   Paketti                  ∿ Set Selected Sample Beatsync 2 (Time-Stretch Percussion)        <Shortcut not Assigned>
0961     Global                   Paketti                  ∿ Set Selected Sample Beatsync 3 (Time-Stretch Texture)           <Shortcut not Assigned>
0962     Global                   Paketti                  ∿ Set Selected Sample Beatsync Line (+1)                          <Shortcut not Assigned>
0963     Global                   Paketti                  ∿ Set Selected Sample Beatsync Line (-1)                          <Shortcut not Assigned>
0964     Global                   Paketti                  ∿ Set Selected Sample Beatsync Line (Power of Two Above)          <Shortcut not Assigned>
0965     Global                   Paketti                  ∿ Set Selected Sample Beatsync Line (Power of Two Below)          <Shortcut not Assigned>
0966     Global                   Paketti                  ∿ Set Selected Sample Beatsync On/Off                             <Shortcut not Assigned>
0967     Global                   Paketti                  ∿ Set Selected Sample Beatsync On/Off 1 (Repitch)                 <Shortcut not Assigned>
0968     Global                   Paketti                  ∿ Set Selected Sample Beatsync On/Off 2 (Time-Stretch Percussion) <Shortcut not Assigned>
0969     Global                   Paketti                  ∿ Set Selected Sample Beatsync On/Off 3 (Time-Stretch Texture)    <Shortcut not Assigned>
0970     Global                   Paketti                  ∿ Set Selected Sample FX Group (Next)                             <Shortcut not Assigned>
0971     Global                   Paketti                  ∿ Set Selected Sample FX Group (Previous)                         <Shortcut not Assigned>
0972     Global                   Paketti                  ∿ Set Selected Sample FX to 00                                    <Shortcut not Assigned>
0973     Global                   Paketti                  ∿ Set Selected Sample FX to 01                                    <Shortcut not Assigned>
0974     Global                   Paketti                  ∿ Set Selected Sample FX to 02                                    <Shortcut not Assigned>
0975     Global                   Paketti                  ∿ Set Selected Sample FX to 03                                    <Shortcut not Assigned>
0976     Global                   Paketti                  ∿ Set Selected Sample FX to 04                                    <Shortcut not Assigned>
0977     Global                   Paketti                  ∿ Set Selected Sample FX to 05                                    <Shortcut not Assigned>
0978     Global                   Paketti                  ∿ Set Selected Sample FX to 06                                    <Shortcut not Assigned>
0979     Global                   Paketti                  ∿ Set Selected Sample FX to 07                                    <Shortcut not Assigned>
0980     Global                   Paketti                  ∿ Set Selected Sample FX to 08                                    <Shortcut not Assigned>
0981     Global                   Paketti                  ∿ Set Selected Sample FX to 09                                    <Shortcut not Assigned>
0982     Global                   Paketti                  ∿ Set Selected Sample FX to 10                                    <Shortcut not Assigned>
0983     Global                   Paketti                  ∿ Set Selected Sample FX to 11                                    <Shortcut not Assigned>
0984     Global                   Paketti                  ∿ Set Selected Sample FX to 12                                    <Shortcut not Assigned>
0985     Global                   Paketti                  ∿ Set Selected Sample FX to 13                                    <Shortcut not Assigned>
0986     Global                   Paketti                  ∿ Set Selected Sample FX to 14                                    <Shortcut not Assigned>
0987     Global                   Paketti                  ∿ Set Selected Sample FX to 15                                    <Shortcut not Assigned>
0988     Global                   Paketti                  ∿ Set Selected Sample FX to 16                                    <Shortcut not Assigned>
0989     Global                   Paketti                  ∿ Set Selected Sample FX to 17                                    <Shortcut not Assigned>
0990     Global                   Paketti                  ∿ Set Selected Sample FX to 18                                    <Shortcut not Assigned>
0991     Global                   Paketti                  ∿ Set Selected Sample FX to 19                                    <Shortcut not Assigned>
0992     Global                   Paketti                  ∿ Set Selected Sample FX to 20                                    <Shortcut not Assigned>
0993     Global                   Paketti                  ∿ Set Selected Sample FX to 21                                    <Shortcut not Assigned>
0994     Global                   Paketti                  ∿ Set Selected Sample FX to 22                                    <Shortcut not Assigned>
0995     Global                   Paketti                  ∿ Set Selected Sample FX to 23                                    <Shortcut not Assigned>
0996     Global                   Paketti                  ∿ Set Selected Sample FX to 24                                    <Shortcut not Assigned>
0997     Global                   Paketti                  ∿ Set Selected Sample FX to 25                                    <Shortcut not Assigned>
0998     Global                   Paketti                  ∿ Set Selected Sample FX to 26                                    <Shortcut not Assigned>
0999     Global                   Paketti                  ∿ Set Selected Sample FX to 27                                    <Shortcut not Assigned>
1000     Global                   Paketti                  ∿ Set Selected Sample FX to 28                                    <Shortcut not Assigned>
1001     Global                   Paketti                  ∿ Set Selected Sample FX to 29                                    <Shortcut not Assigned>
1002     Global                   Paketti                  ∿ Set Selected Sample FX to 30                                    <Shortcut not Assigned>
1003     Global                   Paketti                  ∿ Set Selected Sample FX to 31                                    <Shortcut not Assigned>
1004     Global                   Paketti                  ∿ Set Selected Sample FX to 32                                    <Shortcut not Assigned>
1005     Global                   Paketti                  ∿ Set Selected Sample Finetune (+1)                               <Shortcut not Assigned>
1006     Global                   Paketti                  ∿ Set Selected Sample Finetune (+10)                              <Shortcut not Assigned>
1007     Global                   Paketti                  ∿ Set Selected Sample Finetune (+5)                               <Shortcut not Assigned>
1008     Global                   Paketti                  ∿ Set Selected Sample Finetune (-1)                               <Shortcut not Assigned>
1009     Global                   Paketti                  ∿ Set Selected Sample Finetune (-10)                              <Shortcut not Assigned>
1010     Global                   Paketti                  ∿ Set Selected Sample Finetune (-5)                               <Shortcut not Assigned>
1011     Global                   Paketti                  ∿ Set Selected Sample Finetune (0)                                <Shortcut not Assigned>
1012     Global                   Paketti                  ∿ Set Selected Sample Interpolation to 1 (None)                   <Shortcut not Assigned>
1013     Global                   Paketti                  ∿ Set Selected Sample Interpolation to 2 (Linear)                 <Shortcut not Assigned>
1014     Global                   Paketti                  ∿ Set Selected Sample Interpolation to 3 (Cubic)                  <Shortcut not Assigned>
1015     Global                   Paketti                  ∿ Set Selected Sample Interpolation to 4 (Sinc)                   <Shortcut not Assigned>
1016     Global                   Paketti                  ∿ Set Selected Sample Loop 1 (Off)                                <Shortcut not Assigned>
1017     Global                   Paketti                  ∿ Set Selected Sample Loop 2 (Forward)                            <Shortcut not Assigned>
1018     Global                   Paketti                  ∿ Set Selected Sample Loop 3 (Backward)                           <Shortcut not Assigned>
1019     Global                   Paketti                  ∿ Set Selected Sample Loop 4 (PingPong)                           <Shortcut not Assigned>
1020     Global                   Paketti                  ∿ Set Selected Sample Loop Release On/Off                         <Shortcut not Assigned>
1021     Global                   Paketti                  ∿ Set Selected Sample Mod Group (Next)                            <Shortcut not Assigned>
1022     Global                   Paketti                  ∿ Set Selected Sample Mod Group (Previous)                        <Shortcut not Assigned>
1023     Global                   Paketti                  ∿ Set Selected Sample Mod to 00                                   <Shortcut not Assigned>
1024     Global                   Paketti                  ∿ Set Selected Sample Mod to 01                                   <Shortcut not Assigned>
1025     Global                   Paketti                  ∿ Set Selected Sample Mod to 02                                   <Shortcut not Assigned>
1026     Global                   Paketti                  ∿ Set Selected Sample Mod to 03                                   <Shortcut not Assigned>
1027     Global                   Paketti                  ∿ Set Selected Sample Mod to 04                                   <Shortcut not Assigned>
1028     Global                   Paketti                  ∿ Set Selected Sample Mod to 05                                   <Shortcut not Assigned>
1029     Global                   Paketti                  ∿ Set Selected Sample Mod to 06                                   <Shortcut not Assigned>
1030     Global                   Paketti                  ∿ Set Selected Sample Mod to 07                                   <Shortcut not Assigned>
1031     Global                   Paketti                  ∿ Set Selected Sample Mod to 08                                   <Shortcut not Assigned>
1032     Global                   Paketti                  ∿ Set Selected Sample Mod to 09                                   <Shortcut not Assigned>
1033     Global                   Paketti                  ∿ Set Selected Sample Mod to 10                                   <Shortcut not Assigned>
1034     Global                   Paketti                  ∿ Set Selected Sample Mod to 11                                   <Shortcut not Assigned>
1035     Global                   Paketti                  ∿ Set Selected Sample Mod to 12                                   <Shortcut not Assigned>
1036     Global                   Paketti                  ∿ Set Selected Sample Mod to 13                                   <Shortcut not Assigned>
1037     Global                   Paketti                  ∿ Set Selected Sample Mod to 14                                   <Shortcut not Assigned>
1038     Global                   Paketti                  ∿ Set Selected Sample Mod to 15                                   <Shortcut not Assigned>
1039     Global                   Paketti                  ∿ Set Selected Sample Mod to 16                                   <Shortcut not Assigned>
1040     Global                   Paketti                  ∿ Set Selected Sample Mod to 17                                   <Shortcut not Assigned>
1041     Global                   Paketti                  ∿ Set Selected Sample Mod to 18                                   <Shortcut not Assigned>
1042     Global                   Paketti                  ∿ Set Selected Sample Mod to 19                                   <Shortcut not Assigned>
1043     Global                   Paketti                  ∿ Set Selected Sample Mod to 20                                   <Shortcut not Assigned>
1044     Global                   Paketti                  ∿ Set Selected Sample Mod to 21                                   <Shortcut not Assigned>
1045     Global                   Paketti                  ∿ Set Selected Sample Mod to 22                                   <Shortcut not Assigned>
1046     Global                   Paketti                  ∿ Set Selected Sample Mod to 23                                   <Shortcut not Assigned>
1047     Global                   Paketti                  ∿ Set Selected Sample Mod to 24                                   <Shortcut not Assigned>
1048     Global                   Paketti                  ∿ Set Selected Sample Mod to 25                                   <Shortcut not Assigned>
1049     Global                   Paketti                  ∿ Set Selected Sample Mod to 26                                   <Shortcut not Assigned>
1050     Global                   Paketti                  ∿ Set Selected Sample Mod to 27                                   <Shortcut not Assigned>
1051     Global                   Paketti                  ∿ Set Selected Sample Mod to 28                                   <Shortcut not Assigned>
1052     Global                   Paketti                  ∿ Set Selected Sample Mod to 29                                   <Shortcut not Assigned>
1053     Global                   Paketti                  ∿ Set Selected Sample Mod to 30                                   <Shortcut not Assigned>
1054     Global                   Paketti                  ∿ Set Selected Sample Mod to 31                                   <Shortcut not Assigned>
1055     Global                   Paketti                  ∿ Set Selected Sample Mod to 32                                   <Shortcut not Assigned>
1056     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 0 (Off)                       <Shortcut not Assigned>
1057     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 1                             <Shortcut not Assigned>
1058     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 2                             <Shortcut not Assigned>
1059     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 3                             <Shortcut not Assigned>
1060     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 4                             <Shortcut not Assigned>
1061     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 5                             <Shortcut not Assigned>
1062     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 6                             <Shortcut not Assigned>
1063     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 7                             <Shortcut not Assigned>
1064     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 8                             <Shortcut not Assigned>
1065     Global                   Paketti                  ∿ Set Selected Sample Mute Group to 9                             <Shortcut not Assigned>
1066     Global                   Paketti                  ∿ Set Selected Sample Mute Group to A                             <Shortcut not Assigned>
1067     Global                   Paketti                  ∿ Set Selected Sample Mute Group to B                             <Shortcut not Assigned>
1068     Global                   Paketti                  ∿ Set Selected Sample Mute Group to C                             <Shortcut not Assigned>
1069     Global                   Paketti                  ∿ Set Selected Sample Mute Group to D                             <Shortcut not Assigned>
1070     Global                   Paketti                  ∿ Set Selected Sample Mute Group to E                             <Shortcut not Assigned>
1071     Global                   Paketti                  ∿ Set Selected Sample Mute Group to F                             <Shortcut not Assigned>
1072     Global                   Paketti                  ∿ Set Selected Sample NNA to 1 (Cut)                              <Shortcut not Assigned>
1073     Global                   Paketti                  ∿ Set Selected Sample NNA to 2 (Note-Off)                         <Shortcut not Assigned>
1074     Global                   Paketti                  ∿ Set Selected Sample NNA to 3 (Continue)                         <Shortcut not Assigned>
1075     Global                   Paketti                  ∿ Set Selected Sample One-Shot On/Off                             <Shortcut not Assigned>
1076     Global                   Paketti                  ∿ Set Selected Sample Oversample Off                              <Shortcut not Assigned>
1077     Global                   Paketti                  ∿ Set Selected Sample Oversample On                               <Shortcut not Assigned>
1078     Global                   Paketti                  ∿ Set Selected Sample Oversample On/Off                           <Shortcut not Assigned>
1079     Global                   Paketti                  ∿ Set Selected Sample Panning (+0.01)                             <Shortcut not Assigned>
1080     Global                   Paketti                  ∿ Set Selected Sample Panning (+0.05)                             <Shortcut not Assigned>
1081     Global                   Paketti                  ∿ Set Selected Sample Panning (-0.01)                             <Shortcut not Assigned>
1082     Global                   Paketti                  ∿ Set Selected Sample Panning (-0.05)                             <Shortcut not Assigned>
1083     Global                   Paketti                  ∿ Set Selected Sample Panning 0.0 (Left)                          <Shortcut not Assigned>
1084     Global                   Paketti                  ∿ Set Selected Sample Panning 0.5 (Center)                        <Shortcut not Assigned>
1085     Global                   Paketti                  ∿ Set Selected Sample Panning 1.0 (Right)                         <Shortcut not Assigned>
1086     Global                   Paketti                  ∿ Set Selected Sample Transpose (+1)                              <Shortcut not Assigned>
1087     Global                   Paketti                  ∿ Set Selected Sample Transpose (+12)                             <Shortcut not Assigned>
1088     Global                   Paketti                  ∿ Set Selected Sample Transpose (+5)                              <Shortcut not Assigned>
1089     Global                   Paketti                  ∿ Set Selected Sample Transpose (-1)                              <Shortcut not Assigned>
1090     Global                   Paketti                  ∿ Set Selected Sample Transpose (-12)                             <Shortcut not Assigned>
1091     Global                   Paketti                  ∿ Set Selected Sample Transpose (-5)                              <Shortcut not Assigned>
1092     Global                   Paketti                  ∿ Set Selected Sample Velocity Tracking Off                       <Shortcut not Assigned>
1093     Global                   Paketti                  ∿ Set Selected Sample Velocity Tracking On                        Shift + Control + V
1094     Global                   Paketti                  ∿ Set Selected Sample Volume (+0.01)                              <Shortcut not Assigned>
1095     Global                   Paketti                  ∿ Set Selected Sample Volume (+0.05)                              <Shortcut not Assigned>
1096     Global                   Paketti                  ∿ Set Selected Sample Volume (-0.01)                              <Shortcut not Assigned>
1097     Global                   Paketti                  ∿ Set Selected Sample Volume (-0.05)                              <Shortcut not Assigned>
1098     Global                   Paketti                  ∿ Set Selected Sample Volume 0.0dB, others -INF                   <Shortcut not Assigned>
1099     Global                   Paketti                  ∿ Set Selected Sample Volume Reset (0.0dB)                        <Shortcut not Assigned>
1100     Global                   Paketti                  ∿ Set Selected Sample Volume to -INF dB                           <Shortcut not Assigned>
1101     Global                   Paketti                  ∿ Set Selected Track Output Routing 00                            <Shortcut not Assigned>
1102     Global                   Paketti                  ∿ Set Selected Track Output Routing 01                            <Shortcut not Assigned>
1103     Global                   Paketti                  ∿ Set Selected Track Output Routing 02                            <Shortcut not Assigned>
1104     Global                   Paketti                  ∿ Set Selected Track Output Routing 03                            <Shortcut not Assigned>
1105     Global                   Paketti                  ∿ Set Selected Track Output Routing 04                            <Shortcut not Assigned>
1106     Global                   Paketti                  ∿ Set Selected Track Output Routing 05                            <Shortcut not Assigned>
1107     Global                   Paketti                  ∿ Set Selected Track Output Routing 06                            <Shortcut not Assigned>
1108     Global                   Paketti                  ∿ Set Selected Track Output Routing 07                            <Shortcut not Assigned>
1109     Global                   Paketti                  ∿ Set Selected Track Output Routing 08                            <Shortcut not Assigned>
1110     Global                   Paketti                  ∿ Set Selected Track Output Routing 09                            <Shortcut not Assigned>
1111     Global                   Paketti                  ∿ Set Selected Track Output Routing 10                            <Shortcut not Assigned>
1112     Global                   Paketti                  ∿ Set Selected Track Output Routing 11                            <Shortcut not Assigned>
1113     Global                   Paketti                  ∿ Set Selected Track Output Routing 12                            <Shortcut not Assigned>
1114     Global                   Paketti                  ∿ Set Selected Track Output Routing 13                            <Shortcut not Assigned>
1115     Global                   Paketti                  ∿ Set Selected Track Output Routing 14                            <Shortcut not Assigned>
1116     Global                   Paketti                  ∿ Set Selected Track Output Routing 15                            <Shortcut not Assigned>
1117     Global                   Paketti                  ∿ Set Selected Track Output Routing 16                            <Shortcut not Assigned>
1118     Global                   Paketti                  ∿ Set Selected Track Output Routing 17                            <Shortcut not Assigned>
1119     Global                   Paketti                  ∿ Set Selected Track Output Routing 18                            <Shortcut not Assigned>
1120     Global                   Paketti                  ∿ Set Selected Track Output Routing 19                            <Shortcut not Assigned>
1121     Global                   Paketti                  ∿ Set Selected Track Output Routing 20                            <Shortcut not Assigned>
1122     Global                   Paketti                  ∿ Set Selected Track Output Routing 21                            <Shortcut not Assigned>
1123     Global                   Paketti                  ∿ Set Selected Track Output Routing 22                            <Shortcut not Assigned>
1124     Global                   Paketti                  ∿ Set Selected Track Output Routing 23                            <Shortcut not Assigned>
1125     Global                   Paketti                  ∿ Set Selected Track Output Routing 24                            <Shortcut not Assigned>
1126     Global                   Paketti                  ∿ Set Selected Track Output Routing 25                            <Shortcut not Assigned>
1127     Global                   Paketti                  ∿ Set Selected Track Output Routing 26                            <Shortcut not Assigned>
1128     Global                   Paketti                  ∿ Set Selected Track Output Routing 27                            <Shortcut not Assigned>
1129     Global                   Paketti                  ∿ Set Selected Track Output Routing 28                            <Shortcut not Assigned>
1130     Global                   Paketti                  ∿ Set Selected Track Output Routing 29                            <Shortcut not Assigned>
1131     Global                   Paketti                  ∿ Set Selected Track Output Routing 30                            <Shortcut not Assigned>
1132     Global                   Paketti                  ∿ Set Selected Track Output Routing 31                            <Shortcut not Assigned>
1133     Global                   Paketti                  ∿ Set Selected Track Output Routing 32                            <Shortcut not Assigned>
1134     Global                   Paketti                  ∿ Set Selected Track Output Routing 33                            <Shortcut not Assigned>
1135     Global                   Paketti                  ∿ Set Selected Track Output Routing 34                            <Shortcut not Assigned>
1136     Global                   Paketti                  ∿ Set Selected Track Output Routing 35                            <Shortcut not Assigned>
1137     Global                   Paketti                  ∿ Set Selected Track Output Routing 36                            <Shortcut not Assigned>
1138     Global                   Paketti                  ∿ Set Selected Track Output Routing 37                            <Shortcut not Assigned>
1139     Global                   Paketti                  ∿ Set Selected Track Output Routing 38                            <Shortcut not Assigned>
1140     Global                   Paketti                  ∿ Set Selected Track Output Routing 39                            <Shortcut not Assigned>
1141     Global                   Paketti                  ∿ Set Selected Track Output Routing 40                            <Shortcut not Assigned>
1142     Global                   Paketti                  ∿ Set Selected Track Output Routing 41                            <Shortcut not Assigned>
1143     Global                   Paketti                  ∿ Set Selected Track Output Routing 42                            <Shortcut not Assigned>
1144     Global                   Paketti                  ∿ Set Selected Track Output Routing 43                            <Shortcut not Assigned>
1145     Global                   Paketti                  ∿ Set Selected Track Output Routing 44                            <Shortcut not Assigned>
1146     Global                   Paketti                  ∿ Set Selected Track Output Routing 45                            <Shortcut not Assigned>
1147     Global                   Paketti                  ∿ Set Selected Track Output Routing 46                            <Shortcut not Assigned>
1148     Global                   Paketti                  ∿ Set Selected Track Output Routing 47                            <Shortcut not Assigned>
1149     Global                   Paketti                  ∿ Set Selected Track Output Routing 48                            <Shortcut not Assigned>
1150     Global                   Paketti                  ∿ Set Selected Track Output Routing 49                            <Shortcut not Assigned>
1151     Global                   Paketti                  ∿ Set Selected Track Output Routing 50                            <Shortcut not Assigned>
1152     Global                   Paketti                  ∿ Set Selected Track Output Routing 51                            <Shortcut not Assigned>
1153     Global                   Paketti                  ∿ Set Selected Track Output Routing 52                            <Shortcut not Assigned>
1154     Global                   Paketti                  ∿ Set Selected Track Output Routing 53                            <Shortcut not Assigned>
1155     Global                   Paketti                  ∿ Set Selected Track Output Routing 54                            <Shortcut not Assigned>
1156     Global                   Paketti                  ∿ Set Selected Track Output Routing 55                            <Shortcut not Assigned>
1157     Global                   Paketti                  ∿ Set Selected Track Output Routing 56                            <Shortcut not Assigned>
1158     Global                   Paketti                  ∿ Set Selected Track Output Routing 57                            <Shortcut not Assigned>
1159     Global                   Paketti                  ∿ Set Selected Track Output Routing 58                            <Shortcut not Assigned>
1160     Global                   Paketti                  ∿ Set Selected Track Output Routing 59                            <Shortcut not Assigned>
1161     Global                   Paketti                  ∿ Set Selected Track Output Routing 60                            <Shortcut not Assigned>
1162     Global                   Paketti                  ∿ Set Selected Track Output Routing 61                            <Shortcut not Assigned>
1163     Global                   Paketti                  ∿ Set Selected Track Output Routing 62                            <Shortcut not Assigned>
1164     Global                   Paketti                  ∿ Set Selected Track Output Routing 63                            <Shortcut not Assigned>
1165     Global                   Paketti                  ∿ Set Selected Track Volume to -INF dB                            <Shortcut not Assigned>
1166     Global                   Paketti                  ∿ Set Selected Track Volume to 0.0dB                              <Shortcut not Assigned>
1167     Global                   Paketti                  ∿ Set Sequence 00 as Scheduled List                               <Shortcut not Assigned>
1168     Global                   Paketti                  ∿ Set Sequence 01 as Scheduled List                               <Shortcut not Assigned>
1169     Global                   Paketti                  ∿ Set Sequence 02 as Scheduled List                               <Shortcut not Assigned>
1170     Global                   Paketti                  ∿ Set Sequence 03 as Scheduled List                               <Shortcut not Assigned>
1171     Global                   Paketti                  ∿ Set Sequence 04 as Scheduled List                               <Shortcut not Assigned>
1172     Global                   Paketti                  ∿ Set Sequence 05 as Scheduled List                               <Shortcut not Assigned>
1173     Global                   Paketti                  ∿ Set Sequence 06 as Scheduled List                               <Shortcut not Assigned>
1174     Global                   Paketti                  ∿ Set Sequence 07 as Scheduled List                               <Shortcut not Assigned>
1175     Global                   Paketti                  ∿ Set Sequence 08 as Scheduled List                               <Shortcut not Assigned>
1176     Global                   Paketti                  ∿ Set Sequence 09 as Scheduled List                               <Shortcut not Assigned>
1177     Global                   Paketti                  ∿ Set Sequence 10 as Scheduled List                               <Shortcut not Assigned>
1178     Global                   Paketti                  ∿ Set Sequence 11 as Scheduled List                               <Shortcut not Assigned>
1179     Global                   Paketti                  ∿ Set Sequence 12 as Scheduled List                               <Shortcut not Assigned>
1180     Global                   Paketti                  ∿ Set Sequence 13 as Scheduled List                               <Shortcut not Assigned>
1181     Global                   Paketti                  ∿ Set Sequence 14 as Scheduled List                               <Shortcut not Assigned>
1182     Global                   Paketti                  ∿ Set Sequence 15 as Scheduled List                               <Shortcut not Assigned>
1183     Global                   Paketti                  ∿ Set Sequence 16 as Scheduled List                               <Shortcut not Assigned>
1184     Global                   Paketti                  ∿ Set Sequence 17 as Scheduled List                               <Shortcut not Assigned>
1185     Global                   Paketti                  ∿ Set Sequence 18 as Scheduled List                               <Shortcut not Assigned>
1186     Global                   Paketti                  ∿ Set Sequence 19 as Scheduled List                               <Shortcut not Assigned>
1187     Global                   Paketti                  ∿ Set Sequence 20 as Scheduled List                               <Shortcut not Assigned>
1188     Global                   Paketti                  ∿ Set Sequence 21 as Scheduled List                               <Shortcut not Assigned>
1189     Global                   Paketti                  ∿ Set Sequence 22 as Scheduled List                               <Shortcut not Assigned>
1190     Global                   Paketti                  ∿ Set Sequence 23 as Scheduled List                               <Shortcut not Assigned>
1191     Global                   Paketti                  ∿ Set Sequence 24 as Scheduled List                               <Shortcut not Assigned>
1192     Global                   Paketti                  ∿ Set Sequence 25 as Scheduled List                               <Shortcut not Assigned>
1193     Global                   Paketti                  ∿ Set Sequence 26 as Scheduled List                               <Shortcut not Assigned>
1194     Global                   Paketti                  ∿ Set Sequence 27 as Scheduled List                               <Shortcut not Assigned>
1195     Global                   Paketti                  ∿ Set Sequence 28 as Scheduled List                               <Shortcut not Assigned>
1196     Global                   Paketti                  ∿ Set Sequence 29 as Scheduled List                               <Shortcut not Assigned>
1197     Global                   Paketti                  ∿ Set Sequence 30 as Scheduled List                               <Shortcut not Assigned>
1198     Global                   Paketti                  ∿ Set Sequence 31 as Scheduled List                               <Shortcut not Assigned>
1199     Global                   Paketti                  ∿ Set Sequence Loop Selection Off                                 <Shortcut not Assigned>
1200     Global                   Paketti                  ∿ Set Sequence Loop from Current to 00                            <Shortcut not Assigned>
1201     Global                   Paketti                  ∿ Set Sequence Loop from Current to 01                            <Shortcut not Assigned>
1202     Global                   Paketti                  ∿ Set Sequence Loop from Current to 02                            <Shortcut not Assigned>
1203     Global                   Paketti                  ∿ Set Sequence Loop from Current to 03                            <Shortcut not Assigned>
1204     Global                   Paketti                  ∿ Set Sequence Loop from Current to 04                            <Shortcut not Assigned>
1205     Global                   Paketti                  ∿ Set Sequence Loop from Current to 05                            <Shortcut not Assigned>
1206     Global                   Paketti                  ∿ Set Sequence Loop from Current to 06                            <Shortcut not Assigned>
1207     Global                   Paketti                  ∿ Set Sequence Loop from Current to 07                            <Shortcut not Assigned>
1208     Global                   Paketti                  ∿ Set Sequence Loop from Current to 08                            <Shortcut not Assigned>
1209     Global                   Paketti                  ∿ Set Sequence Loop from Current to 09                            <Shortcut not Assigned>
1210     Global                   Paketti                  ∿ Set Sequence Loop from Current to 10                            <Shortcut not Assigned>
1211     Global                   Paketti                  ∿ Set Sequence Loop from Current to 11                            <Shortcut not Assigned>
1212     Global                   Paketti                  ∿ Set Sequence Loop from Current to 12                            <Shortcut not Assigned>
1213     Global                   Paketti                  ∿ Set Sequence Loop from Current to 13                            <Shortcut not Assigned>
1214     Global                   Paketti                  ∿ Set Sequence Loop from Current to 14                            <Shortcut not Assigned>
1215     Global                   Paketti                  ∿ Set Sequence Loop from Current to 15                            <Shortcut not Assigned>
1216     Global                   Paketti                  ∿ Set Sequence Loop from Current to 16                            <Shortcut not Assigned>
1217     Global                   Paketti                  ∿ Set Sequence Loop from Current to 17                            <Shortcut not Assigned>
1218     Global                   Paketti                  ∿ Set Sequence Loop from Current to 18                            <Shortcut not Assigned>
1219     Global                   Paketti                  ∿ Set Sequence Loop from Current to 19                            <Shortcut not Assigned>
1220     Global                   Paketti                  ∿ Set Sequence Loop from Current to 20                            <Shortcut not Assigned>
1221     Global                   Paketti                  ∿ Set Sequence Loop from Current to 21                            <Shortcut not Assigned>
1222     Global                   Paketti                  ∿ Set Sequence Loop from Current to 22                            <Shortcut not Assigned>
1223     Global                   Paketti                  ∿ Set Sequence Loop from Current to 23                            <Shortcut not Assigned>
1224     Global                   Paketti                  ∿ Set Sequence Loop from Current to 24                            <Shortcut not Assigned>
1225     Global                   Paketti                  ∿ Set Sequence Loop from Current to 25                            <Shortcut not Assigned>
1226     Global                   Paketti                  ∿ Set Sequence Loop from Current to 26                            <Shortcut not Assigned>
1227     Global                   Paketti                  ∿ Set Sequence Loop from Current to 27                            <Shortcut not Assigned>
1228     Global                   Paketti                  ∿ Set Sequence Loop from Current to 28                            <Shortcut not Assigned>
1229     Global                   Paketti                  ∿ Set Sequence Loop from Current to 29                            <Shortcut not Assigned>
1230     Global                   Paketti                  ∿ Set Sequence Loop from Current to 30                            <Shortcut not Assigned>
1231     Global                   Paketti                  ∿ Set Sequence Loop from Current to 31                            <Shortcut not Assigned>
1232     Global                   Paketti                  ∿ Set Sequence Selection Off                                      Shift + Command + U
1233     Global                   Paketti                  ∿ Show DSP FX Chain                                               <Shortcut not Assigned>
1234     Global                   Paketti                  ∿ Show Paketti KeyBindings Dialog                                 Command + K
1235     Global                   Paketti                  ∿ Show Paketti Preferences...                                     Shift + Command + Comma
1236     Global                   Paketti                  ∿ Show Renoise KeyBindings Dialog                                 Shift + Command + K
1237     Global                   Paketti                  ∿ Show/Hide Pattern Matrix                                        <Shortcut not Assigned>
1238     Global                   Paketti                  ∿ Show/Hide PitchStep on Selected Instrument                      Option + P
1239     Global                   Paketti                  ∿ Show/Hide Slot 01 on Master                                     <Shortcut not Assigned>
1240     Global                   Paketti                  ∿ Show/Hide Slot 01 on Selected Track                             <Shortcut not Assigned>
1241     Global                   Paketti                  ∿ Show/Hide Slot 02 on Master                                     <Shortcut not Assigned>
1242     Global                   Paketti                  ∿ Show/Hide Slot 02 on Selected Track                             <Shortcut not Assigned>
1243     Global                   Paketti                  ∿ Show/Hide Slot 03 on Master                                     <Shortcut not Assigned>
1244     Global                   Paketti                  ∿ Show/Hide Slot 03 on Selected Track                             <Shortcut not Assigned>
1245     Global                   Paketti                  ∿ Show/Hide Slot 04 on Master                                     <Shortcut not Assigned>
1246     Global                   Paketti                  ∿ Show/Hide Slot 04 on Selected Track                             <Shortcut not Assigned>
1247     Global                   Paketti                  ∿ Show/Hide Slot 05 on Master                                     <Shortcut not Assigned>
1248     Global                   Paketti                  ∿ Show/Hide Slot 05 on Selected Track                             <Shortcut not Assigned>
1249     Global                   Paketti                  ∿ Show/Hide Slot 06 on Master                                     <Shortcut not Assigned>
1250     Global                   Paketti                  ∿ Show/Hide Slot 06 on Selected Track                             <Shortcut not Assigned>
1251     Global                   Paketti                  ∿ Show/Hide Slot 07 on Master                                     <Shortcut not Assigned>
1252     Global                   Paketti                  ∿ Show/Hide Slot 07 on Selected Track                             <Shortcut not Assigned>
1253     Global                   Paketti                  ∿ Show/Hide Slot 08 on Master                                     <Shortcut not Assigned>
1254     Global                   Paketti                  ∿ Show/Hide Slot 08 on Selected Track                             <Shortcut not Assigned>
1255     Global                   Paketti                  ∿ Show/Hide Slot 09 on Master                                     <Shortcut not Assigned>
1256     Global                   Paketti                  ∿ Show/Hide Slot 09 on Selected Track                             <Shortcut not Assigned>
1257     Global                   Paketti                  ∿ Show/Hide Slot 10 on Master                                     <Shortcut not Assigned>
1258     Global                   Paketti                  ∿ Show/Hide Slot 10 on Selected Track                             <Shortcut not Assigned>
1259     Global                   Paketti                  ∿ Show/Hide Track DSP and FX Chain Device External Editors        Shift + Command + H
1260     Global                   Paketti                  ∿ Show/Hide User Preference Devices Master Dialog                 Shift + Option + 0
1261     Global                   Paketti                  ∿ Shuffle Oblique Strategies Cards                                <Shortcut not Assigned>
1262     Global                   Paketti                  ∿ Simple Play                                                     <Shortcut not Assigned>
1263     Global                   Paketti                  ∿ Simple Play Record Follow                                       <Shortcut not Assigned>
1264     Global                   Paketti                  ∿ Simple Play Record Follow (2nd)                                 <Shortcut not Assigned>
1265     Global                   Paketti                  ∿ Solo Channel + Play + Follow                                    <Shortcut not Assigned>
1266     Global                   Paketti                  ∿ Song Details (Filename, BPM, LPB)                               <Shortcut not Assigned>
1267     Global                   Paketti                  ∿ Start/Stop Column Cycling                                       <Shortcut not Assigned>
1268     Global                   Paketti                  ∿ Strip Silence                                                   Shift + Option + S
1269     Global                   Paketti                  ∿ Switch to Automation                                            A
1270     Global                   Paketti                  ∿ TPL Decrease (-1)                                               <Shortcut not Assigned>
1271     Global                   Paketti                  ∿ TPL Increase (+1)                                               <Shortcut not Assigned>
1272     Global                   Paketti                  ∿ Toggle Current Sequence Selection On/Off                        <Shortcut not Assigned>
1273     Global                   Paketti                  ∿ Toggle Edit Mode and Tint Track                                 <Shortcut not Assigned>
1274     Global                   Paketti                  ∿ Toggle EditMode (2nd)                                           <Shortcut not Assigned>
1275     Global                   Paketti                  ∿ Toggle EditMode (3rd)                                           Escape
1276     Global                   Paketti                  ∿ Toggle Follow Pattern (2nd)                                     <Shortcut not Assigned>
1277     Global                   Paketti                  ∿ Toggle Metronome On/Off                                         <Shortcut not Assigned>
1278     Global                   Paketti                  ∿ Toggle Mute Tracks                                              Command + F9
1279     Global                   Paketti                  ∿ Toggle Paketti Dialogs Dialog                                   Shift + F1
1280     Global                   Paketti                  ∿ Toggle Selected Sample Velocity Tracking                        <Shortcut not Assigned>
1281     Global                   Paketti                  ∿ Toggle Sequence Loop to 00                                      <Shortcut not Assigned>
1282     Global                   Paketti                  ∿ Toggle Sequence Loop to 01                                      <Shortcut not Assigned>
1283     Global                   Paketti                  ∿ Toggle Sequence Loop to 02                                      <Shortcut not Assigned>
1284     Global                   Paketti                  ∿ Toggle Sequence Loop to 03                                      <Shortcut not Assigned>
1285     Global                   Paketti                  ∿ Toggle Sequence Loop to 04                                      <Shortcut not Assigned>
1286     Global                   Paketti                  ∿ Toggle Sequence Loop to 05                                      <Shortcut not Assigned>
1287     Global                   Paketti                  ∿ Toggle Sequence Loop to 06                                      <Shortcut not Assigned>
1288     Global                   Paketti                  ∿ Toggle Sequence Loop to 07                                      <Shortcut not Assigned>
1289     Global                   Paketti                  ∿ Toggle Sequence Loop to 08                                      <Shortcut not Assigned>
1290     Global                   Paketti                  ∿ Toggle Sequence Loop to 09                                      <Shortcut not Assigned>
1291     Global                   Paketti                  ∿ Toggle Sequence Loop to 10                                      <Shortcut not Assigned>
1292     Global                   Paketti                  ∿ Toggle Sequence Loop to 11                                      <Shortcut not Assigned>
1293     Global                   Paketti                  ∿ Toggle Sequence Loop to 12                                      <Shortcut not Assigned>
1294     Global                   Paketti                  ∿ Toggle Sequence Loop to 13                                      <Shortcut not Assigned>
1295     Global                   Paketti                  ∿ Toggle Sequence Loop to 14                                      <Shortcut not Assigned>
1296     Global                   Paketti                  ∿ Toggle Sequence Loop to 15                                      <Shortcut not Assigned>
1297     Global                   Paketti                  ∿ Toggle Sequence Loop to 16                                      <Shortcut not Assigned>
1298     Global                   Paketti                  ∿ Toggle Sequence Loop to 17                                      <Shortcut not Assigned>
1299     Global                   Paketti                  ∿ Toggle Sequence Loop to 18                                      <Shortcut not Assigned>
1300     Global                   Paketti                  ∿ Toggle Sequence Loop to 19                                      <Shortcut not Assigned>
1301     Global                   Paketti                  ∿ Toggle Sequence Loop to 20                                      <Shortcut not Assigned>
1302     Global                   Paketti                  ∿ Toggle Sequence Loop to 21                                      <Shortcut not Assigned>
1303     Global                   Paketti                  ∿ Toggle Sequence Loop to 22                                      <Shortcut not Assigned>
1304     Global                   Paketti                  ∿ Toggle Sequence Loop to 23                                      <Shortcut not Assigned>
1305     Global                   Paketti                  ∿ Toggle Sequence Loop to 24                                      <Shortcut not Assigned>
1306     Global                   Paketti                  ∿ Toggle Sequence Loop to 25                                      <Shortcut not Assigned>
1307     Global                   Paketti                  ∿ Toggle Sequence Loop to 26                                      <Shortcut not Assigned>
1308     Global                   Paketti                  ∿ Toggle Sequence Loop to 27                                      <Shortcut not Assigned>
1309     Global                   Paketti                  ∿ Toggle Sequence Loop to 28                                      <Shortcut not Assigned>
1310     Global                   Paketti                  ∿ Toggle Sequence Loop to 29                                      <Shortcut not Assigned>
1311     Global                   Paketti                  ∿ Toggle Sequence Loop to 30                                      <Shortcut not Assigned>
1312     Global                   Paketti                  ∿ Toggle Sequence Loop to 31                                      <Shortcut not Assigned>
1313     Global                   Paketti                  ∿ Toggle Sequence Selection (All) On/Off                          <Shortcut not Assigned>
1314     Global                   Paketti                  ∿ Toggle Sequence Selection 00                                    <Shortcut not Assigned>
1315     Global                   Paketti                  ∿ Toggle Sequence Selection 01                                    <Shortcut not Assigned>
1316     Global                   Paketti                  ∿ Toggle Sequence Selection 02                                    <Shortcut not Assigned>
1317     Global                   Paketti                  ∿ Toggle Sequence Selection 03                                    <Shortcut not Assigned>
1318     Global                   Paketti                  ∿ Toggle Sequence Selection 04                                    <Shortcut not Assigned>
1319     Global                   Paketti                  ∿ Toggle Sequence Selection 05                                    <Shortcut not Assigned>
1320     Global                   Paketti                  ∿ Toggle Sequence Selection 06                                    <Shortcut not Assigned>
1321     Global                   Paketti                  ∿ Toggle Sequence Selection 07                                    <Shortcut not Assigned>
1322     Global                   Paketti                  ∿ Toggle Sequence Selection 08                                    <Shortcut not Assigned>
1323     Global                   Paketti                  ∿ Toggle Sequence Selection 09                                    <Shortcut not Assigned>
1324     Global                   Paketti                  ∿ Toggle Sequence Selection 10                                    <Shortcut not Assigned>
1325     Global                   Paketti                  ∿ Toggle Sequence Selection 11                                    <Shortcut not Assigned>
1326     Global                   Paketti                  ∿ Toggle Sequence Selection 12                                    <Shortcut not Assigned>
1327     Global                   Paketti                  ∿ Toggle Sequence Selection 13                                    <Shortcut not Assigned>
1328     Global                   Paketti                  ∿ Toggle Sequence Selection 14                                    <Shortcut not Assigned>
1329     Global                   Paketti                  ∿ Toggle Sequence Selection 15                                    <Shortcut not Assigned>
1330     Global                   Paketti                  ∿ Toggle Sequence Selection 16                                    <Shortcut not Assigned>
1331     Global                   Paketti                  ∿ Toggle Sequence Selection 17                                    <Shortcut not Assigned>
1332     Global                   Paketti                  ∿ Toggle Sequence Selection 18                                    <Shortcut not Assigned>
1333     Global                   Paketti                  ∿ Toggle Sequence Selection 19                                    <Shortcut not Assigned>
1334     Global                   Paketti                  ∿ Toggle Sequence Selection 20                                    <Shortcut not Assigned>
1335     Global                   Paketti                  ∿ Toggle Sequence Selection 21                                    <Shortcut not Assigned>
1336     Global                   Paketti                  ∿ Toggle Sequence Selection 22                                    <Shortcut not Assigned>
1337     Global                   Paketti                  ∿ Toggle Sequence Selection 23                                    <Shortcut not Assigned>
1338     Global                   Paketti                  ∿ Toggle Sequence Selection 24                                    <Shortcut not Assigned>
1339     Global                   Paketti                  ∿ Toggle Sequence Selection 25                                    <Shortcut not Assigned>
1340     Global                   Paketti                  ∿ Toggle Sequence Selection 26                                    <Shortcut not Assigned>
1341     Global                   Paketti                  ∿ Toggle Sequence Selection 27                                    <Shortcut not Assigned>
1342     Global                   Paketti                  ∿ Toggle Sequence Selection 28                                    <Shortcut not Assigned>
1343     Global                   Paketti                  ∿ Toggle Sequence Selection 29                                    <Shortcut not Assigned>
1344     Global                   Paketti                  ∿ Toggle Sequence Selection 30                                    <Shortcut not Assigned>
1345     Global                   Paketti                  ∿ Toggle Sequence Selection 31                                    <Shortcut not Assigned>
1346     Global                   Paketti                  ∿ Toggle Sequence Selection 32                                    <Shortcut not Assigned>
1347     Global                   Paketti                  ∿ Toggle Sequence Selection to Loop                               <Shortcut not Assigned>
1348     Global                   Paketti                  ∿ Toggle Solo Tracks                                              Command + F10
1349     Global                   Paketti                  ∿ Trigger Sequence 00                                             <Shortcut not Assigned>
1350     Global                   Paketti                  ∿ Trigger Sequence 01                                             <Shortcut not Assigned>
1351     Global                   Paketti                  ∿ Trigger Sequence 02                                             <Shortcut not Assigned>
1352     Global                   Paketti                  ∿ Trigger Sequence 03                                             <Shortcut not Assigned>
1353     Global                   Paketti                  ∿ Trigger Sequence 04                                             <Shortcut not Assigned>
1354     Global                   Paketti                  ∿ Trigger Sequence 05                                             <Shortcut not Assigned>
1355     Global                   Paketti                  ∿ Trigger Sequence 06                                             <Shortcut not Assigned>
1356     Global                   Paketti                  ∿ Trigger Sequence 07                                             <Shortcut not Assigned>
1357     Global                   Paketti                  ∿ Trigger Sequence 08                                             <Shortcut not Assigned>
1358     Global                   Paketti                  ∿ Trigger Sequence 09                                             <Shortcut not Assigned>
1359     Global                   Paketti                  ∿ Trigger Sequence 10                                             <Shortcut not Assigned>
1360     Global                   Paketti                  ∿ Trigger Sequence 11                                             <Shortcut not Assigned>
1361     Global                   Paketti                  ∿ Trigger Sequence 12                                             <Shortcut not Assigned>
1362     Global                   Paketti                  ∿ Trigger Sequence 13                                             <Shortcut not Assigned>
1363     Global                   Paketti                  ∿ Trigger Sequence 14                                             <Shortcut not Assigned>
1364     Global                   Paketti                  ∿ Trigger Sequence 15                                             <Shortcut not Assigned>
1365     Global                   Paketti                  ∿ Trigger Sequence 16                                             <Shortcut not Assigned>
1366     Global                   Paketti                  ∿ Trigger Sequence 17                                             <Shortcut not Assigned>
1367     Global                   Paketti                  ∿ Trigger Sequence 18                                             <Shortcut not Assigned>
1368     Global                   Paketti                  ∿ Trigger Sequence 19                                             <Shortcut not Assigned>
1369     Global                   Paketti                  ∿ Trigger Sequence 20                                             <Shortcut not Assigned>
1370     Global                   Paketti                  ∿ Trigger Sequence 21                                             <Shortcut not Assigned>
1371     Global                   Paketti                  ∿ Trigger Sequence 22                                             <Shortcut not Assigned>
1372     Global                   Paketti                  ∿ Trigger Sequence 23                                             <Shortcut not Assigned>
1373     Global                   Paketti                  ∿ Trigger Sequence 24                                             <Shortcut not Assigned>
1374     Global                   Paketti                  ∿ Trigger Sequence 25                                             <Shortcut not Assigned>
1375     Global                   Paketti                  ∿ Trigger Sequence 26                                             <Shortcut not Assigned>
1376     Global                   Paketti                  ∿ Trigger Sequence 27                                             <Shortcut not Assigned>
1377     Global                   Paketti                  ∿ Trigger Sequence 28                                             <Shortcut not Assigned>
1378     Global                   Paketti                  ∿ Trigger Sequence 29                                             <Shortcut not Assigned>
1379     Global                   Paketti                  ∿ Trigger Sequence 30                                             <Shortcut not Assigned>
1380     Global                   Paketti                  ∿ Trigger Sequence 31                                             <Shortcut not Assigned>
1381     Global                   Paketti                  ∿ Uncollapse All Tracks                                           <Shortcut not Assigned>
1382     Global                   Paketti                  ∿ Wipe Selected Track TrackDSPs                                   Control + X
1383     Global                   Paketti                  ∿ Wipe Slices                                                     Option + 0
1384     Global                   Paketti                  ∿ Wipe Song Retain Sample                                         <Shortcut not Assigned>
1385     Global                   Paketti                  ∿ Wipe&Slice (128)                                                Option + 7
1386     Global                   Paketti                  ∿ Wipe&Slice (16)                                                 Option + 4
1387     Global                   Paketti                  ∿ Wipe&Slice (2)                                                  Option + 1
1388     Global                   Paketti                  ∿ Wipe&Slice (32)                                                 Option + 5
1389     Global                   Paketti                  ∿ Wipe&Slice (4)                                                  Option + 2
1390     Global                   Paketti                  ∿ Wipe&Slice (64)                                                 Option + 6
1391     Global                   Paketti                  ∿ Wipe&Slice (8)                                                  Option + 3
1392     Global                   Paketti                  ∿ ∿ Squiggly Sinewave to Clipboard (macOS)                      <Shortcut not Assigned>
1393     Instrument Box           Paketti                  ∿ Show Automation                                                 <Shortcut not Assigned>
1394     Mixer                    Paketti                  ∿ Capture Nearest Instrument and Octave                           Return
1395     Mixer                    Paketti                  ∿ Clean Render Selected Track/Group                               Command + R
1396     Mixer                    Paketti                  ∿ Clean Render Selected Track/Group LPB*2                         <Shortcut not Assigned>
1397     Mixer                    Paketti                  ∿ Impulse Tracker Alt-Left Move Backwards One Channel             <Shortcut not Assigned>
1398     Mixer                    Paketti                  ∿ Impulse Tracker Alt-Left Move Backwards One Channel (Wrap)      Option + Left
1399     Mixer                    Paketti                  ∿ Impulse Tracker Alt-Right Move Forwards One Channel             <Shortcut not Assigned>
1400     Mixer                    Paketti                  ∿ Impulse Tracker Alt-Right Move Forwards One Channel (Wrap)      Option + Right
1401     Mixer                    Paketti                  ∿ Impulse Tracker End *2 behaviour                                Option + Down
1402     Mixer                    Paketti                  ∿ Impulse Tracker Home *2 behaviour                               Option + Up
1403     Mixer                    Paketti                  ∿ Jump to First Track In Next Group                               <Shortcut not Assigned>
1404     Mixer                    Paketti                  ∿ Jump to First Track In Previous Group                           <Shortcut not Assigned>
1405     Mixer                    Paketti                  ∿ Paketti Pattern Doubler                                         Command + Grave
1406     Mixer                    Paketti                  ∿ Paketti Pattern Halver                                          Shift + Option + Grave
1407     Mixer                    Paketti                  ∿ Paketti Track Renamer Dialog...                                 <Shortcut not Assigned>
1408     Mixer                    Paketti                  ∿ Show Automation                                                 <Shortcut not Assigned>
1409     Mixer                    Paketti                  ∿ Switch to Automation                                            <Shortcut not Assigned>
1410     Mixer                    Paketti                  ∿ To Pattern Editor                                               <Shortcut not Assigned>
1411     Pattern Editor           Paketti                  ∿ Adjust Selection Delay Column (+1)                              Control + Right
1412     Pattern Editor           Paketti                  ∿ Adjust Selection Delay Column (+10)                             Shift + Control + Right
1413     Pattern Editor           Paketti                  ∿ Adjust Selection Delay Column (-1)                              <Shortcut not Assigned>
1414     Pattern Editor           Paketti                  ∿ Adjust Selection Delay Column (-10)                             <Shortcut not Assigned>
1415     Pattern Editor           Paketti                  ∿ Adjust Selection Panning Column (+1)                            <Shortcut not Assigned>
1416     Pattern Editor           Paketti                  ∿ Adjust Selection Panning Column (+10)                           <Shortcut not Assigned>
1417     Pattern Editor           Paketti                  ∿ Adjust Selection Panning Column (-1)                            <Shortcut not Assigned>
1418     Pattern Editor           Paketti                  ∿ Adjust Selection Panning Column (-10)                           <Shortcut not Assigned>
1419     Pattern Editor           Paketti                  ∿ Adjust Selection Volume Column (+1)                             <Shortcut not Assigned>
1420     Pattern Editor           Paketti                  ∿ Adjust Selection Volume Column (+10)                            <Shortcut not Assigned>
1421     Pattern Editor           Paketti                  ∿ Adjust Selection Volume Column (-1)                             <Shortcut not Assigned>
1422     Pattern Editor           Paketti                  ∿ Adjust Selection Volume Column (-10)                            <Shortcut not Assigned>
1423     Pattern Editor           Paketti                  ∿ Capture Nearest Instrument and Octave                           Return
1424     Pattern Editor           Paketti                  ∿ Chordsplus (Add 01)                                             <Shortcut not Assigned>
1425     Pattern Editor           Paketti                  ∿ Chordsplus (Add 02)                                             <Shortcut not Assigned>
1426     Pattern Editor           Paketti                  ∿ Chordsplus (Add 03)                                             Shift + Control + 3
1427     Pattern Editor           Paketti                  ∿ Chordsplus (Add 04)                                             Shift + Control + 4
1428     Pattern Editor           Paketti                  ∿ Chordsplus (Add 05)                                             <Shortcut not Assigned>
1429     Pattern Editor           Paketti                  ∿ Chordsplus (Add 06)                                             <Shortcut not Assigned>
1430     Pattern Editor           Paketti                  ∿ Chordsplus (Add 07)                                             Shift + Control + 7
1431     Pattern Editor           Paketti                  ∿ Chordsplus (Add 08)                                             <Shortcut not Assigned>
1432     Pattern Editor           Paketti                  ∿ Chordsplus (Add 09)                                             <Shortcut not Assigned>
1433     Pattern Editor           Paketti                  ∿ Chordsplus (Add 10)                                             <Shortcut not Assigned>
1434     Pattern Editor           Paketti                  ∿ Chordsplus (Add 11)                                             <Shortcut not Assigned>
1435     Pattern Editor           Paketti                  ∿ Chordsplus (Add 12)                                             <Shortcut not Assigned>
1436     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 01)                                             <Shortcut not Assigned>
1437     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 02)                                             <Shortcut not Assigned>
1438     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 03)                                             <Shortcut not Assigned>
1439     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 04)                                             Shift + Control + 2
1440     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 05)                                             <Shortcut not Assigned>
1441     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 06)                                             <Shortcut not Assigned>
1442     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 07)                                             Shift + Control + 6
1443     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 08)                                             <Shortcut not Assigned>
1444     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 09)                                             <Shortcut not Assigned>
1445     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 10)                                             <Shortcut not Assigned>
1446     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 11)                                             <Shortcut not Assigned>
1447     Pattern Editor           Paketti                  ∿ Chordsplus (Sub 12)                                             <Shortcut not Assigned>
1448     Pattern Editor           Paketti                  ∿ Chordsplus 12-12-12 (Octaves)                                   <Shortcut not Assigned>
1449     Pattern Editor           Paketti                  ∿ Chordsplus 2-5 (Sus2)                                           <Shortcut not Assigned>
1450     Pattern Editor           Paketti                  ∿ Chordsplus 3-4 (Maj)                                            <Shortcut not Assigned>
1451     Pattern Editor           Paketti                  ∿ Chordsplus 3-4-2-5 (Min6 Add9)                                  Shift + Control + 1
1452     Pattern Editor           Paketti                  ∿ Chordsplus 3-4-3 (Min7)                                         <Shortcut not Assigned>
1453     Pattern Editor           Paketti                  ∿ Chordsplus 3-4-3-3 (Min9)                                       <Shortcut not Assigned>
1454     Pattern Editor           Paketti                  ∿ Chordsplus 3-4-4 (MinMaj7)                                      <Shortcut not Assigned>
1455     Pattern Editor           Paketti                  ∿ Chordsplus 3-4-4-3 (mM9)                                        <Shortcut not Assigned>
1456     Pattern Editor           Paketti                  ∿ Chordsplus 3-4-7 (Min Added 9th)                                <Shortcut not Assigned>
1457     Pattern Editor           Paketti                  ∿ Chordsplus 3-5-2 (Min7+5)                                       <Shortcut not Assigned>
1458     Pattern Editor           Paketti                  ∿ Chordsplus 3-7-4 (Min9 Simplified)                              <Shortcut not Assigned>
1459     Pattern Editor           Paketti                  ∿ Chordsplus 3-8-3 (mM9 Simplified)                               <Shortcut not Assigned>
1460     Pattern Editor           Paketti                  ∿ Chordsplus 4-3 (Min)                                            <Shortcut not Assigned>
1461     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-2-5 (Maj6 Add9)                                  <Shortcut not Assigned>
1462     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-3 (Maj Dominant 7th)                             <Shortcut not Assigned>
1463     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-3-4-4 (Aug11)                                    <Shortcut not Assigned>
1464     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-3-5 (Aug9)                                       <Shortcut not Assigned>
1465     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-4 (Maj7)                                         <Shortcut not Assigned>
1466     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-4-3 (Maj9)                                       <Shortcut not Assigned>
1467     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-4-4 (MM9)                                        <Shortcut not Assigned>
1468     Pattern Editor           Paketti                  ∿ Chordsplus 4-3-7 (Maj Added 9th)                                <Shortcut not Assigned>
1469     Pattern Editor           Paketti                  ∿ Chordsplus 4-4 (Aug5)                                           <Shortcut not Assigned>
1470     Pattern Editor           Paketti                  ∿ Chordsplus 4-4-2 (Aug6)                                         <Shortcut not Assigned>
1471     Pattern Editor           Paketti                  ∿ Chordsplus 4-4-3 (Aug7)                                         <Shortcut not Assigned>
1472     Pattern Editor           Paketti                  ∿ Chordsplus 4-4-3 (Maj7+5)                                       <Shortcut not Assigned>
1473     Pattern Editor           Paketti                  ∿ Chordsplus 4-4-4 (Aug8)                                         <Shortcut not Assigned>
1474     Pattern Editor           Paketti                  ∿ Chordsplus 4-4-7 (Aug10)                                        <Shortcut not Assigned>
1475     Pattern Editor           Paketti                  ∿ Chordsplus 4-7-3 (Maj9 Simplified)                              <Shortcut not Assigned>
1476     Pattern Editor           Paketti                  ∿ Chordsplus 5-2 (Sus4)                                           <Shortcut not Assigned>
1477     Pattern Editor           Paketti                  ∿ Chordsplus 5-2-3 (7Sus4)                                        <Shortcut not Assigned>
1478     Pattern Editor           Paketti                  ∿ Clean Render Selected Track/Group                               Command + R
1479     Pattern Editor           Paketti                  ∿ Clean Render Selected Track/Group LPB*2                         <Shortcut not Assigned>
1480     Pattern Editor           Paketti                  ∿ Clear Current Row                                               <Shortcut not Assigned>
1481     Pattern Editor           Paketti                  ∿ Clear Current Row 2nd                                           <Shortcut not Assigned>
1482     Pattern Editor           Paketti                  ∿ Columnizer Decrease Delay (-1)                                  <Shortcut not Assigned>
1483     Pattern Editor           Paketti                  ∿ Columnizer Decrease Delay (-1) (2nd)                            <Shortcut not Assigned>
1484     Pattern Editor           Paketti                  ∿ Columnizer Decrease Delay (-10)                                 <Shortcut not Assigned>
1485     Pattern Editor           Paketti                  ∿ Columnizer Decrease Delay (-10) (2nd)                           <Shortcut not Assigned>
1486     Pattern Editor           Paketti                  ∿ Columnizer Decrease Effect Amount (-1)                          <Shortcut not Assigned>
1487     Pattern Editor           Paketti                  ∿ Columnizer Decrease Effect Amount (-10)                         <Shortcut not Assigned>
1488     Pattern Editor           Paketti                  ∿ Columnizer Decrease Effect Number (-1)                          <Shortcut not Assigned>
1489     Pattern Editor           Paketti                  ∿ Columnizer Decrease Effect Number (-10)                         <Shortcut not Assigned>
1490     Pattern Editor           Paketti                  ∿ Columnizer Decrease Panning (-1)                                <Shortcut not Assigned>
1491     Pattern Editor           Paketti                  ∿ Columnizer Decrease Panning (-1) (2nd)                          <Shortcut not Assigned>
1492     Pattern Editor           Paketti                  ∿ Columnizer Decrease Panning (-10)                               <Shortcut not Assigned>
1493     Pattern Editor           Paketti                  ∿ Columnizer Decrease Panning (-10) (2nd)                         <Shortcut not Assigned>
1494     Pattern Editor           Paketti                  ∿ Columnizer Decrease Volume (-1)                                 <Shortcut not Assigned>
1495     Pattern Editor           Paketti                  ∿ Columnizer Decrease Volume (-10)                                <Shortcut not Assigned>
1496     Pattern Editor           Paketti                  ∿ Columnizer Increase Delay (+1)                                  <Shortcut not Assigned>
1497     Pattern Editor           Paketti                  ∿ Columnizer Increase Delay (+1) (2nd)                            <Shortcut not Assigned>
1498     Pattern Editor           Paketti                  ∿ Columnizer Increase Delay (+10)                                 <Shortcut not Assigned>
1499     Pattern Editor           Paketti                  ∿ Columnizer Increase Delay (+10) (2nd)                           <Shortcut not Assigned>
1500     Pattern Editor           Paketti                  ∿ Columnizer Increase Effect Amount (+1)                          <Shortcut not Assigned>
1501     Pattern Editor           Paketti                  ∿ Columnizer Increase Effect Amount (+10)                         <Shortcut not Assigned>
1502     Pattern Editor           Paketti                  ∿ Columnizer Increase Effect Number (+1)                          <Shortcut not Assigned>
1503     Pattern Editor           Paketti                  ∿ Columnizer Increase Effect Number (+10)                         <Shortcut not Assigned>
1504     Pattern Editor           Paketti                  ∿ Columnizer Increase Panning (+1)                                <Shortcut not Assigned>
1505     Pattern Editor           Paketti                  ∿ Columnizer Increase Panning (+1) (2nd)                          <Shortcut not Assigned>
1506     Pattern Editor           Paketti                  ∿ Columnizer Increase Panning (+10)                               <Shortcut not Assigned>
1507     Pattern Editor           Paketti                  ∿ Columnizer Increase Panning (+10) (2nd)                         <Shortcut not Assigned>
1508     Pattern Editor           Paketti                  ∿ Columnizer Increase Volume (+1)                                 <Shortcut not Assigned>
1509     Pattern Editor           Paketti                  ∿ Columnizer Increase Volume (+10)                                <Shortcut not Assigned>
1510     Pattern Editor           Paketti                  ∿ Delay Column Decrease (-1)                                      Control + PeakedBracket
1511     Pattern Editor           Paketti                  ∿ Delay Column Decrease (-10)                                     <Shortcut not Assigned>
1512     Pattern Editor           Paketti                  ∿ Delay Column Increase (+1)                                      Shift + Control + PeakedBracket
1513     Pattern Editor           Paketti                  ∿ Delay Column Increase (+10)                                     <Shortcut not Assigned>
1514     Pattern Editor           Paketti                  ∿ Delete/Wipe/Clear Effect Column Content from Current Track      <Shortcut not Assigned>
1515     Pattern Editor           Paketti                  ∿ Display Effect Column 1                                         <Shortcut not Assigned>
1516     Pattern Editor           Paketti                  ∿ Display Effect Column 2                                         <Shortcut not Assigned>
1517     Pattern Editor           Paketti                  ∿ Display Effect Column 3                                         <Shortcut not Assigned>
1518     Pattern Editor           Paketti                  ∿ Display Effect Column 4                                         <Shortcut not Assigned>
1519     Pattern Editor           Paketti                  ∿ Display Effect Column 5                                         <Shortcut not Assigned>
1520     Pattern Editor           Paketti                  ∿ Display Effect Column 6                                         <Shortcut not Assigned>
1521     Pattern Editor           Paketti                  ∿ Display Effect Column 7                                         <Shortcut not Assigned>
1522     Pattern Editor           Paketti                  ∿ Display Effect Column 8                                         <Shortcut not Assigned>
1523     Pattern Editor           Paketti                  ∿ Display Note Column 1                                           <Shortcut not Assigned>
1524     Pattern Editor           Paketti                  ∿ Display Note Column 10                                          <Shortcut not Assigned>
1525     Pattern Editor           Paketti                  ∿ Display Note Column 11                                          <Shortcut not Assigned>
1526     Pattern Editor           Paketti                  ∿ Display Note Column 12                                          <Shortcut not Assigned>
1527     Pattern Editor           Paketti                  ∿ Display Note Column 2                                           <Shortcut not Assigned>
1528     Pattern Editor           Paketti                  ∿ Display Note Column 3                                           <Shortcut not Assigned>
1529     Pattern Editor           Paketti                  ∿ Display Note Column 4                                           <Shortcut not Assigned>
1530     Pattern Editor           Paketti                  ∿ Display Note Column 5                                           <Shortcut not Assigned>
1531     Pattern Editor           Paketti                  ∿ Display Note Column 6                                           <Shortcut not Assigned>
1532     Pattern Editor           Paketti                  ∿ Display Note Column 7                                           <Shortcut not Assigned>
1533     Pattern Editor           Paketti                  ∿ Display Note Column 8                                           <Shortcut not Assigned>
1534     Pattern Editor           Paketti                  ∿ Display Note Column 9                                           <Shortcut not Assigned>
1535     Pattern Editor           Paketti                  ∿ Effect Column 0R(LPB) Retrig On/Off                             <Shortcut not Assigned>
1536     Pattern Editor           Paketti                  ∿ Effect Column AXx Arp Amount Xx (+1)                            <Shortcut not Assigned>
1537     Pattern Editor           Paketti                  ∿ Effect Column AXx Arp Amount Xx (-1)                            <Shortcut not Assigned>
1538     Pattern Editor           Paketti                  ∿ Effect Column AxY Arp Amount xY (+1)                            <Shortcut not Assigned>
1539     Pattern Editor           Paketti                  ∿ Effect Column AxY Arp Amount xY (-1)                            <Shortcut not Assigned>
1540     Pattern Editor           Paketti                  ∿ Effect Column B00 Reverse Sample Effect On/Off                  <Shortcut not Assigned>
1541     Pattern Editor           Paketti                  ∿ Effect Column B00 Reverse Sample Effect On/Off (2nd)            <Shortcut not Assigned>
1542     Pattern Editor           Paketti                  ∿ Effect Column B01 Reverse Sample Effect On/Off                  <Shortcut not Assigned>
1543     Pattern Editor           Paketti                  ∿ Effect Column CxY Cut Volume Amount xY (+1)                     <Shortcut not Assigned>
1544     Pattern Editor           Paketti                  ∿ Effect Column CxY Cut Volume Amount xY (-1)                     <Shortcut not Assigned>
1545     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (+1)                         <Shortcut not Assigned>
1546     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (+1) (2nd)                   <Shortcut not Assigned>
1547     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (+1) (3rd)                   <Shortcut not Assigned>
1548     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (+10)                        <Shortcut not Assigned>
1549     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (+10) (2nd)                  <Shortcut not Assigned>
1550     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (+10) (3rd)                  <Shortcut not Assigned>
1551     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (-1)                         <Shortcut not Assigned>
1552     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (-1) (2nd)                   <Shortcut not Assigned>
1553     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (-1) (3rd)                   <Shortcut not Assigned>
1554     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (-10)                        <Shortcut not Assigned>
1555     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (-10) (2nd)                  <Shortcut not Assigned>
1556     Pattern Editor           Paketti                  ∿ Effect Column Dxx Slide Pitch Down (-10) (3rd)                  <Shortcut not Assigned>
1557     Pattern Editor           Paketti                  ∿ Effect Column Gxx Glide (+1)                                    <Shortcut not Assigned>
1558     Pattern Editor           Paketti                  ∿ Effect Column Gxx Glide (+10)                                   <Shortcut not Assigned>
1559     Pattern Editor           Paketti                  ∿ Effect Column Gxx Glide (-1)                                    <Shortcut not Assigned>
1560     Pattern Editor           Paketti                  ∿ Effect Column Gxx Glide (-10)                                   <Shortcut not Assigned>
1561     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (+1)                                     <Shortcut not Assigned>
1562     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (+1) (2nd)                               <Shortcut not Assigned>
1563     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (+1) (3rd)                               <Shortcut not Assigned>
1564     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (+10)                                    <Shortcut not Assigned>
1565     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (+10) (2nd)                              <Shortcut not Assigned>
1566     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (+10) (3rd)                              <Shortcut not Assigned>
1567     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (-1)                                     <Shortcut not Assigned>
1568     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (-1) (2nd)                               <Shortcut not Assigned>
1569     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (-1) (3rd)                               <Shortcut not Assigned>
1570     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (-10)                                    <Shortcut not Assigned>
1571     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (-10) (2nd)                              <Shortcut not Assigned>
1572     Pattern Editor           Paketti                  ∿ Effect Column Infobyte (-10) (3rd)                              <Shortcut not Assigned>
1573     Pattern Editor           Paketti                  ∿ Effect Column L00 Track Volume Level 0 On/Off                   <Shortcut not Assigned>
1574     Pattern Editor           Paketti                  ∿ Effect Column L00/LC0 Volume Effect Switch                      <Shortcut not Assigned>
1575     Pattern Editor           Paketti                  ∿ Effect Column RxY Retrig Amount xY (+1)                         <Shortcut not Assigned>
1576     Pattern Editor           Paketti                  ∿ Effect Column RxY Retrig Amount xY (-1)                         <Shortcut not Assigned>
1577     Pattern Editor           Paketti                  ∿ Effect Column TxY Tremolo Amount xY (+1)                        <Shortcut not Assigned>
1578     Pattern Editor           Paketti                  ∿ Effect Column TxY Tremolo Amount xY (-1)                        <Shortcut not Assigned>
1579     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (+1)                           <Shortcut not Assigned>
1580     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (+1) (2nd)                     <Shortcut not Assigned>
1581     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (+1) (3rd)                     <Shortcut not Assigned>
1582     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (+10)                          <Shortcut not Assigned>
1583     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (+10) (2nd)                    <Shortcut not Assigned>
1584     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (+10) (3rd)                    <Shortcut not Assigned>
1585     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (-1)                           <Shortcut not Assigned>
1586     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (-1) (2nd)                     <Shortcut not Assigned>
1587     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (-1) (3rd)                     <Shortcut not Assigned>
1588     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (-10)                          <Shortcut not Assigned>
1589     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (-10) (2nd)                    <Shortcut not Assigned>
1590     Pattern Editor           Paketti                  ∿ Effect Column Uxx Slide Pitch Up (-10) (3rd)                    <Shortcut not Assigned>
1591     Pattern Editor           Paketti                  ∿ Effect Column VxY Vibrato Amount xY (+1)                        <Shortcut not Assigned>
1592     Pattern Editor           Paketti                  ∿ Effect Column VxY Vibrato Amount xY (-1)                        <Shortcut not Assigned>
1593     Pattern Editor           Paketti                  ∿ Effect Column ZBxx Jump To Row (Next)                           <Shortcut not Assigned>
1594     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument                                  <Shortcut not Assigned>
1595     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 1 step                     <Shortcut not Assigned>
1596     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 10 step                    <Shortcut not Assigned>
1597     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 11 step                    <Shortcut not Assigned>
1598     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 12 step                    <Shortcut not Assigned>
1599     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 13 step                    <Shortcut not Assigned>
1600     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 14 step                    <Shortcut not Assigned>
1601     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 15 step                    <Shortcut not Assigned>
1602     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 16 step                    <Shortcut not Assigned>
1603     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 17 step                    <Shortcut not Assigned>
1604     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 18 step                    <Shortcut not Assigned>
1605     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 19 step                    <Shortcut not Assigned>
1606     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 2 step                     <Shortcut not Assigned>
1607     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 20 step                    <Shortcut not Assigned>
1608     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 21 step                    <Shortcut not Assigned>
1609     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 22 step                    <Shortcut not Assigned>
1610     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 23 step                    <Shortcut not Assigned>
1611     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 24 step                    <Shortcut not Assigned>
1612     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 25 step                    <Shortcut not Assigned>
1613     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 26 step                    <Shortcut not Assigned>
1614     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 27 step                    <Shortcut not Assigned>
1615     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 28 step                    <Shortcut not Assigned>
1616     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 29 step                    <Shortcut not Assigned>
1617     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 3 step                     <Shortcut not Assigned>
1618     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 30 step                    <Shortcut not Assigned>
1619     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 31 step                    <Shortcut not Assigned>
1620     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 32 step                    <Shortcut not Assigned>
1621     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 33 step                    <Shortcut not Assigned>
1622     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 34 step                    <Shortcut not Assigned>
1623     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 35 step                    <Shortcut not Assigned>
1624     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 36 step                    <Shortcut not Assigned>
1625     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 37 step                    <Shortcut not Assigned>
1626     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 38 step                    <Shortcut not Assigned>
1627     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 39 step                    <Shortcut not Assigned>
1628     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 4 step                     Shift + Option + 4
1629     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 40 step                    <Shortcut not Assigned>
1630     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 41 step                    <Shortcut not Assigned>
1631     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 42 step                    <Shortcut not Assigned>
1632     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 43 step                    <Shortcut not Assigned>
1633     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 44 step                    <Shortcut not Assigned>
1634     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 45 step                    <Shortcut not Assigned>
1635     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 46 step                    <Shortcut not Assigned>
1636     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 47 step                    <Shortcut not Assigned>
1637     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 48 step                    <Shortcut not Assigned>
1638     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 49 step                    <Shortcut not Assigned>
1639     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 5 step                     Shift + Option + 5
1640     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 50 step                    <Shortcut not Assigned>
1641     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 51 step                    <Shortcut not Assigned>
1642     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 52 step                    <Shortcut not Assigned>
1643     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 53 step                    <Shortcut not Assigned>
1644     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 54 step                    <Shortcut not Assigned>
1645     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 55 step                    <Shortcut not Assigned>
1646     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 56 step                    <Shortcut not Assigned>
1647     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 57 step                    <Shortcut not Assigned>
1648     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 58 step                    <Shortcut not Assigned>
1649     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 59 step                    <Shortcut not Assigned>
1650     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 6 step                     Shift + Option + 6
1651     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 60 step                    <Shortcut not Assigned>
1652     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 61 step                    <Shortcut not Assigned>
1653     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 62 step                    <Shortcut not Assigned>
1654     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 63 step                    <Shortcut not Assigned>
1655     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 64 step                    <Shortcut not Assigned>
1656     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 7 step                     Shift + Option + 7
1657     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 8 step                     Shift + Option + 8
1658     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument every 9 step                     Shift + Option + 9
1659     Pattern Editor           Paketti                  ∿ Flood Fill Note and Instrument with EditStep                    Option + E
1660     Pattern Editor           Paketti                  ∿ Flood Fill with Selection                                       Control + F
1661     Pattern Editor           Paketti                  ∿ Generate Delay Value on Note Columns                            <Shortcut not Assigned>
1662     Pattern Editor           Paketti                  ∿ Global Set Visible Column (Delay)                               <Shortcut not Assigned>
1663     Pattern Editor           Paketti                  ∿ Global Set Visible Column (Panning)                             <Shortcut not Assigned>
1664     Pattern Editor           Paketti                  ∿ Global Set Visible Column (Sample Effects)                      <Shortcut not Assigned>
1665     Pattern Editor           Paketti                  ∿ Global Set Visible Column (Volume)                              <Shortcut not Assigned>
1666     Pattern Editor           Paketti                  ∿ Global Toggle Visible Column (Delay)                            <Shortcut not Assigned>
1667     Pattern Editor           Paketti                  ∿ Global Toggle Visible Column (Panning)                          <Shortcut not Assigned>
1668     Pattern Editor           Paketti                  ∿ Global Toggle Visible Column (Sample Effects)                   <Shortcut not Assigned>
1669     Pattern Editor           Paketti                  ∿ Global Toggle Visible Column (Volume)                           <Shortcut not Assigned>
1670     Pattern Editor           Paketti                  ∿ Global Visible Column (All)                                     <Shortcut not Assigned>
1671     Pattern Editor           Paketti                  ∿ Global Visible Column (None)                                    <Shortcut not Assigned>
1672     Pattern Editor           Paketti                  ∿ Impulse Tracker ALT-D Double Select                             Command + D
1673     Pattern Editor           Paketti                  ∿ Impulse Tracker ALT-D Double Select Column                      Shift + Command + S
1674     Pattern Editor           Paketti                  ∿ Impulse Tracker ALT-D Double Select Pattern                     <Shortcut not Assigned>
1675     Pattern Editor           Paketti                  ∿ Impulse Tracker ALT-F Expand Selection                          Command + F
1676     Pattern Editor           Paketti                  ∿ Impulse Tracker ALT-G Shrink Selection                          Command + G
1677     Pattern Editor           Paketti                  ∿ Impulse Tracker ALT-S Set Selection to Instrument               Command + S
1678     Pattern Editor           Paketti                  ∿ Impulse Tracker Alt-Left Move Backwards One Channel             <Shortcut not Assigned>
1679     Pattern Editor           Paketti                  ∿ Impulse Tracker Alt-Left Move Backwards One Channel (Wrap)      Option + Left
1680     Pattern Editor           Paketti                  ∿ Impulse Tracker Alt-Right Move Forwards One Channel             <Shortcut not Assigned>
1681     Pattern Editor           Paketti                  ∿ Impulse Tracker Alt-Right Move Forwards One Channel (Wrap)      Option + Right
1682     Pattern Editor           Paketti                  ∿ Impulse Tracker End *2 behaviour                                Option + Down
1683     Pattern Editor           Paketti                  ∿ Impulse Tracker End *2 behaviour (2nd)                          <Shortcut not Assigned>
1684     Pattern Editor           Paketti                  ∿ Impulse Tracker Home *2 behaviour                               Option + Up
1685     Pattern Editor           Paketti                  ∿ Impulse Tracker Home *2 behaviour (2nd)                         <Shortcut not Assigned>
1686     Pattern Editor           Paketti                  ∿ Impulse Tracker MixPaste                                        Option + M
1687     Pattern Editor           Paketti                  ∿ Impulse Tracker Shift-Down Selection In Pattern                 <Shortcut not Assigned>
1688     Pattern Editor           Paketti                  ∿ Impulse Tracker Shift-Left Selection In Pattern                 <Shortcut not Assigned>
1689     Pattern Editor           Paketti                  ∿ Impulse Tracker Shift-Right Selection In Pattern                <Shortcut not Assigned>
1690     Pattern Editor           Paketti                  ∿ Impulse Tracker Shift-Up Selection In Pattern                   <Shortcut not Assigned>
1691     Pattern Editor           Paketti                  ∿ Jump to First Track In Next Group                               <Shortcut not Assigned>
1692     Pattern Editor           Paketti                  ∿ Jump to First Track In Previous Group                           <Shortcut not Assigned>
1693     Pattern Editor           Paketti                  ∿ KapsLock CapsLock Caps Lock Note Off                            Capital
1694     Pattern Editor           Paketti                  ∿ Keep Sequence Sorted False                                      Shift + Command + C
1695     Pattern Editor           Paketti                  ∿ Keep Sequence Sorted Toggle                                     Shift + Command + N
1696     Pattern Editor           Paketti                  ∿ Keep Sequence Sorted True                                       <Shortcut not Assigned>
1697     Pattern Editor           Paketti                  ∿ Mute/Unmute Note Column                                         <Shortcut not Assigned>
1698     Pattern Editor           Paketti                  ∿ Next Chord in List                                              <Shortcut not Assigned>
1699     Pattern Editor           Paketti                  ∿ Note Interpolation                                              Shift + Command + I
1700     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 01                                            <Shortcut not Assigned>
1701     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 02                                            <Shortcut not Assigned>
1702     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 03                                            <Shortcut not Assigned>
1703     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 04                                            <Shortcut not Assigned>
1704     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 05                                            <Shortcut not Assigned>
1705     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 06                                            <Shortcut not Assigned>
1706     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 07                                            <Shortcut not Assigned>
1707     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 08                                            <Shortcut not Assigned>
1708     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 09                                            <Shortcut not Assigned>
1709     Pattern Editor           Paketti..                ∿ OctaMED Pick Slot 10                                            <Shortcut not Assigned>
1710     Pattern Editor           Paketti..                ∿ OctaMED Pick/Put Dialog                                         Option + F1
1711     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 01                                             <Shortcut not Assigned>
1712     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 02                                             <Shortcut not Assigned>
1713     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 03                                             <Shortcut not Assigned>
1714     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 04                                             <Shortcut not Assigned>
1715     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 05                                             <Shortcut not Assigned>
1716     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 06                                             <Shortcut not Assigned>
1717     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 07                                             <Shortcut not Assigned>
1718     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 08                                             <Shortcut not Assigned>
1719     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 09                                             <Shortcut not Assigned>
1720     Pattern Editor           Paketti..                ∿ OctaMED Put Slot 10                                             <Shortcut not Assigned>
1721     Pattern Editor           Paketti                  ∿ Open Player Pro Note Column Dialog                              Control + P
1722     Pattern Editor           Paketti                  ∿ Open Player Pro Tools Dialog                                    <Shortcut not Assigned>
1723     Pattern Editor           Paketti                  ∿ Paketti Pattern Doubler                                         Command + Grave
1724     Pattern Editor           Paketti                  ∿ Paketti Pattern Halver                                          Shift + Command + Grave
1725     Pattern Editor           Paketti                  ∿ Paketti Track Renamer Dialog...                                 <Shortcut not Assigned>
1726     Pattern Editor           Paketti                  ∿ Pattern Expand (dBlue)                                          <Shortcut not Assigned>
1727     Pattern Editor           Paketti                  ∿ Pattern Expand + Resize (dBlue)                                 <Shortcut not Assigned>
1728     Pattern Editor           Paketti                  ∿ Pattern Shrink (dBlue)                                          <Shortcut not Assigned>
1729     Pattern Editor           Paketti                  ∿ Pattern Shrink + Resize (dBlue)                                 <Shortcut not Assigned>
1730     Pattern Editor           Paketti                  ∿ Phrase Editor Visible                                           <Shortcut not Assigned>
1731     Pattern Editor           Paketti                  ∿ Player Pro Transpose Selection or Row +1                        Shift + Command + Up
1732     Pattern Editor           Paketti                  ∿ Player Pro Transpose Selection or Row +12                       <Shortcut not Assigned>
1733     Pattern Editor           Paketti                  ∿ Player Pro Transpose Selection or Row -1                        Shift + Command + Down
1734     Pattern Editor           Paketti                  ∿ Player Pro Transpose Selection or Row -12                       <Shortcut not Assigned>
1735     Pattern Editor           Paketti                  ∿ Randomize Phrasing for Notes in Current Row                     Option + N
1736     Pattern Editor           Paketti                  ∿ Record+Follow Off                                               <Shortcut not Assigned>
1737     Pattern Editor           Paketti                  ∿ Renoise Random BPM & Write BPM/LPB to Master                    <Shortcut not Assigned>
1738     Pattern Editor           Paketti                  ∿ Replicate Selected Track (+1 Semitone)                          <Shortcut not Assigned>
1739     Pattern Editor           Paketti                  ∿ Replicate Selected Track (+12 Semitones)                        <Shortcut not Assigned>
1740     Pattern Editor           Paketti                  ∿ Replicate Selected Track (-1 Semitone)                          <Shortcut not Assigned>
1741     Pattern Editor           Paketti                  ∿ Replicate Selected Track (-12 Semitones)                        <Shortcut not Assigned>
1742     Pattern Editor           Paketti                  ∿ Replicate Selected Track (No Transpose)                         Control + Down
1743     Pattern Editor           Paketti                  ∿ Replicate at Cursor (+1 Semitone)                               <Shortcut not Assigned>
1744     Pattern Editor           Paketti                  ∿ Replicate at Cursor (+12 Semitones)                             <Shortcut not Assigned>
1745     Pattern Editor           Paketti                  ∿ Replicate at Cursor (-1 Semitone)                               <Shortcut not Assigned>
1746     Pattern Editor           Paketti                  ∿ Replicate at Cursor (-12 Semitones)                             <Shortcut not Assigned>
1747     Pattern Editor           Paketti                  ∿ Replicate at Cursor (No Transpose)                              Shift + Control + Down
1748     Pattern Editor           Paketti                  ∿ Reset Panning in Current Column & Row                           <Shortcut not Assigned>
1749     Pattern Editor           Paketti                  ∿ Reverse Notes in Selection                                      Control + R
1750     Pattern Editor           Paketti                  ∿ Rotate Track Content to SelectionStart First                    <Shortcut not Assigned>
1751     Pattern Editor           Paketti                  ∿ Select Effect Column (Next)                                     <Shortcut not Assigned>
1752     Pattern Editor           Paketti                  ∿ Select Effect Column (Previous)                                 <Shortcut not Assigned>
1753     Pattern Editor           Paketti                  ∿ Select Last Track                                               Shift + Option + Command + Right
1754     Pattern Editor           Paketti                  ∿ Selection in Pattern to Group                                   <Shortcut not Assigned>
1755     Pattern Editor           Paketti                  ∿ Set Global LPB to 1                                             <Shortcut not Assigned>
1756     Pattern Editor           Paketti                  ∿ Set Global LPB to 10                                            <Shortcut not Assigned>
1757     Pattern Editor           Paketti                  ∿ Set Global LPB to 11                                            <Shortcut not Assigned>
1758     Pattern Editor           Paketti                  ∿ Set Global LPB to 12                                            <Shortcut not Assigned>
1759     Pattern Editor           Paketti                  ∿ Set Global LPB to 128                                           <Shortcut not Assigned>
1760     Pattern Editor           Paketti                  ∿ Set Global LPB to 13                                            <Shortcut not Assigned>
1761     Pattern Editor           Paketti                  ∿ Set Global LPB to 14                                            <Shortcut not Assigned>
1762     Pattern Editor           Paketti                  ∿ Set Global LPB to 15                                            <Shortcut not Assigned>
1763     Pattern Editor           Paketti                  ∿ Set Global LPB to 16                                            <Shortcut not Assigned>
1764     Pattern Editor           Paketti                  ∿ Set Global LPB to 2                                             <Shortcut not Assigned>
1765     Pattern Editor           Paketti                  ∿ Set Global LPB to 24                                            <Shortcut not Assigned>
1766     Pattern Editor           Paketti                  ∿ Set Global LPB to 256                                           <Shortcut not Assigned>
1767     Pattern Editor           Paketti                  ∿ Set Global LPB to 3                                             <Shortcut not Assigned>
1768     Pattern Editor           Paketti                  ∿ Set Global LPB to 32                                            <Shortcut not Assigned>
1769     Pattern Editor           Paketti                  ∿ Set Global LPB to 4                                             <Shortcut not Assigned>
1770     Pattern Editor           Paketti                  ∿ Set Global LPB to 48                                            <Shortcut not Assigned>
1771     Pattern Editor           Paketti                  ∿ Set Global LPB to 5                                             <Shortcut not Assigned>
1772     Pattern Editor           Paketti                  ∿ Set Global LPB to 6                                             <Shortcut not Assigned>
1773     Pattern Editor           Paketti                  ∿ Set Global LPB to 64                                            <Shortcut not Assigned>
1774     Pattern Editor           Paketti                  ∿ Set Global LPB to 7                                             <Shortcut not Assigned>
1775     Pattern Editor           Paketti                  ∿ Set Global LPB to 8                                             <Shortcut not Assigned>
1776     Pattern Editor           Paketti                  ∿ Set Global LPB to 9                                             <Shortcut not Assigned>
1777     Pattern Editor           Paketti                  ∿ Set Note to Octave 0                                            <Shortcut not Assigned>
1778     Pattern Editor           Paketti                  ∿ Set Note to Octave 1                                            <Shortcut not Assigned>
1779     Pattern Editor           Paketti                  ∿ Set Note to Octave 2                                            <Shortcut not Assigned>
1780     Pattern Editor           Paketti                  ∿ Set Note to Octave 3                                            <Shortcut not Assigned>
1781     Pattern Editor           Paketti                  ∿ Set Note to Octave 4                                            <Shortcut not Assigned>
1782     Pattern Editor           Paketti                  ∿ Set Note to Octave 5                                            <Shortcut not Assigned>
1783     Pattern Editor           Paketti                  ∿ Set Note to Octave 6                                            <Shortcut not Assigned>
1784     Pattern Editor           Paketti                  ∿ Set Note to Octave 7                                            <Shortcut not Assigned>
1785     Pattern Editor           Paketti                  ∿ Set Note to Octave 8                                            <Shortcut not Assigned>
1786     Pattern Editor           Paketti                  ∿ Set Note to Octave 9                                            <Shortcut not Assigned>
1787     Pattern Editor           Paketti                  ∿ Set Pattern Length to 001 (001)                                 <Shortcut not Assigned>
1788     Pattern Editor           Paketti                  ∿ Set Pattern Length to 004 (004)                                 Control + 1
1789     Pattern Editor           Paketti                  ∿ Set Pattern Length to 006 (006)                                 <Shortcut not Assigned>
1790     Pattern Editor           Paketti                  ∿ Set Pattern Length to 008 (008)                                 Control + 2
1791     Pattern Editor           Paketti                  ∿ Set Pattern Length to 012 (00C)                                 <Shortcut not Assigned>
1792     Pattern Editor           Paketti                  ∿ Set Pattern Length to 016 (010)                                 Control + 3
1793     Pattern Editor           Paketti                  ∿ Set Pattern Length to 024 (018)                                 <Shortcut not Assigned>
1794     Pattern Editor           Paketti                  ∿ Set Pattern Length to 032 (020)                                 Control + 4
1795     Pattern Editor           Paketti                  ∿ Set Pattern Length to 048 (030)                                 <Shortcut not Assigned>
1796     Pattern Editor           Paketti                  ∿ Set Pattern Length to 064 (040)                                 Control + 5
1797     Pattern Editor           Paketti                  ∿ Set Pattern Length to 096 (060)                                 <Shortcut not Assigned>
1798     Pattern Editor           Paketti                  ∿ Set Pattern Length to 128 (080)                                 Control + 6
1799     Pattern Editor           Paketti                  ∿ Set Pattern Length to 192 (0C0)                                 <Shortcut not Assigned>
1800     Pattern Editor           Paketti                  ∿ Set Pattern Length to 256 (100)                                 Control + 7
1801     Pattern Editor           Paketti                  ∿ Set Pattern Length to 384 (180)                                 <Shortcut not Assigned>
1802     Pattern Editor           Paketti                  ∿ Set Pattern Length to 512 (200)                                 Control + 8
1803     Pattern Editor           Paketti                  ∿ Set Time Signature 3/4 and 48 rows @ LPB 4                      <Shortcut not Assigned>
1804     Pattern Editor           Paketti                  ∿ Set Time Signature 6/8 and 48 rows @ LPB 8                      <Shortcut not Assigned>
1805     Pattern Editor           Paketti                  ∿ Set Time Signature 7/8 and 56 rows @ LPB 8                      <Shortcut not Assigned>
1806     Pattern Editor           Paketti                  ∿ Show Automation                                                 <Shortcut not Assigned>
1807     Pattern Editor           Paketti                  ∿ Shrink to Triplets                                              Control + T
1808     Pattern Editor           Paketti                  ∿ Slide Selected Column Content Down                              Command + Control + Down
1809     Pattern Editor           Paketti                  ∿ Slide Selected Column Content Up                                Command + Control + Up
1810     Pattern Editor           Paketti                  ∿ Slide Selected Track Content Down                               Option + Command + Down
1811     Pattern Editor           Paketti                  ∿ Slide Selected Track Content Up                                 Option + Command + Up
1812     Pattern Editor           Paketti                  ∿ Switch Effect Column/Note Column                                <Shortcut not Assigned>
1813     Pattern Editor           Paketti                  ∿ Switch to Automation                                            <Shortcut not Assigned>
1814     Pattern Editor           Paketti                  ∿ Toggle Note Off in All Visible Note Columns                     Shift + Capital
1815     Pattern Editor           Paketti                  ∿ Toggle Note Off in Selected Tracks                              <Shortcut not Assigned>
1816     Pattern Editor           Paketti                  ∿ Transpose +1 (Selection/Track)                                  Command + Q
1817     Pattern Editor           Paketti                  ∿ Transpose +1 Note Column (Selection/Note Column)                Option + Command + Q
1818     Pattern Editor           Paketti                  ∿ Transpose -1 (Selection/Track)                                  Command + A
1819     Pattern Editor           Paketti                  ∿ Transpose -1 Note Column (Selection/Note Column)                Option + Command + A
1820     Pattern Editor           Paketti                  ∿ Transpose Octave Down (Selection/Track)                         Shift + Command + A
1821     Pattern Editor           Paketti                  ∿ Transpose Octave Down Note Column (Selection/Note Column)       Shift + Option + Command + A
1822     Pattern Editor           Paketti                  ∿ Transpose Octave Up (Selection/Track)                           Shift + Command + Q
1823     Pattern Editor           Paketti                  ∿ Transpose Octave Up Note Column (Selection/Note Column)         Shift + Option + Command + Q
1824     Pattern Editor           Paketti                  ∿ Triple (Experimental)                                           <Shortcut not Assigned>
1825     Pattern Editor           Paketti                  ∿ Wipe Effects From Selection                                     <Shortcut not Assigned>
1826     Pattern Editor           Paketti                  ∿ Wipe Selection Delay Column                                     <Shortcut not Assigned>
1827     Pattern Editor           Paketti                  ∿ Wipe Selection Panning Column                                   <Shortcut not Assigned>
1828     Pattern Editor           Paketti                  ∿ Wipe Selection Volume Column                                    <Shortcut not Assigned>
1829     Pattern Matrix           Paketti                  ∿ Jump to First Track In Next Group                               <Shortcut not Assigned>
1830     Pattern Matrix           Paketti                  ∿ Jump to First Track In Previous Group                           <Shortcut not Assigned>
1831     Pattern Matrix           Paketti                  ∿ Paketti Track Renamer Dialog...                                 <Shortcut not Assigned>
1832     Pattern Matrix           Paketti                  ∿ Selection in Pattern Matrix to Group                            <Shortcut not Assigned>
1833     Pattern Matrix           Paketti                  ∿ Switch to Automation                                            <Shortcut not Assigned>
1834     Pattern Sequencer        Paketti                  ∿ Keep Sequence Sorted False                                      Shift + Command + Q
1835     Pattern Sequencer        Paketti                  ∿ Keep Sequence Sorted Toggle                                     <Shortcut not Assigned>
1836     Pattern Sequencer        Paketti                  ∿ Keep Sequence Sorted True                                       Shift + Command + E
1837     Phrase Editor            Paketti                  ∿ Init Phrase Settings                                            <Shortcut not Assigned>
1838     Phrase Editor            Paketti                  ∿ Open Paketti Init Phrase Dialog...                              <Shortcut not Assigned>
1839     Phrase Editor            Paketti                  ∿ Paketti Phrase Doubler                                          <Shortcut not Assigned>
1840     Phrase Editor            Paketti                  ∿ Paketti Phrase Doubler (2nd)                                    <Shortcut not Assigned>
1841     Phrase Editor            Paketti                  ∿ Phrase Editor Visible                                           <Shortcut not Assigned>
1842     Phrase Editor            Paketti                  ∿ Phrase Halver (Joule)                                           <Shortcut not Assigned>
1843     Phrase Editor            Paketti                  ∿ Phrase Halver (Joule) (2nd)                                     <Shortcut not Assigned>
1844     Phrase Editor            Paketti                  ∿ Record+Follow Off                                               <Shortcut not Assigned>
1845     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 1                                             <Shortcut not Assigned>
1846     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 10                                            <Shortcut not Assigned>
1847     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 11                                            <Shortcut not Assigned>
1848     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 12                                            <Shortcut not Assigned>
1849     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 128                                           <Shortcut not Assigned>
1850     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 13                                            <Shortcut not Assigned>
1851     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 14                                            <Shortcut not Assigned>
1852     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 15                                            <Shortcut not Assigned>
1853     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 16                                            <Shortcut not Assigned>
1854     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 2                                             <Shortcut not Assigned>
1855     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 24                                            <Shortcut not Assigned>
1856     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 256                                           <Shortcut not Assigned>
1857     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 3                                             <Shortcut not Assigned>
1858     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 32                                            <Shortcut not Assigned>
1859     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 4                                             <Shortcut not Assigned>
1860     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 48                                            <Shortcut not Assigned>
1861     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 5                                             <Shortcut not Assigned>
1862     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 6                                             <Shortcut not Assigned>
1863     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 64                                            <Shortcut not Assigned>
1864     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 7                                             <Shortcut not Assigned>
1865     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 8                                             <Shortcut not Assigned>
1866     Phrase Editor            Paketti                  ∿ Set Phrase LPB to 9                                             <Shortcut not Assigned>
1867     Phrase Editor            Paketti                  ∿ Set Phrase Length to 001 (001)                                  <Shortcut not Assigned>
1868     Phrase Editor            Paketti                  ∿ Set Phrase Length to 004 (004)                                  Control + 1
1869     Phrase Editor            Paketti                  ∿ Set Phrase Length to 006 (006)                                  <Shortcut not Assigned>
1870     Phrase Editor            Paketti                  ∿ Set Phrase Length to 008 (008)                                  Control + 2
1871     Phrase Editor            Paketti                  ∿ Set Phrase Length to 012 (00C)                                  <Shortcut not Assigned>
1872     Phrase Editor            Paketti                  ∿ Set Phrase Length to 016 (010)                                  Control + 3
1873     Phrase Editor            Paketti                  ∿ Set Phrase Length to 024 (018)                                  <Shortcut not Assigned>
1874     Phrase Editor            Paketti                  ∿ Set Phrase Length to 032 (020)                                  Control + 4
1875     Phrase Editor            Paketti                  ∿ Set Phrase Length to 048 (030)                                  <Shortcut not Assigned>
1876     Phrase Editor            Paketti                  ∿ Set Phrase Length to 064 (040)                                  Control + 5
1877     Phrase Editor            Paketti                  ∿ Set Phrase Length to 096 (060)                                  <Shortcut not Assigned>
1878     Phrase Editor            Paketti                  ∿ Set Phrase Length to 128 (080)                                  Control + 6
1879     Phrase Editor            Paketti                  ∿ Set Phrase Length to 192 (0C0)                                  <Shortcut not Assigned>
1880     Phrase Editor            Paketti                  ∿ Set Phrase Length to 256 (100)                                  Control + 7
1881     Phrase Editor            Paketti                  ∿ Set Phrase Length to 384 (180)                                  <Shortcut not Assigned>
1882     Phrase Editor            Paketti                  ∿ Set Phrase Length to 512 (200)                                  Control + 8
1883     Sample Editor            Paketti                  ∿ 15 Frame Fade In & Fade Out                                     <Shortcut not Assigned>
1884     Sample Editor            Paketti                  ∿ Audio Diff                                                      <Shortcut not Assigned>
1885     Sample Editor            Paketti                  ∿ Clip bottom of waveform                                         <Shortcut not Assigned>
1886     Sample Editor            Paketti                  ∿ Convert Mono to Stereo                                          <Shortcut not Assigned>
1887     Sample Editor            Paketti                  ∿ Create New Instrument & Loop from Selection                     <Shortcut not Assigned>
1888     Sample Editor            Paketti                  ∿ Duplicate Sample Range, Mute Original                           <Shortcut not Assigned>
1889     Sample Editor            Paketti                  ∿ Duplicate, Maximize, 16bit, and Save as FLAC                    <Shortcut not Assigned>
1890     Sample Editor            Paketti                  ∿ Duplicate, Maximize, 16bit, and Save as WAV                     <Shortcut not Assigned>
1891     Sample Editor            Paketti                  ∿ Invert Left Channel of Selected Sample                          <Shortcut not Assigned>
1892     Sample Editor            Paketti                  ∿ Invert Right Channel of Selected Sample                         <Shortcut not Assigned>
1893     Sample Editor            Paketti                  ∿ Invert Right, Sum Mono                                          <Shortcut not Assigned>
1894     Sample Editor            Paketti                  ∿ Invert Sample                                                   <Shortcut not Assigned>
1895     Sample Editor            Paketti                  ∿ Max Amp DC Offset Kick Generator                                <Shortcut not Assigned>
1896     Sample Editor            Paketti                  ∿ Modulate & Audio Diff                                           <Shortcut not Assigned>
1897     Sample Editor            Paketti                  ∿ Mono to Left with Blank Right                                   <Shortcut not Assigned>
1898     Sample Editor            Paketti                  ∿ Mono to Right with Blank Left                                   <Shortcut not Assigned>
1899     Sample Editor            Paketti                  ∿ Move Slice End Left by 10                                       Command + Left
1900     Sample Editor            Paketti                  ∿ Move Slice End Left by 100                                      Shift + Command + Left
1901     Sample Editor            Paketti                  ∿ Move Slice End Left by 300                                      <Shortcut not Assigned>
1902     Sample Editor            Paketti                  ∿ Move Slice End Left by 500                                      <Shortcut not Assigned>
1903     Sample Editor            Paketti                  ∿ Move Slice End Right by 10                                      Command + Right
1904     Sample Editor            Paketti                  ∿ Move Slice End Right by 100                                     Shift + Command + Right
1905     Sample Editor            Paketti                  ∿ Move Slice End Right by 300                                     <Shortcut not Assigned>
1906     Sample Editor            Paketti                  ∿ Move Slice End Right by 500                                     <Shortcut not Assigned>
1907     Sample Editor            Paketti                  ∿ Move Slice Start Left by 10                                     Control + Left
1908     Sample Editor            Paketti                  ∿ Move Slice Start Left by 100                                    Shift + Control + Left
1909     Sample Editor            Paketti                  ∿ Move Slice Start Left by 300                                    <Shortcut not Assigned>
1910     Sample Editor            Paketti                  ∿ Move Slice Start Left by 500                                    <Shortcut not Assigned>
1911     Sample Editor            Paketti                  ∿ Move Slice Start Right by 10                                    Control + Right
1912     Sample Editor            Paketti                  ∿ Move Slice Start Right by 100                                   Shift + Control + Right
1913     Sample Editor            Paketti                  ∿ Move Slice Start Right by 300                                   <Shortcut not Assigned>
1914     Sample Editor            Paketti                  ∿ Move Slice Start Right by 500                                   <Shortcut not Assigned>
1915     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (+1)                                           <Shortcut not Assigned>
1916     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (+10)                                          <Shortcut not Assigned>
1917     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (+16)                                          <Shortcut not Assigned>
1918     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (+32)                                          <Shortcut not Assigned>
1919     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (-1)                                           <Shortcut not Assigned>
1920     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (-10)                                          <Shortcut not Assigned>
1921     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (-16)                                          <Shortcut not Assigned>
1922     Sample Editor            Paketti                  ∿ Nudge Slice 1 by (-32)                                          <Shortcut not Assigned>
1923     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (+1)                                          <Shortcut not Assigned>
1924     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (+10)                                         <Shortcut not Assigned>
1925     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (+16)                                         <Shortcut not Assigned>
1926     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (+32)                                         <Shortcut not Assigned>
1927     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (-1)                                          <Shortcut not Assigned>
1928     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (-10)                                         <Shortcut not Assigned>
1929     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (-16)                                         <Shortcut not Assigned>
1930     Sample Editor            Paketti                  ∿ Nudge Slice 10 by (-32)                                         <Shortcut not Assigned>
1931     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (+1)                                          <Shortcut not Assigned>
1932     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (+10)                                         <Shortcut not Assigned>
1933     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (+16)                                         <Shortcut not Assigned>
1934     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (+32)                                         <Shortcut not Assigned>
1935     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (-1)                                          <Shortcut not Assigned>
1936     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (-10)                                         <Shortcut not Assigned>
1937     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (-16)                                         <Shortcut not Assigned>
1938     Sample Editor            Paketti                  ∿ Nudge Slice 11 by (-32)                                         <Shortcut not Assigned>
1939     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (+1)                                          <Shortcut not Assigned>
1940     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (+10)                                         <Shortcut not Assigned>
1941     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (+16)                                         <Shortcut not Assigned>
1942     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (+32)                                         <Shortcut not Assigned>
1943     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (-1)                                          <Shortcut not Assigned>
1944     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (-10)                                         <Shortcut not Assigned>
1945     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (-16)                                         <Shortcut not Assigned>
1946     Sample Editor            Paketti                  ∿ Nudge Slice 12 by (-32)                                         <Shortcut not Assigned>
1947     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (+1)                                          <Shortcut not Assigned>
1948     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (+10)                                         <Shortcut not Assigned>
1949     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (+16)                                         <Shortcut not Assigned>
1950     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (+32)                                         <Shortcut not Assigned>
1951     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (-1)                                          <Shortcut not Assigned>
1952     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (-10)                                         <Shortcut not Assigned>
1953     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (-16)                                         <Shortcut not Assigned>
1954     Sample Editor            Paketti                  ∿ Nudge Slice 13 by (-32)                                         <Shortcut not Assigned>
1955     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (+1)                                          <Shortcut not Assigned>
1956     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (+10)                                         <Shortcut not Assigned>
1957     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (+16)                                         <Shortcut not Assigned>
1958     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (+32)                                         <Shortcut not Assigned>
1959     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (-1)                                          <Shortcut not Assigned>
1960     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (-10)                                         <Shortcut not Assigned>
1961     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (-16)                                         <Shortcut not Assigned>
1962     Sample Editor            Paketti                  ∿ Nudge Slice 14 by (-32)                                         <Shortcut not Assigned>
1963     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (+1)                                          <Shortcut not Assigned>
1964     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (+10)                                         <Shortcut not Assigned>
1965     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (+16)                                         <Shortcut not Assigned>
1966     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (+32)                                         <Shortcut not Assigned>
1967     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (-1)                                          <Shortcut not Assigned>
1968     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (-10)                                         <Shortcut not Assigned>
1969     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (-16)                                         <Shortcut not Assigned>
1970     Sample Editor            Paketti                  ∿ Nudge Slice 15 by (-32)                                         <Shortcut not Assigned>
1971     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (+1)                                          <Shortcut not Assigned>
1972     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (+10)                                         <Shortcut not Assigned>
1973     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (+16)                                         <Shortcut not Assigned>
1974     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (+32)                                         <Shortcut not Assigned>
1975     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (-1)                                          <Shortcut not Assigned>
1976     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (-10)                                         <Shortcut not Assigned>
1977     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (-16)                                         <Shortcut not Assigned>
1978     Sample Editor            Paketti                  ∿ Nudge Slice 16 by (-32)                                         <Shortcut not Assigned>
1979     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (+1)                                          <Shortcut not Assigned>
1980     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (+10)                                         <Shortcut not Assigned>
1981     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (+16)                                         <Shortcut not Assigned>
1982     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (+32)                                         <Shortcut not Assigned>
1983     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (-1)                                          <Shortcut not Assigned>
1984     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (-10)                                         <Shortcut not Assigned>
1985     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (-16)                                         <Shortcut not Assigned>
1986     Sample Editor            Paketti                  ∿ Nudge Slice 17 by (-32)                                         <Shortcut not Assigned>
1987     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (+1)                                          <Shortcut not Assigned>
1988     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (+10)                                         <Shortcut not Assigned>
1989     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (+16)                                         <Shortcut not Assigned>
1990     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (+32)                                         <Shortcut not Assigned>
1991     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (-1)                                          <Shortcut not Assigned>
1992     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (-10)                                         <Shortcut not Assigned>
1993     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (-16)                                         <Shortcut not Assigned>
1994     Sample Editor            Paketti                  ∿ Nudge Slice 18 by (-32)                                         <Shortcut not Assigned>
1995     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (+1)                                          <Shortcut not Assigned>
1996     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (+10)                                         <Shortcut not Assigned>
1997     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (+16)                                         <Shortcut not Assigned>
1998     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (+32)                                         <Shortcut not Assigned>
1999     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (-1)                                          <Shortcut not Assigned>
2000     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (-10)                                         <Shortcut not Assigned>
2001     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (-16)                                         <Shortcut not Assigned>
2002     Sample Editor            Paketti                  ∿ Nudge Slice 19 by (-32)                                         <Shortcut not Assigned>
2003     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (+1)                                           <Shortcut not Assigned>
2004     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (+10)                                          <Shortcut not Assigned>
2005     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (+16)                                          <Shortcut not Assigned>
2006     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (+32)                                          <Shortcut not Assigned>
2007     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (-1)                                           <Shortcut not Assigned>
2008     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (-10)                                          <Shortcut not Assigned>
2009     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (-16)                                          <Shortcut not Assigned>
2010     Sample Editor            Paketti                  ∿ Nudge Slice 2 by (-32)                                          <Shortcut not Assigned>
2011     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (+1)                                          <Shortcut not Assigned>
2012     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (+10)                                         <Shortcut not Assigned>
2013     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (+16)                                         <Shortcut not Assigned>
2014     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (+32)                                         <Shortcut not Assigned>
2015     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (-1)                                          <Shortcut not Assigned>
2016     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (-10)                                         <Shortcut not Assigned>
2017     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (-16)                                         <Shortcut not Assigned>
2018     Sample Editor            Paketti                  ∿ Nudge Slice 20 by (-32)                                         <Shortcut not Assigned>
2019     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (+1)                                          <Shortcut not Assigned>
2020     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (+10)                                         <Shortcut not Assigned>
2021     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (+16)                                         <Shortcut not Assigned>
2022     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (+32)                                         <Shortcut not Assigned>
2023     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (-1)                                          <Shortcut not Assigned>
2024     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (-10)                                         <Shortcut not Assigned>
2025     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (-16)                                         <Shortcut not Assigned>
2026     Sample Editor            Paketti                  ∿ Nudge Slice 21 by (-32)                                         <Shortcut not Assigned>
2027     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (+1)                                          <Shortcut not Assigned>
2028     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (+10)                                         <Shortcut not Assigned>
2029     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (+16)                                         <Shortcut not Assigned>
2030     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (+32)                                         <Shortcut not Assigned>
2031     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (-1)                                          <Shortcut not Assigned>
2032     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (-10)                                         <Shortcut not Assigned>
2033     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (-16)                                         <Shortcut not Assigned>
2034     Sample Editor            Paketti                  ∿ Nudge Slice 22 by (-32)                                         <Shortcut not Assigned>
2035     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (+1)                                          <Shortcut not Assigned>
2036     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (+10)                                         <Shortcut not Assigned>
2037     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (+16)                                         <Shortcut not Assigned>
2038     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (+32)                                         <Shortcut not Assigned>
2039     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (-1)                                          <Shortcut not Assigned>
2040     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (-10)                                         <Shortcut not Assigned>
2041     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (-16)                                         <Shortcut not Assigned>
2042     Sample Editor            Paketti                  ∿ Nudge Slice 23 by (-32)                                         <Shortcut not Assigned>
2043     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (+1)                                          <Shortcut not Assigned>
2044     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (+10)                                         <Shortcut not Assigned>
2045     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (+16)                                         <Shortcut not Assigned>
2046     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (+32)                                         <Shortcut not Assigned>
2047     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (-1)                                          <Shortcut not Assigned>
2048     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (-10)                                         <Shortcut not Assigned>
2049     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (-16)                                         <Shortcut not Assigned>
2050     Sample Editor            Paketti                  ∿ Nudge Slice 24 by (-32)                                         <Shortcut not Assigned>
2051     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (+1)                                          <Shortcut not Assigned>
2052     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (+10)                                         <Shortcut not Assigned>
2053     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (+16)                                         <Shortcut not Assigned>
2054     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (+32)                                         <Shortcut not Assigned>
2055     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (-1)                                          <Shortcut not Assigned>
2056     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (-10)                                         <Shortcut not Assigned>
2057     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (-16)                                         <Shortcut not Assigned>
2058     Sample Editor            Paketti                  ∿ Nudge Slice 25 by (-32)                                         <Shortcut not Assigned>
2059     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (+1)                                          <Shortcut not Assigned>
2060     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (+10)                                         <Shortcut not Assigned>
2061     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (+16)                                         <Shortcut not Assigned>
2062     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (+32)                                         <Shortcut not Assigned>
2063     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (-1)                                          <Shortcut not Assigned>
2064     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (-10)                                         <Shortcut not Assigned>
2065     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (-16)                                         <Shortcut not Assigned>
2066     Sample Editor            Paketti                  ∿ Nudge Slice 26 by (-32)                                         <Shortcut not Assigned>
2067     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (+1)                                          <Shortcut not Assigned>
2068     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (+10)                                         <Shortcut not Assigned>
2069     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (+16)                                         <Shortcut not Assigned>
2070     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (+32)                                         <Shortcut not Assigned>
2071     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (-1)                                          <Shortcut not Assigned>
2072     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (-10)                                         <Shortcut not Assigned>
2073     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (-16)                                         <Shortcut not Assigned>
2074     Sample Editor            Paketti                  ∿ Nudge Slice 27 by (-32)                                         <Shortcut not Assigned>
2075     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (+1)                                          <Shortcut not Assigned>
2076     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (+10)                                         <Shortcut not Assigned>
2077     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (+16)                                         <Shortcut not Assigned>
2078     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (+32)                                         <Shortcut not Assigned>
2079     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (-1)                                          <Shortcut not Assigned>
2080     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (-10)                                         <Shortcut not Assigned>
2081     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (-16)                                         <Shortcut not Assigned>
2082     Sample Editor            Paketti                  ∿ Nudge Slice 28 by (-32)                                         <Shortcut not Assigned>
2083     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (+1)                                          <Shortcut not Assigned>
2084     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (+10)                                         <Shortcut not Assigned>
2085     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (+16)                                         <Shortcut not Assigned>
2086     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (+32)                                         <Shortcut not Assigned>
2087     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (-1)                                          <Shortcut not Assigned>
2088     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (-10)                                         <Shortcut not Assigned>
2089     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (-16)                                         <Shortcut not Assigned>
2090     Sample Editor            Paketti                  ∿ Nudge Slice 29 by (-32)                                         <Shortcut not Assigned>
2091     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (+1)                                           <Shortcut not Assigned>
2092     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (+10)                                          <Shortcut not Assigned>
2093     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (+16)                                          <Shortcut not Assigned>
2094     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (+32)                                          <Shortcut not Assigned>
2095     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (-1)                                           <Shortcut not Assigned>
2096     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (-10)                                          <Shortcut not Assigned>
2097     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (-16)                                          <Shortcut not Assigned>
2098     Sample Editor            Paketti                  ∿ Nudge Slice 3 by (-32)                                          <Shortcut not Assigned>
2099     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (+1)                                          <Shortcut not Assigned>
2100     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (+10)                                         <Shortcut not Assigned>
2101     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (+16)                                         <Shortcut not Assigned>
2102     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (+32)                                         <Shortcut not Assigned>
2103     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (-1)                                          <Shortcut not Assigned>
2104     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (-10)                                         <Shortcut not Assigned>
2105     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (-16)                                         <Shortcut not Assigned>
2106     Sample Editor            Paketti                  ∿ Nudge Slice 30 by (-32)                                         <Shortcut not Assigned>
2107     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (+1)                                          <Shortcut not Assigned>
2108     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (+10)                                         <Shortcut not Assigned>
2109     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (+16)                                         <Shortcut not Assigned>
2110     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (+32)                                         <Shortcut not Assigned>
2111     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (-1)                                          <Shortcut not Assigned>
2112     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (-10)                                         <Shortcut not Assigned>
2113     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (-16)                                         <Shortcut not Assigned>
2114     Sample Editor            Paketti                  ∿ Nudge Slice 31 by (-32)                                         <Shortcut not Assigned>
2115     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (+1)                                          <Shortcut not Assigned>
2116     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (+10)                                         <Shortcut not Assigned>
2117     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (+16)                                         <Shortcut not Assigned>
2118     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (+32)                                         <Shortcut not Assigned>
2119     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (-1)                                          <Shortcut not Assigned>
2120     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (-10)                                         <Shortcut not Assigned>
2121     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (-16)                                         <Shortcut not Assigned>
2122     Sample Editor            Paketti                  ∿ Nudge Slice 32 by (-32)                                         <Shortcut not Assigned>
2123     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (+1)                                           <Shortcut not Assigned>
2124     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (+10)                                          <Shortcut not Assigned>
2125     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (+16)                                          <Shortcut not Assigned>
2126     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (+32)                                          <Shortcut not Assigned>
2127     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (-1)                                           <Shortcut not Assigned>
2128     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (-10)                                          <Shortcut not Assigned>
2129     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (-16)                                          <Shortcut not Assigned>
2130     Sample Editor            Paketti                  ∿ Nudge Slice 4 by (-32)                                          <Shortcut not Assigned>
2131     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (+1)                                           <Shortcut not Assigned>
2132     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (+10)                                          <Shortcut not Assigned>
2133     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (+16)                                          <Shortcut not Assigned>
2134     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (+32)                                          <Shortcut not Assigned>
2135     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (-1)                                           <Shortcut not Assigned>
2136     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (-10)                                          <Shortcut not Assigned>
2137     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (-16)                                          <Shortcut not Assigned>
2138     Sample Editor            Paketti                  ∿ Nudge Slice 5 by (-32)                                          <Shortcut not Assigned>
2139     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (+1)                                           <Shortcut not Assigned>
2140     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (+10)                                          <Shortcut not Assigned>
2141     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (+16)                                          <Shortcut not Assigned>
2142     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (+32)                                          <Shortcut not Assigned>
2143     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (-1)                                           <Shortcut not Assigned>
2144     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (-10)                                          <Shortcut not Assigned>
2145     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (-16)                                          <Shortcut not Assigned>
2146     Sample Editor            Paketti                  ∿ Nudge Slice 6 by (-32)                                          <Shortcut not Assigned>
2147     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (+1)                                           <Shortcut not Assigned>
2148     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (+10)                                          <Shortcut not Assigned>
2149     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (+16)                                          <Shortcut not Assigned>
2150     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (+32)                                          <Shortcut not Assigned>
2151     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (-1)                                           <Shortcut not Assigned>
2152     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (-10)                                          <Shortcut not Assigned>
2153     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (-16)                                          <Shortcut not Assigned>
2154     Sample Editor            Paketti                  ∿ Nudge Slice 7 by (-32)                                          <Shortcut not Assigned>
2155     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (+1)                                           <Shortcut not Assigned>
2156     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (+10)                                          <Shortcut not Assigned>
2157     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (+16)                                          <Shortcut not Assigned>
2158     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (+32)                                          <Shortcut not Assigned>
2159     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (-1)                                           <Shortcut not Assigned>
2160     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (-10)                                          <Shortcut not Assigned>
2161     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (-16)                                          <Shortcut not Assigned>
2162     Sample Editor            Paketti                  ∿ Nudge Slice 8 by (-32)                                          <Shortcut not Assigned>
2163     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (+1)                                           <Shortcut not Assigned>
2164     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (+10)                                          <Shortcut not Assigned>
2165     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (+16)                                          <Shortcut not Assigned>
2166     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (+32)                                          <Shortcut not Assigned>
2167     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (-1)                                           <Shortcut not Assigned>
2168     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (-10)                                          <Shortcut not Assigned>
2169     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (-16)                                          <Shortcut not Assigned>
2170     Sample Editor            Paketti                  ∿ Nudge Slice 9 by (-32)                                          <Shortcut not Assigned>
2171     Sample Editor            Paketti                  ∿ Phase Inversion                                                 <Shortcut not Assigned>
2172     Sample Editor            Paketti                  ∿ Phase Inversion & Audio Diff                                    <Shortcut not Assigned>
2173     Sample Editor            Paketti                  ∿ Phrase Editor Visible                                           <Shortcut not Assigned>
2174     Sample Editor            Paketti                  ∿ Pitch Shift                                                     <Shortcut not Assigned>
2175     Sample Editor            Paketti                  ∿ Pitch Shift & Audio Diff                                        <Shortcut not Assigned>
2176     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Downwards                                  <Shortcut not Assigned>
2177     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Left 10                                    <Shortcut not Assigned>
2178     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Left 100                                   <Shortcut not Assigned>
2179     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Left 1000                                  Command + Control + Right
2180     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Left 10000                                 <Shortcut not Assigned>
2181     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Right 10                                   <Shortcut not Assigned>
2182     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Right 100                                  <Shortcut not Assigned>
2183     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Right 1000                                 Command + Control + Left
2184     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Right 10000                                <Shortcut not Assigned>
2185     Sample Editor            Paketti                  ∿ Rotate Sample Buffer Upwards                                    <Shortcut not Assigned>
2186     Sample Editor            Paketti                  ∿ Sample Buffer Selection Double                                  Option + Right
2187     Sample Editor            Paketti                  ∿ Sample Buffer Selection Halve                                   Option + Left
2188     Sample Editor            Paketti                  ∿ Select First Half of Sample Buffer                              <Shortcut not Assigned>
2189     Sample Editor            Paketti                  ∿ Select Padded Slice (Next)                                      Option + E
2190     Sample Editor            Paketti                  ∿ Select Padded Slice (Previous)                                  Option + W
2191     Sample Editor            Paketti                  ∿ Select Padded Slice from Current Slice                          Return
2192     Sample Editor            Paketti                  ∿ Select Second Half of Sample Buffer                             <Shortcut not Assigned>
2193     Sample Editor            Paketti                  ∿ Set Loop Mode to 1 Off                                          <Shortcut not Assigned>
2194     Sample Editor            Paketti                  ∿ Set Loop Mode to 2 Forward                                      <Shortcut not Assigned>
2195     Sample Editor            Paketti                  ∿ Set Loop Mode to 3 Reverse                                      <Shortcut not Assigned>
2196     Sample Editor            Paketti                  ∿ Set Loop Mode to 4 PingPong                                     <Shortcut not Assigned>
2197     Sample Editor            Paketti                  ∿ Set Selected Instrument Interpolation to 1 (None)               <Shortcut not Assigned>
2198     Sample Editor            Paketti                  ∿ Set Selected Instrument Interpolation to 2 (Linear)             <Shortcut not Assigned>
2199     Sample Editor            Paketti                  ∿ Set Selected Instrument Interpolation to 3 (Cubic)              Control + 3
2200     Sample Editor            Paketti                  ∿ Set Selected Instrument Interpolation to 4 (Sinc)               Control + 4
2201     Sample Editor            Paketti                  ∿ Set Selected Instrument Panning (+0.01)                         <Shortcut not Assigned>
2202     Sample Editor            Paketti                  ∿ Set Selected Instrument Panning (-0.01)                         <Shortcut not Assigned>
2203     Sample Editor            Paketti                  ∿ Set Selected Instrument Panning 0.0 (Left)                      <Shortcut not Assigned>
2204     Sample Editor            Paketti                  ∿ Set Selected Instrument Panning 1.0 (Right)                     <Shortcut not Assigned>
2205     Sample Editor            Paketti                  ∿ Set Selected Instrument Panning Reset (Center)                  <Shortcut not Assigned>
2206     Sample Keyzones          Paketti                  ∿ Convert Mono to Stereo                                          <Shortcut not Assigned>
2207     Sample Keyzones          Paketti                  ∿ Mono to Left with Blank Right                                   <Shortcut not Assigned>
2208     Sample Keyzones          Paketti                  ∿ Mono to Right with Blank Left                                   <Shortcut not Assigned>
```


