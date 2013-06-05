# Makefile
#
# Written by Nate Beatty
# June 2013
#
# Recompiles the CSS, minifies code, and regenerates the
# site using Jekyll to get ready for upload

RM = rm
VENDOR = assets/js/vendor/

all: clean isotope

isotope: $(VENDOR)jquery.isotope.min.js

$(VENDOR)jquery.isotope.min.js: $(VENDOR)jquery.isotope.js
	./minify.sh

clean: 
	- $(RM) $(VENDOR)jquery.isotope.min.js