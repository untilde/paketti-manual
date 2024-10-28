# Text

when you install Paketti, there are a few tentpole features or main features that i think are the most cool.

one of them is the complete disregard of the Disk Browser. you don't need to use it to load samples. for that, you just use the "Paketti PitchBend Multiple Sample Loader" & "Paketti PitchBend Drumkit Loader" shortcuts. they will load a sample, and immediately initialize it with:
PitchBend 2. Cutoff 3. Resonance 4. Cutoff LFO Frequency 5. Cutoff LFO Amp (4+5 are used for autofilter like features) 6. OverDrive 7. Parallel Compression 8. PitchBend Glide/Inertia (set it to max, and your regular midicontroller pitchbend input will be very slow, set it to minimum, pitchbending will be immediate). Everytime you load something using Paketti Loaders, the Paketti Preferences are used to introduce your preferred loopmode, autofade, autoseek, oneshot, interpolation setting, New note Action, selected FilterType.  for these, there's a Default XRNI instrument being used, which comes with Paketti. you can of course replace it with a completely different XRNI - which will then get it's sample overwritten on every load.

the instr macros device that is added to the track you are on, when you load the sample, allows you to directly start automating the macro parameters. meaning, you would load a sample using Paketti, input a few notes to the pattern editor, and immediately be able to start drawing automation for any of the 8 macro controls. so you could for instance put in a drumloop, and start drawing a cutoff automation curve directly to modulate the cutoff parameter.

the DrumKit loader loads a max of 120 samples into the instrument. load more, it will only load 120 samples. same with the 8 macros, same with the instr macros. the drums are mapped automatically from C0 to B9. the Windows Explorer or macOS Finder is used for selecting files, meaning no Disk Browser use at all.

another is the introduction of shortcuts and midimappings for loading your preferred native devices (both regular, and hidden/legacy effects), your favorite VST,VST3,AudioUnit/LADSPA/DSSI devices. this means that you go to the Tools -> Paketti -> Plugins/Devices -> Device Loader dialog, and check your favorites, click on "add as shortcut/midimapping" and from here onwards, you can map the newly created shortcuts for loading your devices onto the track you are on. if you're in sample fx chain mode, those devices will be loaded instead of to track dsp. it means you can for instance (in my usecase) press shift-q e r t z a v  and out come 7 devices to the selected track.  same with midibuttons, after selecting your favorites, you can use the midi mappings to set up midibuttons for loading your desired device onto your selected track.

there's a mathematical slicer, which takes your drumloop and, depending on which shortcut you pick, slices it in half (two slices), or 4 to max 128 slices. meaning if your loop already loops well, you can just split it into 16-32-64 slices and start drumming away at the loop.

for slices, there's also a method for adjusting the slices left & right by nudging the start / endpoint, much like MPC does it. it really is to be seen to be believed. it means you no longer need to keep zooming in and zooming out to adjust the slices, you can just view the slice itself, and adjust where it starts and stops.

there's also, to go with this logic, "Isolate Slices to New Instruments", which creates brand new instruments into your song, and if you say, were on slice 6 (let's say a snare), when you run the isolate slices, you'll still be on the snare, but snare as a newly created instrument.

there's a Clean Render Selected Track / Group. this will solo the selected track, render it as a wavefile, create a new track (named with a matching title such as "Bass (Rendered)" (if your original track was called Bass, input C-4 to the newly created track, ingest the 8 macros to it, mute the original track, collapse the original track, and if you select it, also bypass the effects in the original track. and it's ready to be automated, by default, too. if you have a line input device on the track, instead of "Highest" diskwriting speed it will switch to "Realtime" - meaning, if you have incoming audio being processed through renoise effects, that incoming audio will be recorded to the new instrument, with the effects. perfect for external synthesizers being controlled by midi, for instance.

since the renoise automation drawing is quite limited, i've added midi shortcuts and menu entries for drawing curves up/down (exponential, linear), and also added logic that if you're trying to do an "exponential to max" curve on a pitchbend/panning automation lane, it will be drawn from the center to the top, instead of from the bottom to the top.
there's also multipattern automation drawing, meaning, you make a selection from pattern matrix and it will draw an exponential curve or linear curve from patternStart to patternEnd.

