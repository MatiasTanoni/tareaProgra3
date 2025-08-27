import { Routes } from '@angular/router';
// import { Bienvenida } from './pages/bienvenida/bienvenida';
// import { Error } from './pages/error/error';   
// import { Login } from './pages/login/login';
// import { Registro } from './pages/registro/registro';
// import { SobreMi } from './pages/sobre-mi/sobre-mi';

export const routes: Routes = [

    { 
        path: '', 
        redirectTo: '/bienvenida', 
        pathMatch: 'full' 
    },

    { 
        path: 'bienvenida', 
        loadComponent: () => import('./pages/bienvenida/bienvenida').then(m => m.Bienvenida) 
    },
    
    { 
        path: 'login', 
        loadComponent: () => import('./pages/login/login').then(m => m.Login) 
    },

    { 
        path: 'registro', 
        loadComponent: () => import('./pages/registro/registro').then(m => m.Registro) 
    },

    { 
        path: 'sobre-mi', 
        loadComponent: () => import('./pages/sobre-mi/sobre-mi').then(m => m.SobreMi) 
    },
    {
        path: "**",
        loadComponent: () => import('./pages/error/error').then(m => m.Error)
    }
];
