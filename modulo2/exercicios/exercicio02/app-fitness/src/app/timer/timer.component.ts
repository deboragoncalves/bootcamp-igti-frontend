import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service.service';
import { Exercise } from 'app/new-exercise/exercise';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  exercises: Exercise[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.exercises = this.dataService.getData();
    console.log(this.exercises);
  }

  stop(): void {
    // TODO
  }

  restart(): void {
    // TODO
  }

  next(): void {
    // TODO
  }

}
