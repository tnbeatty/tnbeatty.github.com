---
layout: blog_post
title: iOS Device Rotation
abstract: How I made individual views rotate when UIDevice senses an orientation change without actually having to change a view controller's UIInterfaceOrientation state.
category: blog
tags: iOS iPhone Objective-C
---

{{ page.date | date_to_string }} - Woodstock, VT

<!--
Post content goes here.
-->

You can handle device orientation changes in a number of different ways in iOS. The standard way is to let the device call a delegate method within each view controller and change any UI elements to fit the new dimensions. If we just need to rotate UI elements onscreen and don't want to actually change the device UI Interface Orientation, things get a little more complicated.

###Standard Orientation Handling

It is pretty standard to return YES for any supported orientations when the [shouldAutorotateToInterfaceOrientation:](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIViewController_Class/Reference/Reference.html) method is called in a view controller as below:

{% highlight objectivec %}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation == UIInterfaceOrientationPortrait ||
            interfaceOrientation == UIInterfaceOrientationLandscapeRight||
            interfaceOrientation == UIInterfaceOrientationLandscapeLeft);
}

{% endhighlight %}

Apple documents this technique well in their orientation changes [guide](http://developer.apple.com/library/ios/#featuredarticles/ViewControllerPGforiPhoneOS/RespondingtoDeviceOrientationChanges/RespondingtoDeviceOrientationChanges.html#//apple_ref/doc/uid/TP40007457-CH7-SW1). After returning a true response in the above method, [willRotateToInterfaceOrientation:Duration:](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instm/UIViewController/willRotateToInterfaceOrientation:duration:) gets called. Within this method, you can handle any necessary animations.

###Rotating On-Screen UI Elements

Lets say, for example, that we want to rotate an element on the screen whenever the device changes its interface orientation. At the same time, we don't actually want the interface orientation to change because we don't want to move elements around on the screen (toolbars, for example).

If what I am talking about is unclear, Apple's camera app is a perfect example to illustrate my point. When you switch from holding the device vertically to horizontally when using this application, the camera image on the record button, as well as the other icon-toolbar images, rotate to the proper orientation.

Trying to return YES for [shouldAutorotateToInterfaceOrientation:](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIViewController_Class/Reference/Reference.html) only when UIInterfaceOrientationPortrait == interfaceOrientation after rotating the necessary UI Elements doesn't work. Because the interface orientation is never actually changed when the device rotates in this case, returning the device to vertical never calls this method. We'll need to resort to another technique to determine device orientation changes.

###Detecting Device Orientation Changes

In the view controller's viewDidLoad method, begin listening for a notification:

{% highlight objectivec %}

[[UIDevice currentDevice] beginGeneratingDeviceOrientationNotifications];
[[NSNotificationCenter defaultCenter] addObserver:self 
                                         selector:@selector(deviceDidRotate:) 
                                             name:UIDeviceOrientationDidChangeNotification 
                                           object:nil];

{% endhighlight %}

Where a method in the view controller is called every time the device orientation is changed. In my view controller, I included the following:

        -(void)deviceDidRotate:(NSNotification *)notification;

Within this method, I rotate my UI elements according to the device orientation found by calling:

        [[UIDevice currentDevice] orientation];

We just need to be careful when doing this because the device has more than four [possible orientations](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/c/tdef/UIDeviceOrientation) - it detects face-up as well as face-down - which are irrelevant in my application.

###Handling Rotation

Once we know that the device orientation has changed, we can handle the change by calling a helper method or animating any necessary UI elements. We just need to be careful because the device has face-down and face-up orientations. 

I wrote a custom rotation method to handle animated rotations.

{% highlight objectivec %}

- (void)rotateImage:(UIImageView *)image 
           duration:(NSTimeInterval)duration
              curve:(int)curve 
            radians:(CGFloat)radians
{
    // Setup the animation                                                                           
    [UIView beginAnimations:nil context:NULL];
    [UIView setAnimationDuration:duration];
    [UIView setAnimationCurve:curve];
    [UIView setAnimationBeginsFromCurrentState:YES];

    // The transform matrix                                                                          
    CGAffineTransform transform = CGAffineTransformMakeRotation(radians);
    image.transform = transform;

    // Commit the changes                                                                            
    [UIView commitAnimations];
}

{% endhighlight %}

This cleans up the code a bit by providing the animation to rotate any UIImageView.