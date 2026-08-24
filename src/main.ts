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
		
          fcPopup = WA.ui.openPopup("fcPopup", "高溫危險，請勿徒手接觸！/n操作時請戴防護手套與護目鏡。", []);

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
