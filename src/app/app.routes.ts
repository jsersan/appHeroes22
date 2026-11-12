import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [

    { path: 'home', component: Home, title: 'Heroes App' },
    { path: 'about', 
      loadComponent: () => import('./pages/about/about').then(m => m.About),
      title:'Sobre Heroes'
    },
    { path: 'heroes', 
      loadComponent: () => import('./pages/heroes/heroes').then(m => m.Heroes),
      title:'Heroes'
    },      
    { path: 'heroe/:id', 
      loadComponent: () => import('./pages/heroe-detalle/heroe-detalle').then(m => m.HeroeDetalle)
    },      
    { path: 'buscar/:termino', 
      loadComponent: () => import('./pages/buscador/buscador').then(m => m.Buscador)
    },    
    { path:'', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', redirectTo: 'home'}     
    
];
