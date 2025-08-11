import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaToDo } from "./lista-to-do/lista-to-do";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaToDo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lista-toDo');
}
