import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from './exercise';

@Component({
  selector: 'new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.css']
})
export class NewExerciseComponent {
  
  exercise: Exercise;
  exercises: Exercise[] = [];

  name: string;
  duration: number;
  repetition: number;
  preparation: number;
  resting: number;

  formNewExercise: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    duration: new FormControl("", Validators.required),
    repetition: new FormControl("", Validators.required),
    preparation: new FormControl("", Validators.required),
    resting: new FormControl("", Validators.required)
  })  

  addExercise() {

    this.exercise = {
      name: this.name,
      duration: this.duration,
      preparation: this.preparation,
      repetition: this.repetition,
      resting: this.resting
    }

    this.exercises.push(this.exercise);  
  }

}
