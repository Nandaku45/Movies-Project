import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Contact } from './Pages/contact/contact';

const routes: Routes = [
  {path:'',component:Home},
  {path:'contact',component:Contact} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
