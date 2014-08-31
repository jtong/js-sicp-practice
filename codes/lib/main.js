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

    require(['jasmine', 'boot', 'reporter'], function () {
        require(load_files, function () {
            jasmine.getEnv().execute();
        });
    });
}

require(['jquery', 'underscore'], function () {
    $(document).ready(function () {
        console.log('document on ready');
        if (parent.load_files) {
           return runner(parent.load_files);
        }
//        alert('please execute spec with runner function by load_files params');
    });
});


