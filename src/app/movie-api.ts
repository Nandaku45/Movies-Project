import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieApi {
overview?:string='';
  constructor(public ht:HttpClient){

  }

 getData() {
  return this.ht.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=a23b2cea72fe75381083061b1261e9f5&language=en-US&page=1'
  );
}


categoryMovies(g:number){
  return this.ht.get(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${g}&api_key=a23b2cea72fe75381083061b1261e9f5`)
}

getSingleMovie(id:number){
  // return this.ht.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a23b2cea72fe75381083061b1261e9f5`)
    return this.ht.get(`https://api.themoviedb.org/3/movie/${id}?api_key=626568137407cf4746600dc9c258810a`)


}

searchMovie(s:any){
  return this.ht.get(`https://api.themoviedb.org/3/search/movie?query=${s}&api_key=626568137407cf4746600dc9c258810a`)
}

VideoData(id:number){
  // return this.ht.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=626568137407cf4746600dc9c258810a&language=en-US`);

return this.ht.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=626568137407cf4746600dc9c258810a&language=en-US`)
}
 
}
