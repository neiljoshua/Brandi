module.exports = function(grunt) {
  
// Project configuration.
grunt.initConfig({

	concat: {
		dist:{
			src: ['src/css/style.css', 'src/css/responsive.css', 'src/css/fontello.css',
	      		'src/css/owl.carousel.css', 'src/css/owl.theme.css'],
	      	dest: 'styles.css',	
	    }  	
	},

	uglify: {
	  	my_target: {
    	  files: {
     	 	  'brandi.min.js': ['src/js/brandi.js'],
      		  'vendor.min.js': ['src/js/vendor/*.min.js']
     		}
  		}
	}


});

// Load the plugin that provides the "uglify" task.
// grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', ['concat', 'uglify']);

}
 