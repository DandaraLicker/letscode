import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this._decodificarJWT();
    }
  }

  private _decodificarJWT() {
    const token = this.tokenService.getToken();
    const usuatio = <Usuario>jwtDecode(token);
    this._usuarioSubject.next(usuatio);
  }

  retornarUsuario() {
    return this._usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    debugger;
    this.tokenService.setToken(token);
    this._decodificarJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this._usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.hasToken();
  }
}
