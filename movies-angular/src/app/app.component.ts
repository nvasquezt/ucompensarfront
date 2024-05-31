import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  selectedGenre: string = '';
  genres: string[] = [];
  movies: any[] = [];
  latestMovies: any[] = [];
  filteredMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.genres = [...new Set(this.movies.map(movie => movie.genre))];
    this.filteredMovies = this.movies;
  }

  ngOnChanges(): void {
    this.filterMovies();
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie => {
      return (!this.searchTerm || movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (!this.selectedGenre || movie.genre === this.selectedGenre);
    });
  }
}
