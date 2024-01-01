// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { initializeFirebase } from 'app/sd-services/initializeFirebase'; //_splitter_
import { signInWithEmailAndPassword } from 'firebase/auth'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_TsVWjABlEfGZFVhp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_TsVWjABlEfGZFVhp(bh) {
    try {
      bh = this.sd_eOdSfSzkHVnWyx4t(bh);
      //appendnew_next_sd_TsVWjABlEfGZFVhp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TsVWjABlEfGZFVhp');
    }
  }

  loginFuncton(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_63byplEMPCpiGXvy(bh);
      //appendnew_next_loginFuncton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XY6sBiI2wXSfNBLs');
    }
  }
  //appendnew_flow_loginComponent_start

  sd_eOdSfSzkHVnWyx4t(bh) {
    try {
      this.page.signInWithEmailAndPassword = signInWithEmailAndPassword;
      bh = this.firebase(bh);
      //appendnew_next_sd_eOdSfSzkHVnWyx4t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eOdSfSzkHVnWyx4t');
    }
  }

  async firebase(bh) {
    try {
      const initializeFirebaseInstance: initializeFirebase =
        this.__page_injector__.get(initializeFirebase);

      let outputVariables =
        await initializeFirebaseInstance.sd_pkDWKoHTEsjQJSYh();

      bh = this.sd_eGs2Gp8XCXds872K(bh);
      //appendnew_next_firebase
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CsBGGN1WtDONWAzY');
    }
  }

  sd_eGs2Gp8XCXds872K(bh) {
    try {
      const initializeFirebaseInstance: initializeFirebase =
        this.__page_injector__.get(initializeFirebase);
      this.page.database = initializeFirebaseInstance['database'];
      this.page.auth = initializeFirebaseInstance['auth'];
      bh = this.sd_Yg21DWD3lyx5vLPE(bh);
      //appendnew_next_sd_eGs2Gp8XCXds872K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eGs2Gp8XCXds872K');
    }
  }

  sd_Yg21DWD3lyx5vLPE(bh) {
    try {
      const page = this.page;
      bh.local.userAuth = false;
      if (page.auth.currentUser) {
        bh.local.userAuth = true;
      }

      bh = this.sd_RejOr3lHUM2ydkoJ(bh);
      //appendnew_next_sd_Yg21DWD3lyx5vLPE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yg21DWD3lyx5vLPE');
    }
  }

  sd_RejOr3lHUM2ydkoJ(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.userAuth,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_j2uLodGtCgXMN4A3(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RejOr3lHUM2ydkoJ');
    }
  }

  async sd_j2uLodGtCgXMN4A3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_j2uLodGtCgXMN4A3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j2uLodGtCgXMN4A3');
    }
  }

  async sd_63byplEMPCpiGXvy(bh) {
    try {
      const page = this.page;
      if (!page.email || !page.password) return;
      let loginsuccess = false;
      let message = '';

      try {
        await page.signInWithEmailAndPassword(
          page.auth,
          page.email,
          page.password
        );
        loginsuccess = true;
        message = 'login success';
      } catch (error) {
        message = error.message;
      }
      bh.loginsuccess = loginsuccess;
      bh.message = message;
      bh = this.sd_WtLovorVK8C9CRVG(bh);
      //appendnew_next_sd_63byplEMPCpiGXvy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_63byplEMPCpiGXvy');
    }
  }

  sd_WtLovorVK8C9CRVG(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.message, '', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      bh = this.sd_IzjhQybyqt5VVRu8(bh);
      //appendnew_next_sd_WtLovorVK8C9CRVG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WtLovorVK8C9CRVG');
    }
  }

  sd_IzjhQybyqt5VVRu8(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.loginsuccess,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_j2uLodGtCgXMN4A3(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IzjhQybyqt5VVRu8');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_loginComponent_Catch
}
