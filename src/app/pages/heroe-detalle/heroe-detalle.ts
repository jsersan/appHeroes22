import { Component, computed, inject, input } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { RouterLink } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [RouterLink, DatePipe, UpperCasePipe],
  selector: 'app-heroe-detalle',
  styleUrl: './heroe-detalle.css',
  templateUrl: './heroe-detalle.html',
})

export class HeroeDetalle {
  private readonly heroesService = inject(HeroeService);

  id = input.required<string>();

  protected readonly heroe = computed(
    () => this.heroesService.getHeroe(Number(this.id()))
  )
}
