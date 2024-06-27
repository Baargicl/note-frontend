import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from "node:path";
import {NotesComponent} from "./components/notes/notes.component";
import {HomeComponent} from "./components/home/home.component";
import {NoteViewComponent} from "./components/note-view/note-view.component";

const routes: Routes = [
  { path: 'notes', component: NotesComponent},
  { path: '', component: HomeComponent},
  { path: 'notes/:id', component: NoteViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
