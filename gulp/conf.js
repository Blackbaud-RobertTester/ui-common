var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
//TODO: Should not have to hard code the src here.  What we really want is the file to be created in the domain1 directory and then copied.
exports.paths = {
    src: 'src/app/ui-common',
    dist: 'src/app/ui-common/dist',
    tmp: 'src/app/ui-common/.tmp'
};

exports.module = {
    exportFileName: 'common.js',
    mainModuleFileName: 'main.module.js',
    moduleName: 'uiShell.common'
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};