import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note';
import { response } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  notesFetched!: Note[];
  noteToDelete!: Note;
  constructor(private noteService: NoteService, private router: Router){
    this.getNotes(); // populate the array with new Variables
  }

  getNotes(): void{
    console.log('Get Notes','hi Notes');
      this.noteService.getNotes().subscribe((response)=> {
      this.notesFetched = response;

      console.log('Get Notes Test',this.notesFetched);
    })
  }
  editNote(note: Note){
    this.noteService.setNoteToEdit(note);
    this.noteService.setEditMode(true);
    this.router.navigate(["form"]);      //redirect to form page
  }

  deleteNote(id: number)
  {
    this.noteService.deleteNote(id);
  }
}
