import { Component } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {ChatPage} from "../chat/chat";
import {CadastroPage} from "../cadastro/cadastro";

declare var userg: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  autenticacao: boolean;
  email: string;
  senha: string;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(estado => {
      this.autenticacao = estado !== null;
    });
  }

  chatPage: any = ChatPage;
  cadastroPage: any = CadastroPage;

  /*cadastrar(){

    if (this.email == 'null')
      console.log("Email não pode ser nulo")
    if (this.email == '')
      console.log("Email vazio.")

    let dados = {'email': this.email, 'password': this.senha};
    this.af.auth.createUser(dados).then(() => {
      console.log(this.autenticacao); // USUÁRIO CRIADO
    }, error => {
      console.log("Erro no cadastro: "+error); // TRATAR O ERRO
    });
  }*/

  login(){
    this.af.auth.login({
      email: this.email,
      password: this.senha,

    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  logout(){
    this.af.auth.logout();
  }
}

