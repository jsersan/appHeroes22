import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.html',
})
export class HeroeTarjeta {
  private readonly router = inject(Router);

  heroe = input.required<Heroe>();
  index = input.required<number>();

  verHeroe() {
    this.router.navigate(['/heroe', this.index()]);
  }
}