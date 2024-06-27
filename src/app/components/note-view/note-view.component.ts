import {Component, OnInit} from '@angular/core';
import {Note} from "../../model/note.interface";
import {NoteService} from "../../service/note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss'
})
export class NoteViewComponent implements OnInit{
note ?: Note


  constructor(private noteService: NoteService,
              private router: Router){}
  ngOnInit(): void {
    const id: number = this.readIdOfUrl();
    this.noteService.getById(id).subscribe(note => this.note = note)
    }

  private readIdOfUrl(): number {
    const url: string = this.router.url;
    let urlParts: string[] = url.split('/');
    return +urlParts[urlParts.length - 1];
  }
}
