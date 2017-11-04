module.exports = function(config){
   config.set({
      frameworks: ['jasmine'],
      browsers: ['Chrome'],
      files: [
        'components/jquery.min.js',
        'components/jquery-ui/jquery-ui.min.js',
        'components/underscore-min.js',
        'components/angular/angular.min.js',
        'components/firebase/firebase2.2.4.js',
        'components/angular/angularfire1.2.0.min.js',
        'components/angular/angular-route.min.js',
        'components/angular/angular-mocks.js',
        'components/angular/angular-sanitize.min.js',
        'app/*.js',
        'app/scripts/controllers/*.js',
        'app/views/*.html',
        'spec/unit/*.js'
      ]
   });

};
