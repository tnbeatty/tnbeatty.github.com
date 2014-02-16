Iris VR
===

Check out the [dev site](http://lightwell3d.github.io/Iris) or the [production site](http://irisvr.com).

Contributing
---

__tl;dr__ (in advance) : If you don't want to follow the instructions below, just clone the repo to your machine and run `sh -x install.sh` from the root project directory.

### Installation

Clone this repository to your local machine. Then install node dependencies by running
	
	$ npm install

in the root project directory. Next, install Lightwell dependencies by running:

	$ git submodule init
	$ git submodule update

This will download the appropriate Stabilized files. Change your working directory to the Stabilized dependency subdirectory and check out the Iris branch with the following commands:

	$ cd tools/Stabilized
	$ git checkout Iris

Now you should be good to go! Have fun and happy coding!