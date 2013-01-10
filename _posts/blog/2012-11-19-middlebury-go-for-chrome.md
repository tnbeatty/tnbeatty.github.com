---
layout: blog_post
title: Middlebury Go for Chrome
abstract: Today I released the Chrome version of my Middlebury Go fix. This Google Chrome extension allows users to access go/ URI's both on and off campus.
category: blog
tags: Chrome Middlebury College Go Extension
---

{{ page.date | date_to_string }} - Middlebury, VT

<img src="/assets/images/post_images/go_WebStore.png" style="float: right; box-shadow: none; margin-top: 0px; margin-bottom: 0px; width: 400px;" alt="" />

After testing an Alpha version of the Middlebury Go Fix for Chrome for a couple of weeks, I released a beta version of the extension to the Google Web Store today. You can find installation instructions along with more information about the extension on the [project page](/projects/2012/10/27/go-for-safari.html).

### What does it do?

For a while, Middlebury College has implemented a system that redirects HTTP requests directed at `go` to `go.middlebury.edu`, which, in turn, redirects the user to a unique link corresponding to whatever subdirectory is specified after the top level `go`. For example, `go/portal` redirects to `http://portal.middlebury.edu/home/` and `go/mmu` redirects to `http://www.middmusic.com`. Students are free to creat shortcuts of their own at will. This is convenient for creating shortcuts to websites for the purposes of advertising, etc, on campus.

Students have gotten used to typing 'go/...' into the address bar of their web browsers and many of us forget that we can only access this service while on campus. It is a bit of a headache to get to a coffee shop or to return home and realize that `go/...` "cannot be found" by your computer. Thus, I created an extension for Safari 6 which allows a user to type a `go/...` link into the omnibar and have it redirect to the proper page. Today, I published a similar version of the extension for Google Chrome.

### Removing the Alpha Version

If you already downloaded my extension for Chrome while it was in Alpha, you'll want to remove it and download the new version from the Google Web Store. This will allow you to receive any updates automatically as they become available. Uninstalling the Alpha is pretty simple:

1. Open up your Google Chrome browser
2. Open Preferences by pressing `Cmd + ,` or selecting Chrome > Preferences.
3. Click on `Extensions` on the upper left side of the page.
4. Find "Middlebury Go" in the list of extensions and click on the corresponding trash can icon to the right of the extension title.
5. Download the beta from the app store [here](https://chrome.google.com/webstore/detail/middlebury-go/iknpplmmagmemgmhannnfjmcpkeppdef).

Thanks a lot for testing Middlebury Go before I knew how well it worked!