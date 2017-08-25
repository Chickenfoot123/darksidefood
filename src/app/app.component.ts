import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native';

import { Page1 } from '../pages/page1/page1';
import {LoginPage} from '../pages/login/login';

import { SQLite} from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = Page1;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    //Usado para um exemplo de ngFor e navegação
    /*this.pages = [
      { title: 'Page 1', component: Page1 }
    ];*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
    // Ok, então a plataforma está pronta e os nossos plugins estão disponíveis.
    // Aqui você pode fazer qualquer coisa nativa de nível superior que você possa precisar.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Repor o conteúdo do NAV para ter apenas esta página
    // não queremos que o botão Voltar seja exibido neste cenário
    this.nav.setRoot(page.component);
  }
}

/*
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
                 location: "default"
             }).then(() => {
                 this.database.executeSql("CREATE TABLE pessoa (cd_pessoa NUMERIC PRIMARY KEY NOT NULL,uf CHAR (2),cidade VARCHAR (20),nm_pessoa       VARCHAR (30),  dt_nascimento   DATE,    sexo            CHAR (1),    ddd_pessoa      NUMERIC,    fone_pessoa     NUMERIC,    cep             NUMERIC,    cpf             NUMERIC,    email           VARCHAR (20),    dt_cadastro     DATETIME,    in_ativo        CHAR (1),    endereco_pessoa VARCHAR (40) )", {}).then((data) => {
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
         this.database.executeSql("INSERT INTO pessoa ( endereco_pessoa, in_ativo, dt_cadastro, email, cpf, cep, fone_pessoa, ddd_pessoa, sexo, dt_nascimento, nm_pessoa, cidade, uf, cd_usuario, cd_pessoa) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [this.firstname,this.lastname]).then((data) => {
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