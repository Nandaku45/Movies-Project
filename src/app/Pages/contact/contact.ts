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
SubmitForm(form:any){
  console.log(form.value)
  form.reset();
  alert('You have successfully submitted the form');
}
}
