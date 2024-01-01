// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_JS5Dsros0oI2Z1OR from 'app/sd-services/initializeFirebase'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(
    private sd_JS5Dsros0oI2Z1OR: sd_JS5Dsros0oI2Z1OR.initializeFirebase
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
