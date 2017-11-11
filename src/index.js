var Alexa = require('alexa-sdk');
var IMAGE_SOURCE = 'https://s3-eu-west-1.amazonaws.com/mfranczak-alexa-tea-timer';
var INFUSION_TIME_MINUTES = 3;

var handlers = {
    'LaunchRequest': function () {
      this.emit('TeaWelcomeIntent');
    },
    'TeaWelcomeIntent': function () {
        const speechOutput = 'Ok, starting! ' + generateDelay(INFUSION_TIME_MINUTES) + ' Your tea is ready!';
        const cardTitle = 'Enjoy your tea!';
        const cardContent = 'The infusion time was ' + INFUSION_TIME_MINUTES + ' minutes.';
        const imageObj = {
          smallImageUrl: IMAGE_SOURCE + '/tea_small.jpg',
          largeImageUrl: IMAGE_SOURCE + '/tea_large.jpg'
        };

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, imageObj);
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Goodbye!');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('See you later!');
        this.emit(':responseReady');
    }
};

var generateDelay = function(minutes) {
  var s = ""
  var breakBlocksCount = minutes*6;
  for (var i = 0; i < breakBlocksCount; i++) {
      s += '<break time="10s"/>'
  }
  return s
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
