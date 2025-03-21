import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note';
import { response } from 'express';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  
  notesFetched!: Note[];
  noteToDelete!: Note;
constructor(private noteService: NoteService){
  this.getNotes(); // populate the array with new Variables
}

  getNotes(): void{
    console.log('Get Notes','hi Notes');
      this.noteService.getNotes().subscribe((response)=> {
      this.notesFetched = response;

      console.log('Get Notes Test',this.notesFetched);
    })
  }
  editNote(id: number){
    
  }

  deleteNote(id: number)
  {
    console.log('TEST 2', 'DELETE')
    this.noteService.deleteNote(id);
  }
}
