.PHONY: lambda
lambda:
	echo "Building lambda dist..."
	cd src && \
	npm install && \
	zip -r -X ../alexa-tea-timer.zip *
	echo "Upload alexa-tea-timer.zip to AWS Lambda"
