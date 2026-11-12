import { Component, inject } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { HeroeTarjeta } from '../../components/heroe-tarjeta/heroe-tarjeta'; // ajusta la ruta

@Component({
  imports: [HeroeTarjeta],   // <- tiene que estar aquí
  selector: 'app-heroes',
  templateUrl: './heroes.html',
})
export class Heroes {
  protected readonly heroes = inject(HeroeService).getHeroes();
}
