import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { Observable, tap } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/login`,
        {
          login: usuario,
          senha: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = <string>res.body ?? '';
          console.log(authToken);
          this.usuarioService.salvarToken(authToken);
        })
      );
  }
}
