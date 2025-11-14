import { Component } from '@angular/core';
import { MovieApi } from '../../movie-api';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
styleUrls: ['./home.css']
})
export class Home {
  Moviedata:any[]=[]
constructor(private m:MovieApi){

}

ngOnInit(){
  this.m.getData().subscribe((s:any)=>{
    console.log(s.results);
    this.Moviedata=s.results;
  })
}
}
