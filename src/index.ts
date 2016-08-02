/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/custom.d.ts" />

import * as angular from 'angular';

import 'angular-ui-router';
import routesConfig                 from './routes';
import { ProcessingController }     from './app/views/processing/processing.controller';
import { preQualRuleFactory }       from './app/lib/directives/rules/preQual/rule-prequal.directive';
// import {main} from './app/main';

import './app/styles/index.styl';

angular
  .module( 'app', [ 'ui.router' ] )
  // .component('app', main)
  .config( routesConfig )
  // needs to to be replaced by injecting a constant module that reads from JSON
  //
  .constant( 'config', {
    cde: {
      baseUrl: 'http://test/api/'
    , endpoints: {
        process: 'engine/%ID%'
      }
    }
  } )
  .controller( 'ProcessingController', ProcessingController )
  .directive( 'preQualRule', preQualRuleFactory() )
;


function onReady(): void {

  angular.bootstrap( document, [ 'app' ], {
    strictDi: true
  });
}
angular.element( document ).ready( onReady );
