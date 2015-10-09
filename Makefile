run:
	wzrd index.js -- \
		-d \
		-t babelify

build:
	browserify index.js -t babelify | node_modules/.bin/uglifyjs -c -m -o app.js
	mv app.js index.js

pushall:
	git push origin master && git push origin gh-pages
