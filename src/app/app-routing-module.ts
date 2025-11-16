import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Contact } from './Pages/contact/contact';
import { Movie } from './movie/movie';
import { checkoutGuard } from './checkout-guard';
const routes: Routes = [
  {path:'',component:Home},
  {path:'contact',component:Contact} ,
  {path:'Home/:id',component:Movie,canActivate:[checkoutGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
