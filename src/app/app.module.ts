import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule


import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
