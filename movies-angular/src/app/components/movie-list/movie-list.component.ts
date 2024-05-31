import { Component, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: MovieService[] = [];

  openModal(movie: MovieService): void {
    const modal = new MovieModalComponent();
    modal.open(movie);
  }
}
