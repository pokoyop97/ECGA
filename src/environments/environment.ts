// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  baseUrlML: " https://api.mercadolibre.com/",
  baseUrlE: "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=dylanlow-ECGA2314-PRD-538876c40-e0a31d8c&RESPONSE-DATA-FORMAT=JSON&keywords=",
  firebase : {
    apiKey: "AIzaSyCQMPU_N0NBJZnl3xAe41tyE1ERn1n8uuU",
    authDomain: "ecga-ef38d.firebaseapp.com",
    databaseURL: "https://ecga-ef38d.firebaseio.com",
    projectId: "ecga-ef38d",
    storageBucket: "ecga-ef38d.appspot.com",
    messagingSenderId: "618143427372",
    appId: "1:618143427372:web:9af39c36b90784ac899a89" 
}
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
