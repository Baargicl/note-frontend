import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../service/note.service";
import {Note} from "../../model/note.interface";
import {Router} from "@angular/router";
import {response} from "express";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit {

  allNotes: Note[] = []
  title: string = "";
  text: string = "";

  constructor(private noteService: NoteService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllNotes()

    if (typeof window !== 'undefined') {
      const titleInput = document.getElementById('titleInput') as HTMLInputElement
      const textInput = document.getElementById('textInput') as HTMLInputElement
      const createButton = document.getElementById('create') as HTMLButtonElement;
      const showButton = document.getElementById("openDialogButton") as HTMLButtonElement;
      const dialog = document.getElementById('dialog') as HTMLDialogElement;
      const closeButton = document.getElementById('close')as HTMLButtonElement;

      showButton.addEventListener('click', () => dialog.showModal());
      closeButton.addEventListener('click', () => dialog.close());
      titleInput.addEventListener("input", () => this.checkInputs(titleInput, textInput))
      textInput.addEventListener("input", () => this.checkInputs(titleInput, textInput))

    }
  }


  deleteAllNotes() {
    this.noteService.deleteAll().subscribe({
      complete: () => this.getAllNotes()
    });
    console.log(this.allNotes)

  }

  getAllNotes() {
    this.noteService.getAllStuff().subscribe(response => {
      this.allNotes = response;
    })
  }



  checkInputs(titleInput: HTMLInputElement, textInput: HTMLInputElement) {
    const titleNotEmpty = titleInput.value.trim() !== ''
    const textNotEmpty = textInput.value.trim() !== ''

  }

  postNote() {
    if (this.title && this.text) {
      this.noteService.createNote(this.title, this.text).subscribe((res) => {
        this.router.navigate([`/notes/${res.id}`])
      })
    } else {

    }
  }

  openNote(id: number) {
    this.router.navigate(['notes/' + id])
  }

  titleChanged(event: any) {
    this.title = event.target.value
  }

  textChanged(event: any) {
    this.text = event.target.value
  }

}

