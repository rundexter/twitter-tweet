var _ = require('lodash')
    , env = require('./env')
    ;

module.exports = _.merge({
    simulation: true
    , instance_id: 'local_test_instance'
    , urls: {
        home: "http://rundexter.com/"
    }
    , instance_state: {
        active_step :  "local_test_step"
    }
    , workflow: {
        "id" : "local_test_workflow"
        , "title": "Local test workflow"
        , "description": "A fixture workflow used to test a module"
    }
    , steps: {
        local_test_step: {
            id: 'local_test_step'
            , type: 'module'
            //The test runner will change YOUR_MODULE_NAME to the correct module name
            , name: 'YOUR_MODULE_NAME'
            , next: []
        }
    }
    , modules: {
        //The test runner will add the proper data here
    }
    , environment: {
        //See env.js
    }
    , user: {
    }
    , data: {
        local_test_step: {
            input: {
                message: 'Radio silence is almost over - I can\'t wait to show what I\'ve been working on!'
            }
        }
    }
}, env);
