/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.info('Script started successfully');

let currentPopup: any = undefined;
let fcPopup: any = undefined;


// Waiting for the API to be ready
WA.onInit().then(() => {
    console.info('Scripting API ready');
    console.info('Player tags: ',WA.player.tags)


	  WA.room.area.onEnter('fc01').subscribe(() => {
		
          fcPopup = WA.ui.openPopup(
              "fcPopup",
              "\u9ad8\u6eab\u5371\u96aa\uff0c\u8acb\u52ff\u5f92\u624b\u63a5\u89f8\uff01\n\u64cd\u4f5c\u6642\u8acb\u6234\u9632\u8b77\u624b\u5957\u8207\u8b77\u76ee\u93e1\u3002",
              [{ label: "OK", callback: () => { } }]
          );


	  });

    WA.room.area.onLeave('fc01').subscribe(closePopup02)

    WA.room.area.onEnter('demo01').subscribe(() => {
        currentPopup = WA.ui.openPopup("demoPopup", "It's a demoBoard ", []);
    })

    WA.room.area.onLeave('demo01').subscribe(closePopup)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.info('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

function closePopup02() {
    if (fcPopup !== undefined) {
        fcPopup.close();
        fcPopup = undefined;
    }
}

export {};
