import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { HomeComponent } from './components/home/home.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import {NgOptimizedImage} from "@angular/common";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatFabButton} from "@angular/material/button";



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
    HttpClientModule,
    NgOptimizedImage,
    MatIcon,
    MatFormField,
    MatInput,
    MatFabButton,
    MatLabel
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
