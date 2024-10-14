import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  usuario = {
    nome: '',
    senha: '',
    confirmacaoSenha: ''
  };
  mensagemSucesso = '';
  erroSenha = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.usuario.senha !== this.usuario.confirmacaoSenha) {
        this.erroSenha = 'As senhas não conferem.';
        return;
      }
      
      // Simula o salvamento do usuário
      console.log('Usuário cadastrado:', this.usuario);
      
      this.mensagemSucesso = 'Cadastro realizado com sucesso!';
      this.erroSenha = '';  // Limpa a mensagem de erro, se houver
      
      // Redireciona para a página Home após um breve delay
      setTimeout(() => {
        this.router.navigate(['/home', this.usuario.nome]);
      }, 1500);
    }
  }
}
