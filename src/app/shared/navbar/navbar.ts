import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  templateUrl: './navbar.html'
})
export class Navbar {

  constructor(private router: Router) {}

  buscarHeroe(termino: string) {
    if (!termino.trim()) return;
    this.router.navigate(['/buscar', termino.trim()]);
  }
}