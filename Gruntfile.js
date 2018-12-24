module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        app: 'app',
        dist: 'src',

        browserSync: {
            app: {
                bsFiles: {
                    src: [
                        '<%= app %>/css/*.css',
                        '<%= app %>/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './<%= app %>',
                    port: 3000,
                    ui: {
                        port: 3001
                    }
                }
            },
            dist: {
                bsFiles: {
                    src: [
                        '<%= dist %>/css/*.css',
                        '<%= dist %>/*.html'
                    ]
                },
                options: {
                    server: './<%= dist %>',
                    port: 3002,
                    ui: {
                        port: 3003
                    }
                }
            }
        },
    })


    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('server', ['browserSync:dist']);
}

