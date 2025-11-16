import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Contact } from './Pages/contact/contact';
import { Movie } from './movie/movie';
import { checkoutGuard } from './checkout-guard';
// const routes: Routes = [
//   {path:'',component:Home},
//   {path:'contact',component:Contact} ,
//   {path:'movie/:id',component:Movie,canActivate:[checkoutGuard]}

// ];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
    {path:'movie/:id',component:Movie},

  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
