// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { initializeApp } from 'firebase/app'; //_splitter_
import { getAuth } from 'firebase/auth'; //_splitter_
import { getDatabase, onValue, ref } from 'firebase/database'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class initializeFirebase {
  public auth: any;
  public database: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_initializeFirebase

  async sd_pkDWKoHTEsjQJSYh(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.firebaseApp(bh);
      //appendnew_next_sd_pkDWKoHTEsjQJSYh
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pkDWKoHTEsjQJSYh');
    }
  }
  //appendnew_flow_initializeFirebase_start

  async firebaseApp(bh) {
    try {
      bh.initializeApp = initializeApp;
      bh = await this.firebaseAuth(bh);
      //appendnew_next_firebaseApp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dPEVHktOtMlF3Ljx');
    }
  }

  async firebaseAuth(bh) {
    try {
      bh.getAuth = getAuth;
      bh = await this.firebaseDatabase(bh);
      //appendnew_next_firebaseAuth
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_96OwiYw2qPPZCaQa');
    }
  }

  async firebaseDatabase(bh) {
    try {
      bh.getDatabase = getDatabase;
      bh.ref = ref;
      bh.onValue = onValue;
      bh = await this.sd_SsHFvXLOXaaTS7UL(bh);
      //appendnew_next_firebaseDatabase
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4EdfSjoFZ0IdfRzN');
    }
  }

  async sd_SsHFvXLOXaaTS7UL(bh) {
    try {
      bh.local.apiKey = bh.system.environment.properties.FIREBASE_API_KEY;
      bh.local.authDomain =
        bh.system.environment.properties.FIREBASE_AUTH_DOMAIN;
      bh.local.databaseURL = bh.system.environment.properties.FIREBASE_DB_URL;
      bh.local.projectId = bh.system.environment.properties.FIREBASE_PROJECT_ID;
      bh.local.storageBucket =
        bh.system.environment.properties.FIREBASE_STORAGE_BUCKET;
      bh.local.messagingSenderId =
        bh.system.environment.properties.FIREBASE_MESSAGING_CENTER_ID;
      bh.local.appId = bh.system.environment.properties.FIREBASE_APP_ID;
      bh.local.measurementId =
        bh.system.environment.properties.FIREBASE_MEASUREMENT_ID;
      bh = await this.sd_yy2fAXD3bIMl4v2S(bh);
      //appendnew_next_sd_SsHFvXLOXaaTS7UL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SsHFvXLOXaaTS7UL');
    }
  }

  async sd_yy2fAXD3bIMl4v2S(bh) {
    try {
      bh.local.firebaseConfig = {
        apiKey: bh.local.apiKey,
        authDomain: bh.local.authDomain,
        databaseURL: bh.local.databaseURL,
        projectId: bh.local.projectId,
        storageBucket: bh.local.storageBucket,
        messagingSenderId: bh.local.messagingSenderId,
        appId: bh.local.appId,
        measurementId: bh.local.measurementId,
      };
      bh.app = await bh.initializeApp(bh.local.firebaseConfig);
      console.log(bh.app);
      bh.auth = await bh.getAuth(bh.app);
      bh.database = bh.getDatabase(bh.app);

      bh = await this.sd_KFgG9ytvpwTakRVB(bh);
      //appendnew_next_sd_yy2fAXD3bIMl4v2S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yy2fAXD3bIMl4v2S');
    }
  }

  async sd_KFgG9ytvpwTakRVB(bh) {
    try {
      this.auth = bh.auth;
      this.database = bh.database;
      //appendnew_next_sd_KFgG9ytvpwTakRVB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KFgG9ytvpwTakRVB');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_initializeFirebase_Catch
}
