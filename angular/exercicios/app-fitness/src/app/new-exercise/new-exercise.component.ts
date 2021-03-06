import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'app/data-service.service';
import { Exercise } from './exercise';

@Component({
  selector: 'new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.css']
})
export class NewExerciseComponent {

  constructor(private dataService: DataService) {}
  
  @Input() exercise: Exercise;
  exercises: Exercise[] = [];

  name: string;
  preparation: number;
  duration: number;
  resting: number;
  repetition: number;

  formNewExercise: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    preparation: new FormControl("", Validators.required),
    duration: new FormControl("", Validators.required),
    resting: new FormControl("", Validators.required),
    repetition: new FormControl("", Validators.required)
  })  

  addExercise(): void {

    this.exercises.push(this.formNewExercise.value);
    
    // Enviar array para service

    this.dataService.setData(this.exercises);
  }

  deleteExercise(index: number): void {
    this.exercises.splice(index, 1);

    // Enviar array para service

    this.dataService.setData(this.exercises);
  }
}
