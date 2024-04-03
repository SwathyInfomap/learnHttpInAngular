import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieDetail } from '../interfaces/movie-detail';
import { environment } from '../../environments/environment';


const imgUrl = environment.imgUrl;
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private movieService = inject(MovieService)
 // movies: any = [];//reduced type safety so recommended to use interfaces
  movies: MovieDetail[]=[];

  ngOnInit(): void{
    this.loadMovies();
  }
  loadMovies(){
    this.movieService.getMovies().subscribe({
      next : (res:any)=>{
          this.movies = res.results as MovieDetail[];
          console.log(res.results);
      },
      error:(error) =>console.log('Error fetching movies',error)
    });
  }

getFullImageUrl(posterPath:String) : String {
  return imgUrl + posterPath;
}



}
