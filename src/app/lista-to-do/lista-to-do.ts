import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-to-do',
  imports: [ FormsModule ],
  templateUrl: './lista-to-do.html',
  styleUrl: './lista-to-do.scss'
})
export class ListaToDo {
  itemInput: string = '';
  
}
