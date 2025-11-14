import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieApi {

  constructor(public ht:HttpClient){

  }

  getData(){
   return  this.ht.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=a23b2cea72fe75381083061b1261e9f5')
  }
}
