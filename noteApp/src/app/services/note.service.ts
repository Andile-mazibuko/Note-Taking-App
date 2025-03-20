import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];
  behaviorSubject = new BehaviorSubject<Note[]>([]);    //ToTest: parse in this.notes instead of [] 

  constructor() { }

  createNote(note: Note){
    note.id = new Date().getTime(); // create a unique id based on time the note was created
    this.notes.push(note);
    this.behaviorSubject.next(this.notes);
  }


}
