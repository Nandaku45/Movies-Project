import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApi } from '../movie-api';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie {
  Moviedata:any={}
ID:number=0;
  constructor(public ar:ActivatedRoute,public m:MovieApi,private cd:ChangeDetectorRef){}

  ngOnInit(){
    this.ar.params.subscribe((s:any)=>{
        console.log(s)
        this.ID=s['id'];
        this.m.getSingleMovie(this.ID).subscribe((s:any)=>{
          this.Moviedata=s;
          this.cd.detectChanges();
          console.log(this.Moviedata);
        })
    })
  }

}
