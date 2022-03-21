import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cards } from './../card/card';
import { KanbanService } from './../kanban.service';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css'],
})
export class QuadroComponent {
  listas = environment.listas;

  constructor() {}
}
