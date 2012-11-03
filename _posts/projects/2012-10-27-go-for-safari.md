---
layout: project_post
title: Middlebury Go/ Fix
category: projects
imagehandle: gofix
website:
twitter:
abstract: An extension to enable access to the Middlebury College 'go/' system in the Safari 6 omni-box.
---

For years, Middlebury College Library and Information Services has implemented a feature on campus which redirects URI requests with the prefix "go/" to unique URLs defined by individual college community members. This system has become nearly universally adopted for accessing college websites by the community.

Many modern browsers have recently switched to "omnibars" which recognize *go/* URI's as searches rather than requests to the Middlebury system. Furthermore, even when using an old browser, *go/* links are only handled by the Middlebury servers. Thus, the *go/* system is only accessible from outside of the Middlebury local network by using the URL "go.middlebury.edu/". The plugins contained within this repository attempt to remedy both of these problems by redirecting *go/* requests to the appropriate URI.

For those interested, the project source code is hosted on [github](https://github.com/tnbeatty/Middlebury-Go-Fix).

Also, *go/* links are accessible from any computer using the search box on my [Farmstand](http://middfarmstand.heroku.com) site, which is still in alpha.

If you are unable to install the plugin or run into any problems, feel free to send me an email at [nate@strabogis.com](mailto:nate@strabogis.com).

For Safari (6.0 or better)
---

#####Current Version: 1.2.0

1. Download the Safari extension [here](https://raw.github.com/tnbeatty/Middlebury-Go-Fix/master/Middlebury%20Go%20Fix.safariextz).
2. Open your downloads folder and double-click on the "Middlebury Go Fix.safariextz" file.
3. Click "Install" in the dialog box and use *go/* on and off campus to your heart's content.

For Chrome (22.0 or better)
---

#####Current Version: 1.1.0

Alpha version of the extension released! I will release a beta soon. That version will auto-update and will be downloadable from the Google Web App store.

To install the alpha:

1. Download the extension [here](https://raw.github.com/tnbeatty/Middlebury-Go-Fix/master/Middlebury%20Go%20Fix_Chrome.crx).
2. Open Chrome and go to preferences under "Chrome" ( cmd - , ).
3. On the left side of the browser window, select "Extensions."
4. Locate the extension file that you downloaded (it should be "Middlebury Go Fix_Chrome.crx) and drag it into the browser "settings" window.
5. You will be prompted to grant the app permission to view your browsing data. The app has access to the URLs that you type in order to determine if they are go/ links - it does not store the data in any way (if you're worried about it, don't download the alpha. If you're tech savvy, check out the git repo and see how it works for yourself).
6. Click [here](http://go/fixgo) to "train" chrome that *go/* should be interpreted as an http request.
7. Use *go/* on and off campus to your heart's content.

For Firefox
---
Extension Coming Soon.

<hr />

<p style="font-size: 10px;">Please Note: I created this product solely for my own personal use and posted the links on this website because I think the software described above might be useful to members of my community. It was developed entirely by me and its development and continued support was not and is not affiliated with Middlebury College or the Town of Middlebury or any other legal entity in any way. I take no responsibility for the reliability of any of the products described above, particularly as updates to modern browsers are released frequently and things might break - that's how software development goes sometimes.</p>