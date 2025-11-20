


import { ChangeDetectorRef, Component } from '@angular/core';
import { MovieApi } from '../../movie-api';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  Moviedata: any[] = [];
  Overview_length:any=500;
  searchedMovie:string="";
  SearchedMovieResults:any[]=[];
  category_search=true;
  MovieWatchList:string='Add To WatchList';
  // overview:string;
  genere= [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Abenteuer"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Komödie"
    },
    {
      "id": 80,
      "name": "Krimi"
    },
    {
      "id": 99,
      "name": "Dokumentarfilm"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Familie"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "Historie"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Musik"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Liebesfilm"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV-Film"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "Kriegsfilm"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


  constructor(public m: MovieApi,private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.m.getData().subscribe((s: any) => {
      console.log(s);
      this.Moviedata = s.results;
      this.Moviedata.forEach((e)=>{
        e.buttontext=this.m.isMovieExists(e.id)?"Movie Added":"Add to watchlist"
      });
      this.cd.detectChanges();
    });
  }
  Moviescategory(e:any){
    console.log(e?.target.value);
    this.m.categoryMovies(e?.target.value).subscribe((s:any)=>{
      this.Moviedata=s.results;
      console.log(this.Moviedata[0].title,s.results)
      this.cd.detectChanges();
    })
  }

  SearchMovie(){
    this.category_search=false;
    this.m.searchMovie(this.searchedMovie).subscribe((s:any)=>{
      console.log(s.results);
      this.SearchedMovieResults=s.results;
      // console.log(this.Moviedata[0])
      this.cd.detectChanges();
    })
  }
  Watchlist(movie:any){

if(!this.m.isMovieExists(movie)){
  this.m.MovieAddList(movie);
  movie.buttontext="Movie added";
  alert('movie added to your watchlist');
}
else{
  alert('movie already exists');
}

  }
  
}
