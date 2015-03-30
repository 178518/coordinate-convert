module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        uglify : {
            options : {
                preserveComments : 'some'
            },
            default : {
                src : '<%= pkg.main %>',
                dest : '<%= pkg.name%>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};