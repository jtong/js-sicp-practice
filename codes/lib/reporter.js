function getJasmineRequireObj() {
    if (typeof module !== 'undefined' && module.exports) {
        return exports;
    } else {
        window.jasmineRequire = window.jasmineRequire || {};
        return window.jasmineRequire;
    }
}

getJasmineRequireObj().CustomReporter = function () {

    var noopTimer = {
        start: function () {
        },
        elapsed: function () {
            return 0;
        }
    };

    function CustomReporter(options) {
        var onSpecDone = options.onSpecDone || function () {},
            onComplete = options.onComplete || function () {},
            timer = options.timer || noopTimer,
            currentSuite,
            specCount,
            failureCount,
            failedSpecs = [],
            pendingCount;

        this.jasmineStarted = function () {
            specCount = 0;
            failureCount = 0;
            pendingCount = 0;
            timer.start();
        };

        this.suiteStarted = function (suite) {
            currentSuite = suite;
        };

        this.specStarted = function () {
            specCount++;
        };

        this.specDone = function (spec) {
            var specResult = {};
            specResult.isPassed = isPassed(spec);
            specResult.num = specCount;
            specResult.it = spec.description;
            specResult.describe = currentSuite.description;
            if (isFailed(spec)) {
                failureCount++;
                failedSpecs.push(specResult);
            }
            onSpecDone(specResult);
        };

        this.suiteDone = function () {

        };

        this.jasmineDone = function () {
            var result = {isPassed: failureCount === 0, failedSpecs: failedSpecs};
            onComplete(result);
        };

        function isPassed(spec) {
            return spec.status === 'passed';
        }

        function isPending(spec) {
            return spec.status === 'pending';
        }

        function isFailed(spec) {
            return spec.status === 'failed';
        }

        return this;
    }

    return CustomReporter;
};

(function () {
    var CustomReporter = jasmineRequire.CustomReporter();
    var options = {
        timer: new jasmine.Timer,

        onSpecDone: function (specResult) {
            if (!parent.report_me_spec_result) {
                console.log(specResult, 'on spec done');
            }
        },
        onComplete: function (result) {
            if (!parent.report_me_spec_result) {
                return console.log(result, 'on complete');
            }
            parent.report_me_spec_result(result.isPassed, result.failedSpecs);
        }
    };
    var customReporter = new CustomReporter(options);
    jasmine.getEnv().addReporter(customReporter);
})();
