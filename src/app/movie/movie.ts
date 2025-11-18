 import { ChangeDetectorRef, Component ,Sanitizer} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApi } from '../movie-api';
 import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie {
  Moviedata:any={}
  VideoData:any;
ID:number=0;
 y!:SafeResourceUrl;

  constructor(public ar:ActivatedRoute,public m:MovieApi,private cd:ChangeDetectorRef,private sanitizer:DomSanitizer){}

  ngOnInit(){
    this.ar.params.subscribe((s:any)=>{
        console.log(s)
        this.ID=s['id'];
        this.m.getSingleMovie(this.ID).subscribe((s:any)=>{
          this.Moviedata=s;
          this.m.VideoData(this.ID).subscribe((s:any)=>{
            console.log(s);
            this.VideoData=s.results;
            const trailer='https://www.youtube.com/embed/'+this.VideoData[1].key+'?autoplay=1&mute=1'
         this.y=this.sanitizer.bypassSecurityTrustResourceUrl(trailer);
          this.cd.detectChanges();
          })

          this.cd.detectChanges();
          console.log(this.Moviedata);
          
        })
    })
  }

}


