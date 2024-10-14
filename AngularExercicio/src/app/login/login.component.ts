import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  lembrar: boolean = false;
  mensagemErro: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.usuario === 'admin' && this.senha === '123') {
      // Aqui você pode adicionar a lógica para "lembrar" o usuário, se necessário
      console.log('Lembrar usuário:', this.lembrar);
      this.router.navigate(['/home', this.usuario]);
    } else {
      this.mensagemErro = 'Usuário ou senha inválido';
    }
  }
}