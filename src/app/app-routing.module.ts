import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: PostListComponent},
  {path: 'new', component: FormularioComponent},
  {path: 'post/:idpost', component: ViewPostComponent},
  {path: 'category/:categoryTitle', component: PostListComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
