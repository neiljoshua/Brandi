module.exports = function(grunt) {

grunt.initConfig({

  compass: {
      dist: {
        options: {
          sassDir: 'src/sass/',
          specify: 'src/sass/styles.scss',
          cssDir: 'src/css/'
        }
      }
    },

  concat: {
    dist:{
      src: ['src/css/vendors/responsive.css', 'src/css/vendors/fontello.css',
            'src/css/vendors/owl.carousel.css', 'src/css/vendors/owl.theme.css'],
      dest: 'vendors.css',
      }
  },

  uglify: {
      my_target: {
        files: {
          'brandi.min.js': ['src/js/brandi.js'],
          'plugins.min.js': ['src/js/plugins/*.min.js']
        }
      }
  },

  watch: {
    css: {
      files: ['src/sass/*.scss'],
      tasks: ['compass']
    },
    js: {
      files: ['src/js/*.js'],
      tasks: ['uglify']
    }
  }

});

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['concat', 'uglify', 'watch']);
grunt.registerTask('dev', ['compass']);
}

