import { IEnvironment } from 'src/app/models/ienvironment';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: IEnvironment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDLlvCHtid4BfZz-x5GUfEapmbT7P1hNRU",
    authDomain: "culture-bc8c4.firebaseapp.com",
    databaseURL: "https://culture-bc8c4.firebaseio.com",
    projectId: "culture-bc8c4",
    storageBucket: "culture-bc8c4.appspot.com",
    messagingSenderId: "923143386821",
    appId: "1:923143386821:web:8bb0401f62d1d114c5a2ac",
    measurementId: "G-WJPZFGWGDE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
