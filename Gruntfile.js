// Load Grunt
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                'css/style.css': 'scss/style.scss',
            }
        }
    },
    codekit: {
        dist: {
            src: ['**/*.kit', '!kit/partial/*.kit'],
            dest: ''
        }
    },
    uglify: {
        files: {
            'js/script.js':'src/script.js',
        }
    },
    connect : {
      server: {
        options: {
          hostname: 'localhost',
          port: 80,
          base: 'builds/development',
          livereload: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/output.min.js': ['src/script.js']
        }
      }
    },
    watch: {
        scss: {
            files: ['scss/*.scss'],
            tasks: ['sass'],
            options: {
                livereload: true,
            }
        },
        codekit: {
            files: ['**/*.kit'],
            tasks: ['codekit'],
            options: {
                livereload: true,
            }
        },
        uglify: {
            files: ['src/script.js'],
            options: {
              livereload: true,
            }
        },
        html: {
            files: ['index.html','**/*.html'],
            options: {
                livereload: true,
            }
        },
    }
});
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Register Grunt tasks
  grunt.registerTask('default',['watch','sass','postcss','connect','cssmin','uglify']);
}
