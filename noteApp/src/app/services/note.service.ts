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
  tempNote!: Note // To hold the note we want edit
  editableNote!: Note;

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
    this.notes = this.notes.filter((note) => note.id !== id);
    this.behaviorSubject.next(this.notes);
    console.log('TODELETE:', id);
  }

  editNote(note: Note){

    for(let i = 0; i < this.notes.length; i++){
      
      if(this.notes[i].id === note.id){
        this.notes[i] = note;
        this.setNoteToEdit(this.notes[i]);
        break;
      }

    }
  
  }

  setEditMode(mode: boolean): void{
    this.isEditMode.next(mode);
  }



  getEditableNote(): Note{
    return this.editableNote;
  }

  setNoteToEdit(note: Note){
    this.editableNote = note;
  }

  getIsEditMode():Observable<boolean>{
   return this.isEditMode.asObservable();
  }

}
