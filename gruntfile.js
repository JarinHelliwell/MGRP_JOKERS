module.exports = function(grunt) {

     //sass config
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),

               sass: {
                    dist: {
                         options: {
                              style: 'compressed'
                         },
                         files: {
                              'css/style.css': 'sass/style.scss'
                         }
                    }
               },
               //watch config
               watch: {
                    css: {
                         files: '**/*.scss',
                         tasks: ['sass']
                    }
               }

     })

     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.registerTask('default', ['watch', 'sass']);

}