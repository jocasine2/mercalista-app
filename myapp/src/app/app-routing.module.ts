import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    path: 'detalhe-produto',
    loadChildren: () => import('./view/detalhe-produto/detalhe-produto.module').then( m => m.DetalheProdutoPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./shared/components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'nav-bar',
    loadChildren: () => import('./shared/components/nav-bar/nav-bar.module').then( m => m.NavBarPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./shared/components/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./shared/components/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'form-login',
    loadChildren: () => import('./shared/components/form-login/form-login.module').then( m => m.FormLoginPageModule)
  },
  {
    path: 'list-users',
    loadChildren: () => import('./shared/components/list-users/list-users.module').then( m => m.ListUsersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
