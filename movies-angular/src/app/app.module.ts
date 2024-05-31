import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { MovieService } from './services/movie.service'; // Asegúrate de tener un servicio para las películas

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCarouselComponent,
    MovieModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
