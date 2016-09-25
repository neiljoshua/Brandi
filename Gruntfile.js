module.exports = function(grunt) {
  
// Project configuration.
grunt.initConfig({
 // Tasks
	cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      src: ['src/css/*.css'],
	      dest: '',
	      ext: '.min.css'
	    }]
	  }
	},

	uglify: {
	  files: { 
        src: 'src/js/*.js',  // source files mask
        dest: '',    // destination folder
        expand: true,    // allow dynamic building
        flatten: true,   // remove all unnecessary nesting
        ext: '.min.js'   // replace .js to .min.js
	  }
	}

});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

// Default task(s).
grunt.registerTask('default', ['uglify', 'cssmin']);

}
 