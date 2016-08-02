import { decision } from '../../../app/lib/enums/decision.enum';
import { statusCode } from '../../../app/lib/enums/statusCode.enum';

export class ProcessingController {

  static $inject = [ '$log', '$state', 'config', '$http' ];

  private loading: boolean = true;
  private cd: any;  // -> should get its own  interface


  constructor( private $log: angular.ILogService, private $state: angular.ui.IStateService, private config: any, private $http: angular.IHttpService ) {

    let params: any = $state.params;
    console.log( 'loading processing...', config, decision );




    // start processing application
    //
    let url: string = config.cde.baseUrl + config.cde.endpoints.process;
    url = url.replace( /%ID%/, params.id );

    $http.get( url ).then( ( result: any ): any => {

      this.loading = false;

      if ( result.status === statusCode.ok ) {

        const data: any = result.data;

        data.preQual.declined = data.preQual.decision === decision.approve; // temporary for testing

        this.cd = {
          preQual: data.preQual
        };
        console.log(data);
      }

    } );
  }
}
