import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];
  behaviorSubject = new BehaviorSubject<Note[]>([]);    //ToTest: parse in this.notes instead of [] 
  isEditMode = new BehaviorSubject<boolean>(false);
  constructor() { }

  createNote(note: Note): void{
    note.id = new Date().getTime(); // create a unique id based on time the note was created
    this.notes.push(note);
    this.behaviorSubject.next(this.notes);
  }

  getNotes(): Observable<Note[]>{
    return this.behaviorSubject.asObservable();
  }
  
  deleteNote(id: number){
    this.notes = this.notes.filter((note) => note.id = id);
    this.behaviorSubject.next(this.notes);
    console.log('TEST 1','Arrived');
  }
  editNotes(note: Note){
    for(let noteAtIndex of this.notes){
      if(noteAtIndex.id === note.id){
        //code
      }
    }
  }
  getIsEditMode():Observable<boolean>{
   return this.isEditMode.asObservable();
  }

}
