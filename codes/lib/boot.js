(function() {

    window.jasmine = jasmineRequire.core(jasmineRequire);

    var env = jasmine.getEnv();

    var jasmineInterface = {
        describe: function(description, specDefinitions) {
            return env.describe(description, specDefinitions);
        },

        xdescribe: function(description, specDefinitions) {
            return env.xdescribe(description, specDefinitions);
        },

        it: function(desc, func) {
            return env.it(desc, func);
        },

        xit: function(desc, func) {
            return env.xit(desc, func);
        },

        beforeEach: function(beforeEachFunction) {
            return env.beforeEach(beforeEachFunction);
        },

        afterEach: function(afterEachFunction) {
            return env.afterEach(afterEachFunction);
        },

        expect: function(actual) {
            return env.expect(actual);
        },

        pending: function() {
            return env.pending();
        },

        spyOn: function(obj, methodName) {
            return env.spyOn(obj, methodName);
        },

        jsApiReporter: new jasmine.JsApiReporter({
            timer: new jasmine.Timer()
        })
    };

    if (typeof window == "undefined" && typeof exports == "object") {
        extend(exports, jasmineInterface);
    } else {
        extend(window, jasmineInterface);
    }

    jasmine.addCustomEqualityTester = function(tester) {
        env.addCustomEqualityTester(tester);
    };

    jasmine.addMatchers = function(matchers) {
        return env.addMatchers(matchers);
    };

    jasmine.clock = function() {
        return env.clock;
    };

    env.addReporter(jasmineInterface.jsApiReporter);


    function extend(destination, source) {
        for (var property in source) destination[property] = source[property];
        return destination;
    }

}());
