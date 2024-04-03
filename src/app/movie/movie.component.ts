import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private movieService = inject(MovieService)
  movies: any = [];

  ngOnInit(): void{
    this.loadMovies();
  }
  loadMovies(){
    this.movieService.getMovies().subscribe({
      next : (res:any)=>{
          this.movies = res.results;
          console.log(res.results);
      },
      error:(error) =>console.log('Error fetching movies',error)
    });
  }
}
