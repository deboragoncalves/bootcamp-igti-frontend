import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path: 'new-exercise',
    component: NewExerciseComponent
  },
  {
    path: 'timer',
    component: TimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
