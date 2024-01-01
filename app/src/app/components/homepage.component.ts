// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { initializeFirebase } from 'app/sd-services/initializeFirebase'; //_splitter_
import { signOut } from 'firebase/auth'; //_splitter_
import { onValue, ref, set } from 'firebase/database'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-homepage',
  templateUrl: './homepage.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homepageComponent {
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
      this.onHomeInit(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  onHomeInit(bh) {
    try {
      bh = this.sd_1BvEOULPDUdkr9bQ(bh);
      //appendnew_next_onHomeInit
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OkDDAoZC96kICWLo');
    }
  }

  sentMessage(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OqU4p5Wk4TqZJQjh(bh);
      //appendnew_next_sentMessage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9MxD1hcp2ss0fvfx');
    }
  }

  scrollToBottom(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ucfQzZKBishc5Zif(bh);
      //appendnew_next_scrollToBottom
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IKnUAZsmuSz6FIwp');
    }
  }

  signOut(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_E4lV15uYE91cgxs4(bh);
      //appendnew_next_signOut
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M3H6SKf0JNH4EvtB');
    }
  }
  //appendnew_flow_homepageComponent_start

  sd_1BvEOULPDUdkr9bQ(bh) {
    try {
      this.page.signOut = signOut;
      bh = this.sd_CrsKJuswP0X5q6ER(bh);
      //appendnew_next_sd_1BvEOULPDUdkr9bQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1BvEOULPDUdkr9bQ');
    }
  }

  sd_CrsKJuswP0X5q6ER(bh) {
    try {
      this.page.ref = ref;
      this.page.onValue = onValue;
      this.page.set = set;
      bh = this.fireBase(bh);
      //appendnew_next_sd_CrsKJuswP0X5q6ER
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CrsKJuswP0X5q6ER');
    }
  }

  async fireBase(bh) {
    try {
      const initializeFirebaseInstance: initializeFirebase =
        this.__page_injector__.get(initializeFirebase);

      let outputVariables =
        await initializeFirebaseInstance.sd_pkDWKoHTEsjQJSYh();

      bh = this.sd_tKUXdeDc6gNq3Yo5(bh);
      //appendnew_next_fireBase
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cMvPHZ1tArBApdqv');
    }
  }

  sd_tKUXdeDc6gNq3Yo5(bh) {
    try {
      const initializeFirebaseInstance: initializeFirebase =
        this.__page_injector__.get(initializeFirebase);
      this.page.database = initializeFirebaseInstance['database'];
      this.page.auth = initializeFirebaseInstance['auth'];
      bh = this.sd_RHb4lidnggpijVGr(bh);
      //appendnew_next_sd_tKUXdeDc6gNq3Yo5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tKUXdeDc6gNq3Yo5');
    }
  }

  sd_RHb4lidnggpijVGr(bh) {
    try {
      const page = this.page;
      bh.local.userAuth = false;
      if (page.auth.currentUser) {
        bh.local.userAuth = true;
      }

      bh = this.sd_mcstBnI35bdSBJfP(bh);
      //appendnew_next_sd_RHb4lidnggpijVGr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RHb4lidnggpijVGr');
    }
  }

  sd_mcstBnI35bdSBJfP(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.userAuth,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_pIZAacNNbBeuSqnZ(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.userAuth,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gLItpJWml1Jg5D8S(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mcstBnI35bdSBJfP');
    }
  }

  sd_pIZAacNNbBeuSqnZ(bh) {
    try {
      const page = this.page;
      const chatsRef = page.ref(page.database, 'chats');
      bh.local.messages = [];

      function handleNewMessages(snapshot) {
        const data = snapshot.val();
        const chats = [];

        for (const id in data) {
          if (!chats.map((chat) => chat.id).includes(id)) {
            const chatMessage = data[id];
            chatMessage.formattedTimestamp = formatDynamicDate(
              chatMessage.timestamp
            );
            chats.push(chatMessage);
          }
        }

        chats.sort((a, b) => {
          const timestampA = new Date(a.timestamp).getTime();
          const timestampB = new Date(b.timestamp).getTime();
          return timestampA - timestampB;
        });

        page.messageData = chats;
      }

      function formatDynamicDate(dateString) {
        const originalDate = new Date(dateString);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
        }).format(originalDate);
        return formattedDate.replace(', ', ' - ');
      }

      page.onValue(chatsRef, (snapshot) => {
        handleNewMessages(snapshot);
      });

      bh = this.sd_IUpMGsk8dIdWM5t8(bh);
      //appendnew_next_sd_pIZAacNNbBeuSqnZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pIZAacNNbBeuSqnZ');
    }
  }

  sd_IUpMGsk8dIdWM5t8(bh) {
    try {
      const page = this.page;
      bh.local.chatList = [
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
        {
          friendName: 'Bill Gates',
          lastMessagePreview: 'Hey ...',
          avatar: 'assets/Web/Icons/b3408e62-9928-4c7f-994a-c44cae8a0cd2.png',
        },
        {
          friendName: 'Mark Zuckerberg ',
          lastMessagePreview: 'Hello...',
          avatar: 'assets/Web/Icons/1863e159ffb945bf8d58ed9ecaab7fbd.jpeg',
        },
      ];

      bh = this.sd_74vZgbKn5IylP0t3(bh);
      //appendnew_next_sd_IUpMGsk8dIdWM5t8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IUpMGsk8dIdWM5t8');
    }
  }

  sd_74vZgbKn5IylP0t3(bh) {
    try {
      this.page.chatList = bh.local.chatList;
      this.page.messageData = bh.local.messages;
      this.page.name = bh.local.name;
      //appendnew_next_sd_74vZgbKn5IylP0t3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_74vZgbKn5IylP0t3');
    }
  }

  async sd_gLItpJWml1Jg5D8S(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_gLItpJWml1Jg5D8S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gLItpJWml1Jg5D8S');
    }
  }

  sd_OqU4p5Wk4TqZJQjh(bh) {
    try {
      const page = this.page;
      if (!page.newMessage.trim()) return;

      const generateUniqueId = () => {
        return (
          Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
        );
      };

      // Create unique id
      const uniqueId = generateUniqueId();

      const chat = {
        message: page.newMessage.trim(),
        timestamp: new Date().toString(),
        id: generateUniqueId(),
        username: '',
      };

      // Save the chat to the 'chats' collection in the database
      page.set(page.ref(page.database, `chats/${chat.id}`), chat);

      page.newMessage = '';

      bh = this.scrolingFunction(bh);
      //appendnew_next_sd_OqU4p5Wk4TqZJQjh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OqU4p5Wk4TqZJQjh');
    }
  }

  scrolingFunction(bh) {
    try {
      let outputVariables = this.scrollToBottom();

      //appendnew_next_scrolingFunction
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0LaLOUVnqj5HpmyO');
    }
  }

  sd_ucfQzZKBishc5Zif(bh) {
    try {
      const page = this.page;
      setTimeout(() => {
        bh.messageContainer = document.getElementById('messageContainer');
        if (bh.messageContainer)
          bh.messageContainer.scrollTop = bh.messageContainer.scrollHeight;
      }, 0);
      //appendnew_next_sd_ucfQzZKBishc5Zif
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ucfQzZKBishc5Zif');
    }
  }

  sd_QwnEFKDcLelEp36h(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.error);
      //appendnew_next_sd_QwnEFKDcLelEp36h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QwnEFKDcLelEp36h');
    }
  }

  sd_E4lV15uYE91cgxs4(bh) {
    try {
      const page = this.page;
      page
        .signOut(page.auth)
        .then(() => {
          console.log('User logged out');
        })
        .catch((error) => {
          console.error('Error logging out:', error.message);
        });
      bh = this.sd_gLItpJWml1Jg5D8S(bh);
      //appendnew_next_sd_E4lV15uYE91cgxs4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E4lV15uYE91cgxs4');
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
      this.errorCatcher(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  errorCatcher(bh) {
    const catchConnectedNodes = ['sd_QwnEFKDcLelEp36h'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_QwnEFKDcLelEp36h(bh);
    //appendnew_next_errorCatcher
    return true;
  }
  //appendnew_flow_homepageComponent_Catch
}
