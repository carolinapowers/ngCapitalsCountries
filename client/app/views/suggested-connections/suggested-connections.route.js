'use strict';

(function() {

  angular
    .module('')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.suggestedConnections', {
          url         : '/suggested-connections',
          templateUrl : 'app/views/suggested-connections/suggested-connections.view.html',
          controller  : 'SuggestedConnections',
          controllerAs: 'SuggestedConnections',
          title       : 'Suggested connections'
        });
    });

})();
