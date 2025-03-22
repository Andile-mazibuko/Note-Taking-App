import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';
import { title } from 'process';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  
  noteForm!: FormGroup;
  noteCreated!: Note;
  isEditMode!: boolean;// recieve is Edit mode from the note service
  toEdit!: Note; //recieve the note

  constructor(private noteService: NoteService,private fb: FormBuilder, private router: Router){
  
    this.noteService.getIsEditMode().subscribe((resp) => {
      this.isEditMode = resp; 
      
    });
  
  }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['',Validators.required],
      content: ['',Validators.required]
    })
  }
  
  createNewNote(){

    if(this.isEditMode){
        const note = this.noteForm.value;
        note.id = this.noteService.getEditableNote().id;
        this.noteService.editNote(note);

        this.noteService.setEditMode(false);
        this.router.navigate(["list"]);
              
    }else{
      this.noteService.createNote(this.noteForm.value);
      this.noteForm.reset();
    }
  }

  //recieve note
  recieveNote(note: Note){
    this.toEdit = note;
  }

}
