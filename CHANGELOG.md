# Plex Tweaks Changelog

## v1.3.2 ... (30 MAY 22)

### Fixes:
`+` Fixed css for enlarge the edit info box to no longer have two scrollbars for poster/background.

## v1.3.1 ... (08 JULY 21)

### Note:
`*` Only change is in the name, change from Plex Fixes to Plex Tweaks as this is no longer able to be a theme to bring back features from the past on top of adding random tweaks. So it's now just going to be random tweaks that I decide to add here and there. Not really sure what else to really add right now in terms of things, so this theme is currently at a standstill while just waiting for more things to break.

## v1.3.0 ... (03 NOVEMBER 20)

### Note:
`*` Literally rewriting everything. All options are removed, some will come back and some may never come back due to how plex devs have implemented css for certain things

`*` Plex Fixes Version 1.3.0 and higher will be made with `Plex server 1.20.4.3508 / WebUI 4.35.1` and higher in mind. Plex Fixes Version 1.2.6 and below are made for `Plex server 1.20.3.3483 / WebUI 4.34.4` and below.

`*` Thinking about changing the name of this theme at some point due to the fact that this theme has kinda diverged away from trying to bring back things from pre 3.0.0 of plex since that is kinda well no longer possible and hasn't been for a very long time. (current idea for new name is "Plext")

## v1.2.6 ... (05 AUGUST 20)

### Changes:
`+` Added external shows to the hide list for related lists.

## v1.2.5 ... (24 APRIL 20)

### Changes:
`+` Change edit info box css to now enlarge to 75% of your viewport height and width.

## v1.2.4 ... (04 DECEMBER 19)

### Additions:
`+` Added css to enlarge the edit info box.

`+` Added external movies to hide related lists.

### Fixes:
`+` Fix hover posters for the unoUI at app.plex.tv

`+` Remove the little bar left in the nav bar that was near the premium button

### Note:
`*` Plex has brought back fullscreen background images again in the latest release of plex server `1.18.3.2111` finally! Going to see if I can figure out a way to change the opacity or something a bit to make the images a bit more lighter in the near future.

`*` Changed default option for `Related Lists` options. New default is to not hide, while secondary option is to now hide. I may end up splitting up the related lists into separate options in the near future, so that users can choose what related lists to hide exactly instead of just hiding all related lists.

## v1.2.3 ... (27 SEPTEMBER 19)

### Removed:
`-` Removed contract side bar due to the fact that you can now contract the side bar in webUI version "3.100.1"

`-` Temp remove background image due to the fact that there is currently no good way to fix it at the moment. If it ever is fixable then I will bring it back again.

### Note:
`*` If you want to continue using 1.2.2 the latest version of plex media server you would need is `1.16.2.1297`

## v1.2.2 ... (16 MAY 19)

### Removed:
`-` Removed new icons

## v1.2.0/1 ... (28 FEBRUARY 19)

### Additions:
`+` Added option to change how a lot of icons look. You will need `Segoe MDL2 Assets Font` to make this work.

### Changes:
`+` Reverted `Rewrote theme into LESS style.` due to the fact that I wanted to bring back the `Port Number & Custom Url options`.

`+` Changed how I build the style.

## v1.1.1 ... (21 FEBRUARY 19)

### Additions:
`+` Added option to zoom in on Blu-ray rip's that haven't been cropped to remove black bars

## v1.1.0 ... (30 DECEMBER 18)

### Removed:
`-` Removed Port Number & Custom Url options as I can't seem to get them to work in LESS. (if anyone has any solutions other than going back to original css please let me know!)

### Changes:
`+`Rewrote theme into LESS style.

## v1.0.8 ... (26 DECEMBER 18)

### Fixes:
`+` Fix related lists.

## v1.0.7 ... (01 AUGUST 18)

### Fixes:
`+` Brings inline with changes to Plex Web up to version 3.63.1