there's also midimappings for automation start and automation end, and a third midimapping knob for deciding which automation curve is drawn and from where to where. so you can pick an automation area, and use a knob to decide what the curve would look like.

i've also introduced a "Draw Automation to Selected Automation Parameter". this means, you're in ANY automation lane whatsoever, have playback on, set record on, set follow pattern on, and turn the knob == result == you are drawing automation to that lane. you don't need to map the midi anywhere in the track device or anywhere, just map it once to the "automate selected parameter" and just select any parameter and just draw in. it also works with selections, meaning, you select a section and draw with the knob, and it writes to the section (this with follow pattern off, of course).

https://www.loom.com/share/5b46a1dd7d5e4d82b87ff145fc38c3cb?sid=a70c3095-f7b8-4909-a664-6b449baecb23 

there's a Paketti Theme Selector which currently includes over 510 themes, you can use it to pick your favorite themes and can set it so that it will cycle randomly through your favorite themes, so on every start of Renoise, it'll use a different one of your favorite themes.

there's a Paketti Gater for directly writing in looping  volume gates, retrig gates, sample-playback-backwards gates and panning gates. each of these rows have their own steps, min 1 max 16. so if you have a 512 row pattern and use a 16 row volume gater, then it'll keep looping till the end of the 512 row patterns. or if you have a 3 row panning step, those 3 steps will repeat until the end of the pattern, and so on. these are also designed to type directly to the pattern editor, either for volume control of sample, or volume control of the mixer channel.

there's a 8 part 16 step stepsequencer which also outputs to the pattern editor, you can load 120 samples to each part, pick your preferred sound, and use checkboxes to make them play, probability checkboxes to modify how likely they are to play, draw automation directly by clicking on show automation (leveraging the 8 macros introduced on every load) and use buttons to randomize step sequencer content, selecting a random sample for each part, or selecting random samples for each part.. and you can limit the steps from 16 to 1 at will.
a brief demo at https://www.twitch.tv/videos/2282270660

there's dozens of impulsetracker/screamtracker3 shortcuts for pattern editing and modification, some of which have been recently supercharged to also allow for selecting automation, gif here meaning when you select something using paketti shortcuts, it will also select the automation, if automation is visible. this can be combined with the midiknobs for drawing automation curves easily.

i've added dynamic views which let you have a max of 8 shortcuts which cycle through the settings that you have picked. each of the 8 shortcuts can have max 8 different cycles. 

so you have maximum control over "view presets" but they're much more powerful than the 8 that renoise allows you to have, because they remember their state. so you could for instance cycle , with one shortcut, from pattern editor to sample editor + show sample recorder, then press the same shortcut to hit mixer, show disk browser + pattern matrix + instrument box, then again to only show pattern editor and automation, or something else.

there's a method of creating 16 new tracks with 16 midi input channels and 16 midi output channels and 16 plugin devices, automatic send generation and line input generation, for those who want to use renoise with an external sequencer with a multi-out soundcard, or those who want to use renoise as a sequencer for external synthesizers and want to map the midioutput channels themselves. all of the generated samples will have midi control devices set up directly, and automation ready to go.

there's a dialog for changing the default phrase settings, and a shortcut for creating a new phrase with those settings.

there's also shortcuts for saving the selected sample as a wav or flac, using windows explorer or macos finder.
there's the eSpeak text-to-speech speechsynth which requires espeak-ng to be installed on the computer but allows for generating spoken word samples..
the same shortcut + midimapping loader for devices, is also available for plugins, so vst,vst3,audiounit,ladspa,dssi softsynths can be shot to the instrument box with shortcuts + midimappings

there's randomizers for parameters of selected device, a mono-device which can be added or toggled on/off from the channel for quickly monoing
there's an inverter device which inverts the audio

the send and multiband send shortcuts load it "correctly" aka "Keep Source and volume at zero" as opposed to "mute source and volume at max".. 

