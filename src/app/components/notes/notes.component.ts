import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../service/note.service";
import {Note} from "../../model/note.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit {

  allNotes: Note[] = []

  constructor(private noteService: NoteService,
              private router: Router) {
  }

  ngOnInit() {
    this.noteService.getAllStuff().subscribe(response => {
      this.allNotes = response;
    })
  }

  openNote(id: number) {
    this.router.navigate(['notes/'+ id])
  }
}
