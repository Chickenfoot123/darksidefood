import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {LoginPage} from "../login/login";

import {Platform} from 'ionic-angular';
import { Nav, NavController} from 'ionic-angular';
import {SQLite} from 'ionic-native';
import { AlertController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})

export class CadastroPage {
    nome: string;
    cpf: number;
    nascimento: Date;
    email: string;
    telefone: number;
    senha: string;
    autenticacao: boolean;
    lista: FirebaseListObservable<any>;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire, public at: AngularFire) {
        this.lista = af.database.list('/' + this.email);
        this.at.auth.subscribe(estado => {
            this.autenticacao = estado !== null;
          });
      }

  cadastrar(){
    if (this.email == 'null')
        console.log("Email não pode ser nulo")
    if (this.email == '')
        console.log("Email vazio.")
  
    let dados = {'email': this.email, 'password': this.senha};
    this.at.auth.createUser(dados).then(() => {
        console.log(this.autenticacao); // USUÁRIO CRIADO
        this.salvar()
      }, error => {
        console.log("Erro no cadastro: "+error); // TRATAR O ERRO
      });

  }

  salvar(){
    let m = {
        nome: this.nome, 
        cpf: this.cpf,
        nascimento: this.nascimento,
        email: this.email,
        data_cadastro: new Date().toISOString(),
    };
  }
    
}