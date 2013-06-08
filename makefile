# Makefile
#
# Written by Nate Beatty
# June 2013
#
# Recompiles the CSS, minifies code, and regenerates the
# site using Jekyll to get ready for upload

RM = rm
RMF = -rf
VENDOR = assets/js/vendor/

all: clean isotope compass site

isotope: $(VENDOR)jquery.isotope.min.js

$(VENDOR)jquery.isotope.min.js: $(VENDOR)jquery.isotope.js
	./minify.sh

site: _site

_site:
	jekyll build

compass: stylesheets

stylesheets: sass
	compass compile

clean: 
	- $(RM) $(VENDOR)jquery.isotope.min.js
	- $(RM) $(RMF) _site
	- $(RM) $(RMF) stylesheets