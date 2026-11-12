import { Component, inject,computed, input } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { HeroeTarjeta } from '../../components/heroe-tarjeta/heroe-tarjeta';

@Component({
  selector: 'app-buscador',
  imports: [HeroeTarjeta],
  templateUrl: './buscador.html',
})


export class Buscador {
  private readonly heroesService = inject(HeroeService);

  termino = input.required<string>();

  protected readonly heroes = computed(
    () => this.heroesService.buscarHeroe(this.termino())
  );
}
