import { Component, OnInit, ViewChild } from '@angular/core';
import {Store} from '@ngrx/store';
import {userlist,chatData,showChat} from '../../../app/routes/restaurant/chat/chat';
const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare var $: any;

import { UserblockService } from '../sidebar/userblock/userblock.service';
import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
import { Router} from '@angular/router';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {HeadersService} from './headers.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers:[HeadersService]
})
export class HeaderComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout
    notificationData = [];
    isNavSearchVisible: boolean;
    public messageId:any;
    public chatUserId:any;
    public message:string;
    public sender:string;
    public countMessage:number;
    public userName:'';
    @ViewChild('fsbutton') fsbutton;  // the fullscreen button

    constructor(private router:Router,
                public menu: MenuService,
                public userblockService: UserblockService,
                public settings: SettingsService,
                public af:AngularFireDatabase,
                public headersService:HeadersService,
                public storeData:Store<showChat>,
                public db:AngularFireDatabase,) {

        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout
        db.list('/messages/',ref => ref.limitToFirst(1)).snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        }).subscribe(response=>{
          
            if(response.length > 0){
               
                this.storeData.dispatch({ type: response[0].key });
                this.messageList();
            }
           
        })
        
    }

    messageList(){

         this.messageId = this.storeData.select('data');
       
         
         this.countMessage =0;
         this.messageId.subscribe(res=>{
         if(res != '@ngrx/store/init'){
             this.chatUserId = res;
            
             this.db.list('/messages/'+this.chatUserId,ref => ref.limitToLast(4)).valueChanges()
                 .subscribe((response:any)=>{
                 
             this.countMessage = 1;
             if(this.countMessage == 1){
                  this.message = response[0].message;
                  this.userName=  response[0].userName;
             }      
             
              
              
            //this.sender = response[3].$value;
              //console.log("chat sender name"+ this.sender);
             //console.log("chat list Response-"+ JSON.stringify(response));
            
            }) 

           
         }
      })
   }


    ngOnInit() {
        this.isNavSearchVisible = false;
        if (browser.msie) { // Not supported under IE
            this.fsbutton.nativeElement.style.display = 'none';
        }
        var count = 0;
        this.af.list('/orders').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        }).subscribe((res:any)=>{
            count++;
          if(count > 1){
             
            this.notificationData.unshift({name:res[res.length-1].userDetails.name,key:res[res.length-1].key});
          if(this.notificationData.length == 4){
            this.notificationData.splice(-1,1)
          }
          var message = { 
                // app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
                   app_id:"9740a50f-587f-4853-821f-58252d998399",
                 contents: {"en": "A New order Arrived"},
             include_player_ids: [localStorage.getItem('playerId')]
                
        };
        
           this.headersService.sendNotification(message).subscribe(response =>{
              
           });
          }
        })
    
    }

    logout(){
         localStorage.clear();
        this.router.navigate(['/login']);
    }

    toggleUserBlock(event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    }

    openNavSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

    toggleOffsidebar() {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    }

    toggleCollapsedSideabar() {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    }

    isCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }

    toggleFullScreen(event) {

        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        let el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }

    }

    //go To View OrderPage
     goToViewOrderPage(id){
         console.log(id)
         this.router.navigate(['/order/viewOrder', id]);
    }

    goToViewChatPage(){
        this.router.navigate(['/chat']);
    }
  
}
