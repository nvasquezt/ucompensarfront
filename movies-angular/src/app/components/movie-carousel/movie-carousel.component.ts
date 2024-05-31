import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';

interface Movie {
  title: string;
  year: number;
  image: string;
  genre: string;
  resume: string;
}

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movies.length ? this.movies : this.movieService.getMovies();
  }
}
