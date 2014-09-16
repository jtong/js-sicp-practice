function runner(load_files) {

    require.config({
        shim: {
            'boot': {
                deps: ['jasmine']
            },

            'reporter': {
              deps: ['jasmine', 'boot']
            }
        }
    });


    var requireQueue = function(modules, callback) {
        function load(queue, results) {
            if (queue.length) {
                require([queue.shift()], function(result) {
                    results.push(result);
                    load(queue, results);
                });
            } else {
                callback.apply(null, results);
            }
        }

        load(modules, []);
    };

    require(['jasmine', 'boot', 'reporter'], function () {
        requireQueue(load_files, function () {
            jasmine.getEnv().execute();
        });
    });
}

require(['jquery', 'underscore', 'console'], function () {
    $(document).ready(function () {
        if (parent.load_files) {
           return runner(parent.load_files);
        }
//        alert('please execute spec with runner function by load_files params');
    });
});


