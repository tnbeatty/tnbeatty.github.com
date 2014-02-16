'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: grunt.file.readJSON('config.json'),
		watch: {
			compass: {
				files: ['<%= config.dev.dir %>/sass/**/*.scss'],
				tasks: ['compass:custom', 'concat:css']
			},
			assemble: {
				files: ['<%= config.dev.dir %>/**/*.hbs'],
				tasks: ['assemble']
			},
			copy: {
				files: ['<%= config.dev.dir %>/img/**/*.*'],
				tasks: ['copy:img']
			}
		},
		compass: {
			custom: {
				options: {
					sassDir: '<%= config.dev.dir %>/sass',
					cssDir: '<%= config.tmp.dir %>/css',
					environment: 'production'
				}
			}
		},
		concat: {
			options: {
				banner: '/*!\n* <%= pkg.name %> | Updated <%= grunt.template.today("dd-mm-yy") %> \n* Site by Lightwell | http://lightwell3d.com \n*/\n\n'
			},
			css: {
				src: ['<%= config.tmp.dir %>/css/pure-min.css', '<%= config.tmp.dir %>/css/custom.css'], // THIS SHOULD BE REGEXED
				dest: '<%= config.dist.dir %>/css/styles.css',
			}
		},
		assemble: {
			options: {
				layout: '<%= config.dev.dir %>/layouts/default.hbs',
				flatten: true
			},
			pages: {
				files: {
					'<%= config.dist.dir %>/': ['<%= config.dev.dir %>/pages/*.hbs']
				}
			}
		},
		clean: {
			dist: [
				'site/**/*.html',
				'site/css/',
				'site/img/',
				'site/js',
				'!.gitignore',
				'!.git'
			],
			tmp: ['tmp/'],
			css: ['tmp/css/','site/css/']
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					flatten: false,
					cwd: '<%= config.dev.dir %>',
					src: ['js/**/*.js', 'img/**/*.*'],
					dest: '<%= config.dist.dir %>'
				}]
			},
			img: {
				files: [{
					expand: true,
					flatten: false,
					cwd: '<%= config.dev.dir %>',
					src: ['img/**/*.*'],
					dest: '<%= config.dist.dir %>'
				}]
			},
			pure: {
				src: '<%= config.dev.dir %>/lib/pure-min.css',
				dest: '<%= config.tmp.dir %>/css/pure-min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('assemble');

	grunt.registerTask('build', [
		'clean:dist',
		'assemble',
		'style',
		'copy:dist'
	]);

	grunt.registerTask('style', [
		'clean:css',
		'copy:pure',
		'compass:custom',
		'concat:css'
	]);

	grunt.registerTask('default', ['build']);
}