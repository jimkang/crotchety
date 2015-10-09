run:
	wzrd index.js -- \
		-d \
		-t babelify

build:
	browserify -t babelify > index.js

pushall:
	git push origin master && git push origin gh-pages
