module.exports = function(config){
   config.set({
      frameworks: ['jasmine'],
      browsers: ['Chrome'],
      files: [
        'components/angular/angular.min.js',
        'components/angular/angular-route.min.js',
        'components/angular/angular-mocks.js',
        'components/forms/dynamic-forms.js',
        'app/*.js',
        'app/scripts/controllers/*.js',
        'spec/unit/*.js'
      ]
   });

};
