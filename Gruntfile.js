module.exports = function (grunt) {

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            // Tasks
            sass: {
                dist: {
                    files: {
                        'app/public/assets/css/style.css' : 'app/public/assets/css/sass/style.scss'
                    }
                }
            }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-sass');

    // Register tasks
    grunt.registerTask('default', ['sass']);
}