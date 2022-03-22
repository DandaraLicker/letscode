import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KanbanService } from './../kanban.service';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Card;
  @Input() novoCard = false;
  @Input() modoEdicao = false;
  @Output() novoCardChange = new EventEmitter<boolean>();

  listas = environment.listas;

  constructor(private kanbanService: KanbanService) {}

  deletarCard() {
    this.kanbanService.deletarCard(this.card.id);
  }

  editarCard() {
    this.modoEdicao = !this.modoEdicao;
  }

  moverEsquerda() {
    this.card.lista =
      this.listas[
        this.listas.findIndex((lista) => lista.descricao == this.card.lista) - 1
      ].descricao;
    this.kanbanService.editarCard(this.card);
  }

  moverDireita() {
    this.card.lista =
      this.listas[
        this.listas.findIndex((lista) => lista.descricao == this.card.lista) + 1
      ].descricao;
    this.kanbanService.editarCard(this.card);
  }

  cancelarEdicao() {
    this.editarCard();
    this.novoCard = !this.novoCard;
    this.novoCardChange.emit(this.novoCard);
    this.kanbanService.ListarCards();
  }

  confirmarEdicao() {
    if (this.novoCard) {
      this.kanbanService.criarCard(this.card);
      this.novoCard = !this.novoCard;
      this.novoCardChange.emit(this.novoCard);
    } else {
      this.kanbanService.editarCard(this.card);
    }
  }
}
