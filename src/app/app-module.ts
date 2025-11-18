import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { Home } from './Pages/home/home';
import { Contact } from './Pages/contact/contact';
// @Injectable({ providedIn: 'app' })
import { FormsModule } from '@angular/forms';   
import { HttpClientModule } from '@angular/common/http';
import { Movie } from './movie/movie';
import { SafeUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from './safe-url-pipe';
@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Contact,
    Movie,
    Footer,
    SafeUrlPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
