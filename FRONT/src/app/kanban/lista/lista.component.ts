import { Card } from './../card/card';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { KanbanService } from './../kanban.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  @Input() titulo!: string;
  @Input() card!: Card;

  novoCard = false;

  cards$ = this.kanbanService
    .ListarCards()
    .pipe(map((cards) => cards.filter((card) => card.lista == this.titulo)));

  constructor(private kanbanService: KanbanService) {}

  criarCard() {
    this.card = <Card>{};
    this.card.lista = 'ToDo';
    this.novoCard = !this.novoCard;
  }
}
