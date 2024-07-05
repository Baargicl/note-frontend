import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Note} from "../model/note.interface";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  BASE_URL = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {
  }


  getAllStuff() {
    return this.httpClient.get<Note[]>(this.BASE_URL + "/note");
  }

  getById(id: number) {
    return this.httpClient.get<Note>(this.BASE_URL + `/note/${id}`)
  }

  createNote(title: string, text: string) {
    return this.httpClient.post<Note>(this.BASE_URL + "/note", {title, text})

  }


  deleteAll() {
    return this.httpClient.delete(this.BASE_URL + "/note", {responseType: "text"})

  }

  deleteSingleNote(id: number) {
    return this.httpClient.delete(this.BASE_URL + `/note/${id}`, {responseType: "text"})
  }

  editSingleNote(id: number, newTitle: string, newText: string) {
    return this.httpClient.put(this.BASE_URL + `/note/${id}`, {
      id: id,
      title: newTitle,
      text: newText
    })
  }
}
