// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  baseUrlML: " https://api.mercadolibre.com/",
  baseUrlE: "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=dylanlow-ECGA2314-PRD-538876c40-e0a31d8c&RESPONSE-DATA-FORMAT=JSON&keywords=",
  firebase : {
    apiKey: "AIzaSyAYJ5QNZHzpilOqnV1fBcpG5egJU5uexRI",
    authDomain: "ecga-d9be8.firebaseapp.com",
    databaseURL: "https://ecga-d9be8.firebaseio.com",
    projectId: "ecga-d9be8",
    storageBucket: "ecga-d9be8.appspot.com",
    messagingSenderId: "846228575282",
    appId: "1:846228575282:web:97e3f876b9657305add82b"
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
