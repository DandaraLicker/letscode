import { environment } from 'src/environments/environment';
import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FRONT';

  constructor(private autenticacaoService: AutenticacaoService) {}

  public ngOnInit(): void {
    this.autenticacaoService
      .autenticar(environment.usuarioRoot.login, environment.usuarioRoot.senha)
      .subscribe(
        () => {
          console.log('logado');
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
}
