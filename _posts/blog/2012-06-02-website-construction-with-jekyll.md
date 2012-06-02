---
layout: blog_post
title: Website Construction with Jekyll
category: blog
tags: Jekyll SASS CSS Sublime Github Pages
---

{{ page.date | date_to_string }} - Woodstock, VT

<!---
Post content goes here.
-->

Now that I have the framework of my website constructed, I figured it would be a good time to write about how it is set up.

![Jekyll Monster](/assets/images/post_images/jekyll.png)

I decided to use Tom Preston-Werner's [Jekyll](https://github.com/mojombo/jekyll) generator. Using Jekyll makes it easy to build new posts and pages quickly and in markdown (my favorite... easy webdev). I hosted the site on [git pages](http://pages.github.com/) because it is convenient to edit, push and track changes, and it's free (a big improvement over [FatCow](http://www.fatcow.com/), which costs me 56 bucks every year).

After laying out the structure of the site and doing some quick CSS styling, I had a pretty decent site in just a couple of hours. I ran into a couple of snags, however. Some googling revealed the answers - jekyll sites seem to be becoming pretty popular.

### CSS Transitions

I get my hands dirty with CSS from time to time, but I am by no means a [CSS guru](http://willpots.com). Most of my time these days is spent programming in Objective-C for iOS. I was pleased to stumble upon the "transition" tag. Replacing jQuery or JavaScript with CSS only makes things faster and more convenient.

This is easy enough to look up, but I will provide an example here. I like hover-over links to be a little more subtle rather than having harsh and rapid color changes. The transition makes :hover much smoother and I think it goes well with the soft feel of a site with lots of textures and shadows. Thus, I decided to make all of the blue links in the body of my site use a css transition on hover to change color. [Cross-browser support](http://caniuse.com/#search=transition) is pretty good, too. Here's how it's done:

{% highlight css %}

a {
	color: #08c;
	transition: color 0.2s;
	-moz-transition: color 0.2s;
	-webkit-transition: color 0.2s;
	-o-transition: color 0.2s;
}

a:hover {
	color: #006396;
}

{% endhighlight %}

Just specify whatever tag you would like to change and the time over which the browser should linearly animate that change. Piece of cake.

### SASS and CSS

Once I got all of my CSS figured out, I remembered how much I like [SASS](http://sass-lang.com/). SASS is compact, easy to read, and easy to keep organized. Turns out it's easy to use with Jekyll, too, especially since Jekyll [plugin support](https://github.com/mojombo/jekyll/wiki/Plugins). Read about converting in general under the heading "[converters](https://github.com/mojombo/jekyll/wiki/Plugins)." Available plugins are listed at the bottom - Instead of writing one from scratch, I used the [SASS scss Converter by Mark Wolfe](https://gist.github.com/960150).

To allow the use of SASS .scss files in place of css, I created a new _plugins directory in the root directory of my Jekyll site. Then I made a new file with filename sass_converter.rb. That's it. Now when I run "$ jekyll --server" in my terminal (generate my site), it automatically generates CSS for me. Nice.

	sass_converter.rb

{% highlight ruby %}
module Jekyll
  require 'sass'
  class SassConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /scss/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      begin
        puts "Performing Sass Conversion."
        engine = Sass::Engine.new(content, :syntax => :scss, :load_paths => ["./css/"])
        engine.render
      rescue StandardError => e
        puts "*** SASS Error: " + e.message
      end
    end

  end
end
{% endhighlight %}

Of course, after doing this, you can still use standard CSS within a .scss file as SASS is a strict superset of CSS. Also, .css files will not be touched by the sass converter.

### SASS Highlighting in SublimeText

I love developing in [Sublime](http://www.sublimetext.com/). They have syntax highlighting support for most common languages, but I needed to install a custom .tmbundle in this case. This is easy enough to do - thanks to [kuroir](https://github.com/kuroir) for his work. Run the following in terminal:

		$ cd ~/Library/Application\ Support/Sublime\ Text\ 2/Packages/
		$ git clone git://github.com/kuroir/SCSS.tmbundle.git "SCSS"

Restart Sublime and you're good to go.

### Github

If you are interested in exploring the source code further, [check it out on github](https://github.com/tnbeatty/tnbeatty.github.com).
