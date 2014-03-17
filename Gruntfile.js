module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
			    files: {
					"css/main.css": "less/main.less"
				}
			}
		},

		nodewebkit: {
	    	options: {
	        	build_dir: process.env.HOME + '/builds/mega', // Where the build version of my node-webkit app is saved
	        	credits: './resources/credits.html',
	        	//
	        	mac_icns: './resources/icon.icns', // Path to the Mac icon file
	        	mac: true, // We want to build it for mac
	        	win: false, // We want to build it for win
	        	linux32: false, // We don't need linux32
	        	linux64: false, // We don't need linux64
	      	},
	      	src: './**'
	    }
	});



	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('run', 'run_nodewebkit', function() {
			
		require('child_process').exec('open -a node-webkit .', function (err, stdin, stdout){

			if(err){
				grunt.log.write(err).ok();
			} else{
				grunt.log.write('Launched Node Webkit').ok();
			}

		});

	});

	grunt.registerTask('compile', ['less']);

	grunt.registerTask('build', ['less', 'nodewebkit']);




};