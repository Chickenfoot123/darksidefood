import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {LoginPage} from "../login/login";

import {Platform} from 'ionic-angular';
import { Nav, NavController} from 'ionic-angular';
import {SQLite} from 'ionic-native';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})

export class CadastroPage {
  firstname:any;
  lastname:any;
  peoples:any;
  
  create() {}
  public database: SQLite;
   constructor(public navCtrl: NavController,platform: Platform) {
             platform.ready().then(() => {
             this.database = new SQLite();
             this.database.openDatabase({
                 name: "data.db",
                 location: "default"
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


/*export class HomePage {
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
  
 }*/