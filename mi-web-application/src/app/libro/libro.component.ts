import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  @Input() tituloLibro!: string;

  @Output() libroCliked = new EventEmitter();

  constructor(
    private libroService: LibrosService
  ){}

  clikeado(){
    // this.libroCliked.emit()
    this.libroService.eliminarLibro(this.tituloLibro)
  }

}
