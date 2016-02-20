module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
	      development: {
	        files: {
	          "css/style2.css": "css/style.less",
              "css/mobile2.css": "css/mobile.less"
	        }
	      }
	    },
	    autoprefixer:{
            options: {
                browsers: ['> 1%', 'last 2 versions', 'ie 9'],
                cascade: false
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'css/'
            }
        },
	    uglify: {
	      dist: {
	        files: {
	          'prod/js/frontend.min.js': ['js/jquery-2.1.4.min.js', 'js/jquery.cookie.js', 'js/script.js', 'js/slick.min.js', 'js/classie.js', 'js/modalEffects.js', 'js/jquery.maskedinput.min.js']
	        }
	      }
	    },
	    cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'prod/css/frontend.min.css': ['css/style.css', 'css/slick.css']
		    }
		  }
		},
		watch: {
	      styles: {
	        files: ['css/*.less'], // which files to watch
	        tasks: ['less', 'autoprefixer'],
	        options: {
	          nospawn: true
	        }
	      }
	    },
	    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '*.*',
                        'css/*.css',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
	});
    grunt.registerTask('prod', ['uglify', 'cssmin']);

	grunt.registerTask('default', ['browserSync', 'watch']);

};