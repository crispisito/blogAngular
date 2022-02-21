import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { TextoCortoPipe } from './pipes/texto-corto.pipe';
import { PostCardComponent } from './components/post-list/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    FormularioComponent,
    ViewPostComponent,
    TextoCortoPipe,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
