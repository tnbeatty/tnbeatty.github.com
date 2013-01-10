---
layout: blog_post
title: Middlebury Menus
abstract: Today I did some design for a new Middlebury dining menu app. I like the way it came out and will code it up this weekend.
category: blog
tags: Middlebury College Dining Menu iOS Programming Cocoa Food App Application
---

{{ page.date | date_to_string }} - Middlebury, VT

Last summer, I created [middfarmstand.com](http://middfarmstand.heroku.com), still in an unfinished alpha and hosted on Heroku, to be a one-stop-shop for Middlebury events, menus, and news. Although I don't like the idea of a "one size fits all" web solution like [the Middlebury portal](http://portal.middlebury.edu), I think a site which aggregates only the most important online information from various parts of the Middlebury web could be both helpful and very popular. Three times every day, I check [go/menu](http://go.middlebury.edu/menu) to decide where on campus I want to eat my next meal.

<img src="/assets/images/post_images/middmenus/sketch1.JPG" style="float: right; box-shadow: none; margin: 10px; width: 300px;" alt="" />

Right now, there are a couple of options to get Middlebury dining menus on a mobile device:

1. [menus.middlebury.edu](http://menus.middlebury.edu) : Poorly formatted and difficult to read on a small screen.
2. [portal.middlebury.edu](http://portal.middlebury.edu) : Requires the navigation of no fewer than three different menus to retrieve each menu. Even when you can arrive at the desired page, the formatting is sometimes so poor that the food listings are unreadable.

I have been approached by a number of different people who want to make a dining menu application. Unfortunately, none of them are iOS programmers and although their ideas are excellent and the feature sets for their apps are well designed and carefully planned, their production timelines are all pretty distant. In the meantime, I have designed my own menu application and plan to code it and release it. Hopefully, it will serve as a good alternative until one of my peers releases an app which is sure to be far superior.

The application consists of one main view. On the iPhone, three tabs at the top allow the user to select a dining hall and the main screen below shows the menu for the next available meal. The user can flip the page to view the menu for the next or previous meal. On the iPad, all three dining hall menus are displayed simultaneously. Meals are cached a number of days in advance, so whether you are online or offline, sitting in a WIFI classroom, or walking across the beach reading your iPad, you will always be able to browse the menu - no waiting for Portal pages to load.

If you have any thoughts or suggestions, please let me know. Fire me an email at [nate@strabogis.com](mailto:nate@strabogis.com). Thanks for your help! I'll provide updates on my site and posts to my blog as I make more progress and eventually submit the app to the Apple app store.