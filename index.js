var Twit = require('twit')
  , _    = require('lodash')
;

module.exports = {
    /**
     * The main entry point for the Dexter module
     *
     * @param {AppStep} step Accessor for the configuration for the step using this module.  Use step.input('{key}') to retrieve input data.
     * @param {AppData} dexter Container for all data used in this workflow.
     */
    run: function(step, dexter) {
        var msg   = step.input('message').first()
          , self  = this
          , token = dexter
              .provider('twitter')
              .credentials()
          , T
        ;

        if(!token)                  return this.fail('Credentials are missing');
        if(!msg)                    return this.fail('Message is required');
        if(typeof msg !== 'string') return this.fail('Message must be a string');
        if(msg.length > 140)        return this.fail('Message must be less than 140 characters');

        T = new Twit(token);
        T.post('statuses/update', { status: msg }, function(err, data, response) {
            return err
              ? self.fail(err)
              : self.complete({})
            ;
        });
    }
};

