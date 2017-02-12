module.exports = function(config){
   config.set({
      frameworks: ['jasmine'],
      browsers: ['Chrome'],
      files: [
        'components/',
        'components/jquery.min.js',
        'components/angular/angular.min.js',
        'components/firebase/firebase2.2.4.js',
        'components/angular/angularfire1.2.0.min.js',
        'components/angular/angular-route.min.js',
        'components/angular/angular-mocks.js',
        'components/forms/dynamic-forms.js',
        'app/*.js',
        'app/scripts/controllers/*.js',
        'spec/unit/*.js'
      ]
   });

};
