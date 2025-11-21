import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
message='message.png';
logo='Nanda.jpg'
validations(v:any){
  console.log(v);
}
}