## v1.0.6 ... (26 JULY 18)

### Fixes:
`+` Fixes main discover (dashboard) so it actually is back to being dark again.

## v1.0.5 ... (11 JUNE 18)

### Changes:
`+` No major changes, just a few tweaks to code.

## v1.0.4 ... (26 MAY 18)

### Fixes:
`+` Fix issue with regexp url

## v1.0.2/3 ... (29 MARCH 18)

### Fixes:
`+` Fix "Contract the sidebar"

### Removed:
`-` Removed `make the controls for video player a bit transparent` and `Make background of play queue/play next normal` as they never really worked correctly to begin with

## v1.0.1 ... (28 MARCH 18)

### Fixes:
`+` Fixed "<" and ">" arrows in status/alerts

## v1.0.0 ... (19 JANUARY 18)

### Additions:
`+` Added version number of style to plex settings menu

### Removed:
`-` Removed greyscale from posters

## v0.0.14 ... (24 DECEMBER 17)

### Additions:
`+` Added a bit of opacity to the sidebar

`+` Made user pictures in navbar/settings square

`+` Added hover effects into posters options for photo library posters

### Changes:
`+` Changed animation speed to be slightly faster for hovering over posters

## v0.0.13 ... (06 AUGUST 17)

### Additions:
`+` Added a custom Url support for people who have a custom url to access plex.

`+` Added an option to allow background images for certain areas of plex.

### Fixes:
`+` update for plex web v3.17.3

## v0.0.12 ... (18 JULY 17)

### Fixes:
`+` update for plex web v3.11.0

## v0.0.11 ... (13 APRIL 17)

### Changes:
`+` Background images are no longer cut at the top and bottom [at cost of slightly squishing the background picture just a tiny bit]

## v0.0.10 ... (12 APRIL 17)

### Changes:
`+` Move dashboard down just a smidgen

## v0.0.9 ... (30 MARCH 17)

### Removed:
`-` REVERT "added !important to everything in style sheet as to fix a couple style issues that sometimes pop up." as it was due to stylus extension bug

## v0.0.8 ... (29 MARCH 17)

### Changes:
`+` (Hate doing this but) added !important to everything in style sheet as to fix a couple style issues that sometimes pop up.

`+` Tidy CSS a little bit.

## v0.0.7 ... (27 MARCH 17)

### Additions:
`+` Hide Cast List Option

`+` Hide Extras Option

`+` Hide Related Option

### Changes:
`+` Move a couple things around and make them options instead

## v0.0.6 ... (25 MARCH 17)

### Additions:
`+` Make the continue watching title containers a bit smaller + move a few things up to go inline with this

### Changes:
`+` Move a couple css selections around

`+` Make the sidebar transitions a bit smoother

## v0.0.5 ... (24 MARCH 17)

### Additions:
`+` Hide the "Go Premium" button

`+` Expand 'Extras' display for movies [shows as grid instead of scroller]

`+` Minimize the sidebar to save screen space [Expands back out on hovering over the sidebar]

### Changes:
`+` Clean up a little bit more on CSS

## v0.0.2/4 ... (22 MARCH 17)

### Additions:
`+` Bring back the dark background scheme for the discover page. (does not interfere with background artwork fix)

`+` Add several new additions //Credits to @IanCeling --

`+` High-Contrast hover effect on media cards

`+` Smooth scale transform animations

`+` Box-Shadows on media cards

`+` Pulsing status glyph

`+` Larger Play buttons

### Changes:
`+` Rename userstyle from "PLEX BACKGROUND ARTWORK FIX" to "Plex Fixes" as this is going to be turning into a more AIO to bring things back inline with how some stuff was before the release of plex web 3.0.0

`+` Clean up a few CSS selections

### Fixes:
`+` Fix the max width of Shows/Movies summaries so that the whole summary is shown.

## v0.0.1 ... (10 MARCH 17)

### Initial Release
