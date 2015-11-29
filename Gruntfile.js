/*!
 * sass-grids Copyright (C) by Nils Sommer, 2015
 *
 * Basic grunt config to compile scss files to css files.
 */

module.exports = function (grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/buttons.css': 'src/buttons.scss'
        }
      }
    },

    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      files: '**/*.scss',
      tasks: ['dist']
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dist', ['sass', 'cssmin']);
}
