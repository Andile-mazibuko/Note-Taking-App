import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';
@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  
  noteForm!: FormGroup;
  noteCreated!: Note;
  constructor(private noteService: NoteService,private fb: FormBuilder){}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['',Validators.required],
      content: ['',Validators.required]
    })
  }
  note = {
    id: new Date().getTime(),
    title: this.noteForm.value.title,
    content: this.noteForm.value.content
  }

  createNewNote()
  {  
    this.noteService.createNote(this.noteForm.value);
  }

}
