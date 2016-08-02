export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state( 'private', {
      url: ''
    , abstract: true
    , views: {
        'app': {
          template:       require( './app/views/layout/main.pug' )
        }
      , 'header@private': {
          template:       require( './app/views/layout/header.pug' )
        }
      , 'footer@private': {
          template:       require( './app/views/layout/footer.pug' )
        }
      }
    } )
    .state( 'private.processing', {
      url: '/?id'
    , views: {
      'container@private': {
        template:         require( './app/views/processing/processing.pug' )
      , controller:       'ProcessingController'
      , controllerAs:     'vm'
      }

    }
  } )
  ;
}
