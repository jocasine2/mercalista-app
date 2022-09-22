import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lista-dispensa',
    loadChildren: () => import('./view/lista-dispensa/lista-dispensa.module').then( m => m.ListaDispensaPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./view/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'estabelecimentos',
    loadChildren: () => import('./view/estabelecimentos/estabelecimentos.module').then( m => m.EstabelecimentosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
