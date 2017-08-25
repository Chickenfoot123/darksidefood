import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';

import { StatusBar } from '@ionic-native/status-bar';
import {SQLite} from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatPage } from "../pages/chat/chat";
import { LoginPage } from "../pages/login/login";
import {CadastroPage} from "../pages/cadastro/cadastro";
import {AngularFireModule} from "angularfire2";
import {UploadPage} from "../pages/upload/upload";
import { Camera } from '@ionic-native/camera';

import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { Nav, NavController} from 'ionic-angular';

export class HomePage {
  firstname:any;
  lastname:any;
  peoples:any;
  
  public database: SQLite;
   constructor(public navCtrl: NavController,platform: Platform) {
             platform.ready().then(() => {
             this.database = new SQLite();
             this.database.openDatabase({
                 name: "data.db",
                 location: "C:\Ionic\DarksideFood"
             }).then(() => {
                 this.database.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
                     console.log("TABLE CREATED: ", data);
                     this.refresh();
                 }, (error) => {
                     console.error("Unable to execute sql", error);
                 })
             }, (error) => {
                 console.error("Unable to open database", error);
             });
         });
   }
  
    public add() {
         this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [this.firstname,this.lastname]).then((data) => {
             console.log("INSERTED: " + JSON.stringify(data));
         }, (error) => {
             console.log("ERROR: " + JSON.stringify(error.err));
         });
     }
  
     public refresh(){
        this.database.executeSql("SELECT * FROM people", []).then((data) => {
         let people = [];
         if (data.rows.length > 0) {
           for (let i = 0; i < data.rows.length; i++) {
             people.push({
               firstname: data.rows.item(i).firstname,
               lastname: data.rows.item(i).lastname
             });
           }
           this.peoples=people;
           console.log(this.peoples);
         }
       });
     }
  
 }

//
/*export const firebaseConfig = {
  apiKey: "AIzaSyB4IUvYLpLU2oO12SdmAZnjbhD9Dj0-lNI",
  authDomain: "tutorial-11ef3.firebaseapp.com",
  databaseURL: "https://tutorial-11ef3.firebaseio.com",
  storageBucket: "tutorial-11ef3.appspot.com",
  messagingSenderId: "851449183424"
};*/

export const firebaseConfig = {
    apiKey: "AIzaSyCy4YD9bj9dAUQwSvF12a6QkWAltqRTB1A",
    authDomain: "tutorial-72016.firebaseapp.com",
    databaseURL: "https://tutorial-72016.firebaseio.com",
    projectId: "tutorial-72016",
    storageBucket: "tutorial-72016.appspot.com",
    messagingSenderId: "899865022196"
  };

@NgModule({
  declarations: [
    MyApp,
    Page1,
    ChatPage,
    CadastroPage,
    LoginPage,
    UploadPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    ChatPage,
    CadastroPage,
    LoginPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

//SQlite
/*@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class DarksideFood {
  rootPage: any = CadastroPage;

  constructor(platform: Platform) {
      platform.ready().then(() => {
          //StatusBar.styleDefault();
          let db = new SQLite();
          db.openDatabase({
              name: "data.db",
              location: "default"
          }).then(() => {
              db.executeSql("CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
                  console.log("TABLE CREATED: ", data);
              }, (error) => {
                  console.error("Unable to execute sql", error);
              })
          }, (error) => {
              console.error("Unable to open database", error);
          });
      });
  }
}*/

export class AppModule {}

