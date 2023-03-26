import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  librosSubject = new Subject();

  private libros = ['Libro de calculo', 'Libro de Aritmetica', 'El Grafico Revista'];

  agregarLibro(libroNombre: string){
    this.libros.push(libroNombre);
    this.librosSubject.next(this.libros);
  }

  obtenerLibros (){
    return [...this.libros];
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(x => x !== libroNombre );
    this.librosSubject.next(this.libros); 
  }
}
