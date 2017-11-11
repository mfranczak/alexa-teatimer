var Alexa = require('alexa-sdk');

var handlers = {
    'LaunchRequest': function () {
      this.emit('TeaWelcomeIntent');
    },
    'TeaWelcomeIntent': function () {
        this.emit(':tell', 'Perfect! ' + generateDelay(3) + ' Your tea is ready!');
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
  for (var i = 0; i < minutes*6; i++) {
      s += '<break time="10s"/>'
  }
  return s
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
