import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Note} from "../model/note.interface";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  BASE_URL = "http://localhost:8080/api"
  constructor(private httpClient: HttpClient) { }


  getAllStuff() {
    return this.httpClient.get<Note[]>(this.BASE_URL + "/note");
  }

  getById(id: number) {
    return this.httpClient.get<Note>(this.BASE_URL + `/note/${id}`)
  }

  createNote(title: string, text: string){
    return this.httpClient.post(this.BASE_URL + "/note", {title, text})
  }

}
