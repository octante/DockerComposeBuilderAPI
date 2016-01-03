module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: {
            scripts: {
                options: {
                    srcPrefix: 'bower_components',
                    destPrefix: 'web/assets'
                },
                files: {
                    'js/jquery.js': 'jquery/dist/jquery.js',
                    'js/bootstrap.js': 'bootstrap/dist/js/bootstrap.js'
                }
            },
            stylesheets: {
                options: {
                    srcPrefix: 'bower_components',
                    destPrefix: 'web/assets'
                },
                files: {
                    'css/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'css/font-awesome.min.css': 'font-awesome/css/font-awesome.min.css'
                }
            },
            fonts: {
                options: {
                    srcPrefix: 'bower_components',
                    destPrefix: 'web/assets'
                },
                files: {
                    'fonts': 'font-awesome/fonts'
                }
            },
            landingpage_fonts: {
                options: {
                    srcPrefix: 'src/AppBundle/Resources/public',
                    destPrefix: 'web/assets'
                },
                files: {
                    'fonts': 'fonts'
                }
            },
            landingpage_img: {
                options: {
                    srcPrefix: 'src/AppBundle/Resources/public',
                    destPrefix: 'web/assets'
                },
                files: {
                    'img': 'img'
                }
            }
        },
        cssmin : {
            "landingpage_stylesheets":{
                src: 'src/appBundle/Resources/public/css/landing-page.css',
                dest: 'web/assets/css/landing-page.min.css'
            }
        }/*,
        uglify : {
            js: {
                files: {
                    'web/assets/js/jquery.min.js': ['web/assets/js/jquery.js'],
                    'web/assets/js/bootstrap.min.js': ['web/assets/js/bootstrap.js']
                }
            }
        }*/
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['bowercopy', 'cssmin'/*, 'uglify'*/]);
};