there's a trick loader which lets you load 20minutes of audio or more and have it play till the end, even if the pattern is 16 rows of length, utilizing 0G01 (Glide/Portamento at 01)
there's a midimapping + shortcut that 1) shows sample recorder 2) starts recording 3) press the shortcut again, it stops the recording, throws in the 8 macros
so you can quickly start recording anything by just pressing the shortcut or holding down a midi button, let go of the midibutton, sampling stops

there's a pattern cheatsheet which lets you input pattern commands to either selected row or selection in pattern:

there's shortcuts + midimappings for inputting volume, panning, delay, samplefx effect commands and effect parameters to the selection in pattern

there's "flood fill by editstep" shortcuts which let you take what's under your cursor and repeat it every 6th row or 8th row etc, or every row.

there's a replicate at cursor shortcut, which enables this kind of stuff:

https://www.loom.com/share/a437d74618934e9db634ceb41b1c5b9a?sid=ead6a274-1a6a-4ea1-a068-344fed4aef23


there's a "Set Repeater Value" Knob midimapping which will either 1) add repeater and activate it 2)detect repeater exists and modify the parameters, allowing for stuff like this:

https://www.loom.com/share/f4f94d05045a4df49896d52202d3adf7?sid=9c7c6c79-005d-48f4-ba21-ac06475b5bfc

there's shortcuts for changing pattern length to 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512 - methods for duplicating content with 1-256 row patterns to double it, then LPB*2 diskwriting aka rendering a new sample, but making a clone of the pattern and setting it's LPB to current LPB, then the clone of the pattern has LPB times two, and the audio playing there.   there's seamless rendering, aka if you have anything below 257 rows of pattern, it will duplicate it, render it, select the beginning 256 rows (so you can delete them if you like) and add a loop to the other 256 rows so you can have a reliably looping (mostly) long pad with tail mixed in..  mono to stereo converters for sample data (mono to left, right blank, mono to right, left blank, mono to stereo with both).. there's a yt-dlp downloader that downloads the full audio from a youtube video, instagram, facebook, twitter posts, and it already has the macros loaded in.. and there's multiple missing shortcuts for sample pitch finetune panning loop etc controls, same for midi.. i could go on. i've done max 4 hour demos of going through all the features, normally around 45minutes to 1,5hours depending on what i remember to show

there's "Duplicate Instrument and Reverse" - which both makes a copy of the currently selected instrument, and then reverses the sample, and selects the sample.
Duplicate Track and Instrument - will take the notes that are there in the current track. + track dsps, and make a new track, select the track, and duplicate the instrument. and if you have a plugin open in the original instrument, and duplicate the instrument with this script, then it closes the plugin external editor, and duplicates the instrument, jumps to the newly created track, and opens the plugin's external editor for it.
there's a dialog that lets you randomize a selected device, or all devices in a selected track, or selected plugin, or all selected plugins,  -- there's 5 different flavors of all four of those, with percentages you can set for them.
there's a "duplicate track with selected instrument", meaning you can keep copying the note content, but it'll be branded with your current instrument, instead of it being a duplicated instrument.

the randomize with percentage was from ModPlugTracker. there's also a bunch of features from PlayerPro, such as this note inputting dialog, which lets you input notes, with editstep, to selection, or current row, meaning you can do stuff like this. there's also a method of hovering the mouse to write effect columns to the selection in pattern..
i've also replicated the OctaMED Pick/Put Note technique, which lets you pick any note column + effect column content, and put it down. think of it like macros for note column + effect column content.  you can do them with shortcuts (both picking up and putting down) but also with midi. so you could for instance have chords grabbed and keep slamming them down - there's also controls for printing the information with a specific instrument.


there's also shortcuts for "save selection as .wav / .flac" for the sample editor. and for a selection in sample editor, you can press a shortcut to "create new instrument & loop". there's "mute or solo selection in pattern",  expand/shrink selection content shortcuts, set selection to selected instrument.. bypass all effects in track, or enable.. show all parameters of all devices in track

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

