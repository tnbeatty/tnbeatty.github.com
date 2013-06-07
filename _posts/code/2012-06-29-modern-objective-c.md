---
layout: post
title: "Modern Objective-C"
date: 2012-06-29
category: code
excerpt: Apple updated and improved Objective-C yet again this year. New features, available in the Xcode 4.4 compiler, were outlined in the WWDC talks this Summer. I outline some of my favorites.
---

Today I watched a couple of [WWDC talks](https://developer.apple.com/wwdc/) to stay current with Cocoa and modern Objective-C. It turns out that Apple has made some particularly helpful changes this year that will substantially improve the organization and readability of my code. I am very impressed with the power and complexity of Apple's compiler design - it is truly extraordinary.

{% highlight ruby linenos %}

def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end

{% endhighlight %}

Some more text