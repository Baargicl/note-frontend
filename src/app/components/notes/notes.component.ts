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

    if (typeof window !== 'undefined') {

      const showButton = document.getElementById("openDialogButton");


      const dialog = document.getElementById('dialog') as HTMLDialogElement;
      const closeButton = document.getElementById('close');
      const createButton = document.getElementById('create')
      if (showButton && dialog && closeButton && createButton) {
        showButton.addEventListener('click', () => dialog.showModal());
        closeButton.addEventListener('click', () => dialog.close());
      }
    }
  }

  deleteAllNotes() {
    this.noteService.deleteAll().subscribe();
  }


  postNote() {
    this.noteService.createNote("titel", "text").subscribe();
  }

  openNote(id: number) {
    this.router.navigate(['notes/' + id])
  }

}

