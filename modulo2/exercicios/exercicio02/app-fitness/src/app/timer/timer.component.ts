import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service.service';
import { Exercise } from 'app/new-exercise/exercise';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  exercises: Exercise[] = new Array();
  exercise: Exercise;

  totalExercises: number = 0;
  indexCurrentExercise: number = 0;
  currentExercise: Exercise;
  exerciseName: string = '';

  currentRepetition: number = 0;
  totalRepetitions: number = 0;

  stateExercise: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.exercises = this.dataService.getData();

    if (this.exercises) {
      this.showData();
    }
  }

  showData(): void {
    this.totalExercises = this.exercises.length;
    this.currentExercise = this.exercises[this.indexCurrentExercise];

    this.exerciseName = this.currentExercise.name;
    this.totalRepetitions = this.currentExercise.repetition;

    this.currentRepetition++;
    this.indexCurrentExercise++;

    this.showStateExercise();
  }

  showStateExercise(): string {
    switch (this.stateExercise) {
      case 0:
        return "Preparação";
      case 1:
        return "Exercício";
      case 2:
        return "Descanso";
      default:
        return "";
    }
  }

  stop(): void {
    // TODO
  }

  restart(): void {
    this.indexCurrentExercise = 0;
    this.currentRepetition = 0;
    this.stateExercise = 0;
  }

  next(): void {
    if (this.stateExercise == 0 || this.stateExercise == 1) {
      this.stateExercise++;
    } else if (this.stateExercise == 2) {
      // Se exercício atual acabou

      if (this.currentRepetition == this.totalRepetitions) {
        // Todos

        if (this.exercises.length - 1 == this.indexCurrentExercise) {
          console.log("finish");
        }

      } else if (this.currentRepetition < this.totalRepetitions){
        // Próximo repetição

        this.stateExercise = 0;
        this.currentRepetition++;
      }

      // TODO: Criar service para exibir dados - refresh
    }

  }
}
