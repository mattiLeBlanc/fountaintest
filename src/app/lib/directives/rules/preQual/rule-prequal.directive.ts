class Ctrl {

  constructor() {
    console.log(this);
  }
}

class PreQualRuleDirective implements angular.IDirective {

  public restrict  = 'E';
  public replace   = true;
  public transclude = true;
  public template  = require( './rule-preQual.pug' );

  public controller = Ctrl;
  public controllerAs = 'vm';
  public bindToController = true;

  public link = (
    scope:        angular.IScope,
    element:      angular.IAugmentedJQuery,
    attr:         any,
    modelCtrl:    any,
    transclude:   angular.ITranscludeFunction ) => {

    console.log( modelCtrl );
  }


}

export function preQualRuleFactory() : angular.IDirectiveFactory {

  var directive = () => new PreQualRuleDirective();

  directive.$inject = [];

  return directive;
}
