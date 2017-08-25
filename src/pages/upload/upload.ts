import { Component, Inject } from '@angular/core';
import { FirebaseApp } from "angularfire2";

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {
  referencia: any;
  arquivo: any;

  constructor(@Inject(FirebaseApp) fb: any) {
    this.referencia = fb.storage().ref();
  }

  baixarArquivo(nome: string){
    let caminho = this.referencia.child('images/exemplo.jpg');
    caminho.getDownloadURL().then(url => {
      console.log(url); // AQUI VOCÊ JÁ TEM O ARQUIVO
    });
  }

  enviarArquivo(){
    let caminho = this.referencia.child('pasta/'+this.arquivo.name);
    let tarefa = caminho.put(this.arquivo);
    tarefa.on('state_changed', (snapshot)=>{
      // Acompanha os estados do upload (progresso, pausado,...)
    }, error => {
      // Tratar possíveis erros
    }, () => {
      // Função de retorno quando o upload estiver completo
      console.log(tarefa.snapshot.downloadURL);
    });
  }

  atualizaArquivo(event){
    this.arquivo = event.srcElement.files[0];
  }
}
