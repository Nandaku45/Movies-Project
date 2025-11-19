import { Component } from '@angular/core';
import { MovieApi } from '../movie-api';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-watch-list',
  standalone: false,
  templateUrl: './watch-list.html',
  styleUrl: './watch-list.css',
})
export class WatchList {
  watchlist:any[]=[]
constructor(public m:MovieApi,private cd:ChangeDetectorRef){

}
ngOnInit(){
  
 this.watchlist=this.m.WatchList();
 console.log(this.watchlist);
this.cd.detectChanges()
}
}
