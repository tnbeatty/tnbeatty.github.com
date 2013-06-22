---
layout: post
title: Modern IE Testing
date: 2013-05-27 11:00:00
category: code
excerpt: I recently stumbled upon a convenient (and free!) way to do cross-platform testing of webapps on Windows 8 and IE 10.
---

For web app developers, Internet Explorer has always been a headache, to say the least. Because I develop on a Mac, cross-browser testing is painfully tedious and many times, unless I am building a finished product for a client, I just choose to forget about IE support altogether (particularly old versions of IE). Lots of open source CSS and Javascript frameworks have gotten better at supporting the Microsoft browser which has helped alleviate some of the IE-Induced pain. Yet, apps still need to be tested. In the past year, Microsoft has definitely stepped up its game with the release of IE 10 and testing has never been easier. On their website, [Modern.IE](http://modern.ie), they provide (not so free) compatibility tools and a (free) description of how you can set up your own Windows environment. In less than 20 minutes, I got Windows 8 and IE 10 up and running on my Mac and discovered that my personal website would look just fine on a Dell notebook. Here's how it's done:

Get Oracle's VirtualBox for Mac. First off, [Oracle](http://www.oracle.com/index.html) sponsors an [awesome team](http://oracleteamusa.tumblr.com). Second, [VirtualBox](https://www.virtualbox.org) is an open source virtualization app that runs all kinds of operating systems on your x86 processor. That's convenient if you want to test pretty much any software on any platform. Nice. You can download VirtualBox [here](https://www.virtualbox.org/wiki/Downloads). Open up the .dmg (if you are on a mac), run the installer, and follow their instructions. It's very straightforward.

Next, download Windows 8. As Microsoft recommends, just run the following cURL command in Terminal: 

	$ curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/VirtualBox/OSX/IE10_Win8/IE10.Win8.For.MacVirtualBox.part{1.sfx,2.rar,3.rar}"

Open up the virtual machine that you just downloaded. It will appear, pre-configured, in VirtualBox. Test away!

More detailed instructions are available in the documentation of both products but I figured I would give the short version here because I found it so helpful. VirtualBox is a wonderful tool and it was fun to play around with Windows 8. Now you have no excuse to have a broken website on IE 10. Happy coding!