---
layout: blog_post
title: Modern Objective-C
abstract: Apple updated and improved Objective-C yet again this year. New features, available in the Xcode > 4.4 compiler, were outlined in the WWDC talks this Summer. I outline some of my favorites.
category: blog
tags: Objective-C Cocoa Apple iOS iOS6 Object Literals Modern Synthesize Property
---

{{ page.date | date_to_string }} - Madison, CT

<!---
Post content goes here.
-->

Today I watched a couple of [WWDC talks](https://developer.apple.com/wwdc/) to stay current with Cocoa and modern Objective-C. It turns out that Apple has made some particularly helpful changes this year that will substantially improve the organization and readability of my code. I am very impressed with the power and complexity of Apple's compiler design - it is truly extraordinary.

##Accessor Generation

Before I get to my favorite new feature, I feel as though I need to at least mention the changes to generating setters and getters for properties. From now on, properties are synthesized automatically. This is great news, as I am constantly forgetting to synthesize and create instance variables. Even better, the instance variables are automatically generated with the standard underscore naming convention. Previously, I would have two files with the following code:

	myObject.h

{% highlight objectivec %}

@property(readwrite)NSString * userName;

{% endhighlight %}

	myObject.m

{% highlight objectivec %}

@synthesize userName = _userName;

{% endhighlight %}

Now, the part in myObject.m is generated for me... How convenient!

##Private Class Methods

Another feature that deserves mention is the ability to write private class methods without having to declare them in the header file (which would make them public), or extend the class via a category @interface within your class .m file. That's it - just don't declare the private method. Awesome.

##Object Literals

This is my favorite change to Objective-C. Having had some experience with Java, Python, Ruby, and other languages that have cleaner syntax, I have been driven crazy about all of the text involved with making objects in my code. First off, now you can make NSNumbers just like you can make an NSString, designated by the @ symbol. For example:

{% highlight objectivec %}
	NSNumber * value;
	value = @12345;
	value = @12345ul;
	value = @12345ll;
	value = @123.45f;
	value = @123.45;
	value = @YES;
	value = @([myClass expressionReturningANumber]);
{% endhighlight %}

Dictionaries and arrays take a tremendous amount of text. To create a dictionary, I have had to write something like this:

{% highlight objectivec %}
NSDictionary * keyValuePairs = 
	[NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:
			email, 
			password, 
			hash, 
			nil] 
        forKeys:[NSArray arrayWithObjects:
        	@"email", 
        	@"password", 
        	@"token", 
    		nil]
    ];
{% endhighlight %}

That is obviously unreadable. In the same manner as an NSString and an NSNumber, arrays and numbers are replaced with the @-notation @[] and @{}. Thus, the above code can be replaced with the following:

{% highlight objectivec %}
NSDictionary * keyValuePairs = 
	@{ @"email" : email, @"password": password, @"token" : token };
{% endhighlight %}

Piece of cake. Apple wins again.