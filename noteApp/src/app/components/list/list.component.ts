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
export class ListComponent implements OnInit{

  
  notesFetched!: Note[];

constructor(private noteService: NoteService){
 
}
  ngOnInit(): void {
   // console.log('Test 1','Look whos here');
   this.getNotes(); 
   console.log(this.notesFetched);
  }

  getNotes(): void{
    console.log('Get Notes','hi Notes');
      this.noteService.getNotes().subscribe((response)=> {
      this.notesFetched = response;

      console.log('Get Notes Test',this.notesFetched);
    })
  }
}
