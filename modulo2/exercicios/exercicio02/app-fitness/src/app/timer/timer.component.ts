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

  interval: any;
  time: number;

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

    this.time = this.currentExercise.preparation;

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
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  restart(): void {
    this.indexCurrentExercise = 0;
    this.currentRepetition = 0;
    this.stateExercise = 0;
  }

  start(): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
          if (this.time > 0) {
            this.time--;          
          } else {
            // Prox exercício
            this.next();
          }
      }, 1000);
    } else {
      // TODO: Reiniciar após pausa
    }
  }

  formatTime(): string {
    if (this.time) {
      return this.time.toString();
    }
  }

  next(): void {
    if (this.stateExercise == 0 || this.stateExercise == 1) {
      this.stateExercise++;
      this.getTimeState();
    } else if (this.stateExercise == 2) {
      // Se exercício atual acabou

      if (this.currentRepetition == this.totalRepetitions) {
        // Todos

        if (this.exercises.length - 1 == this.indexCurrentExercise) {
          return;
        }

      } else if (this.currentRepetition < this.totalRepetitions){
        // Próxima repetição

        this.stateExercise = 0;
        this.getTimeState();
        this.currentRepetition++;
      }

    }

  }

  getTimeState(): void {
    if (this.stateExercise == 0) {
      this.time = this.currentExercise.preparation;
    } else if (this.stateExercise == 1) {
      this.time = this.currentExercise.duration;
    } else if (this.stateExercise == 2) {
      this.time = this.currentExercise.resting;
    }
  }

  // TODO: Criar service para exibir dados - refresh

}
