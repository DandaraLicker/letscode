import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from './autenticacao/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FRONT';

  constructor(private autenticacaoService: AutenticacaoService) {}

  public ngOnInit(): void {
    this.autenticacaoService
      .autenticar(environment.usuarioRoot.login, environment.usuarioRoot.senha)
      .subscribe(
        () => {},
        (error) => {
          console.log(error.message);
        }
      );
  }
}
