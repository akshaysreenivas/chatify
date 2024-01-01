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
import { createUserWithEmailAndPassword } from 'firebase/auth'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-signup',
  templateUrl: './signup.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class signupComponent {
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
      this.sd_ulDIxgbvuyIp62ko(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ulDIxgbvuyIp62ko(bh) {
    try {
      bh = this.sd_QKIz9QczDVO4ZNwv(bh);
      //appendnew_next_sd_ulDIxgbvuyIp62ko
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ulDIxgbvuyIp62ko');
    }
  }

  signUpFunction(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Us54zlj9TRilnWss(bh);
      //appendnew_next_signUpFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UPoK0qEgZ2APOEtY');
    }
  }
  //appendnew_flow_signupComponent_start

  sd_QKIz9QczDVO4ZNwv(bh) {
    try {
      this.page.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
      bh = this.firebase(bh);
      //appendnew_next_sd_QKIz9QczDVO4ZNwv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QKIz9QczDVO4ZNwv');
    }
  }

  async firebase(bh) {
    try {
      const initializeFirebaseInstance: initializeFirebase =
        this.__page_injector__.get(initializeFirebase);

      let outputVariables =
        await initializeFirebaseInstance.sd_pkDWKoHTEsjQJSYh();

      bh = this.sd_DZazTiM1wF9fawXi(bh);
      //appendnew_next_firebase
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_njTjtTp7QN3WpB39');
    }
  }

  sd_DZazTiM1wF9fawXi(bh) {
    try {
      const initializeFirebaseInstance: initializeFirebase =
        this.__page_injector__.get(initializeFirebase);
      this.page.auth = initializeFirebaseInstance['auth'];
      bh = this.sd_tHHNIk3uiQ2mnSjG(bh);
      //appendnew_next_sd_DZazTiM1wF9fawXi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DZazTiM1wF9fawXi');
    }
  }

  sd_tHHNIk3uiQ2mnSjG(bh) {
    try {
      const page = this.page;
      bh.local.userAuth = false;
      if (page.auth.currentUser) {
        bh.local.userAuth = true;
      }

      bh = this.sd_Qebh2VSHLQcIEC3I(bh);
      //appendnew_next_sd_tHHNIk3uiQ2mnSjG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tHHNIk3uiQ2mnSjG');
    }
  }

  sd_Qebh2VSHLQcIEC3I(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.userAuth,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zmM1jInP0Ej5EupG(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.userAuth,
          undefined,
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qebh2VSHLQcIEC3I');
    }
  }

  async sd_zmM1jInP0Ej5EupG(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_l8wEdk8tbcf9qxPM(bh);
      //appendnew_next_sd_zmM1jInP0Ej5EupG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zmM1jInP0Ej5EupG');
    }
  }

  sd_l8wEdk8tbcf9qxPM(bh) {
    try {
      //appendnew_next_sd_l8wEdk8tbcf9qxPM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l8wEdk8tbcf9qxPM');
    }
  }

  async sd_Us54zlj9TRilnWss(bh) {
    try {
      const page = this.page;
      if (!page.email || !page.password) return;
      let signupSuccess = false;
      let message = 'signup error';
      try {
        await page.createUserWithEmailAndPassword(
          page.auth,
          page.email,
          page.password
        );
        signupSuccess = true;
        message = 'login success';
      } catch (error) {
        message = error.message;
      }
      bh.local.signupSuccess = signupSuccess;
      bh.message = message;

      bh = this.sd_tlD9R6WIauTC2aKP(bh);
      //appendnew_next_sd_Us54zlj9TRilnWss
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Us54zlj9TRilnWss');
    }
  }

  sd_tlD9R6WIauTC2aKP(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.message, '', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_Bxs4GCKWvxKAOtCk(bh);
      //appendnew_next_sd_tlD9R6WIauTC2aKP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tlD9R6WIauTC2aKP');
    }
  }

  sd_Bxs4GCKWvxKAOtCk(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.signupSuccess,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zmM1jInP0Ej5EupG(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bxs4GCKWvxKAOtCk');
    }
  }

  sd_ARSKkjQqFbZtnBGU(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.error);
      //appendnew_next_sd_ARSKkjQqFbZtnBGU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ARSKkjQqFbZtnBGU');
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
    if (
      false ||
      this.sd_R4FxrmJ6dykwur4f(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_R4FxrmJ6dykwur4f(bh) {
    const catchConnectedNodes = ['sd_ARSKkjQqFbZtnBGU'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_ARSKkjQqFbZtnBGU(bh);
    //appendnew_next_sd_R4FxrmJ6dykwur4f
    return true;
  }
  //appendnew_flow_signupComponent_Catch
}