Oblique Strategies Dialog / Loader - it will randomly pick one Oblique Strategy from a list on the status whenever you save or load a song or restart Renoise
Paketti Midi Mappings - it shows some of the Paketti MidiMappings and if you have Midi Mapping "Learn" mode on, you can actually pick them yourself and assign them easily. for better discoverability
Output Routings dialog that shows all the tracks and lets you set the Output Routings in case you have a multi-out soundcard
Shortcuts for setting each track, or the Master, to a specific output routing channel (01-64) for those with multi-out soundcards
Track Renamer - select a bunch of tracks with selection-in-pattern and rename them all in one go, one track at a time
Phrase Doubler / Halver (takes the content of the Phrase and increases the size or decreases the size
Set Phrase Length to 001-004-006-008-012-016-024-032-048-064-096-128-192-256-384-512
Set Phrase LPB 1-256
same for pattern LPB
Print current BPM & LPB to Master track of Pattern - so can modify the tempo in another pattern -good for LPB*2 i.e. increasing resolution
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


#roadmap
what's on the roadmap; i'm slowly processing through all the "Ideas and Suggestions" "Beginners questions" and filtering them into a todo-list of "this can be scripted, i'll do it" and this means there's hundreds and hundreds of forthcoming features. if anything is obscure or feels like it needs an explanation, please mention and i'll clarify it as best i can
one thing i wanted to specify is that i've downloaded all the 2002-2024 posts from "Ideas and Suggestions" forum (all 7361 posts) and multiple thousands of posts from Beginners Questions, Tool Development and Tool Announcement, and i'm filtering through them, retaining the ones that I can script into Paketti, ignoring the ones that would be too complex, and slowly will be adding them to Paketti as I get around to it. also rescuing other tools from oblivion like the martblek ReSpeak tool which he abandoned -- and other such things. so it's a long roadmap of things that i've got on my plate 🙂







# Old About
This is an unofficial manual for the Paketti Renoise tool, based on Release [20240609121053](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/releases).

Paketti is a multipurpose Renoise tool. Working like an expansion pack, it delivers hundreds of new functionalities to the app, ranging from Quality-of-Life (QoL) improvements to new advanced features inspired by Impulse Tracker, Schism Tracker, ModPlugTracker, Player Pro, John Player/Quantum SoundTracker/PollyTracker, OctaMED and many others. It also addresses multiple community requests from the Renoise Forum that were not yet considered by the developers. 

It is far too complex to sum up in just a few words. However, some notable changes include:

* Over two thousand new keybinds covering multiple areas of Renoise;
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
* Impulse Tracker (.it) key commands (ALT-D *2, ALT-L *2, ALT-U, ALT-F, ALT-G, ALT-Y, Home *2, End *2, F2 F3 F4 F5 F6 F8 F12);
* Quickly add Automation curves to pattern automation (fade ins/fade outs (linear or exponential), pitchbend/panning);
* Show/hide Device parameters as sliders in the Mixer;
* Control Selected Sample loop start/endpoints with MIDI;
* Control Automation start / endSelection via MidiMappings
* Control Sample Buffer start / endSelection via MidiMappings
* And much much more!

An extensive list of additions is available at the official [Paketti GitHub page](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/).

# Index
For better comprehension, this manual is divided into sections. Each chapter corresponds to a different Renoise screen/tab and can be accessed from the list below:

1) [Global](docs/01-ToolsMenu.md)
   
2) [Instrument Box](docs/02-InstrumentBox.md)
   
3) [Sampler](docs/03-SampleEditor.md)
   
4) [Pattern Editor](docs/04-PatternEditor.md)
   
5) [Automation](docs/05-Automation.md)
   
6) Pattern Matrix
 
7) Mixer
   
8) Phrase Editor
 
9) [Paketti KeyBindings](docs/22-KeyBindings.md)

# Credits
Paketti is a project by Esa Ruoho, a.k.a Lackluster (@esaruoho). More information [here](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/blob/master/README.md#thanks).
This documentation was originally started by @un
<link rel="stylesheet" href="assets/dark-mode.css">
<div class="sidebar-links"><a href="http://patreon.com/esaruoho" target="_blank">Patreon</a><a href="https://github.com/esaruoho/org.lackluster.Paketti.xrnx/" target="_blank">GitHub Paketti</a><a href="https://discord.gg/Qex7k5j4wG" target="_blank">Discord</a><a href="https://lackluster.gumroad.com/l/paketti" target="_blank">Gumroad Paketti</a></div>
