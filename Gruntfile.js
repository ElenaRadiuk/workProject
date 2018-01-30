module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        outputStyle: 'compressed',
        sourceMap: true
      },
      all: {
        files: {
          'css/application.css': 'scss/application.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'ie >8']
          })
        ]
      },
      all: {
        src: 'css/*.css'
      }
    },

    uglify: {
      options: {
        sourceMap: true
      },
      vendor: {
        files: {
          'js/vendor.min.js': [
            'js/vendor/jquery-3.1.0.min.js',
            'js/vendor/matchMedia.js',
            'js/vendor/slick.js',
            'js/vendor/jquery.matchHeight.js',
            'js/vendor/magnificPopup.js'
            // 'js/vendor/jquery.mCustomScrollbar.js'
          ]
        }
      },
      custom: {
        files: {
          'js/app.min.js': [
            'js/custom/app.js'
          ]
        }
      }
    },

    watch: {
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'postcss']
      },
      jsVendor: {
        files: 'js/vendor/**/*.js',
        tasks: ['uglify:vendor']
      },
      jsCustom: {
        files: 'js/custom/**/*.js',
        tasks: ['uglify:custom']
      }
    }


      // concat: {
      //     options: {
      //         stripBanners: true,
      //         sourceMap: true,
      //         separator: '\n\r',
      //         banner: '/*\nConcatinated JS file \n' +
      //         'Author: Alexey \n' +
      //         'Created Date: <%= grunt.template.today("yyyy-mm-dd") %>' +
      //         '\n */ \n'
      //     },
      //     dist: {
      //         src: ['dev/js/*.js'],
      //         dest: 'prod/js/scripts.js',
      //     },
      // },

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt.registerTask('default', ['sass', 'postcss', 'uglify', 'concat']);
  grunt.registerTask('default', ['sass', 'postcss', 'uglify']);

};
