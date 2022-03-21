import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ListaComponent } from './lista/lista.component';
import { QuadroComponent } from './quadro/quadro.component';

@NgModule({
  declarations: [CardComponent, ListaComponent, QuadroComponent],
  imports: [CommonModule, FormsModule],
  exports: [QuadroComponent, CardComponent],
})
export class KanbanModule {}
