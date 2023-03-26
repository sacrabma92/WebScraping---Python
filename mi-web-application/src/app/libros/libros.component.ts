import { LibrosService, } from './../services/libros.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit, OnDestroy {

  // libros = ['Matematica I', 'Algoritmo Basico', 'Algebra Nivel Basico'];
  libros = new Array();
  private libroSubscription!: Subscription;

  constructor(
    private librosService: LibrosService
  ){ }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe();
  }

  ngOnInit(){
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    })
  }

  eliminarLibro(libro: string){

  }

  guardarLibro(f: any){
    if(f.valid){
      this.librosService.agregarLibro(f.value.nombreLibro)
    }
  }

}
