import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KanbanModule } from './kanban/kanban.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, KanbanModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
