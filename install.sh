#!/bin/bash

# install.sh
#
# A script to automate the install and build process
# (for designers...)
# With love, from Nate.
#

# Install node dependencies
npm install
# Install Lightwell dependencies
git submodule init
git submodule update
git submodule foreach -q --recursive 'branch="$(git config -f $toplevel/.gitmodules submodule.$name.branch)"; git checkout $branch'
# Make sure the Stabilized submodule is up to date
( cd tools/Stabilized && git pull )
# Run grunt to do a fresh build
grunt

printf "\n\nInstallation has completed.\nHappy coding! <3 Iris\n\n"