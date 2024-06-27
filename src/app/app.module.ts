import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { HomeComponent } from './components/home/home.component';
import { NoteViewComponent } from './components/note-view/note-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HomeComponent,
    NoteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
