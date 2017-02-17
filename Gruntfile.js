module.exports = function (grunt){


  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma-unit.conf.js'
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false
      },
      static_mappings: {
        files: [
          {src: 'app/app.js', dest: 'build/app/app.js'},
          {src: 'app/app.js', dest: 'build/app/genericTemplate.js'},
          {src: 'app/scripts/controllers/homeController.js', dest: 'build/app/scripts/controllers/homeController.js'},
          {src: 'app/scripts/controllers/listController.js', dest: 'build/app/scripts/controllers/listController.js'},
          {src: 'app/scripts/controllers/navController.js', dest: 'build/app/scripts/controllers/navController.js'}
        ],
    }},
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    copy:{
      main: {
        files: [
          // includes index file into destination
          {expand: true, src: ['index.html'], dest: 'build/'},
          // includes view directory html files into destination
          {expand: true, src: ['app/views/*.html'], dest: 'build/'},
          {expand: true, src: ['app/**/*.*'], dest: 'build/'},
          // includes third party components and files into destination
          {expand: true, src: ['components/**/*.*'], dest: 'build/'}

          // makes all src relative to cwd
          //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      }
    },
    my_src_files: ['app/*.js']
  });


  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('validate', ['jshint']);
  grunt.registerTask('prepare', ['uglify','copy']);
  grunt.registerTask('build', [,'copy']);
  grunt.registerTask('default', ['jshint','uglify']);

  grunt.registerTask('default-1', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

};
