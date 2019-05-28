cd /path/to/todo

npm install

./node_modules/.bin/browserify -t babelify js/index.js -o build/main.js

json-server --watch db.json