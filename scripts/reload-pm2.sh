#!/bin/bash
sudo chmod 777 -R /var/www/html/
cd /var/www/html

npm install
node server.js > server.out.log 2> server.err.log < /dev/null & 
