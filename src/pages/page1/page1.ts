import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";
import {LoginPage} from "../login/login";
import {UploadPage} from "../upload/upload";
import {CadastroPage} from "../cadastro/cadastro";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  chatPage: any = ChatPage;
  loginPage: any = LoginPage;
  cadastroPage: any = CadastroPage;
  //uploadPage: any = UploadPage;
  usuario: string;

  constructor(public navCtrl: NavController) {
  }
}
