import { Component, OnInit } from '@angular/core';
import { LightGreyApiService } from '../service/light-grey-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  peliculas: any = [];

  constructor(
    private lightGreyApiService: LightGreyApiService
  ) { }
  ngOnInit() {
    //Se obtienen los productos del LocalStorage con la llave 'pelicula'
    const pelicula = localStorage.getItem('pelicula');
    if (pelicula) {
      this.peliculas = JSON.parse(pelicula);
      console.log('Obtiene las peliculas desde el localStorage')
    } else {
      this.lightGreyApiService.obtenerPeliculas().subscribe((peliculas) => {
        console.log('Obtiene las peliculas desde la API', peliculas);
        this.peliculas = peliculas;
        // //Se almacenan en el localStorage con la llave 'pelicula'
        localStorage.setItem('pelicula', JSON.stringify(this.peliculas));
      });
    }

  }

}