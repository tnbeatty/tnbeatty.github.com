---
layout: post
title: "AngelHack Summer 2012"
date: 2012-06-25
category: life
excerpt: The Strabo team joined forces with Worth Baker and Teddy Knox to code up a storytelling application at the 2012 AngelHack hackathon in Boston.
---

![logo](/assets/img/posts/ahack_logo.png)

This morning, I returned from my first hackathon, [AngelHack](http://angelhack.com/) in Boston. The [Strabo](http://strabogis.com) crew teamed up with Middlebury students [Teddy Knox](http://www.teddyknox.me/) and [Worth Baker](http://worthbak.com/) to form Team Natarré. Of course I live-tweeted the whole thing (as did Worth) [#AngelHackBos](https://twitter.com/#!/search/%23AngelHackBOS), but I figured I should give it a more thorough overview in a blog post.

![team-hacks](/assets/img/posts/ahack_dinner.jpg)

Because no one on the team had competed in a hackathon before, we didn't really know what to expect. We sat down the night before to decide what we wanted to build. After tossing a couple of ideas on the table, Worth suggested a story sharing social network. He pitched his idea, a website to showcase infrequently told and underappreciated yet powerful stories that would not otherwise have a stage. The idea was solid and we figured that technologically, it would be feasible to get an MVP built in our alloted 24 hours at AngelHack. It would be called Natarré.

The Setup
===

I arrived at the [Microsoft N.E.R.D. Center](http://microsoftcambridge.com/Default.aspx) with Team Natarré at 9:00am on Saturday June 23. We met some of our competitors and talked generally about our product over breakfast. The event sponsors gave talks, many of which were relevant and interesting. 

Of particular note were the demos by [RIM](http://www.rim.com/) and [Microsoft](http://www.microsoft.com/en-us/default.aspx). The Microsoft talk featured [Windows Azure](http://www.windowsazure.com/en-us/), their public cloud hosting solution. I have long been a Microsoft skeptic, and although the demo wasn't very good (they had some technical difficulties, although the fault was not thier own), the product looks excellent. I was impressed by the cross-platform virtual machine support and (surprise) the user interface of the management site. I haven't played around with Azure myself, but from what I can tell, they are at least on the same playing field as the best in the business, [Heroku](http://www.heroku.com/). 

![our-view](/assets/img/posts/ahack_boston.jpg)

The RIM talk was interesting because I had completely forgotten that [Blackberry](http://us.blackberry.com/) was still a product. I have seen recent user data and app revenue charts that don't even include Blackberry devices as a category and they seemed completely gone from the market landscape (except for their occasional appearance in a [negative news](http://www.cbsnews.com/8301-505123_162-57460107/rim-shares-dive-to-nine-year-low-after-downgrade/) article). With shares at an all time low, $9.36 at the end of the day on June 25, they are desperate to build developer support. If they have hope of surviving, they need a robust developer network and app marketplace to compete with Apple and Android. Of course, they completely understand this and seem to be trying to revamp their company and their product lineup. They seem to be doing everything they can to support developers and their new devices natively support a remarkable number of frameworks and languages. I also got my hands on the new playbook, which seems like a very cool piece of gear. I do like the user interface and I think they have some good ideas with the way that the touch screen includes gestures over the bezel. They are obviously working hard to deliver new products that suit both devs and customers.

![team-hacks](/assets/img/posts/ahack_team.jpg)

The Hack
===

After a delicious lunch generously sponsored by [Whole Foods](http://www.wholefoodsmarket.com/) and a visit to the local Apple Store and Best Buy, we settled back into the NERD center for our 2:00pm coding starttime. At that point, we still had to develop the app idea, hammer out a user interface, build and API spec, and figure out our workflow as a team before we could even put eyes on the screen and fingers on the keyboard. It was nearing dinnertime before I had even opened xcode and I made my first real commit after dinner at about 9:00pm after the completion of the login models, views, and controllers. At that point, I grabbed my first of two beers (yay, open bar!) and started to hack away at the view layout.

![destruction](/assets/img/posts/ahack_destruction.jpg)

Saturday night was long - I personally polished off enough Red Bull to kill a small hippopotamus. I was in charge of building the iPhone application, which was essentially a story reading app. The components of the app included the ability to login with your Natarré account (or create an account), view and sort lists of stories by most popular, most recent, tag stories as favorites, add them to a reading list for later consumption, and also view lists of your personal favorites or read-it-laters. Of course, all of the navigation controllers were written custom to support a custom interface and I did a reasonably complicated (for a hackathon) subclass of a table controller to support pull-to-refresh. Teddy spearheaded the Android app which needed similar functionality and Will wrote the web app, which he crafted on the Rails framework. Parker and Worth worked as a team to design the user interface and app flow and then made beautiful custom graphics for the whole thing. Later in the night, or should I say early in the morning, Worth made an exceptional marketing video to demonstrate our work and the idea behind Natarré to the judges.

The Product
===

We ended up accomplishing most of an MVP. By the 2:00pm deadline on Sunday we had a working application, as bug-free as we could make it, and were pretty confident of its functionality if it came time for us to show it off to the crowd. Although many secondary features were left out in a rush to build a more robust core product, we wrote a tremendous amount of code in such a short period of time. We started the 24 hour hack with only a slight concept of what the final product would look like and by the end, we had designed three applications (web and two mobile), coded the entire thing by hand - it all had to be typed out in the moment, and filmed, compiled, and edited a ninety second marketing pitch. Sweet.

The Takaway
===

On Sunday, we walked away without our name on the list of finalists. We weren't selected to do a live demo and compete for a trip to the finals in Palo Alto, California. Although we were happy to leave a little early and get to bed, it was disappointing not to make the final round, yet somewhat expected given the product that we built. We learned an awful lot, however. Working under pressure is always a learning experience, and a different learning experience depending on the team. 

For this competition, the team was excellent. I couldn't have asked to work with better programmers than Will and Teddy and Parker and Worth did a kickass job with UI, UX, marketing, product vision, and videography. We had many laughs and much fun even though we were plugged in and working hard. As I described before, we accomplished more than I thought was possible in such a short time, especially considering how little we had prepared ahead of the competition. Most of the credit goes to Worth on this one - Natarré was his brainchild and I hope he sticks with it and adds the features that we couldn't find time to build.

Although the ideas were there, however, the tech lacked something that some of the other teams seemed to conquer. While we spend a lot of time thinking about the interesting aspects of our product and focusing on the overall vision, we failed to do something unique with sponsor API's and ended up not presenting the best tech to the judges. AngelHack is, after all, a hackathon. It is more a place to try to make bleeding edge, but buggy tech in a short time, not a place to develop a product. We built a social network with a like button and a reading list - it turns out that has been done before.

The Future
===

I look forward to entering another hackathon down the road. The energy at AngelHack Boston was great and the people that I met (most of whom were far better programmers than I) fully embodied the hacker culture - nice, helpful people who were interested in coding for the sake of the technology, not for the sake of the money. It was a good networking experience and opened my eyes to new programming techniques and tools.

I also know not to show up at a hackathon and expect to develop a product - that is something that should be planned in advance and executed after the code is complete. Having flowcharts, mockups, ideas for graphics, drawings, frameworks, and a complete knowledge of tools to streamline the backend build will be a huge advantage in the future. If I make it to [Disrupt SF 2012](http://techcrunch.com/events/disrupt-sf-2012/), serious prior planning will be key, as will be the knowledge of backend products like [Kinvey](http://www.kinvey.com/) and [CloudMine](http://www.kinvey.com/) and fast deployment services. I can't wait.

