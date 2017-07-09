#!/usr/bin/env bash

# Install Node.js and NPM from latest.
# From nodesource (Chris Lea PPA) as Ubuntu packaging is somewhat behind.
sudo apt-get install python-software-properties
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# Install Nodemon globally and locally.
sudo npm install --global nodemon
sudo npm install --save nodemon

# Source home directory.
home='/home/Discord/delet'

# NPM build stuff.
mkdir $home/node_modules
cd $home/bot
ln -s $home/node_modules/ $home/bot/node_modules
npm install

# Daemonises an instance.
nodemon $home/bot/bin/app.js
