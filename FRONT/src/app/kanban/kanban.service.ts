import { BehaviorSubject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Card, Cards } from './card/card';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  private cardsSubject$ = new BehaviorSubject<Cards>(<Cards>[{}]);

  ListarCards(): Observable<Cards> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + token
    );

    this.http
      .get<Cards>(`${API}/cards`, { headers })
      .subscribe((cards) => this.cardsSubject$.next(cards));

    return this.cardsSubject$.asObservable();
  }

  criarCard(card: Card) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + token
    );
    this.http.post<Card>(`${API}/cards`, card, { headers }).subscribe();
    this.ListarCards();
  }

  editarCard(card: Card) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + token
    );
    this.http
      .put<Card>(`${API}/cards/${card.id}`, card, { headers })
      .subscribe();
    this.ListarCards();
  }

  deletarCard(id: number) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + token
    );
    this.http
      .delete<Card[]>(`${API}/cards/${id}`, { headers })
      .subscribe((cards) => this.cardsSubject$.next(cards));
  }
}
