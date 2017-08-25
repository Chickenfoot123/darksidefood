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