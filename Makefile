run:
	wzrd index.js -- \
		-d \
		-t babelify

pushall:
	git push origin master && git push origin gh-pages
