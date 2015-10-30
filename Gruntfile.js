'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = {
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'js/components/*.js'
        ],
        dest: 'js/script.js',
      }
    },

    sass: {
      style: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    csscomb: {
      style: {
        options: {
          config: 'csscomb.json'
        },
        expand: true,
        src: ["sass/**/*.scss"]
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      style: {
        src: 'css/*.css'
      }
    },

    watch: {
      style: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      scripts: {
        files: ['js/components/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false,
        },
      }
    }
  };

  config = require('./.gosha')(grunt, config);

  grunt.initConfig(config);
};
