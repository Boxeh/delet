#!/usr/bin/env bash

# Install Node.js and NPM from latest.
# From nodesource (Chris Lea PPA) as Ubuntu packaging is somewhat behind.
# https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 and Gulp globally.
sudo npm install --global gulp-cli pm2

# Source home directory.
home='/home/Discord/delet'

# NPM build stuff.
mkdir $home/node_modules
cd $home/bot
ln -s $home/node_modules/ $home/bot/node_modules
npm install

# Daemonises an instance.
pm2 start $home/bot/bin/app.js
