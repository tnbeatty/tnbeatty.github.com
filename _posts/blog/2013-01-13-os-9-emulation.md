---
layout: blog_post
title: Apple OS 9 Emulation
abstract: Nostalgic for the days when computer games looked like <a href="http://en.wikipedia.org/wiki/Power_Pete">this</a>, I decided to run old PowerPC software on my Intel Mac. Here's how I did it.
category: blog
tags: Mighty Mike Power Pete Apple Intel PowerPC Software Hack Emulator SheepShaver Sheep Games OS 9
---

{{ page.date | date_to_string }} - Middlebury, VT

Fifteen years ago, I had [Power Pete](http://en.wikipedia.org/wiki/Power_Pete) (the first 1995 release of the precursor to the renamed 2001 software, MightyMike) installed on an old Macintosh [Performa 64](http://en.wikipedia.org/wiki/Power_Macintosh_6200). The Performa was a solid machine and ran Power Pete wonderfully. Occasional hiccups during particularly intense robot, bunny, and dinosour battles only added to its charm. Power pete was one of the few PC games that I played religiously, and I am sorry to report that he has been lost since my childhood.

<img src="/assets/images/post_images/mightymike_grave.png" style="float: right; box-shadow: none; margin-top: 0px; margin-bottom: 0px;" alt="Dead Power Pete"/>

Now, the Performa 64 is long gone and [Pangea Software](http://pangeasoft.net) never re-released Mighty Mike for Intel macs. A few days ago, I set out to resurrect Power Pete from his grave beneath Prehistoric Plaza. The biggest challenge was finding a way to run the old PowerPC software, especially because my modern mac OS no longer supports Apple's [Classic Environment](http://en.wikipedia.org/wiki/Classic_Environment). The task needed to be completed as follows:

1. Find a PowerPC Emulator
2. Get it running Mac OS 9
3. Install Power Pete from old versions

With a couple of emulators out there, both downloadable apps, and binaries that you need to compile yourself, it is difficult to know what will work best on your mac. There are also different ROM's, as well as different classic operating systems and even two seperate installations of Power Pete! It took me a while to sift through all of the information and do some custom tweaking. If you have a modern Intel mac running OS X (I have 10.8.2), you can start plugging away at bears with your nerf launcher, saving bunnies, and eating fruit before you know it. The whole process shouldn't take more than about 15 minutes; I'll walk you through it.

###Installing the Emulator

First, you're going to need a PowerPC Emulator. Essentially, this is a software program that translates program commands from code that runs on an old Apple processor into code that runs on a new Intel processor (like the one you probably have in your macbook). The best one that I have found is an open source project called [Sheep Shaver](http://sheepshaver.cebix.net) (a "Shape Shifter" pun that relates to an even earlier mac emulator). For those interested, the git repo for the code is [here](https://github.com/cebix/macemu).

####The Steps:

<img src="/assets/images/post_images/mightymike_install1.png" style="float: right; box-shadow: none; margin-top: 0px; margin-bottom: 0px; width: 500px;" alt="Finder Window"/>

1. Download Sheep Shaver by clicking [here](http://www.xs4all.nl/~ronaldpr/sheepshaverforum/SheepShaver_UB_20120715.zip).
2. Find a file named `SheepShaver_UB_20120715.zip` in your downloads folder. Unzip the file by double-clicking on it. If the file was automatically unzipped, you might just see a folder named `SheepShaver_UB_20120715`, in which case you can skip the unzipping step.
3. Rename this folder `SheepShaver` and move it to someplace a little more permanent. I put mine in my `Applications` folder. To the right is a screenshot of my finder window after this step.

###Loading the ROM and the OS

Next, you need Macintosh computer ROM. For a number of reasons, this is difficult to find. Lucky for us, the internet is full of people who like vintage computer binaries. Ha.

####The Steps:

1. Download a ROM file [here](http://www.redundantrobot.com/macemulator/newworld86.rom.zip).
2. Find the file in your downloads folder and unzip it if necessary. Rename the file from `newworld86.rom` to `ROM`, without the file extension. This can be easier said than done. If you experience any difficulties making sure the file has no extension, select the file (single-click to highlight) and then select `File > Get Info`. In the window that pops up, find where it says "Name & Extension" and in the box below, change the text to `ROM`. Then, close the info window.
Now, drag the file that you just named `ROM` into your `SheepShaver` folder in applications.

###Create a shared folder

While you have your `SheepShaver` folder open, make a new folder inside it called `Shared`. This will come in handy later.

###Download Mac OS 9

<img src="/assets/images/post_images/mightymike_install2.png" style="float: right; box-shadow: none; margin-top: 0px; margin-bottom: 0px; width: 200px;" alt="SheepShaver Folder in Finder"/>

Now we need to download and install an image of the old OS 9 operating system.

####The Steps:

1. Download the OS [here](http://www.redundantrobot.com/macemulator/OS9.img).
3. Move your new `OS9.img` file into your SheepShaver folder. The contents of your SheepShaver folder should now look like the image on the right.

###Configuring the Emulator

Now we need to set up the emulator and all of the preferences. This is how we tell the emulator what ROM to use, how much memory to use, etc. This is the last step in the OS setup process.

####The Steps

1. Go ahead and double-click on `SheepShaver` with sheep icon in your SheepShaver folder to start up the emulator. You should see a grey window with a folder and a question mark.
2. Open up preferences just like you would in any other app by clicking on `SheepShaver > Preferences`.
3. Make sure the "Setup" tab is selected.
4. Add the ROM file by clicking "Browse" and finding and opening the file that we renamed `ROM`. It should be contained within your SheepShaver folder.
5. Now click "Create" under the empty list of volumes.
6. Save your new volume in the `SheepShaver` folder. Name the file `MacOS9` and change "Volume Size". <img src="/assets/images/post_images/mightymike_install3.png" style="float: none; box-shadow: none; margin: 0px auto; width: 600px;" alt="Volume Create Window"/> <br />
1. Now add the `OS9.img` file to the list of volumes. Click "Add" under the list and open up your `OS9.img` file.
7. Now change the value for Unix Root. Hit Browse and find the Shared folder that you created earlier inside your `SheepShaver` folder. Then hit "open".
8. Change the value of RAM size to 256 or 512 (256 will work just fine).
9. When you're done, your screen should look like the one below: <img src="/assets/images/post_images/mightymike_install4.png" style="float: none; box-shadow: none; margin: 0px auto; width: 600px;" alt="Volume Create Window"/> <br /> Your filepath for Unix Root might look a little different than the one in my picture. That's ok.
10. Now select the Audio / Video settings. Leave the audio part alone, and make the appropriate video settings to match those in the image below: <br /><img src="/assets/images/post_images/mightymike_install5.png" style="float: none; box-shadow: none; margin: 0px auto; width: 600px;" alt="Volume Create Window"/> <br />
11. Now select the Miscellaneous tab. Check the appropriate boxes as reflected in the image below:<br /><img src="/assets/images/post_images/mightymike_install6.png" style="float: none; box-shadow: none; margin: 0px auto; width: 600px;" alt="Volume Create Window"/> <br />
12. Quit SheepShaver by pressing `Control-Escape`.

###Install Power Pete

Now we can install Power Pete, AKA Mighty Mike. I found that the 2001 release of Mighty Mike was more readily available online, so that's the one I used. The only difference between Mighty Mike and Power Pete is the character's name and a couple of graphics settings - they're both the same classic game.

####The Steps:
1. Download the trial [here](http://www.pangeasoft.net/mightymike/files/Mighty%20Mike.zip).
2. Unzip the downloaded file if necessary.
3. Drag the `Mighty Mike` folder into the `Shared` folder located inside your `SheepShaver` folder.

###Play Power Pete!

<img src="/assets/images/post_images/mightymike_install7.png" style="float: right; box-shadow: none; margin-top: 0px; margin-bottom: 0px; width: 300px;" alt="SheepShaver Folder in Finder"/>

Get ready to slay some fairy tale creatures and rescue rabbits! Fire up SheepShaver. It should boot up OS 9 and take you to a view of your desktop. Double click on the desktop icon that says "Unix" and inside, open up the Mighty Mike folder. Inside the folder, scroll all of the way down and find the icon that says "Mighty Mike". Double click that icon. Play Away! (Note that you'll need a registration code. I think I am obligated to say that you can purchase one, if you would like. Contact me for more information).

A few notes to help you navigate Mighty Mike:
1. Use the right and left arrow keys to move Mike around the screen.
2. Change weapons with the command key.
3. Go back or exit with the escape key.
4. Use the enter key to navigate menus.
5. You can always quit out of the emulator by using `control-escape`.

If the sound doesn't seem to work at first, un-mute it in the menu 'Apple > Control Panels > Sound'.

Good Luck!