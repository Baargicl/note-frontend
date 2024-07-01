import {Component, OnInit} from '@angular/core';
import {count} from "rxjs";
import {NoteService} from "./service/note.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'noteFrontend';
  counter = 0

  constructor(private noteSerivce: NoteService) {
  }


  removeEverything() {
    this.counter = 0
    this.noteSerivce.getAllStuff()
  }
}
